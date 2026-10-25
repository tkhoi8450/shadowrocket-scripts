// ========================================== //
// Locket Unlocked & Gold Badge Persistence (Bản Độc Lập - Không Tên Tác Giả)
// 1. Quay video 60 giây (60s), Thu âm, Đăng ảnh thư viện, Chất lượng cao.
// 2. GIỮ NGUYÊN 100% các chú thích cũ + THÊM MỚI 24 chú thích Hot Trend 2026 cực chất.
// 3. ĐỘT PHÁ: Giữ công tắc Huy hiệu Gold (locket_gold) luôn BẬT trên api.locketcamera.com, không bị tự tắt khi thoát ra vào lại!
// 4. Lưu bộ nhớ đệm 10 năm (Cache-Control 2099) để tắt VPN vẫn ghi nhớ!
// ========================================== //

const EXTRA_HOT_TREND_CAPTIONS = [
  { emoji: "🎬", text: "Tuyệt đối điện ảnh", bg: ["#1F1C2C", "#928DAB"], color: "#FFFFFF" },
  { emoji: "🔥", text: "Đỉnh nóc kịch trần", bg: ["#FF416C", "#FF4B2B"], color: "#FFFFFF" },
  { emoji: "💸", text: "Ting ting! +50.000.000đ", bg: ["#11998e", "#38ef7d"], color: "#FFFFFF" },
  { emoji: "⚡", text: "Aura +10.000", bg: ["#4776E6", "#8E54E9"], color: "#FFFFFF" },
  { emoji: "🧘‍♂️", text: "Tâm bất biến giữa dòng đời", bg: ["#0F2027", "#2C5364"], color: "#FFFFFF" },
  { emoji: "🚀", text: "Đang bận kiếm tiền tỷ", bg: ["#FF8008", "#FFC837"], color: "#1A1A1A" },
  { emoji: "🕶️", text: "Đẳng cấp là mãi mãi", bg: ["#232526", "#414345"], color: "#FFFFFF" },
  { emoji: "☕", text: "Cà phê đen không đường", bg: ["#3E1E04", "#8E5431"], color: "#FFFFFF" },
  { emoji: "🎮", text: "Gánh team còng cả lưng", bg: ["#00B4DB", "#0083B0"], color: "#FFFFFF" },
  { emoji: "🛑", text: "Miễn tiếp chuyện xàm", bg: ["#CB356B", "#BD3F32"], color: "#FFFFFF" },
  { emoji: "🏋️‍♂️", text: "Độ body chứ không độ tình", bg: ["#1D976C", "#93F9B9"], color: "#1A1A1A" },
  { emoji: "🌌", text: "Hệ tư tưởng độc lập tự do", bg: ["#654ea3", "#eaafc8"], color: "#FFFFFF" },
  { emoji: "💳", text: "Quẹt thẻ không nhìn giá", bg: ["#f12711", "#f5af19"], color: "#FFFFFF" },
  { emoji: "🎧", text: "Nhạc lên là quên hết", bg: ["#141E30", "#243B55"], color: "#FFFFFF" },
  { emoji: "🧋", text: "Trà sữa chữa lành tâm hồn", bg: ["#FBD3E9", "#BB377D"], color: "#FFFFFF" },
  { emoji: "🛵", text: "Tối nay đi lượn phố không?", bg: ["#FF8008", "#FFC837"], color: "#1A1A1A" },
  { emoji: "💤", text: "Đang sạc lại nhân phẩm", bg: ["#3a1c71", "#d76d77"], color: "#FFFFFF" },
  { emoji: "👑", text: "Lowkey nhưng chất lượng cao", bg: ["#000000", "#434343"], color: "#FFD700" },
  { emoji: "🍜", text: "Đói bụng quá cứu với", bg: ["#e65c00", "#F9D423"], color: "#1A1A1A" },
  { emoji: "🏖️", text: "Muốn đi trốn ở một nơi xa", bg: ["#2193b0", "#6dd5ed"], color: "#FFFFFF" },
  { emoji: "📈", text: "Cổ phiếu tím lịm tìm sim", bg: ["#8E2DE2", "#4A00E0"], color: "#FFFFFF" },
  { emoji: "🏎️", text: "Không nói nhiều, lên xe!", bg: ["#ED213A", "#93291E"], color: "#FFFFFF" },
  { emoji: "🐱", text: "Hoàng thượng giá lâm", bg: ["#F2994A", "#F2C94C"], color: "#1A1A1A" },
  { emoji: "✨", text: "Vibe hôm nay: 10 điểm không có nhưng", bg: ["#11998e", "#38ef7d"], color: "#FFFFFF" }
];

// Hàm đệ quy bơm trạng thái Huy hiệu Gold (badge: "locket_gold") vào phản hồi của api.locketcamera.com
function injectGoldBadge(obj) {
  if (!obj || typeof obj !== "object") return;
  if ("badge" in obj || "uid" in obj || "first_name" in obj || "profile_picture_url" in obj) {
    obj.badge = "locket_gold";
  }
  for (const key of Object.keys(obj)) {
    if (obj[key] && typeof obj[key] === "object") {
      injectGoldBadge(obj[key]);
    }
  }
}

try {
  let url = ($request && $request.url) ? $request.url : "";
  let rawBody = $response.body || "{}";
  let body = JSON.parse(rawBody);

  // TRƯỜNG HỢP 1: Xử lý giữ Huy hiệu Gold luôn BẬT trên api.locketcamera.com (changeProfileInfo / fetchUserV2)
  if (url.includes("api.locketcamera.com")) {
    injectGoldBadge(body);
    if (body.result && typeof body.result === "object") {
      body.result.status = 200;
      if (body.result.data && typeof body.result.data === "object") {
        body.result.data.badge = "locket_gold";
      }
    }
    var rcHeaders = Object.assign({}, $response.headers || {});
    rcHeaders["Cache-Control"] = "public, max-age=315360000, immutable";
    rcHeaders["Expires"] = "Thu, 31 Dec 2099 23:59:59 GMT";
    $done({
      status: 200,
      headers: rcHeaders,
      body: JSON.stringify(body)
    });
  } else {
    // TRƯỜNG HỢP 2: Xử lý Firebase Remote Config (Quay 60s + Giữ nguyên chú thích cũ + Thêm 24 chú thích mới)
    body.entries = body.entries || {};

    const featureFlags = {
      "max_video_duration": "60",
      "video_max_length_seconds": "60",
      "max_video_length": "60",
      "enable_audio_moments": "true",
      "audio_notes_enabled": "true",
      "locket_gold_badge_enabled": "true",
      "unlimited_friends_enabled": "true",
      "camera_roll_upload_enabled": "true",
      "high_quality_video_upload": "true",
      "ad_free_experience": "true",
      "minimum_fetch_interval_seconds": "315360000"
    };

    for (const [k, v] of Object.entries(featureFlags)) {
      body.entries[k] = v;
    }

    // Giữ nguyên 100% các chú thích cũ và CHÈN THÊM 24 chú thích mới vào cùng danh sách
    for (const key of Object.keys(body.entries)) {
      try {
        let val = body.entries[key];
        if (typeof val === "string" && (val.startsWith("[") || val.startsWith("{"))) {
          let parsed = JSON.parse(val);
          if (Array.isArray(parsed) && parsed.length > 0) {
            let sample = parsed[0];
            if (sample && typeof sample === "object") {
              const newItems = EXTRA_HOT_TREND_CAPTIONS.map((item) => {
                let clone = JSON.parse(JSON.stringify(sample));
                for (const prop of Object.keys(clone)) {
                  if (typeof clone[prop] === "string") {
                    if (prop.toLowerCase().includes("text") || prop.toLowerCase().includes("title") || prop.toLowerCase().includes("label") || prop.toLowerCase().includes("caption")) {
                      clone[prop] = item.text;
                    } else if (prop.toLowerCase().includes("icon") || prop.toLowerCase().includes("emoji")) {
                      clone[prop] = item.emoji;
                    }
                  }
                }
                return clone;
              });
              // Giữ nguyên parsed (cũ) và nối thêm newItems (mới)
              body.entries[key] = JSON.stringify([...newItems, ...parsed]);
            }
          }
        }
      } catch (e) {}
    }

    body.state = "UPDATE";

    var fbHeaders = Object.assign({}, $response.headers || {});
    fbHeaders["Cache-Control"] = "public, max-age=315360000, immutable";
    fbHeaders["Expires"] = "Thu, 31 Dec 2099 23:59:59 GMT";
    delete fbHeaders["Pragma"];

    $done({
      headers: fbHeaders,
      body: JSON.stringify(body)
    });
  }
} catch (err) {
  $done({});
}
