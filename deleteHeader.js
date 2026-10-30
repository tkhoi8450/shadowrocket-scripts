// ========================================== //
// Shadowrocket Request Cache Cleaner (Anti-304 & Anti-Drop)
// Hỗ trợ: RevenueCat (api.revenuecat.com) & Firebase Remote Config (firebaseremoteconfig.googleapis.com)
// Tác giả: tkhoi8450 (v10)
// ========================================== //

var modifiedHeaders = Object.assign({}, ($request && $request.headers) ? $request.headers : {});

// 1. Xóa toàn bộ các header cache chống phản hồi 304 Not Modified
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

// Xóa tường minh các biến thể chữ hoa/thường phổ biến
delete modifiedHeaders["x-revenuecat-etag"];
delete modifiedHeaders["X-RevenueCat-ETag"];
delete modifiedHeaders["if-none-match"];
delete modifiedHeaders["If-None-Match"];
delete modifiedHeaders["etag"];
delete modifiedHeaders["ETag"];
delete modifiedHeaders["if-modified-since"];
delete modifiedHeaders["If-Modified-Since"];
delete modifiedHeaders["x-goog-if-none-match"];

// 2. Nếu URL chứa firebaseremoteconfig.googleapis.com và có $request.body
var url = ($request && $request.url) ? $request.url : "";
var isFirebase = (url.indexOf("firebaseremoteconfig.googleapis.com") !== -1) ||
                 (modifiedHeaders["Host"] && modifiedHeaders["Host"].indexOf("firebaseremoteconfig.googleapis.com") !== -1) ||
                 (modifiedHeaders["host"] && modifiedHeaders["host"].indexOf("firebaseremoteconfig.googleapis.com") !== -1);

if (isFirebase && $request && $request.body) {
    var modifiedBody = $request.body;
    try {
        var bodyObj = typeof $request.body === "string" ? JSON.parse($request.body) : $request.body;
        if (bodyObj && typeof bodyObj === "object") {
            delete bodyObj["last_known_etag"];
            delete bodyObj["lastKnownEtag"];
            delete bodyObj["etag"];
            delete bodyObj["digest"];
            delete bodyObj["template_version_number"];
            delete bodyObj["templateVersionNumber"];
            modifiedBody = JSON.stringify(bodyObj);
        }
    } catch (e) {
        // Giữ nguyên body nếu không parse được
    }
    $done({
        headers: modifiedHeaders,
        body: modifiedBody
    });
} else {
    $done({
        headers: modifiedHeaders
    });
}
