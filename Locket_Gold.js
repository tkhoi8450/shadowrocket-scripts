// ========================================== //
// Multi-App RevenueCat VIP & Locket Gold Ultimate
// Hỗ trợ: Locket (Gold, Pro, Filter Pack 10/20) + 150+ App RevenueCat (VSCO, Mojo, Photomator, v.v.)
// Tác giả: tkhoi8450
// ========================================== //

var ua = ($request && $request.headers) ? ($request.headers["User-Agent"] || $request.headers["user-agent"] || "") : "";
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
            amount: priceAmount || 0.0,
            currency: priceCurrency || "USD"
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

// TRƯỜNG HỢP 1: Locket
if (ua.toLowerCase().includes("locket")) {
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
} else {
    // TRƯỜNG HỢP 2: Các app RevenueCat khác (VSCO, Photomator, Spark, Mojo, v.v.)
    const mapping = {
      'Subtracky': ['premium','premium_subtracky_lifetime'],
      'Accountit/': ['spenditPlus','DesignTech.SIA.Spendit.Plus.Lifetime'],
      'Haushaltsbuch': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
      '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
      'FinancialNote': ['category'],
      'QingLong': ['Premium'],
      'CircleTime/': ['Premium'],
      'ScreenRecordCase/': ['Premium'],
      'Chronicling/': ['Premium'],
      'Yosum/': ['Premium'],
      'Currency-Converter/': ['pro'],
      'Precious/': ['Pro'],
      'GBA/': ['xGBA.pro'],
      'mark_cup/': ['premiun'],
      'Wake%20Music': ['premium','com.OfflineMusic.www.lifetime198'],
      'Photomator': ['pixelmator_photo_pro_access'],
      'StepUp/': ['premiun'],
      'SleepMaster/': ['premium','sm_14999_lifetime'],
      'Notedrafts': ['pro_entitlement'],
      'Photon/': ['photon.paid','photon.bundle.yearly'],
      'MusicBox/': ['Premium','musicbox_2999_lifetime'],
      'Rats%20Project': ['PandaTracker_Premiumv2','monthly_subscription_discount_idv3'],
      'Grain/': ['gold','lifetimeMembership'],
      'AudioPlayer': ['Pro'],
      'FoJiCam/': ['ProVersionLifeTime'],
      'pdfai_app/': ['premium'],
      'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
      'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
      'Today%20App/': ['Premium', 'TodayApp_Lifetime'],
      'Aphrodite': ['all'],
      'timetrack.io': ['atimelogger-premium-plus'],
      'LiveWallpaper': ['Pro access'],
      'SharkSMS': ['VIP','com.lixkit.diary.permanent_68'],
      '%E7%BE%8E%E5%A6%86%E6%97%A5%E5%8E%86': ['Pro access'],
      'Aula/': ['Pro access'],
      'Project%20Delta/': ['rc_entitlement_obscura_ultra'],
      'apollo': ['all'],
      'Unfold': ['REDUCED_PRO_YEARLY','UNFOLD_PRO_YEARLY'],
      'LockFlow/': ['unlimited_access'],
      'iplayTV/': ['com.ll.btplayer.12'],
      'widget_art': ['all'],
      'OneBox': ['all'],
      'Taskbit/': ['Pro'],
      'Spark': ['premium'],
      'Medication%20List/': ['Premium'],
      'Pillow': ['premium'],
      'DecibelMeter/': ['Premium'],
      '1Blocker': ['premium'],
      'VSCO': ['membership'],
      'UTC': ['Entitlement.Pro'],
      '%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0': ['Entitlement.Pro'],
      '%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98': ['Entitlement.Pro'],
      'OffScreen': ['Entitlement.Pro'],
      'ScannerPro': ['plus'],
      'Duplete/': ['Pro'],
      'Ooga/': ['Ooga'],
      'WhiteCloud': ['allaccess','wc_pro_1y'],
      'HTTPBot': ['pro'],
      'audiomack': ['Premium1'],
      'server_bee': ['Pro'],
      'simple-': ['patron'],
      'streaks': ['patron'],
      'andyworks-calculator': ['patron'],
      'vibes': ['patron'],
      'CountDuck': ['premium', 'Lifetime'],
      'IPTVUltra': ['premium'],
      'Happy%3ADays': ['pro', 'happy_999_lifetime'],
      'PDF_convertor/': ['VIP', 'com.pdf.convertor.forever'],
      'ChatGPTApp': ['Advanced'],
      'APTV': ['pro'],
      'TouchRetouchBasic': ['premium'],
      'My%20Jump%20Lab': ['lifetime'],
      '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro'],
      'Paku': ['pro'],
      'Awesome%20Habits': ['premium'],
      'Gear': ['pro', 'com.gear.app.yearly'],
      'MoneyThings': ['Premium'],
      'Anybox': ['pro'],
      'Fileball': ['filebox_pro'],
      'Noto': ['pro'],
      'Grow': ['grow.pro', 'grow_lifetime'],
      'WidgetSmith': ['Premium'],
      'Reflix': ['com.magicgroot.reflix.entitlements','com.magicgroot.reflix.subs.lifetime'],
      'Percento': ['premium'],
      'Planny': ['premium'],
      'CPUMonitor': ['Pro'],
      'Locket': ['Gold'],
      'My%20Tim': ['Pro'],
      'Photom': ['premium', 'pixelmator_photo_pro_subscription_v1_pro_offer'],
      'mizframa': ['premium', 'mf_20_lifetime2'],
      'YzyFit/': ['pro', 'yzyfit_lft_v2'],
      'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
      'Fin': ['premium', 'com.circles.fin.premium.yearly'],
      'Ledger': ['Pro', 'com.lifetime.pro'],
      'One4Wall': ['lifetime', 'lifetime_key'],
      'PhotoMark/': ['Pro', 'com.photo.mark.forever'],
      'SimpleScan/': ['premium', 'com.atlantia.SimpleScan.Purchases.Lifetime'],
      'OneWidget': ['allaccess'],
      'CardPhoto': ['premium'],
      'ProCamera': ['private_lightbox_entitlement&san_fran_entitlement&pro_camera_up_entitlement&procamera_full_entitlement','com.cocologics.ProCamera.Up.Yearly'],
      'Journal_iOS/': ['PRO'],
      'LemonKeepAccounts/': ['VIP','lm_1_1month'],
      'PDF%20Viewer': ['sub.pro'],
      'PhotoRoom': ['business'],
      'Decision': ['com.nixwang.decision.entitlements.pro'],
      'Tangerine': ['Premium'],
      'PastePal': ['premium'],
      'Fiery': ['premium'],
      'Airmail': ['Airmail Premium'],
      'Stress': ['StressWatch Pro'],
      'PinPaper': ['allaccess'],
      'Echo': ['PLUS'],
      'MyThings': ['pro','xyz.jiaolong.MyThings.pro.infinity'],
      'Overdue': ['Pro'],
      'BlackBox': ['plus','app.filmnoir.appstore.purchases.lifetime'],
      'Spektr': ['premium'],
      'MusicMate': ['premium','mm_lifetime_68_premium'],
      '%E4%BA%8B%E7%BA%BF': ['pro','xyz.jiaolong.eventline.pro.lifetime'],
      'Tasks': ['Pro'],
      'Currency': ['plus'],
      'money_manager': ['premium'],
      'fastdiet': ['premium'],
      'Blurer': ['paid_access'],
      'Everlog': ['premium'],
      'reader': ['vip2','com.valo.reader.vip2.year'],
      'GetFace': ['Pro access'],
      'intervalFlow': ['All Access','wodtimer_lf_free'],
      'Period%20Calendar': ['Premium','com.lbrc.PeriodCalendar.premium.yearly'],
      'Cookie': ['allaccess','app.ft.Bookkeeping.lifetime'],
      'ScientificCalculator': ['premium','com.simpleinnovation.calculator.ai.premium.yearly.base'],
      'MOZE': ['premium'],
      '1LemonKeepAccounts/': ['vip'],
      'To%20Me/': ['Premium'],
      '%E8%A8%80%E5%A4%96%E7%AD%86%E8%A8%98/': ['Premium'],
      'alcohol.tracker': ['pro','drinklog_lifetime'],
      'DayPoem': ['Pro Lifetime'],
      'Budget%20Flow': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
      'G%20E%20I%20S%20T': ['memorado_premium'],
      'multitimer_app': ['premium','timus_lt'],
      'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters'],
      'tiimo': ['full_access'],
      'FaceMa/': ['Pro access'],
      'Record2Text/': ['Pro access'],
      'jinduoduo_calculator': ['jinduoduoapp','mobile_vip'],
      'Focused%20Work': ['Pro'],
      'GoToSleep': ['Pro'],
      'kegel': ['kegel_pro'],
      'Ochi': ['Pro'],
      'Pomodoro': ['Plus','com.MINE.PomodoroTimer.plus.yearly'],
      'universal/': ['Premium','remotetv.yearly.07'],
      'ShellBean/': ['pro','com.ningle.shellbean.subscription.year'],
      'AI%20Art%20Generator/': ['Unlimited Access'],
      'Email%20Me': ['premium'],
      'GoodThing/': ['pro','goodhappens_basic_year'],
      'Reels%20Editor': ['Unlimited Access'],
      'com.dison.diary': ['vip'],
      'iRead': ['vip'],
      'jizhi': ['jizhi_vip'],
      'card/': ['vip'],
      'EraseIt/': ['ProVersionLifeTime'],
      'Alpenglow': ['newPro'],
      'MindBreathYoga/': ['lifetimeusa'],
      'MetadataEditor': ['unlimited_access'],
      '%E6%9F%A5%E5%A6%86%E5%A6%86': ['Pro access'],
      '%E5%85%83%E6%B0%94%E8%AE%A1%E6%97%B6': ['plus'],
      'WidgetCat': ['MiaoWidgetPro'],
      'Emphasis/': ['premium'],
      'FormScanner/': ['Pro','formscanner_lifetime'],
      'streamer/': ['Premium'],
      'NeatNook/': ['com.neatnook.pro','com.neatnook.pro.forever'],
      'Blackout/': ['premium','blackout_299_lt'],
      'Budgetify/': ['premium','budgetify_3999_lt'],
      'Dedupe/': ['Pro','com.curiouscreatorsco.Dedupe.pro.lifetime.notrial.39_99'],
      'Wozi': ['wozi_pro_2023']
    };

    const match = Object.keys(mapping).find(e => ua.includes(e));
    if (match) {
        const [entKey, productId] = mapping[match];
        const prod = productId || entKey;
        obj.subscriber.subscriptions[prod] = makeSub(prod, 0.0, "USD");
        if (entKey.includes("&")) {
            entKey.split("&").forEach(k => {
                obj.subscriber.entitlements[k] = makeEnt(prod);
            });
        } else {
            obj.subscriber.entitlements[entKey] = makeEnt(prod);
        }
    } else {
        // Fallback mở Pro cho bất kỳ app RevenueCat nào chưa có trong mapping
        var defaultProd = "pro_lifetime";
        obj.subscriber.subscriptions[defaultProd] = makeSub(defaultProd, 0.0, "USD");
        obj.subscriber.entitlements["pro"] = makeEnt(defaultProd);
        obj.subscriber.entitlements["Pro"] = makeEnt(defaultProd);
        obj.subscriber.entitlements["premium"] = makeEnt(defaultProd);
        obj.subscriber.entitlements["Premium"] = makeEnt(defaultProd);
    }
}

// 3. Khóa bộ nhớ đệm 10 năm để giữ trạng thái sau khi tắt VPN
var headers = Object.assign({}, $response.headers || {});
headers["Cache-Control"] = "public, max-age=315360000, immutable";
headers["Expires"] = "Thu, 31 Dec 2099 23:59:59 GMT";
delete headers["Pragma"];

$done({
    headers: headers,
    body: JSON.stringify(obj)
});
