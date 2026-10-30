// ============================================================
// Locket Remote Config Rewrite (HCMUTE Edition - tkhoi8450)
// Endpoint: firebaseremoteconfig.googleapis.com
// Dùng cho: Shadowrocket / Loon / Quantumult X / Surge
// ============================================================

var ua = "";
try {
    if ($request && $request.headers) {
        ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
    }
} catch (e) {}

var obj = {};
try {
    obj = typeof $response.body === "string" ? JSON.parse($response.body) : ($response.body || {});
} catch (e) {
    obj = {};
}

// Luôn thực thi mở khóa 60s, Mic & Chú thích vì endpoint locket-4252a dành riêng cho Locket
if (true) {
    obj.Attention = "💛 Locket Gold Ultimate - HCMUTE Edition";
    obj.entries = obj.entries || {};

    // ============================================================
    // 1. CẤU HÌNH GOLD, FEATURE GATES & PAYWALL
    // ============================================================
    Object.assign(obj.entries, {
        feature_gates: JSON.stringify({
            app_icon_picker: "enabled",
            camera_roll: "enabled",
            camera_theme: "enabled",
            locket_views: "enabled",
            long_captions: "enabled",
            longer_video: "enabled",
            unlimited_friends: "enabled",
            priority_support: "enabled",
            profile_badge: "enabled",
            remove_ads: "enabled",
            video: "enabled",
            custom_widget_frames: "enabled",
            streak_recovery: "enabled"
        }),
        upsell_features: JSON.stringify({
            app_icon_picker: true,
            camera_roll: true,
            camera_theme: true,
            locket_views: true,
            remove_ads: true,
            custom_widget_frames: true
        }),
        paywall_presentation_config: JSON.stringify({
            uid: "paywall_testflight",
            onboarding: false,
            after_sent_moment: false,
            on_foreground: false,
            interval: 2592000,
            profile_banner: true
        }),
        feature_discovery_popup_config: JSON.stringify({
            tag: "LOCKET GOLD",
            tag_gradient: true,
            tag_style: "gold_gradient",
            title: "Lên LocketGold rồi đó 😎",
            feature_set: [
                {
                    title: "Chào mừng bạn đến với Locket Gold ✨",
                    body: "Chúc bạn có những trải nghiệm tuyệt vời cùng Locket Gold 💛",
                    imageURL: "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/locket_gold.png"
                }
            ],
            primary_button_title: "Xong",
            campaign: "locket_gold_welcome_v8",
            start_at: "2020-01-01T00:00:00",
            end_at: "2099-12-31T23:59:59",
            use_local_time_zone: true
        }),
        android_subscribe_gold_button_enabled: "false",
        profile_badge_visible: "true",
        lunar_new_year_app_icon_enabled: "true",
        settings_instagram_url: "https://github.com/tkhoi8450/shadowrocket-scripts",
        settings_tiktok_url: "https://github.com/tkhoi8450/shadowrocket-scripts"
    });

    // ============================================================
    // 2. CHẶN QUẢNG CÁO & TẮT TRACKING (SENTRY)
    // ============================================================
    Object.assign(obj.entries, {
        history_ads_mode: "off",
        history_ads_prefetch_count: "0",
        history_ads_prefetch_immediate: "false",
        history_ads_prefetch_reroute: "false",
        history_ads_dynamic_insertion: "false",
        history_ads_refresh_prefetch_on_foreground: "false",
        history_ads_floor_price: "0",
        history_ads_floor_price_att: "0",
        history_ad_log_displayed_on_background: "false",
        history_ads_debug_menu: "false",
        sentry_sample_rate: "0",
        sentry_network_tracing: "false",
        sentry_performance_tracking: "false",
        sentry_trace_sample_rate: "0",
        sentry_profiles_sample_rate: "0"
    });

    // ============================================================
    // 3. CAMERA, VIDEO, FILTERS & UPLOAD QUALITY
    // ============================================================
    Object.assign(obj.entries, {
        camera: JSON.stringify({
            gold_max_duration: 60.0,
            goldMaxDuration: 60.0,
            max_duration: 60.0,
            maxDuration: 60.0,
            ultra_wide: true,
            ultraWide: true,
            volume_button: true,
            volumeButton: true,
            flash_button: true,
            telephoto: true,
            srgb: true,
            lanczos: true,
            quality_mbps: 0.9,
            qualityMbps: 0.9
        }),
        camera_roll: JSON.stringify({
            gold_max_duration: 60.0,
            goldMaxDuration: 60.0,
            video_max_duration: 60.0,
            videoMaxDuration: 60.0,
            max_duration: 60.0,
            maxDuration: 60.0,
            trim_max_duration: 60.0,
            trimMaxDuration: 60.0,
            camera_roll_max_duration: 60.0,
            quality_mbps: 0.9,
            qualityMbps: 0.9,
            flash_button: true
        }),
        live_photos: JSON.stringify({
            capture: true,
            viewing: true,
            catch_up: true,
            widget_looping_mode: "never"
        }),
        camera_filter_config: JSON.stringify({
            allows_custom_filters: true,
            show_filter_button: true,
            sheet_enabled: true,
            open_sheet_immediately: true,
            sheet_filters: [
                { title: { en: "Goofy" }, filter_ids: ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"] },
                { title: { en: "Looks" }, filter_ids: ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"] },
                { title: { en: "Celebrate" }, filter_ids: ["slimed", "princess", "disco_lights", "cash_money", "happy_birthday"] },
                { title: { en: "Cute" }, filter_ids: ["cutesy", "sticker_face", "flower_crown", "love_bug"] },
                { title: { en: "Costumes" }, filter_ids: ["wedding", "cowboy_cowgirl", "giraffe", "clown"] },
                { title: { en: "Holidays" }, filter_ids: ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"] }
            ],
            picker_filters: [
                "okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows",
                "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns",
                "tatted", "mohawk", "braces", "slimed", "princess",
                "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face",
                "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe",
                "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun",
                "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"
            ]
        }),
        camera_roll_preview_enabled: "true",
        camera_roll_video_enabled: "true",
        camera_roll_video_upload_enabled: "true",
        internal_camera_roll_video_upload_enabled: "true",
        longer_camera_roll_videos_enabled: "true",
        camera_roll_video_max_duration: "60.0",
        camera_roll_max_duration: "60.0",
        camera_roll_duration: "60.0",
        max_video_duration: "60.0",
        max_duration: "60.0",
        video_max_duration: "60.0",
        video_trim_max_duration: "60.0",
        trim_max_duration: "60.0",
        gold_max_duration: "60.0",
        goldMaxDuration: "60.0",
        video_quality_mbps: "2.5",
        video_sound_enabled: "true",
        microphone_enabled: "true",
        camera_microphone_enabled: "true",
        audio_session_deactivation_enabled: "true",
        zoom_enabled: "true",
        upload_main: "false",
        upload_main_image_quality: "1.0",
        upload_main_image_size: "2160",
        upload_thumbnail_image_quality: "1.0",
        upload_thumbnail_image_size: "1020"
    });

    // ============================================================
    // 4. BẠN BÈ, GIỚI HẠN & ĐỀ XUẤT KẾT BẠN
    // ============================================================
    Object.assign(obj.entries, {
        max_friends_count: "999999",
        friend_limit_mode: "0",
        soft_friend_limit_threshold_count: "999999",
        show_friend_limit_on_cam: "false",
        signup_max_friends_count: "999999",
        celebrity_inbox_limit: "999999",
        friend_limit_geo_override: JSON.stringify({ experiments: {}, area_code_overrides: {} }),
        friends_sheet_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" },
                { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" },
                { threshold: 100, emoji: "💛" },
                { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "🌟🫶🌟" },
                { threshold: 2000, emoji: "✨💟✨" },
                { threshold: 5000, emoji: "⚡️😵‍💫⚡" },
                { threshold: 10000, emoji: "✨⚡️😱⚡✨" }
            ]
        }),
        friend_locket_count_config: JSON.stringify({
            items: [
                { threshold: 0, icon_name: "heart" },
                { threshold: 1, icon_name: "heart.fill" },
                { threshold: 10, emoji: "🤍" },
                { threshold: 100, emoji: "💛" },
                { threshold: 500, emoji: "❤️‍🔥" },
                { threshold: 1000, emoji: "✨💗✨" },
                { threshold: 2000, emoji: "✨️⭐️✨" },
                { threshold: 5000, emoji: "✨💎✨" },
                { threshold: 10000, emoji: "✨🔐💛✨" }
            ]
        }),
        new_friends_monitoring_enabled: "true",
        improved_friend_suggestions: "true",
        show_friend_suggestions_by_default: "true",
        emoji_friend_suggestions: "true",
        prompt_contact_permissions_on_search: "true",
        populate_phone_numbers_from_suggest_friends: "true",
        hide_friends_enabled: "true",
        hide_invite_links: "false",
        hide_skip_contacts: "true",
        show_all_contacts: "true",
        show_invite_suggestions: "true",
        show_no_friends_bottom_sheet: "false",
        signup_allow_skip_add_friends: "true"
    });

    // ============================================================
    // 5. MOMENTS, STREAK, CHAT & TƯƠNG TÁC
    // ============================================================
    try {
        var streak = JSON.parse(obj.entries.streak_config || "{}");
        streak.minimum_recovery_count = 0;
        streak.minimum_display_count = 0;
        obj.entries.streak_config = JSON.stringify(streak);
    } catch (e) {}

    Object.assign(obj.entries, {
        moment_views_enabled: "true",
        moment_views_v2: "true",
        record_moment_views: "true",
        notify_moment_views: "true",
        get_moment_views_as_cloud_function: "true",
        moment_reactions_v2: "true",
        chat_reactions_enabled: "true",
        conversation_reactions: "true",
        typing_indicators_enabled: "true",
        unsend_message_enabled: "true",
        reply_prototype_enabled: "true",
        messages_integration: "true",
        conversations_enabled: "true",
        fetch_moments_in_conversation: "true",
        hide_chat_button: "false",
        groups_enabled: "true",
        send_to_self_only_mode: "always_enabled",
        time_travel_rewind_v2_enabled: "true",
        calendar_delete_moment_enabled: "true",
        calendar_rewind_enabled: "false",
        locket_yearbook_story_sharing_encouraged: "true",
        rollcall_enabled: "true",
        rollcall_comment_actions: "true",
        rollcall_profile_button: "true",
        rollcall_prompt_export_after_share: "true",
        rollcall_confirm_skip_tagging: "false",
        rollcall_tap_to_tag_enabled: "false"
    });

    // ============================================================
    // 6. WIDGET, THÔNG BÁO & GIAO DIỆN (JOURNAL / PROFILE)
    // ============================================================
    Object.assign(obj.entries, {
        widget_frame_event_max_images: "5",
        android_widget_frame_event_enabled: "true",
        widget_badge_enabled: "true",
        widget_badge_v2: "true",
        widget_stale_state_enabled: "false",
        widget_last_sent_indicator: "false",
        widget_sync_token_reload_mode: "clearTokenNever",

        live_activity_onboarding: "true",
        live_activity_onboarding_variant: "friending",
        register_live_activity_push_to_start_token: "true",
        live_activity_remove_stale_start_token: "true",
        notification_preferences_live_activities: "true",
        notification_preferences: "true",
        notification_reply_body_visible: "true",
        prompt_notification_permissions_after_friending: "true",
        activity_bar_enabled: "true",
        journal_activity_bar_enabled: "true",
        journal_settings: JSON.stringify({
            debug_menu_enabled: false,
            focus_animation: true,
            compact_header: true,
            friends_button: true,
            reverse_scroll_direction: false,
            streak_visualization: true,
            streak_visualization_style: "gradient",
            streak_header_minimum_count: 0,
            streak_visualization_minimum_count: 2,
            overlay_indicators: { location: true, music: true, static_content: true, weather: true }
        }),
        qr_code_config: JSON.stringify({ profile_enabled: true, scanning_enabled: true }),
        custom_profile_pics: "true",
        profile_menu_v2_enabled: "true"
    });

    // ============================================================
    // 7. HỆ THỐNG, CACHE & STORAGE CDN
    // ============================================================
    Object.assign(obj.entries, {
        cdn_domain_replacements: JSON.stringify({
            "firebasestorage.googleapis.com": "cdn.locketcamera.com"
        }),
        cdn_domain_replacements_video: "true",
        storage_bucket: "gs://locket-img",
        storage_bucket_video: "gs://locket-video",
        image_cache_max_age_sec: "157680000",
        image_cache_max_size: "400000000",
        history_cache_age_days: "1000",
        user_cache_max_age_sec: "691200",
        friends_cache_max_age_sec: "2592000",
        image_fetch_cache: "true",
        image_cache_use_shared: "true",
        use_doc_dir_for_image_cache: "true",
        efficient_history_cache_invalidation: "true",
        timestamp_based_history_fetches: "true",
        get_latest_moment_v2: "true",
        fetch_users_from_cloud_function: "true",
        refresh_interval: "60",
        firestore_refresh_v2: "true",
        firestore_refresh_v3: "true",
        keychain_access_retries: "true",
        blocked_users_cached_sync_enabled: "true",
        beta_features_enabled: "true",
        join_testflight_enabled: "true",
        safety_center: "true",
        help_center: "true",
        support_v2: "true",
        privacy_choices_setting: "true",
        request_att_permission: "true",
        invite_link_preview_variant: "4",
        share_history_config: JSON.stringify({ prompt_enabled: false, fetching_enabled: true }),
        share_history_prompt_enabled: "false",
        use_thumbnails_for_sharing: "true",
        use_thumbnails_in_timeline: "true",
        persist_onboarding_step: "true",
        onboarding_contact_permission_step: "true"
    });

    // ============================================================
    // 8. OVERLAY & CUSTOM CAPTIONS
    // ============================================================
    Object.assign(obj.entries, {
        overlay_navigator_enabled: "true",
        overlays_v2_config: JSON.stringify({ suggestions_enabled: true }),
        captions_enabled: "true",
        music_caption_enabled: "true",
        music_caption_song_preview_enabled: "true",
        link_caption_link_enabled: "true",
        overlay_dynamic_captions: JSON.stringify([
            "standard", "poll", "color_palette", "review", "music", "location",
            "weather", "time", "streak", "star_sign", "party_time", "locket_count",
            "good_morning", "goodnight", "ootd", "miss_you", "custom", "phunu_2010", "halloween_2026"
        ]),
        overlay_items: JSON.stringify(
[
    {
        "section": "🎓 Sinh Viên HCMUTE ⚙️",
        "items": [
            {
                "overlay_id": "caption:ute_dan_ky_thuat_hcmute_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#050B14",
                            "#0A192F",
                            "#112240"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/ute_navy_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "⚙️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Dân Kỹ Thuật HCMUTE",
                    "localized_text": {
                        "en": "Dân Kỹ Thuật HCMUTE",
                        "vn": "Dân Kỹ Thuật HCMUTE"
                    },
                    "text_color": "#70E1F5",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_so_1_vo_van_ngan_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#040D12",
                            "#071E28",
                            "#0B2447"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/ute_cyber_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🏫",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Số 1 Võ Văn Ngân",
                    "localized_text": {
                        "en": "Số 1 Võ Văn Ngân",
                        "vn": "Số 1 Võ Văn Ngân"
                    },
                    "text_color": "#FFD166",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_check_in_toa_trung_tam_ute_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#0F172A",
                            "#1E293B",
                            "#334155"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/ute_building_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🏢",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Check-in Tòa Trung Tâm UTE",
                    "localized_text": {
                        "en": "Check-in Tòa Trung Tâm UTE",
                        "vn": "Check-in Tòa Trung Tâm UTE"
                    },
                    "text_color": "#80FFDB",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_ac_san_ket_xe_nga_tu_thu_uc_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#0B0914",
                            "#1A1423",
                            "#2C1E38"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/street_night_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🚦",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đặc sản: Kẹt xe Ngã tư Thủ Đức",
                    "localized_text": {
                        "en": "Đặc sản: Kẹt xe Ngã tư Thủ Đức",
                        "vn": "Đặc sản: Kẹt xe Ngã tư Thủ Đức"
                    },
                    "text_color": "#FFBE0B",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_sang_giang_uong_chieu_xuong_xuong_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#120C09",
                            "#261610",
                            "#3E2218"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/ute_ember_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🔧",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Sáng giảng đường, chiều xuống xưởng",
                    "localized_text": {
                        "en": "Sáng giảng đường, chiều xuống xưởng",
                        "vn": "Sáng giảng đường, chiều xuống xưởng"
                    },
                    "text_color": "#FF9F1C",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_code_xuyen_man_em_tai_ute_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#050A08",
                            "#0B1713",
                            "#142A22"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_gaming_neon_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "💻",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Code xuyên màn đêm tại UTE",
                    "localized_text": {
                        "en": "Code xuyên màn đêm tại UTE",
                        "vn": "Code xuyên màn đêm tại UTE"
                    },
                    "text_color": "#39FF14",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_trai_spkt_vua_gioi_vua_chung_tinh_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#0D061A",
                            "#1F1135",
                            "#2E1A47"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/ute_violet_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🎓",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Trai SPKT vừa giỏi vừa chung tình",
                    "localized_text": {
                        "en": "Trai SPKT vừa giỏi vừa chung tình",
                        "vn": "Trai SPKT vừa giỏi vừa chung tình"
                    },
                    "text_color": "#FFAFCC",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_qua_mon_la_mot_loai_tai_nang_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#240046",
                            "#3C096C",
                            "#5A189A"
                        ]
                    },
                    "icon": {
                        "data": "📝",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Qua môn là một loại tài năng",
                    "localized_text": {
                        "en": "Qua môn là một loại tài năng",
                        "vn": "Qua môn là một loại tài năng"
                    },
                    "text_color": "#FDE428",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_ky_su_tuong_lai_ang_nap_nang_luong_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#04151F",
                            "#082333",
                            "#0B3142"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/ute_emerald_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🛠️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Kỹ sư tương lai đang nạp năng lượng",
                    "localized_text": {
                        "en": "Kỹ sư tương lai đang nạp năng lượng",
                        "vn": "Kỹ sư tương lai đang nạp năng lượng"
                    },
                    "text_color": "#00F5D4",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_hoc_bong_ute_ang_vay_goi_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#1A1406",
                            "#2D220A",
                            "#40300E"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_money_gold_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🏆",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Học bổng UTE đang vẫy gọi",
                    "localized_text": {
                        "en": "Học bổng UTE đang vẫy gọi",
                        "vn": "Học bổng UTE đang vẫy gọi"
                    },
                    "text_color": "#FFE66D",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_ngu_gat_ca_1_luc_7h_sang_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#232526",
                            "#414345",
                            "#5C6166"
                        ]
                    },
                    "icon": {
                        "data": "💤",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ngủ gật ca 1 lúc 7h sáng",
                    "localized_text": {
                        "en": "Ngủ gật ca 1 lúc 7h sáng",
                        "vn": "Ngủ gật ca 1 lúc 7h sáng"
                    },
                    "text_color": "#A5B4FC",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_tu_hao_sinh_vien_hcmute_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#03071E",
                            "#021B79",
                            "#0035A0"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/ute_royal_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "💙",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tự hào sinh viên HCMUTE",
                    "localized_text": {
                        "en": "Tự hào sinh viên HCMUTE",
                        "vn": "Tự hào sinh viên HCMUTE"
                    },
                    "text_color": "#FFF3B0",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_server_ktc_sap_nua_roi_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2B0909",
                            "#4A0505",
                            "#660708"
                        ]
                    },
                    "icon": {
                        "data": "💥",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Server ĐKTC sập nữa rồi",
                    "localized_text": {
                        "en": "Server ĐKTC sập nữa rồi",
                        "vn": "Server ĐKTC sập nữa rồi"
                    },
                    "text_color": "#FF4D6D",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_viem_mang_tui_o_thu_uc_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#081C15",
                            "#133527",
                            "#1B4332"
                        ]
                    },
                    "icon": {
                        "data": "💸",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Viêm màng túi ở Thủ Đức",
                    "localized_text": {
                        "en": "Viêm màng túi ở Thủ Đức",
                        "vn": "Viêm màng túi ở Thủ Đức"
                    },
                    "text_color": "#95D5B2",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_chay_thuc_mang_cho_kip_iem_danh_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F857A6",
                            "#FF5858",
                            "#FF8C00"
                        ]
                    },
                    "icon": {
                        "data": "🏃",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Chạy thục mạng cho kịp điểm danh",
                    "localized_text": {
                        "en": "Chạy thục mạng cho kịp điểm danh",
                        "vn": "Chạy thục mạng cho kịp điểm danh"
                    },
                    "text_color": "#FDE047",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_on_thi_giua_ky_muon_xiu_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#4B6CB7",
                            "#182848",
                            "#2C3E50"
                        ]
                    },
                    "icon": {
                        "data": "📚",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ôn thi giữa kỳ muốn xỉu",
                    "localized_text": {
                        "en": "Ôn thi giữa kỳ muốn xỉu",
                        "vn": "Ôn thi giữa kỳ muốn xỉu"
                    },
                    "text_color": "#FCA5A5",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_khoanh_lui_tam_linh_la_chinh_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#00C6FF",
                            "#0072FF",
                            "#7B2CBF"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_galaxy_night_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🤖",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Khoanh lụi: Tâm linh là chính",
                    "localized_text": {
                        "en": "Khoanh lụi: Tâm linh là chính",
                        "vn": "Khoanh lụi: Tâm linh là chính"
                    },
                    "text_color": "#C4B5FD",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_nam_2_ma_ngo_gia_10_tuoi_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#3A1C71",
                            "#D76D77",
                            "#FFAF7B"
                        ]
                    },
                    "icon": {
                        "data": "🥱",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Năm 2 mà ngỡ già 10 tuổi",
                    "localized_text": {
                        "en": "Năm 2 mà ngỡ già 10 tuổi",
                        "vn": "Năm 2 mà ngỡ già 10 tuổi"
                    },
                    "text_color": "#E2E8F0",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_nuoi_song_bang_ca_phe_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2C1B18",
                            "#5D3A2C",
                            "#9A7B68"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_coffee_chill_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "☕",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Nuôi sống bằng cà phê",
                    "localized_text": {
                        "en": "Nuôi sống bằng cà phê",
                        "vn": "Nuôi sống bằng cà phê"
                    },
                    "text_color": "#F3D5B5",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ute_ung_hoi_iem_ren_luyen_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#1E130C",
                            "#9A8478",
                            "#3E2723"
                        ]
                    },
                    "icon": {
                        "data": "🚫",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đừng hỏi điểm rèn luyện",
                    "localized_text": {
                        "en": "Đừng hỏi điểm rèn luyện",
                        "vn": "Đừng hỏi điểm rèn luyện"
                    },
                    "text_color": "#F87171",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🎨 General",
        "items": [
            {
                "overlay_id": "caption:standard",
                "source": "local",
                "caption": {
                    "type": "standard"
                }
            },
            {
                "overlay_id": "caption:review",
                "source": "local",
                "caption": {
                    "type": "review"
                }
            },
            {
                "overlay_id": "caption:music",
                "source": "local",
                "caption": {
                    "type": "music"
                }
            },
            {
                "overlay_id": "caption:location",
                "source": "local",
                "caption": {
                    "type": "location"
                }
            },
            {
                "overlay_id": "caption:weather",
                "source": "local",
                "caption": {
                    "type": "weather"
                }
            },
            {
                "overlay_id": "caption:time",
                "source": "local",
                "caption": {
                    "type": "time"
                }
            },
            {
                "overlay_id": "caption:streak",
                "source": "local",
                "caption": {
                    "type": "streak"
                }
            },
            {
                "overlay_id": "caption:star_sign",
                "source": "local",
                "caption": {
                    "type": "star_sign"
                }
            },
            {
                "overlay_id": "caption:poll",
                "source": "local",
                "caption": {
                    "type": "poll"
                }
            },
            {
                "overlay_id": "caption:color_palette",
                "source": "local",
                "caption": {
                    "type": "color_palette"
                }
            },
            {
                "overlay_id": "caption:locket_count",
                "source": "local",
                "caption": {
                    "type": "locket_count"
                }
            }
        ]
    },
    {
        "section": "🎨 Holiday Caption",
        "items": [
            {
                "overlay_id": "caption:halloween_2026",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#150804",
                            "#C8540D"
                        ]
                    },
                    "icon": {
                        "data": "🎃",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Halloween",
                    "localized_text": {
                        "en": "Halloween",
                        "vn": "Halloween"
                    },
                    "text_color": "#FFB182",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:autumn_2026",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFE0A0",
                            "#F6A53A"
                        ]
                    },
                    "icon": {
                        "data": "🍂",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Xin chào Mùa Thu",
                    "localized_text": {
                        "en": "Xin chào Mùa Thu",
                        "vn": "Xin chào Mùa Thu"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:christmas_eve_2026",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2FA85F",
                            "#176B3A"
                        ]
                    },
                    "icon": {
                        "data": "🕯️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Giáng sinh an lành",
                    "localized_text": {
                        "en": "Giáng sinh an lành",
                        "vn": "Giáng sinh an lành"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:christmas_day_2026",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#E53935",
                            "#A81818"
                        ]
                    },
                    "icon": {
                        "data": "🎄",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Giáng sinh an lành",
                    "localized_text": {
                        "en": "Giáng sinh an lành",
                        "vn": "Giáng sinh an lành"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:new_years_eve_2026",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFC64B",
                            "#FFEDBF"
                        ]
                    },
                    "icon": {
                        "data": "🥂",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Xin chào 2027!",
                    "localized_text": {
                        "en": "Xin chào 2027!",
                        "vn": "Xin chào 2027!"
                    },
                    "text_color": "#643F00",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:new_years_day_2027",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#3B00EC",
                            "#823FFF"
                        ]
                    },
                    "icon": {
                        "data": "💫",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Xin chào 2027!",
                    "localized_text": {
                        "en": "Xin chào 2027!",
                        "vn": "Xin chào 2027!"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:new_years_day_2027_alternate",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF0062",
                            "#FF783F"
                        ]
                    },
                    "max_lines": 1,
                    "text": "2027",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🎨 Decorative by Locket",
        "items": [
            {
                "overlay_id": "caption:toi_nho_em",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFFFFF",
                            "#6D9EEB"
                        ]
                    },
                    "max_lines": 1,
                    "text": "보고 싶어 🥺",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:party_time",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#5EFFF5",
                            "#FCFF57"
                        ]
                    },
                    "icon": {
                        "data": "🪩",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Party Time!",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:good_morning",
                "source": "remote",
                "daily_start_hour": 5,
                "daily_end_hour": 10,
                "caption": {
                    "background": {
                        "colors": [
                            "#EF7402",
                            "#EABF0F"
                        ]
                    },
                    "icon": {
                        "data": "☀️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Good morning",
                    "text_color": "#FFFFFFE5",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:goodnight",
                "source": "remote",
                "daily_start_hour": 19.5,
                "daily_end_hour": 24,
                "caption": {
                    "background": {
                        "colors": [
                            "#370C6F",
                            "#575CD4"
                        ]
                    },
                    "icon": {
                        "data": "🌙",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Goodnight",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ootd",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFFFFF",
                            "#DBDBDB"
                        ]
                    },
                    "icon": {
                        "data": "🕶",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "OOTD",
                    "text_color": "#101010E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:miss_you",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#EC0C00",
                            "#FF493F"
                        ]
                    },
                    "icon": {
                        "data": "🥰",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Miss you",
                    "text_color": "#FFFFFFDB",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🎨 Locket Gold Ultimate",
        "items": [
            {
                "overlay_id": "caption:locket_gold_ultimate",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#B8E7FF",
                            "#A8F5D0",
                            "#DCCBFF"
                        ]
                    },
                    "max_lines": 1,
                    "text": "💛 Locket Gold Ultimate",
                    "text_color": "#183153",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:feeling_cute",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F8BBD0",
                            "#E91E63"
                        ]
                    },
                    "icon": {
                        "data": "🌷",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Feeling Cute",
                    "localized_text": {
                        "en": "Feeling Cute",
                        "vn": "Cảm thấy dthw"
                    },
                    "text_color": "#FFFFFFE5",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:cu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFD6A5",
                            "#FFF1A8",
                            "#FFC4D6"
                        ]
                    },
                    "max_lines": 1,
                    "text": "Cu 🐎",
                    "text_color": "#633B24",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:wedding_time",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFE4E1",
                            "#E73C7E"
                        ]
                    },
                    "icon": {
                        "data": "💍",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Wedding Time!",
                    "localized_text": {
                        "en": "Wedding Time!",
                        "vn": "Đám cưới nè!"
                    },
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:cam_thay_hanh_phuc",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#EC407A",
                            "#F8BBD0"
                        ]
                    },
                    "icon": {
                        "data": "🇻🇳",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Cảm thấy hạnh phúc",
                    "localized_text": {
                        "en": "Feeling Happy",
                        "vn": "Cảm thấy hạnh phúc"
                    },
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:coffee_time",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#4E342E",
                            "#8D6E63"
                        ]
                    },
                    "icon": {
                        "data": "☕",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Coffee Time!",
                    "localized_text": {
                        "en": "Coffee Time!",
                        "vn": "Giờ uống cà phê!"
                    },
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:snake_vibes",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2E7D32",
                            "#66BB6A"
                        ]
                    },
                    "icon": {
                        "data": "🐍",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Snake Vibes",
                    "localized_text": {
                        "en": "Snake Vibes",
                        "vn": "Chất rắn"
                    },
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:mixue_time",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFF9C4",
                            "#F8BBD0"
                        ]
                    },
                    "icon": {
                        "data": "🍦",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Mixue Time!",
                    "localized_text": {
                        "en": "Mixue Time!",
                        "vn": "Giờ Mixue!"
                    },
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:locket_time",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#ECEFF1",
                            "#B3E5FC"
                        ]
                    },
                    "icon": {
                        "data": "📷",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Locket Time!",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:cinema_time",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#1A237E",
                            "#455A64"
                        ]
                    },
                    "icon": {
                        "data": "🎬",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Cinema Time!",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:dating_time",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#E91E63",
                            "#F44336"
                        ]
                    },
                    "icon": {
                        "data": "💕",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Dating Time!",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:graduation_day",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#1A237E",
                            "#283593"
                        ]
                    },
                    "icon": {
                        "data": "🎓",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Happy Graduation Day!",
                    "localized_text": {
                        "en": "Happy Graduation Day!",
                        "vn": "Chúc mừng tốt nghiệp!"
                    },
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:shopping_time",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#B3E5FC",
                            "#FFFFFF"
                        ]
                    },
                    "icon": {
                        "data": "🛍️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Shopping Time!",
                    "localized_text": {
                        "en": "Shopping Time!",
                        "vn": "Giờ mua sắm!"
                    },
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:dinner_time",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFCCBC",
                            "#FF8A80"
                        ]
                    },
                    "icon": {
                        "data": "🍽️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Dinner Time!",
                    "localized_text": {
                        "en": "Dinner Time!",
                        "vn": "Giờ ăn tối!"
                    },
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:chilling_time",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#E1BEE7",
                            "#F8BBD0"
                        ]
                    },
                    "icon": {
                        "data": "🌴",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Chilling Time!",
                    "localized_text": {
                        "en": "Chilling Time!",
                        "vn": "Giờ thư giãn!"
                    },
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🌸 Độc lạ",
        "items": [
            {
                "overlay_id": "caption:xin_vinh_biet_cu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#232526",
                            "#414345"
                        ]
                    },
                    "icon": {
                        "data": "🕯️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Xin vĩnh biệt cụ",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:chay_ngay_di",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#D31027",
                            "#EA384D"
                        ]
                    },
                    "icon": {
                        "data": "🏃💨",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Chạy ngay đi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:cu_tu_tu_khoai_se_nhu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#56AB2F",
                            "#A8E063"
                        ]
                    },
                    "icon": {
                        "data": "🥔",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Cứ từ từ khoai sẽ nhừ",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:kiem_tra_nhan_pham",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#654EA3",
                            "#EAAFC8"
                        ]
                    },
                    "icon": {
                        "data": "🎲",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Kiểm tra nhân phẩm",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:doc_so_tai_khoan",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#1E90FF",
                            "#00D4FF"
                        ]
                    },
                    "icon": {
                        "data": "💳",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "đọc số tài khoản",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ai_so_thi_di_ve",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#B71C1C",
                            "#FF5722"
                        ]
                    },
                    "icon": {
                        "data": "🏃",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "ai sợ thì đi về",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:con_cai_nit",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#D7CCC8",
                            "#8D6E63"
                        ]
                    },
                    "icon": {
                        "data": "🧶",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "còn cái nịt",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:canh_bao_co_hat",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#9C27B0",
                            "#E91E63"
                        ]
                    },
                    "icon": {
                        "data": "🎤",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "cảnh báo có hát",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:than_chua_ma_don",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#607D8B",
                            "#37474F"
                        ]
                    },
                    "icon": {
                        "data": "😔",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Thân chưa mà dỡn",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ai_muon",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#E91E63",
                            "#F44336"
                        ]
                    },
                    "icon": {
                        "data": "🤔",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ai mượn?",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:hay_ra_de_qua_a",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFF59D",
                            "#80DEEA"
                        ]
                    },
                    "icon": {
                        "data": "🥺",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Hay ra dẻ quá à!",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:giam_suc_manh_con_tuong",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#4CAF50",
                            "#00BCD4"
                        ]
                    },
                    "icon": {
                        "data": "🎮",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Giảm sức mạnh con tướng",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:mac_co_qua_hai_oi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFB74D",
                            "#F8BBD0"
                        ]
                    },
                    "icon": {
                        "data": "😭",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Mắc cỡ quá hai ơi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:minh_la_lop",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#263238",
                            "#455A64"
                        ]
                    },
                    "icon": {
                        "data": "🛞",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Mình là lốp",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:dep_trai_co_gi_sai",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF5722",
                            "#FFC107"
                        ]
                    },
                    "icon": {
                        "data": "😎",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đẹp trai có gì sai",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:mong_ton_hoa_sen",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#D8B4E2",
                            "#F8BBD0"
                        ]
                    },
                    "icon": {
                        "data": "🪷",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Mong tôn hoa sen thấy cảnh này",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:dam_nhau_khong",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#E53935",
                            "#FF7043"
                        ]
                    },
                    "icon": {
                        "data": "🥊",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "đấm nhau không",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:sieu_cap_ba_khi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#EC407A",
                            "#F44336"
                        ]
                    },
                    "icon": {
                        "data": "🐉",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "siêu cấp bá khí",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:du_an_ma",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#263238",
                            "#455A64"
                        ]
                    },
                    "icon": {
                        "data": "👻",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "dự án ma",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:doi_roi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF5F6D",
                            "#FFC371"
                        ]
                    },
                    "icon": {
                        "data": "😤",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Dỗi rồi",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:dang_ban_tuong_tu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#1A2980",
                            "#26D0CE"
                        ]
                    },
                    "icon": {
                        "data": "💭",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đang bận tương tư",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:mo_hon_nhung_tam_hien",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFB75E",
                            "#ED8F03"
                        ]
                    },
                    "icon": {
                        "data": "🐤",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Mỏ hỗn nhưng tâm hiền",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:muon_duoc_om",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF9A9E",
                            "#FECFEF"
                        ]
                    },
                    "icon": {
                        "data": "🫂",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Muốn được ôm",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🌸 Trend TikTok",
        "items": [
            {
                "overlay_id": "caption:hoi_chieu_troi_mua",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#546E7A",
                            "#263238"
                        ]
                    },
                    "icon": {
                        "data": "🌧️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Hồi chiều trời mưa...",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:con_vien_la_lan",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#12C2E9",
                            "#F64F59"
                        ]
                    },
                    "icon": {
                        "data": "🍂",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "côn viên lá làn",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:tuyet_doi_khong_nghe",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF416C",
                            "#FF4B2B"
                        ]
                    },
                    "icon": {
                        "data": "🙉",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tuyệt đối không nghe",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:flex_den_hoi_tho_cuoi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F7971E",
                            "#FFD200"
                        ]
                    },
                    "icon": {
                        "data": "💎",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Flex đến hơi thở cuối",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:overthinking_vai_chuong",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2C3E50",
                            "#4CA1AF"
                        ]
                    },
                    "icon": {
                        "data": "🤯",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Overthinking vai chưởng",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:chan_bo_may_di",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#870000",
                            "#190A05"
                        ]
                    },
                    "icon": {
                        "data": "🙄",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Chan bố mày đi",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:oach_xa_lach",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#11998E",
                            "#38EF7D"
                        ]
                    },
                    "icon": {
                        "data": "🥬",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "oách xà lách",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ua_alo",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#8E2DE2",
                            "#4A00E0"
                        ]
                    },
                    "icon": {
                        "data": "📞",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ủa alo",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ke_chuyen_nghe_choi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#8A2387",
                            "#E94057"
                        ]
                    },
                    "icon": {
                        "data": "🍿",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Kể chuyện nghe chơi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:hom_nay_toi_buon",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#141E30",
                            "#243B55"
                        ]
                    },
                    "icon": {
                        "data": "🥀",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "hôm nay tôi buồn",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:xinh_dep_tuyet_voi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FC5C7D",
                            "#6A82FB"
                        ]
                    },
                    "icon": {
                        "data": "💅",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Xinh đẹp tuyệt vời",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:tram_cam_nhe",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#1F1C2C",
                            "#928DAB"
                        ]
                    },
                    "icon": {
                        "data": "🫠",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Trầm cảm nhẹ",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:chua_du_wow",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF5349",
                            "#EB0C00"
                        ]
                    },
                    "icon": {
                        "data": "⭐",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Chưa đủ wow",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:boc_trung_sit_rit",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#9C27B0",
                            "#7B1FA2"
                        ]
                    },
                    "icon": {
                        "data": "🎁",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Bóc trúng sít rịt",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:hen_lam_moi_xui_duoc_vay_a",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#00BCD4",
                            "#0097A7"
                        ]
                    },
                    "icon": {
                        "data": "😅",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Hèn lắm mới xui được vậy á",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ra_duong_ne_moi_anh",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2196F3",
                            "#1976D2"
                        ]
                    },
                    "icon": {
                        "data": "👤",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ra đường nể mỗi anh",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:cung_cung_di",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFC107",
                            "#FFA000"
                        ]
                    },
                    "icon": {
                        "data": "🚀",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Cũng cứng đi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:tuyet_doi_dien_anh",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#455A64",
                            "#263238"
                        ]
                    },
                    "icon": {
                        "data": "📷",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tuyệt đối điện ảnh",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:du_ba_khi_chua",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF5722",
                            "#E64A19"
                        ]
                    },
                    "icon": {
                        "data": "⚡",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đủ bá khí chưa",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ua_alo",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#9C27B0",
                            "#7B1FA2"
                        ]
                    },
                    "icon": {
                        "data": "❓",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ủa alo?",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:cai_gi_vay_troi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F44336",
                            "#D32F2F"
                        ]
                    },
                    "icon": {
                        "data": "❗",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Cái gì vậy trời",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:nay_la_het_cuu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#607D8B",
                            "#455A64"
                        ]
                    },
                    "icon": {
                        "data": "❌",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Này là hết cứu",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:qua_la_dien_anh",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#26A69A",
                            "#00897B"
                        ]
                    },
                    "icon": {
                        "data": "📷",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Quá là điện ảnh",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "Gen Z Life 🩻",
        "items": [
            {
                "overlay_id": "caption:hao_han",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#114357",
                            "#F29492"
                        ]
                    },
                    "icon": {
                        "data": "🗡️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Hảo hán",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:cam_lanh",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2193B0",
                            "#6DD5ED"
                        ]
                    },
                    "icon": {
                        "data": "🤧",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Cảm lạnh",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:bat_luc",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2C3E50",
                            "#3498DB"
                        ]
                    },
                    "icon": {
                        "data": "🏳️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Bất lực",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:xin_lui_duoc_chua",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F6D365",
                            "#FDA085"
                        ]
                    },
                    "icon": {
                        "data": "🥺",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Xin lũi được chưa",
                    "text_color": "#000000",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:rot_nuoc_mat",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#1CB5E0",
                            "#000046"
                        ]
                    },
                    "icon": {
                        "data": "😭",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Rớt nước mắt",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:guc_nga",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#3A1C71",
                            "#D76D77"
                        ]
                    },
                    "icon": {
                        "data": "📉",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Gục ngã",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:tien_dinh",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#C33764",
                            "#1D2671"
                        ]
                    },
                    "icon": {
                        "data": "🌪️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tiền đình",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:che_manh",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF4E50",
                            "#F9D423"
                        ]
                    },
                    "icon": {
                        "data": "👎",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Chê mạnh",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:xinh_gai_an_phim_1",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F77062",
                            "#FE5196"
                        ]
                    },
                    "icon": {
                        "data": "💅",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Xinh gái ấn phím 1",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:di_lam_vi_dam_me",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FDC830",
                            "#F37335"
                        ]
                    },
                    "icon": {
                        "data": "🤡",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đi làm vì đam mê",
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🌸 Meme vui nhộn",
        "items": [
            {
                "overlay_id": "caption:cuoi_xiu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFEB3B",
                            "#FF9800"
                        ]
                    },
                    "icon": {
                        "data": "😎",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Cười xỉu",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:toang_that_roi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F44336",
                            "#B71C1C"
                        ]
                    },
                    "icon": {
                        "data": "🐉",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Toang thật rồi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:toi_roi_toi_roi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#673AB7",
                            "#512DA8"
                        ]
                    },
                    "icon": {
                        "data": "❗",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tới rồi tới rồi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:khong_the_tin_noi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#00BCD4",
                            "#0097A7"
                        ]
                    },
                    "icon": {
                        "data": "❓",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Không thể tin nổi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🌸 Đời sống",
        "items": [
            {
                "overlay_id": "caption:ngay_moi_vui_ve",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#4CAF50",
                            "#2E7D32"
                        ]
                    },
                    "icon": {
                        "data": "☀️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ngày mới vui vẻ",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ngu_ngon",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#3F51B5",
                            "#1A237E"
                        ]
                    },
                    "icon": {
                        "data": "🌙",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ngủ ngon",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:an_com_chua",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF9800",
                            "#F57C00"
                        ]
                    },
                    "icon": {
                        "data": "🍽️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ăn cơm chưa?",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:di_choi_khong",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#E91E63",
                            "#C2185B"
                        ]
                    },
                    "icon": {
                        "data": "✈️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đi chơi không?",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🌸 Gen Z Slay",
        "items": [
            {
                "overlay_id": "caption:tinh_hoa_hoi_tu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFD700",
                            "#FF8C00"
                        ]
                    },
                    "icon": {
                        "data": "✨",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tinh hoa hội tụ",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:phu_tinh_khong_phu_ban",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#8E2DE2",
                            "#4A00E0"
                        ]
                    },
                    "icon": {
                        "data": "🕶️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Phụ tình không phụ bản",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ngoan_xinh_yeu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFAFBD",
                            "#FFC3A0"
                        ]
                    },
                    "icon": {
                        "data": "🌸",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ngoan xinh yêu của ai?",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:nhin_la_biet_uy_tin",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2980B9",
                            "#2C3E50"
                        ]
                    },
                    "icon": {
                        "data": "👌",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Nhìn là biết uy tín",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🌸 Bất ổn & Khó đỡ",
        "items": [
            {
                "overlay_id": "caption:luon_vui_tuoi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#00F2FE",
                            "#4FACFE"
                        ]
                    },
                    "icon": {
                        "data": "🤡",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Luôn vui tươi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:bat_on_that_su",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#636363",
                            "#A2AB58"
                        ]
                    },
                    "icon": {
                        "data": "🫠",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Bất ổn thật sự",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:khong_cam_xuc",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#434343",
                            "#000000"
                        ]
                    },
                    "icon": {
                        "data": "🗿",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Không cảm xúc",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:phu_huynh_dung_xem",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF0844",
                            "#FFB199"
                        ]
                    },
                    "icon": {
                        "data": "🙈",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Phụ huynh đừng xem",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🌸 Check VAR & Hóng hớt",
        "items": [
            {
                "overlay_id": "caption:check_var",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#11998E",
                            "#38EF7D"
                        ]
                    },
                    "icon": {
                        "data": "📺",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Check VAR liền",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:qua_nhieu_su_de_thuong",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F38181",
                            "#FCE38A"
                        ]
                    },
                    "icon": {
                        "data": "🎀",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Quá nhiều sự dễ thương",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:mac_bay_tinh_yeu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#EE9CA7",
                            "#FFDDE1"
                        ]
                    },
                    "icon": {
                        "data": "💘",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Mắc bẫy tình yêu",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:song_gio_phu_doi_trai",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#3A1C71",
                            "#D76D77"
                        ]
                    },
                    "icon": {
                        "data": "🌪️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Sóng gió phủ đời trai",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🌸 Góc Deadline & Đi Làm",
        "items": [
            {
                "overlay_id": "caption:deadline_ruot",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#ED213A",
                            "#93291E"
                        ]
                    },
                    "icon": {
                        "data": "🔥",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Deadline dí tụt quần",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:tien_dau_ma_tieu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#11998E",
                            "#38EF7D"
                        ]
                    },
                    "icon": {
                        "data": "💸",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tiền đâu mà tiêu",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:nghien_cuu_khoa_hoc",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#0F2027",
                            "#2C5364"
                        ]
                    },
                    "icon": {
                        "data": "☕",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Cần nạp cafein gấp",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "🔥 Hot Trend 2026",
        "items": [
            {
                "overlay_id": "caption:trend_tuyet_oi_ien_anh_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#0F2027",
                            "#2C5364",
                            "#D4AF37"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_cinema_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🎬",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tuyệt đối điện ảnh",
                    "localized_text": {
                        "en": "Tuyệt đối điện ảnh",
                        "vn": "Tuyệt đối điện ảnh"
                    },
                    "text_color": "#F4E285",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_inh_noc_kich_tran_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF416C",
                            "#FF4B2B",
                            "#FFE600"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_galaxy_night_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🔥",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đỉnh nóc kịch trần",
                    "localized_text": {
                        "en": "Đỉnh nóc kịch trần",
                        "vn": "Đỉnh nóc kịch trần"
                    },
                    "text_color": "#FF758F",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_ting_ting_50_000_000_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F7971E",
                            "#FFD200",
                            "#FFEAA7"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_money_gold_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "💸",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ting ting! +50.000.000đ",
                    "localized_text": {
                        "en": "Ting ting! +50.000.000đ",
                        "vn": "Ting ting! +50.000.000đ"
                    },
                    "text_color": "#7BF1A8",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_aura_10_000_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#8A2387",
                            "#E94057",
                            "#F27121"
                        ]
                    },
                    "icon": {
                        "data": "⚡",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Aura +10.000",
                    "localized_text": {
                        "en": "Aura +10.000",
                        "vn": "Aura +10.000"
                    },
                    "text_color": "#E0AAFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_tam_bat_bien_giua_dong_oi_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#134E5E",
                            "#71B280",
                            "#C8E6C9"
                        ]
                    },
                    "icon": {
                        "data": "🧘‍♂️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tâm bất biến giữa dòng đời",
                    "localized_text": {
                        "en": "Tâm bất biến giữa dòng đời",
                        "vn": "Tâm bất biến giữa dòng đời"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_ang_ban_kiem_tien_ty_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#141E30",
                            "#243B55",
                            "#FFD700"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_money_gold_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🚀",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đang bận kiếm tiền tỷ",
                    "localized_text": {
                        "en": "Đang bận kiếm tiền tỷ",
                        "vn": "Đang bận kiếm tiền tỷ"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_ang_cap_la_mai_mai_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#000000",
                            "#434343",
                            "#8E9EAB"
                        ]
                    },
                    "icon": {
                        "data": "🕶️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đẳng cấp là mãi mãi",
                    "localized_text": {
                        "en": "Đẳng cấp là mãi mãi",
                        "vn": "Đẳng cấp là mãi mãi"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_ca_phe_en_khong_uong_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#24140E",
                            "#4B2519",
                            "#8B5A2B"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_coffee_chill_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "☕",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Cà phê đen không đường",
                    "localized_text": {
                        "en": "Cà phê đen không đường",
                        "vn": "Cà phê đen không đường"
                    },
                    "text_color": "#F3D5B5",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_ganh_team_cong_ca_lung_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#4776E6",
                            "#8E54E9",
                            "#00F2FE"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_gaming_neon_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🎮",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Gánh team còng cả lưng",
                    "localized_text": {
                        "en": "Gánh team còng cả lưng",
                        "vn": "Gánh team còng cả lưng"
                    },
                    "text_color": "#00BBF9",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_mien_tiep_chuyen_xam_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#EB3349",
                            "#F45C43",
                            "#D31027"
                        ]
                    },
                    "icon": {
                        "data": "🛑",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Miễn tiếp chuyện xàm",
                    "localized_text": {
                        "en": "Miễn tiếp chuyện xàm",
                        "vn": "Miễn tiếp chuyện xàm"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_o_body_chu_khong_o_tinh_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#1F1C18",
                            "#8E0E00",
                            "#1F1C18"
                        ]
                    },
                    "icon": {
                        "data": "🏋️‍♂️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Độ body chứ không độ tình",
                    "localized_text": {
                        "en": "Độ body chứ không độ tình",
                        "vn": "Độ body chứ không độ tình"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_he_tu_tuong_oc_lap_tu_do_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2E0854",
                            "#6A0572",
                            "#AB83A1"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_galaxy_night_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🌌",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Hệ tư tưởng độc lập tự do",
                    "localized_text": {
                        "en": "Hệ tư tưởng độc lập tự do",
                        "vn": "Hệ tư tưởng độc lập tự do"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_quet_the_khong_nhin_gia_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#232526",
                            "#414345",
                            "#F39C12"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_money_gold_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "💳",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Quẹt thẻ không nhìn giá",
                    "localized_text": {
                        "en": "Quẹt thẻ không nhìn giá",
                        "vn": "Quẹt thẻ không nhìn giá"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_nhac_len_la_quen_het_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#5F0A87",
                            "#A4508B",
                            "#FF867A"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_lofi_music_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🎧",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Nhạc lên là quên hết",
                    "localized_text": {
                        "en": "Nhạc lên là quên hết",
                        "vn": "Nhạc lên là quên hết"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_tra_sua_chua_lanh_tam_hon_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FFB6C1",
                            "#FFA07A",
                            "#FFE4E1"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_boba_sweet_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🧋",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Trà sữa chữa lành tâm hồn",
                    "localized_text": {
                        "en": "Trà sữa chữa lành tâm hồn",
                        "vn": "Trà sữa chữa lành tâm hồn"
                    },
                    "text_color": "#FFC8DD",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_toi_nay_i_luon_pho_khong_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#16A085",
                            "#F4D03F",
                            "#E67E22"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/street_night_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🛵",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tối nay đi lượn phố không?",
                    "localized_text": {
                        "en": "Tối nay đi lượn phố không?",
                        "vn": "Tối nay đi lượn phố không?"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_ang_sac_lai_nhan_pham_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#0F2027",
                            "#2C5364",
                            "#00FF87"
                        ]
                    },
                    "icon": {
                        "data": "💤",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đang sạc lại nhân phẩm",
                    "localized_text": {
                        "en": "Đang sạc lại nhân phẩm",
                        "vn": "Đang sạc lại nhân phẩm"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_lowkey_nhung_chat_luong_cao_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2C3E50",
                            "#3498DB",
                            "#F1C40F"
                        ]
                    },
                    "icon": {
                        "data": "👑",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Lowkey nhưng chất lượng cao",
                    "localized_text": {
                        "en": "Lowkey nhưng chất lượng cao",
                        "vn": "Lowkey nhưng chất lượng cao"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_oi_bung_qua_cuu_voi_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F12711",
                            "#F5AF19",
                            "#FFE600"
                        ]
                    },
                    "icon": {
                        "data": "🍜",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đói bụng quá cứu với",
                    "localized_text": {
                        "en": "Đói bụng quá cứu với",
                        "vn": "Đói bụng quá cứu với"
                    },
                    "text_color": "#232526",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_muon_i_tron_o_mot_noi_xa_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2193B0",
                            "#6DD5ED",
                            "#E0F7FA"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_ocean_wave_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🏖️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Muốn đi trốn ở một nơi xa",
                    "localized_text": {
                        "en": "Muốn đi trốn ở một nơi xa",
                        "vn": "Muốn đi trốn ở một nơi xa"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_co_phieu_tim_lim_tim_sim_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#4A00E0",
                            "#8E2DE2",
                            "#DA70D6"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_money_gold_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "📈",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Cổ phiếu tím lịm tìm sim",
                    "localized_text": {
                        "en": "Cổ phiếu tím lịm tìm sim",
                        "vn": "Cổ phiếu tím lịm tìm sim"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_khong_noi_nhieu_len_xe_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#B24592",
                            "#F15F79",
                            "#FF9966"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/street_night_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🏎️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Không nói nhiều, lên xe!",
                    "localized_text": {
                        "en": "Không nói nhiều, lên xe!",
                        "vn": "Không nói nhiều, lên xe!"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_hoang_thuong_gia_lam_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2B1055",
                            "#7597DE",
                            "#FAD0C4"
                        ],
                        "image": {
                            "type": "image",
                            "data": "https://raw.githubusercontent.com/tkhoi8450/shadowrocket-scripts/refs/heads/main/images/bg_cat_boss_v4.png",
                            "source": "url"
                        }
                    },
                    "icon": {
                        "data": "🐱",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Hoàng thượng giá lâm",
                    "localized_text": {
                        "en": "Hoàng thượng giá lâm",
                        "vn": "Hoàng thượng giá lâm"
                    },
                    "text_color": "#FEE440",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:trend_vibe_hom_nay_10_iem_khong_co_nhung_v4",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF007F",
                            "#7928CA",
                            "#FF0080"
                        ]
                    },
                    "icon": {
                        "data": "✨",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Vibe hôm nay: 10 điểm không có nhưng",
                    "localized_text": {
                        "en": "Vibe hôm nay: 10 điểm không có nhưng",
                        "vn": "Vibe hôm nay: 10 điểm không có nhưng"
                    },
                    "text_color": "#FFFFFF",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "In Love 💘",
        "items": [
            {
                "overlay_id": "caption:love_miss_you",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF758C",
                            "#FF7EB3"
                        ]
                    },
                    "icon": {
                        "data": "🥰",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Miss you",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:love_doi_roi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF416C",
                            "#FF4B2B"
                        ]
                    },
                    "icon": {
                        "data": "😤",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Dỗi rồi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:love_dang_ban_tuong_tu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#A18CD1",
                            "#FBC2EB"
                        ]
                    },
                    "icon": {
                        "data": "💭",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đang bận tương tư",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:love_rep_tin_nhan",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#4FACFE",
                            "#00F2FE"
                        ]
                    },
                    "icon": {
                        "data": "📩",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Rep tin nhắn đi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:love_mo_hon_tam_hien",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FEE140",
                            "#FA709A"
                        ]
                    },
                    "icon": {
                        "data": "🐤",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Mỏ hỗn nhưng tâm hiền",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:love_muon_duoc_om",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F093FB",
                            "#F5576C"
                        ]
                    },
                    "icon": {
                        "data": "🫂",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Muốn được ôm",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:love_hoi_bi_nho",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#89F7FE",
                            "#66A6FF"
                        ]
                    },
                    "icon": {
                        "data": "🤏",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Hơi bị nhớ",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:love_dang_ghen",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#ED213A",
                            "#93291E"
                        ]
                    },
                    "icon": {
                        "data": "🔥",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đang ghen",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:love_ngu_ngon_mo_em",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#0F2027",
                            "#2C5364"
                        ]
                    },
                    "icon": {
                        "data": "🌌",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ngủ ngon giấc mơ có em",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            }
        ]
    },
    {
        "section": "Wordsmith 📖",
        "items": [
            {
                "overlay_id": "caption:ws_yeuu_emm",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF758C",
                            "#FF7EB3"
                        ]
                    },
                    "icon": {
                        "data": "💖",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Yeuu Emm",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_yeuu_anhh",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#0052D4",
                            "#4364F7"
                        ]
                    },
                    "icon": {
                        "data": "💙",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Yeuu Anhh",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_hoi_chieu_troi_mua",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#3A7BD5",
                            "#3A6073"
                        ]
                    },
                    "icon": {
                        "data": "🌧️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Hồi chiều trời mưa",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_con_vien_la_lan",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F3904F",
                            "#3B4371"
                        ]
                    },
                    "icon": {
                        "data": "🍂",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "côn viên lá làn",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_aiiii_hoiiii",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F8BBD0",
                            "#E91E63"
                        ]
                    },
                    "icon": {
                        "data": "🐽",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "aiiii hoiiii ?",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_tai_ong_de_ngoai_dau",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF416C",
                            "#FF4B2B"
                        ]
                    },
                    "icon": {
                        "data": "👂",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Tai ông để ngoài đầu à",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_chan_bo_may_di",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#232526",
                            "#414345"
                        ]
                    },
                    "icon": {
                        "data": "🙄",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Chan bố mày đi",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_oach_xa_lach",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#11998E",
                            "#38EF7D"
                        ]
                    },
                    "icon": {
                        "data": "🥬",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "oách xà lách",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_e_he",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FEE140",
                            "#FA709A"
                        ]
                    },
                    "icon": {
                        "data": "🤭",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "è hé",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_ua_alo",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F12711",
                            "#F5AF19"
                        ]
                    },
                    "icon": {
                        "data": "📞",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ủa alo",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_may_chu_la_du_du",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#134E5E",
                            "#71B280"
                        ]
                    },
                    "icon": {
                        "data": "🍃",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Máy chủ lá đu đủ",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_lanh_thay_me",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#00B4DB",
                            "#0083B0"
                        ]
                    },
                    "icon": {
                        "data": "🥶",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "lạnh thấy mẹ",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_day_la_cai_viec",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#654EA3",
                            "#EAAFC8"
                        ]
                    },
                    "icon": {
                        "data": "🤷‍♂️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đấy Là Cái Việc",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_dep_trai_an_phim_2",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#00C6FF",
                            "#0072FF"
                        ]
                    },
                    "icon": {
                        "data": "📱",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đẹp trai ấn phím 2",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_nho_anh_ch",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F6D365",
                            "#FDA085"
                        ]
                    },
                    "icon": {
                        "data": "🥺",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Nho anh ch?",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_bien_oi_huuuuuu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2193B0",
                            "#6DD5ED"
                        ]
                    },
                    "icon": {
                        "data": "🌊",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Biển ơi húuuuuuu",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_yeu_me",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF416C",
                            "#FF4B2B"
                        ]
                    },
                    "icon": {
                        "data": "❤️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Yêu Mẹ",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_nho_ngy",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#434343",
                            "#000000"
                        ]
                    },
                    "icon": {
                        "data": "💔",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "nhớ ngy",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_oan_ta_la_van",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#8E2DE2",
                            "#4A00E0"
                        ]
                    },
                    "icon": {
                        "data": "🌀",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Oằn tà là vằn",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_kha_nang_cao",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#4B6CB7",
                            "#182848"
                        ]
                    },
                    "icon": {
                        "data": "🤔",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Khả Năng Cao",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_o_qua_kieu",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F77062",
                            "#FE5196"
                        ]
                    },
                    "icon": {
                        "data": "💅",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "ơ quá kiêu",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_lanh_nho_ai",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2980B9",
                            "#6DD5FA"
                        ]
                    },
                    "icon": {
                        "data": "❄️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "lạnh nhớ ai",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_dung_nhang_nhit",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#CB356B",
                            "#BD3F32"
                        ]
                    },
                    "icon": {
                        "data": "🙅‍♂️",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đừng nhăng nhít",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_hom_nay_toi_buon",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2C3E50",
                            "#000000"
                        ]
                    },
                    "icon": {
                        "data": "🥀",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "hôm nay tôi buồn",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_gap_nhau_cai_nhi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F2994A",
                            "#F2C94C"
                        ]
                    },
                    "icon": {
                        "data": "🍻",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "gặp nhau cái nhỉ",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_ank_iu_eim",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF758C",
                            "#FF7EB3"
                        ]
                    },
                    "icon": {
                        "data": "🥰",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "ank iu eim",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_mong_ton_hoa_sen",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F3904F",
                            "#3B4371"
                        ]
                    },
                    "icon": {
                        "data": "🪷",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Mong tôn hoa sen thấy cảnh này",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_dam_nhau_khong",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#ED213A",
                            "#93291E"
                        ]
                    },
                    "icon": {
                        "data": "🥊",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "đấm nhau không",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_sieu_cap_ba_khi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF8008",
                            "#FFC837"
                        ]
                    },
                    "icon": {
                        "data": "🐉",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "siêu cấp bá khí",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_du_an_ma",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#0F2027",
                            "#2C5364"
                        ]
                    },
                    "icon": {
                        "data": "👻",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "dự án ma",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_doc_so_tai_khoan",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#11998E",
                            "#38EF7D"
                        ]
                    },
                    "icon": {
                        "data": "💳",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "đọc số tài khoản",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_ai_so_thi_di_ve",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#1F1C2C",
                            "#928DAB"
                        ]
                    },
                    "icon": {
                        "data": "🚶",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "ai sợ thì đi về",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_con_cai_nit",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#8E2DE2",
                            "#4A00E0"
                        ]
                    },
                    "icon": {
                        "data": "🧶",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "còn cái nịt",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_canh_bao_co_hat",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#FF512F",
                            "#DD2476"
                        ]
                    },
                    "icon": {
                        "data": "🎤",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "cảnh báo có hát",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_than_chua_ma_don",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#232526",
                            "#414345"
                        ]
                    },
                    "icon": {
                        "data": "😒",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Thân chưa mà dỡn",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_ai_muon",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#CB356B",
                            "#BD3F32"
                        ]
                    },
                    "icon": {
                        "data": "🤨",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Ai mượn?",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_hay_ra_de_qua_a",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F12711",
                            "#F5AF19"
                        ]
                    },
                    "icon": {
                        "data": "🙄",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Hay ra dẻ quá à!",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_giam_suc_manh",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#00B4DB",
                            "#0083B0"
                        ]
                    },
                    "icon": {
                        "data": "🎮",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Giảm sức mạnh con tướng này",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_mac_co_qua_hai_oi",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#F6D365",
                            "#FDA085"
                        ]
                    },
                    "icon": {
                        "data": "🫣",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Mắc cỡ quá hai ơi",
                    "text_color": "#000000E6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_minh_la_lop",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#2C3E50",
                            "#3498DB"
                        ]
                    },
                    "icon": {
                        "data": "🛞",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Mình là lốp",
                    "text_color": "#FFFFFFE6",
                    "type": "static_content"
                }
            },
            {
                "overlay_id": "caption:ws_dep_trai_co_gi_sai",
                "source": "remote",
                "caption": {
                    "background": {
                        "colors": [
                            "#000000",
                            "#434343"
                        ]
                    },
                    "icon": {
                        "data": "😎",
                        "type": "emoji"
                    },
                    "max_lines": 1,
                    "text": "Đẹp trai có gì sai",
                    "text_color": "#FFD700",
                    "type": "static_content"
                }
            }
        ]
    }
]
)
    });

    // Ép Firebase SDK trên iOS nhận diện bản cập nhật cấu hình mới ngay lập tức
    obj.state = "UPDATE";
    obj.templateVersion = "999999999";
}

var fbHeaders = {};
try {
    fbHeaders = Object.assign({}, ($response && $response.headers) ? $response.headers : {});
    fbHeaders["Cache-Control"] = "public, max-age=315360000, immutable";
    fbHeaders["Expires"] = "Thu, 31 Dec 2099 23:59:59 GMT";
    delete fbHeaders["Pragma"];
    delete fbHeaders["pragma"];
    delete fbHeaders["ETag"];
    delete fbHeaders["etag"];
} catch (e) {}

// Đảm bảo tuyệt đối obj luôn có state = "UPDATE" và templateVersion = "999999999" trước khi serialize
obj.state = "UPDATE";
obj.templateVersion = "999999999";

var doneObj = {
    headers: fbHeaders,
    body: JSON.stringify(obj)
};

// Đảm bảo nếu server trả 304 thì ép sang HTTP 200 OK để SDK nạp dữ liệu
try {
    if ($response && ($response.status === 304 || $response.status === "304")) {
        doneObj.status = 200;
    }
} catch (e) {}

$done(doneObj);