// ========================================== //
// Locket Gold + Filter Pack (Bản Quốc Tế Độc Lập - Không Tên Tác Giả)
// Hỗ trợ: Mở khóa Gold, Pro, Filter Pack 10/20 & Lưu bộ nhớ đệm 2099 khi tắt VPN
// ========================================== //

var obj = {};
try {
    obj = JSON.parse($response.body || "{}");
} catch (e) {
    obj = {};
}

var FAR_FUTURE = "2099-12-31T23:59:59Z";
var PAST = "2024-01-01T00:00:00Z";

function makeSub(productId, priceAmount, priceCurrency) {
    return {
        auto_resume_date: null,
        display_name: productId,
        is_sandbox: false,
        ownership_type: "PURCHASED",
        billing_issues_detected_at: null,
        management_url: "https://apps.apple.com/account/subscriptions",
        period_type: "normal",
        price: {
            amount: priceAmount,
            currency: priceCurrency
        },
        expires_date: FAR_FUTURE,
        grace_period_expires_date: null,
        refunded_at: null,
        unsubscribe_detected_at: null,
        original_purchase_date: PAST,
        purchase_date: PAST,
        store: "app_store",
        store_transaction_id: "2000001108724193"
    };
}

function makeEnt(productId) {
    return {
        grace_period_expires_date: null,
        purchase_date: PAST,
        product_identifier: productId,
        expires_date: FAR_FUTURE
    };
}

obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

// 1. Mở khóa Locket Gold & Pro
var goldProduct = "locket_1600_1y";
obj.subscriber.subscriptions[goldProduct] = makeSub(goldProduct, 399000.0, "VND");
obj.subscriber.entitlements["Gold"] = makeEnt(goldProduct);
obj.subscriber.entitlements["pro"] = makeEnt(goldProduct);

// 2. Mở khóa Filter Pack 10 & 20
var pack10Product = "com.locket.Locket.FilterPack_10Photos_400";
obj.subscriber.subscriptions[pack10Product] = makeSub(pack10Product, 0.0, "USD");
obj.subscriber.entitlements["effect_pack_10"] = makeEnt(pack10Product);

var pack20Product = "com.locket.Locket.FilterPack_20Photos_500";
obj.subscriber.subscriptions[pack20Product] = makeSub(pack20Product, 0.0, "USD");
obj.subscriber.entitlements["effect_pack_20"] = makeEnt(pack20Product);

// 3. Khóa bộ nhớ đệm 10 năm để giữ trạng thái sau khi tắt VPN
var headers = Object.assign({}, $response.headers || {});
headers["Cache-Control"] = "public, max-age=315360000, immutable";
headers["Expires"] = "Thu, 31 Dec 2099 23:59:59 GMT";
delete headers["Pragma"];

$done({
    headers: headers,
    body: JSON.stringify(obj)
});
