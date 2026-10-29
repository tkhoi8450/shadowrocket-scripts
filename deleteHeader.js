// ========================================== //
// Shadowrocket Request Cache Cleaner (Anti-304 & Anti-Drop)
// Hỗ trợ: RevenueCat (api.revenuecat.com) & Firebase Remote Config (firebaseremoteconfig.googleapis.com)
// Tác giả: tkhoi8450 (v9)
// ========================================== //

var modifiedHeaders = Object.assign({}, ($request && $request.headers) ? $request.headers : {});

// 1. Xóa sạch mọi Header cache chống phản hồi 304 Not Modified (Case-insensitive)
var headersToDelete = [
    "x-revenuecat-etag",
    "if-none-match",
    "etag",
    "if-modified-since",
    "x-goog-if-none-match"
];

for (var k in modifiedHeaders) {
    if (Object.prototype.hasOwnProperty.call(modifiedHeaders, k)) {
        var lowerK = k.toLowerCase();
        if (headersToDelete.indexOf(lowerK) !== -1) {
            delete modifiedHeaders[k];
        }
    }
}

// 2. Xóa các trường ETag / Digest / Version cũ trong POST Body của Firebase Remote Config SDK
var modifiedBody = undefined;
if ($request && $request.body) {
    if (typeof $request.body === "string" && $request.body.length > 0) {
        try {
            var bodyObj = JSON.parse($request.body);
            var isFirebase = false;
            var cacheFields = [
                "last_known_etag",
                "lastKnownEtag",
                "etag",
                "digest",
                "template_version_number",
                "templateVersionNumber"
            ];
            for (var i = 0; i < cacheFields.length; i++) {
                var field = cacheFields[i];
                if (field in bodyObj) {
                    delete bodyObj[field];
                    isFirebase = true;
                }
            }
            if (isFirebase) {
                modifiedBody = JSON.stringify(bodyObj);
            } else {
                modifiedBody = $request.body;
            }
        } catch (e) {
            modifiedBody = $request.body;
        }
    } else {
        modifiedBody = $request.body;
    }
}

if (modifiedBody !== undefined) {
    $done({
        headers: modifiedHeaders,
        body: modifiedBody
    });
} else {
    $done({
        headers: modifiedHeaders
    });
}
