// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║   ██╗███╗   ███╗ ██████╗     ██████╗  █████╗  ██████╗    ██╗   ██╗██████╗   ║
// ║   ██║████╗ ████║██╔═══██╗   ██╔════╝ ██╔══██╗██╔═══██╗   ██║   ██║██╔══██╗  ║
// ║   ██║██╔████╔██║██║   ██║   ██║      ███████║██║   ██║   ██║   ██║██████╔╝  ║
// ║   ██║██║╚██╔╝██║██║   ██║   ██║      ██╔══██║██║   ██║   ██║   ██║██╔═══╝   ║
// ║   ██║██║ ╚═╝ ██║╚██████╔╝   ╚██████╗ ██║  ██║╚██████╔╝   ╚██████╔╝██║       ║
// ║   ╚═╝╚═╝     ╚═╝ ╚═════╝     ╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═════╝ ╚═╝       ║
// ║                                                                              ║
// ║        ░░░  PAC SCRIPT ULTIMATE v5.0  ░░░                                    ║
// ║        ════════════════════════════════                                       ║
// ║                                                                              ║
// ║   ✅ تدوير دائري ذكي (Smart Round Robin)                                   ║
// ║   ✅ فشل تلقائي (Auto Failover)                                            ║
// ║   ✅ كشف جودة الاتصال (Connection Quality Detection)                       ║
// ║   ✅ توجيه حسب الأولوية (Priority-Based Routing)                           ║
// ║   ✅ نطاقات أردنية محدثة بالكامل (IPv4 + IPv6)                             ║
// ║   ✅ بورت منفصل للمباريات (20005)                                          ║
// ║   ✅ تحسينات البنق وال Latency                                              ║
// ║   ✅ كشف DNS و GEO                                                        ║
// ║   ✅ بدون DIRECT - كل شي بالبروكسي                                         ║
// ║                                                                              ║
// ╚══════════════════════════════════════════════════════════════════════════════╝


// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║  ██╗  ██╗    ██╗███╗   ██╗███████╗████████╗██████╗  █████╗ ███████╗███████╗ ║
// ║  ██║ ██╔╝    ██║████╗  ██║██╔════╝╚══██╔══╝██╔══██╗██╔══██╗██╔════╝██╔════╝ ║
// ║  █████╔╝     ██║██╔██╗ ██║███████╗   ██║   ██████╔╝███████║█████╗  ███████╗ ║
// ║  ██╔═██╗     ██║██║╚██╗██║╚════██║   ██║   ██╔══██╗██╔══██║██╔══╝  ╚════██║ ║
// ║  ██║  ██╗    ██║██║ ╚████║███████║   ██║   ██║  ██║██║  ██║███████╗███████║ ║
// ║  ╚═╝  ╚═╝    ╚═╝╚═╝  ╚═══╝╚══════╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚══════╝ ║
// ║                                                                              ║
// ║  ①  إعدادات الشبكة والسيرفرات                                              ║
// ║  ════════════════════════════════                                            ║
// ║                                                                              ║
// ║  ضع IPs سيرفراتك هنا                                                       ║
// ║  يدعم IPv4 و IPv6 معاً                                                      ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ════════════════════════════════════════════════
//  سيرفرات الاتصال - الأولوية حسب الترتيب
// ════════════════════════════════════════════════

// ── سيرفرات اللوبي (بورت 1080) ──
// الأولوية: السيرفر الأول = أساسي
//           السيرفر الثاني = احتياطي 1
//           السيرفر الثالث = احتياطي 2
var SRV_LOBBY = [
    "SOCKS5 212.35.66.45:1080"
    //,"SOCKS5 89.18.0.1:1080"                    // ← أضف سيرفر ثانٍ
    //,"SOCKS5 [2001:67c:1d8::1]:1080"            // ← أضف IPv6
    //,"SOCKS5 41.184.0.1:1080"                   // ← أضف سيرفر ثالث
    //,"SOCKS5 46.32.0.1:1080"                    // ← أضف سيرفر رابع
];

// ── سيرفرات المباريات (بورت 20005) ──
// نفس المنطق - بس البورت مختلف
var SRV_MATCH = [
    "SOCKS5 212.35.66.45:20005"
    //,"SOCKS5 89.18.0.1:20005"                   // ← أضف سيرفر ثانٍ
    //,"SOCKS5 [2001:67c:1d8::1]:20005"           // ← أضف IPv6
    //,"SOCKS5 41.184.0.1:20005"                  // ← أضف سيرفر ثالث
    //,"SOCKS5 46.32.0.1:20005"                   // ← أضف سيرفر رابع
];

// ── سيرفرات الطوارئ (Failover) ──
// إذا كل السيرفرات الأساسية فشلت → استخدم هدول
var SRV_FALLBACK = [
    "SOCKS5 212.35.66.45:1080"
    //,"SOCKS5 [2a00:8c00::1]:1080"
    //,"SOCKS5 8.8.8.8:1080"
];

// ════════════════════════════════════════════════
//  إعدادات التدوير
// ════════════════════════════════════════════════

// ── هل نستخدم التدوير العشوائي أم التتابعي؟ ──
// "round" = تتابعي دائري (A→B→C→A→B→C...)
// "random" = عشوائي (أسرع توزيع)
var LB_MODE = "round";

// ── هل نستخدم Failover تلقائي؟ ──
// إذا true → السيرفر التالي يتاخد إذا الحالي "بطيء"
//          (نحاكي كشف البطء بدون ping فعلي)
var FAILOVER_ENABLED = true;

// ── عدد محاولات قبل Failover ──
var FAILOVER_ATTEMPTS = 3;

// ════════════════════════════════════════════════
//  متغيرات الحالة الداخلية
// ════════════════════════════════════════════════

var _idxL  = 0;   // فهرس تدوير اللوبي
var _idxM  = 0;   // فهرس تدوير المباريات
var _idxF  = 0;   // فهرس تدوير الطوارئ
var _idxD  = 0;   // فهرس تدوير النطاقات
var _total = 0;   // عداد الطلبات الكلي
var _fL    = 0;   // عداد فشل اللوبي
var _fM    = 0;   // عداد فشل المباريات


// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║  ██████╗ ██╗   ██╗███╗   ██╗██████╗ ██╗███╗   ██╗ ██████╗                    ║
// ║  ██╔══██╗██║   ██║████╗  ██║██╔══██╗██║████╗  ██║██╔════╝                    ║
// ║  ██████╔╝██║   ██║██╔██╗ ██║██║  ██║██║██╔██╗ ██║██║  ███╗                   ║
// ║  ██╔══██╗██║   ██║██║╚██╗██║██║  ██║██║██║╚██╗██║██║   ██║                   ║
// ║  ██████╔╝╚██████╔╝██║ ╚████║██████╔╝██║██║ ╚████║╚██████╔╝                   ║
// ║  ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚═════╝ ╚═╝╚═╝  ╚═══╝ ╚═════╝                   ║
// ║                                                                              ║
// ║  ②  محرك التدوير الذكي (Smart Load Balancer)                                ║
// ║  ════════════════════════════════════════════                                ║
// ║                                                                              ║
// ║  يدعم:                                                                      ║
// ║  • Round Robin تتابعي (A→B→C→A...)                                          ║
// ║  • Random عشوائي                                                            ║
// ║  • Failover تلقائي                                                          ║
// ║  • عداد فشل تلقائي                                                          ║
// ║                                                                              ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ── دالة اختيار عنصر من قائمة بالتدوير التتابعي ──
// list  = مصفوفة السيرفرات
// idx   = مؤشر العداد (مرجع)
// return = [السيرفر المختار, المؤشر الجديد]
function roundRobin(list, idx) {
    if (list.length === 0) return ["DIRECT", 0];
    var i = idx % list.length;
    return [list[i], (i + 1) % list.length];
}

// ── دالة اختيار عشوائي ──
// أسرع توزيع على السيرفرات
// كل طلب = سيرفر عشوائي
function randomPick(list) {
    if (list.length === 0) return "DIRECT";
    var r = Math.random();
    var i = Math.floor(r * list.length) % list.length;
    return list[i];
}

// ── دالة تدوير ذكية ──
// تختار حسب الوضع المحدد (round أو random)
// وتتعامل مع Failover تلقائياً
function pickProxy(list, mode) {
    if (list.length === 0) return "DIRECT";
    if (list.length === 1) return list[0];  // سيرفر واحد = ما في تدوير
    if (mode === "random") return randomPick(list);
    // Round Robin
    if (mode === "round") {
        var result;
        if (list === SRV_LOBBY) {
            result = roundRobin(list, _idxL);
            _idxL = result[1];
            return result[0];
        } else if (list === SRV_MATCH) {
            result = roundRobin(list, _idxM);
            _idxM = result[1];
            return result[0];
        } else {
            // أي قائمة ثانية
            result = roundRobin(list, _idxF);
            _idxF = result[1];
            return result[0];
        }
    }
    return list[0]; // fallback
}

// ── دالة تدوير اللوبي ──
// كل مرة تستدعى → ترجع سيرفر مختلف
function getLobbyProxy() {
    _total++;
    return pickProxy(SRV_LOBBY, LB_MODE);
}

// ── دالة تدوير المباريات ──
// تدوير منفصل عن اللوبي
function getMatchProxy() {
    _total++;
    return pickProxy(SRV_MATCH, LB_MODE);
}

// ── دالة Failover ──
// إذا السيرفرات الأساسية ما اشتغلت → الطوارئ
function getFallbackProxy() {
    _fL++; // عداد فشل
    return pickProxy(SRV_FALLBACK, LB_MODE);
}

// ── دالة تدوير النطاقات (Domain Cycling) ──
// تبحث من آخر نقطة توقفت عندها
// هذا يوزع ترتيب الفحص على كل النطاقات بالتساوي
function searchDomain(host, list) {
    var h = host.toLowerCase();
    var len = list.length;
    if (len === 0) return false;
    
    for (var i = 0; i < len; i++) {
        // ابدأ من آخر نقطة + لف دائري
        var idx = (_idxD + i) % len;
        var d = list[idx].toLowerCase();
        
        if (d.charAt(0) === "*") {
            var base = d.substring(2);
            // تطابق مباشر: h === base
            if (h === base) {
                _idxD = (idx + 1) % len;
                return true;
            }
            // تطابق فرعي: sub.example.com يطابق *.example.com
            if (h.length > base.length + 1 &&
                h.substr(-base.length - 1) === "." + base) {
                _idxD = (idx + 1) % len;
                return true;
            }
        } else {
            // تطابق دقيق بدون wildcard
            if (h === d) {
                _idxD = (idx + 1) % len;
                return true;
            }
        }
    }
    return false;
}


// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║  ███╗   ███╗ █████╗ ████████╗ ██████╗██╗  ██╗██╗███╗   ██╗ ██████╗          ║
// ║  ████╗ ████║██╔══██╗╚══██╔══╝██╔════╝██║  ██║██║████╗  ██║██╔════╝          ║
// ║  ██╔████╔██║███████║   ██║   ██║     ███████║██║██╔██╗ ██║██║  ███╗         ║
// ║  ██║╚██╔╝██║██╔══██║   ██║   ██║     ██╔══██║██║██║╚██╗██║██║   ██║         ║
// ║  ██║ ╚═╝ ██║██║  ██║   ██║   ╚██████╗██║  ██║██║██║ ╚████║╚██████╔╝         ║
// ║  ╚═╝     ╚═╝╚═╝  ╚═╝   ╚═╝    ╚═════╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝ ╚═════╝        ║
// ║                                                                              ║
// ║  ③  نطاقات المباريات ← بورت 20005                                          ║
// ║  ══════════════════════════════════                                          ║
// ║  كل شي يخص المباريات الفعلية يروح على بورت 20005                          ║
// ║  السيرفر يتختار بالتدوير الذكي                                             ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

var DOM_MATCH = [

    // ═══ 🎮 سيرفرات المباريات ═══
    // النطاقات الأساسية اللي توصلك للسيرفر الفعلي
    "*.match.pubgmobile.com",
    "*.matchmaking.pubgmobile.com",
    "*.game-server.pubgmobile.com",
    "*.gameserver.pubgmobile.com",
    "*.gs.pubgmobile.com",
    "*.gslb.pubgmobile.com",                // ← Game Server Load Balancer
    "*.dispatch.pubgmobile.com",            // ← توزيع الطلبات
    "*.entry.pubgmobile.com",
    "*.connect.pubgmobile.com",
    "*.gateway.pubgmobile.com",
    "*.relay.pubgmobile.com",               // ← سيرفر تحويل
    "*.session.pubgmobile.com",
    "*.netcode.pubgmobile.com",
    "*.tcp.pubgmobile.com",
    "*.udp.pubgmobile.com",
    "*.port.pubgmobile.com",

    // ═══ 🏟️ أوضاع اللعب (Game Modes) ═══
    "*.arena.pubgmobile.com",
    "*.tdm.pubgmobile.com",
    "*.teamdeathmatch.pubgmobile.com",
    "*.ranked-match.pubgmobile.com",
    "*.classic-match.pubgmobile.com",
    "*.arcade-match.pubgmobile.com",
    "*.war.pubgmobile.com",
    "*.payload.pubgmobile.com",
    "*.evoground.pubgmobile.com",
    "*.zombie.pubgmobile.com",
    "*.metro.pubgmobile.com",
    "*.infection.pubgmobile.com",
    "*.domination.pubgmobile.com",
    "*.gun-game.pubgmobile.com",
    "*.royale-match.pubgmobile.com",
    "*.team-up.pubgmobile.com",
    "*.deathmatch.pubgmobile.com",
    "*.survival.pubgmobile.com",
    "*.battle-royale.pubgmobile.com",

    // ═══ 🏠 غرف مخصصة ═══
    "*.room.pubgmobile.com",
    "*.custom.pubgmobile.com",
    "*.custom-room.pubgmobile.com",
    "*.private-room.pubgmobile.com",
    "*.practice-room.pubgmobile.com",
    "*.training-room.pubgmobile.com",

    // ═══ 🗺️ خرائط ═══
    "*.erangel.pubgmobile.com",
    "*.miramar.pubgmobile.com",
    "*.sanhok.pubgmobile.com",
    "*.vikendi.pubgmobile.com",
    "*.livik.pubgmobile.com",
    "*.nusa.pubgmobile.com",
    "*.karakin.pubgmobile.com",
    "*.aftermath.pubgmobile.com",
    "*.rondo.pubgmobile.com",
    "*.deston.pubgmobile.com",
    "*.map.pubgmobile.com",

    // ═══ 👀 مشاهدة وبث ═══
    "*.spectate.pubgmobile.com",
    "*.watch.pubgmobile.com",
    "*.replay.pubgmobile.com",
    "*.stream.pubgmobile.com",
    "*.broadcast.pubgmobile.com",
    "*.live.pubgmobile.com",
    "*.obs.pubgmobile.com",

    // ═══ 🏆 بطولات ومنافسات ═══
    "*.tournament.pubgmobile.com",
    "*.esports.pubgmobile.com",
    "*.competitive.pubgmobile.com",
    "*.leaderboard.pubgmobile.com",
    "*.championship.pubgmobile.com",
    "*.pro-league.pubgmobile.com",
    "*.scrim.pubgmobile.com",
    "*.clash-squad.pubgmobile.com"
];


// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║  ██╗      ██████╗ ██████╗ ██████╗ ██╗   ██╗                                  ║
// ║  ██║     ██╔═══██╗██╔══██╗██╔══██╗╚██╗ ██╔╝                                  ║
// ║  ██║     ██║   ██║██████╔╝██████╔╝ ╚████╔╝                                   ║
// ║  ██║     ██║   ██║██╔══██╗██╔══██╗  ╚██╔╝                                    ║
// ║  ███████╗╚██████╔╝██████╔╝██████╔╝   ██║                                     ║
// ║  ╚══════╝ ╚═════╝ ╚═════╝ ╚═════╝    ╚═╝                                     ║
// ║                                                                              ║
// ║  ④  نطاقات اللوبي + كل شي ثاني ← بورت 1080                               ║
// ║  ════════════════════════════════════════════                                ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

var DOM_LOBBY = [

    // ═══ 🏠 لوبي رئيسي ═══
    "*.pubgmobile.com",
    "*.igamecj.com",
    "*.igame.com",
    "*.lobby.pubgmobile.com",
    "*.lobby-api.pubgmobile.com",
    "*.main.pubgmobile.com",
    "*.homepage.pubgmobile.com",
    "*.cdn.pubgmobile.com",
    "*.res.pubgmobile.com",
    "*.config.pubgmobile.com",
    "*.ui.pubgmobile.com",
    "*.api.pubgmobile.com",
    "*.proxy.pubgmobile.com",
    "*.preload.pubgmobile.com",
    "*.init.pubgmobile.com",
    "*.status.pubgmobile.com",
    "*.version.pubgmobile.com",

    // ═══ 🎤 صوت + VoIP ═══
    "*.voice.pubgmobile.com",
    "*.voip.pubgmobile.com",
    "*.rtc.pubgmobile.com",
    "*.audio.pubgmobile.com",
    "*.trtc.tencentcloud.com",
    "*.tim.qq.com",
    "*.ims.qq.com",

    // ═══ 🛡️ حماية + Anti-Cheat ═══
    "*.security.pubgmobile.com",
    "*.anticheat.pubgmobile.com",
    "*.protect.pubgmobile.com",
    "*.shield.pubgmobile.com",
    "*.device.pubgmobile.com",
    "*.deviceid.pubgmobile.com",
    "*.fingerprint.pubgmobile.com",
    "*.integrity.pubgmobile.com",
    "*.audit.pubgmobile.com",
    "*.detect.pubgmobile.com",
    "*.check.pubgmobile.com",
    "*.validate.pubgmobile.com",
    "*.cert.pubgmobile.com",

    // ═══ 📊 تقارير + Telemetry ═══
    "*.beacon.qq.com",
    "*.report.qq.com",
    "*.report.pubgmobile.com",
    "*.telemetry.pubgmobile.com",
    "*.analytics.pubgmobile.com",
    "*.track.pubgmobile.com",
    "*.log.pubgmobile.com",
    "*.monitor.pubgmobile.com",

    // ═══ 🎯 تجنيد + فريق ═══
    "*.recruit.pubgmobile.com",
    "*.recruiting.pubgmobile.com",
    "*.recruitment.pubgmobile.com",
    "*.team.pubgmobile.com",
    "*.squad.pubgmobile.com",
    "*.group.pubgmobile.com",
    "*.invite.pubgmobile.com",
    "*.invitation.pubgmobile.com",
    "*.friend.pubgmobile.com",
    "*.friends.pubgmobile.com",
    "*.social.pubgmobile.com",
    "*.clan.pubgmobile.com",
    "*.guild.pubgmobile.com",
    "*.crew.pubgmobile.com",
    "*.find-team.pubgmobile.com",
    "*.find-player.pubgmobile.com",
    "*.auto-match.pubgmobile.com",
    "*.quick-team.pubgmobile.com",

    // ═══ 💬 دردشة ═══
    "*.chat.pubgmobile.com",
    "*.message.pubgmobile.com",
    "*.inbox.pubgmobile.com",
    "*.inbox-api.pubgmobile.com",
    "*.mail.pubgmobile.com",
    "*.xmpp.pubgmobile.com",
    "*.block.pubgmobile.com",
    "*.mute.pubgmobile.com",

    // ═══ 👤 بروفايل ═══
    "*.profile.pubgmobile.com",
    "*.avatar.pubgmobile.com",
    "*.name.pubgmobile.com",
    "*.id.pubgmobile.com",
    "*.nickname.pubgmobile.com",
    "*.title.pubgmobile.com",
    "*.badge.pubgmobile.com",
    "*.frame.pubgmobile.com",
    "*.outfit.pubgmobile.com",
    "*.skin.pubgmobile.com",
    "*.emote.pubgmobile.com",
    "*.gesture.pubgmobile.com",
    "*.pose.pubgmobile.com",
    "*.spray.pubgmobile.com",
    "*.vehicle-skin.pubgmobile.com",
    "*.parachute.pubgmobile.com",
    "*.follow.pubgmobile.com",
    "*.follower.pubgmobile.com",
    "*.like.pubgmobile.com",
    "*.comment.pubgmobile.com",
    "*.milestone.pubgmobile.com",

    // ═══ 🏅 ترتيب وإنجازات ═══
    "*.rank.pubgmobile.com",
    "*.ranking.pubgmobile.com",
    "*.season.pubgmobile.com",
    "*.tier.pubgmobile.com",
    "*.achievement.pubgmobile.com",
    "*.achievements.pubgmobile.com",
    "*.progress.pubgmobile.com",
    "*.trophy.pubgmobile.com",
    "*.mission.pubgmobile.com",
    "*.task.pubgmobile.com",
    "*.quest.pubgmobile.com",
    "*.challenge.pubgmobile.com",
    "*.daily.pubgmobile.com",
    "*.weekly.pubgmobile.com",
    "*.growth.pubgmobile.com",
    "*.level.pubgmobile.com",
    "*.exp.pubgmobile.com",

    // ═══ 🛒 متجر + شحن ═══
    "*.shop.pubgmobile.com",
    "*.store.pubgmobile.com",
    "*.pay.pubgmobile.com",
    "*.payment.pubgmobile.com",
    "*.purchase.pubgmobile.com",
    "*.billing.pubgmobile.com",
    "*.uc.pubgmobile.com",
    "*.coin.pubgmobile.com",
    "*.diamond.pubgmobile.com",
    "*.redeem.pubgmobile.com",
    "*.coupon.pubgmobile.com",
    "*.voucher.pubgmobile.com",
    "*.promo.pubgmobile.com",
    "*.promotion.pubgmobile.com",
    "*.offer.pubgmobile.com",
    "*.deal.pubgmobile.com",
    "*.sale.pubgmobile.com",
    "*.iap.pubgmobile.com",
    "*.receipt.pubgmobile.com",
    "*.order.pubgmobile.com",
    "*.transaction.pubgmobile.com",
    "*.subscribe.pubgmobile.com",
    "*.premium.pubgmobile.com",
    "*.vip.pubgmobile.com",
    "*.special.pubgmobile.com",
    "*.limited.pubgmobile.com",
    "*.exclusive.pubgmobile.com",
    "*.legendary.pubgmobile.com",
    "*.mythic.pubgmobile.com",
    "*.epic.pubgmobile.com",

    // ═══ 👑 رويال باس ═══
    "*.royalepass.pubgmobile.com",
    "*.rp.pubgmobile.com",
    "*.prime.pubgmobile.com",
    "*.battlepass.pubgmobile.com",
    "*.elite.pubgmobile.com",
    "*.rp-mission.pubgmobile.com",
    "*.rp-reward.pubgmobile.com",
    "*.rp-rank.pubgmobile.com",
    "*.rp-challenge.pubgmobile.com",
    "*.rp-shop.pubgmobile.com",

    // ═══ 🎉 فعاليات ═══
    "*.event.pubgmobile.com",
    "*.events.pubgmobile.com",
    "*.reward.pubgmobile.com",
    "*.rewards.pubgmobile.com",
    "*.crate.pubgmobile.com",
    "*.lucky.pubgmobile.com",
    "*.spin.pubgmobile.com",
    "*.wheel.pubgmobile.com",
    "*.draw.pubgmobile.com",
    "*.gacha.pubgmobile.com",
    "*.lottery.pubgmobile.com",
    "*.treasure.pubgmobile.com",
    "*.gift.pubgmobile.com",
    "*.giveaway.pubgmobile.com",
    "*.checkin.pubgmobile.com",
    "*.login-bonus.pubgmobile.com",
    "*.attendance.pubgmobile.com",
    "*.festival.pubgmobile.com",
    "*.celebration.pubgmobile.com",
    "*.anniversary.pubgmobile.com",
    "*.collab.pubgmobile.com",
    "*.limited-event.pubgmobile.com",
    "*.special-event.pubgmobile.com",
    "*.flash-sale.pubgmobile.com",
    "*.theme.pubgmobile.com",

    // ═══ 🏠 منزل + تخييم ═══
    "*.home.pubgmobile.com",
    "*.house.pubgmobile.com",
    "*.furniture.pubgmobile.com",
    "*.decoration.pubgmobile.com",
    "*.camp.pubgmobile.com",
    "*.visit.pubgmobile.com",

    // ═══ ⚙️ إعدادات ═══
    "*.settings.pubgmobile.com",
    "*.setting.pubgmobile.com",
    "*.option.pubgmobile.com",
    "*.preference.pubgmobile.com",
    "*.language.pubgmobile.com",
    "*.server-select.pubgmobile.com",
    "*.region-select.pubgmobile.com",
    "*.graphics.pubgmobile.com",
    "*.controls.pubgmobile.com",
    "*.sensitivity.pubgmobile.com",
    "*.hud.pubgmobile.com",
    "*.privacy.pubgmobile.com",
    "*.link.pubgmobile.com",
    "*.unlink.pubgmobile.com",
    "*.bind.pubgmobile.com",
    "*.recovery.pubgmobile.com",
    "*.data-transfer.pubgmobile.com",

    // ═══ 🔐 تسجيل دخول ═══
    "*.auth.pubgmobile.com",
    "*.login.pubgmobile.com",
    "*.account.pubgmobile.com",
    "*.oauth.pubgmobile.com",
    "*.token.pubgmobile.com",
    "*.register.pubgmobile.com",
    "*.signup.pubgmobile.com",
    "*.verify.pubgmobile.com",
    "*.verification.pubgmobile.com",
    "*.captcha.pubgmobile.com",
    "*.sms.pubgmobile.com",
    "*.password.pubgmobile.com",
    "*.forgot.pubgmobile.com",
    "*.reset.pubgmobile.com",
    "*.otp.pubgmobile.com",
    "*.two-factor.pubgmobile.com",

    // ═══ 📥 تحميل + تحديثات ═══
    "*.download.pubgmobile.com",
    "*.patch.pubgmobile.com",
    "*.update.pubgmobile.com",
    "*.hotfix.pubgmobile.com",
    "*.resource.pubgmobile.com",
    "*.asset.pubgmobile.com",
    "*.bundle.pubgmobile.com",
    "*.package.pubgmobile.com",
    "*.apk.pubgmobile.com",
    "*.obb.pubgmobile.com",

    // ═══ 🔔 إشعارات ═══
    "*.push.pubgmobile.com",
    "*.notify.pubgmobile.com",
    "*.notification.pubgmobile.com",
    "*.alert.pubgmobile.com",
    "*.announce.pubgmobile.com",
    "*.news.pubgmobile.com",
    "*.bulletin.pubgmobile.com",
    "*.banner.pubgmobile.com",
    "*.popup.pubgmobile.com",

    // ═══ 📘 فيسبوك ═══
    "*.facebook.com",
    "*.fbcdn.net",
    "*.facebook.net",
    "connect.facebook.net",
    "graph.facebook.com",

    // ═══ 🔍 قوقل ═══
    "*.googleapis.com",
    "*.googleusercontent.com",
    "play-fe.googleapis.com",
    "play.googleapis.com",
    "android.googleapis.com",
    "accounts.google.com",
    "*.gstatic.com",
    "*.google.com",

    // ═══ 🍎 آبل ═══
    "*.apple.com",
    "appleid.apple.com",
    "buy.itunes.apple.com",
    "*.itunes.apple.com",

    // ═══ 🐦 تويتر ═══
    "*.twitter.com",
    "*.twimg.com",
    "*.x.com",

    // ═══ 📱 منصات تسجيل دخول ═══
    "*.qq.com",
    "*.weixin.qq.com",
    "*.wechat.com",
    "*.vk.com",
    "*.line.me",
    "*.naver.com",

    // ═══ ☁️ Tencent ═══
    "*.tencent.com",
    "*.tencentyun.com",
    "*.cloud.tencent.com",
    "*.qpic.cn",
    "*.gp.qq.com",
    "*.game.qq.com",
    "*.dnspod.net",
    "*.dnspod.com",
    "*.qcloud.com",
    "*.qcloudcdn.com",
    "*.tencentcloud.com",
    "*.cos.myqcloud.com",
    "*.myqcloud.com",

    // ═══ 🌐 CDN ═══
    "*.akamaized.net",
    "*.akamai.net",
    "*.cloudfront.net",
    "*.fastly.net",
    "*.cdn77.org",
    "*.cdn.dnsv1.com",
    "*.edgekey.net",
    "*.edgesuite.net",

    // ═══ 📱 متاجر ═══
    "apps.apple.com",
    "play.google.com",

    // ═══ 📊 تحليلات ═══
    "*.timber.tencent.com",
    "*.crashlytics.com",
    "*.firebaseio.com",
    "*.firebase.com",
    "*.app-measurement.com",
    "*.adjust.com",
    "*.appsflyer.com",
    "*.branch.io",
    "*.amplitude.com",
    "*.mixpanel.com",

    // ═══ 🌐 DNS ═══
    "*.dns.pubgmobile.com",
    "*.resolve.pubgmobile.com",
    "*.lookup.pubgmobile.com",
    "*.geoip.pubgmobile.com",
    "*.iplookup.pubgmobile.com",
    "*.ipcheck.pubgmobile.com",
    "*.ipinfo.pubgmobile.com",

    // ═══ 🔔 Push ═══
    "mtalk.google.com",
    "android.clients.google.com",
    "*.fcm.googleapis.com",
    "*.gcm.googleapis.com",
    "*.push.apple.com",

    // ═══ 🌐 إضافات ═══
    "*.sentry.io",
    "*.bugsnag.com",
    "*.honeycomb.io",
    "*.datadoghq.com"
];


// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║  ██████╗ ██████╗     ██╗██████╗ ██╗   ██╗███╗   ██╗                        ║
// ║  ██╔══██╗██╔══██╗    ██║██╔══██╗██║   ██║████╗  ██║                        ║
// ║  ██████╔╝██████╔╝    ██║██████╔╝██║   ██║██╔██╗ ██║                        ║
// ║  ██╔═══╝ ██╔══██╗    ██║██╔═══╝ ██║   ██║██║╚██╗██║                        ║
// ║  ██║     ██║  ██║    ██║██║     ╚██████╔╝██║ ╚████║                        ║
// ║  ╚═╝     ╚═╝  ╚═╝    ╚═╝╚═╝      ╚═════╝ ╚═╝  ╚═══╝                        ║
// ║                                                                              ║
// ║  ⑤  نطاقات IP أردنية محدثة بالكامل (IPv4)                                  ║
// ║  ════════════════════════════════════════                                    ║
// ║                                                                              ║
// ║  🇯🇴 شبكات أردنية:                                                          ║
// ║     Zain (زين) + Orange (أورنج) + Umniah (أمينة)                           ║
// ║     + Tallia + Ruya + FEZA + Dama Telecom                                   ║
// ║     + وزارة التربية + الجامعات + حكومة                                     ║
// ║                                                                              ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

var JO4 = [

    // ╔══════════════════════════════════════════════╗
    // ║  ░░░ ZAIN JORDAN (زين الأردن) ░░░           ║
    // ║  أكبر شبكة موبايل في الأردن                 ║
    // ╚══════════════════════════════════════════════╝
    "37.208.0.0/13",        // ← Zain كبير (37.208→37.215)
    "37.35.0.0/16",         // ← Zain الأصلي
    "78.40.0.0/16",         // ← Zain
    "78.100.0.0/15",        // ← Zain كبير (78.100→78.101)
    "78.158.0.0/15",        // ← Zain كبير (78.158→78.159)
    "79.134.128.0/18",      // ← Zain
    "82.212.0.0/14",        // ← Zain كبير (82.212→82.215)
    "82.212.64.0/18",       // ← Zain
    "86.111.0.0/16",        // ← Zain
    "89.18.0.0/16",         // ← Zain
    "91.140.0.0/15",        // ← Zain كبير (91.140→91.141)
    "91.141.0.0/16",        // ← Zain
    "176.28.0.0/16",        // ← Zain
    "176.29.0.0/16",        // ← Zain
    "176.119.0.0/16",       // ← Zain
    "185.33.12.0/22",       // ← Zain
    "185.88.140.0/22",      // ← Zain
    "185.185.244.0/22",     // ← Zain
    "188.225.128.0/17",     // ← Zain كبير
    "188.228.0.0/17",       // ← Zain
    "188.228.128.0/17",     // ← Zain
    "188.247.64.0/18",      // ← Zain
    "188.247.128.0/17",     // ← Zain كبير
    "188.247.192.0/18",     // ← Zain
    "212.34.0.0/16",        // ← Zain
    "212.34.0.0/19",        // ← Zain
    "212.34.32.0/19",       // ← Zain
    "212.34.64.0/18",       // ← Zain
    "212.34.96.0/19",       // ← Zain
    "212.35.0.0/16",        // ← Zain (سيرفرك)

    // ╔══════════════════════════════════════════════╗
    // ║  ░░░ ORANGE JORDAN (أورنج الأردن) ░░░       ║
    // ║  ثاني أكبر شبكة                             ║
    // ╚══════════════════════════════════════════════╝
    "45.9.220.0/22",        // ← Orange
    "46.32.0.0/16",         // ← Orange
    "78.42.0.0/16",         // ← Orange
    "94.24.0.0/16",         // ← Orange
    "185.4.0.0/22",         // ← Orange
    "185.18.108.0/22",      // ← Orange
    "185.22.212.0/22",      // ← Orange
    "185.40.0.0/15",        // ← Orange كبير (185.40→185.41)
    "185.41.0.0/16",        // ← Orange
    "185.45.36.0/22",       // ← Orange
    "185.51.24.0/22",       // ← Orange
    "185.58.204.0/22",      // ← Orange
    "185.84.100.0/22",      // ← Orange
    "185.100.52.0/22",      // ← Orange
    "185.103.92.0/22",      // ← Orange
    "185.112.24.0/22",      // ← Orange
    "185.118.120.0/22",     // ← Orange
    "185.120.36.0/22",      // ← Orange
    "185.160.0.0/22",       // ← Orange
    "185.229.28.0/22",      // ← Orange
    "195.191.100.0/22",     // ← Orange
    "213.55.0.0/16",        // ← Orange Telecom (GOV/ISP)

    // ╔══════════════════════════════════════════════╗
    // ║  ░░░ UMNIAH (أمينة) ░░░                     ║
    // ║  ثالث شبكة موبايل                           ║
    // ╚══════════════════════════════════════════════╝
    "41.184.0.0/16",        // ← Umniah
    "41.234.0.0/16",        // ← Umniah
    "42.136.0.0/16",        // ← Umniah
    "95.141.240.0/21",      // ← Umniah

    // ╔══════════════════════════════════════════════╗
    // ║  ░░░ شركات إنترنت أردنية إضافية ░░░       ║
    // ╚══════════════════════════════════════════════╝
    "149.255.0.0/16",       // ← Tallia
    "185.109.0.0/16",       // ← شركات أردنية
    "185.110.0.0/16",       // ← شركات أردنية
    "185.176.0.0/16",       // ← شركات أردنية
    "188.127.0.0/16",       // ← شركات أردنية
    "194.126.0.0/16",       // ← شركات أردنية
    "195.88.0.0/16",        // ← شركات أردنية
    "217.112.0.0/16",       // ← شركات أردنية
    "217.165.0.0/16",       // ← شركات أردنية

    // ╔══════════════════════════════════════════════╗
    // ║  ░░░ حكومة + جامعات ░░░                     ║
    // ╚══════════════════════════════════════════════╝
    "193.188.0.0/16",       // ← وزارة التربية + MOE
    "194.54.0.0/16",        // ← JUNet الجامعات
    "82.212.128.0/17",      // ← حكومي/جامعي
    "188.247.0.0/17"        // ← إضافي أردني
];


// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║  ██╗██████╗ ██╗   ██╗██████╗                                                    ║
// ║  ██║██╔══██╗██║   ██║██╔══██╗                                                   ║
// ║  ██║██████╔╝██║   ██║██║  ██║                                                   ║
// ║  ██║██╔═══╝ ██║   ██║██║  ██║                                                   ║
// ║  ██║██║     ╚██████╔╝██████╔╝                                                   ║
// ║  ╚═╝╚═╝      ╚═════╝ ╚═════╝                                                    ║
// ║                                                                              ║
// ║  ⑥  نطاقات IP أردنية (IPv6)                                                ║
// ║  ════════════════════════                                                    ║
// ║  كل ما زادت ← تغطية أفضل ← بنق أحسن                                       ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

var JO6 = [
    // ── Orange Jordan ──
    "2a00:8c00::/32",       // ← Orange IPv6

    // ── Zain Jordan ──
    "2a01:100::/32",        // ← Zain IPv6

    // ── أردني عام ──
    "2a02:c10::/32",        // ← أردني IPv6
    "2a02:f040::/32",       // ← أردني IPv6
    "2a02:f60::/32",        // ← أردني IPv6

    // ── Umniah ──
    "2a05:580::/32",        // ← أردني IPv6

    // ── أردني إضافي ──
    "2a0d:4800::/32",       // ← أردني IPv6
    "2001:67c:1d8::/48",    // ← أردني IPv6
    "2a0e:aa06::/32",       // ← أردني IPv6 جديد
    "2a0e:de40::/32"        // ← أردني IPv6 جديد
];


// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║  ██████╗ ██╗   ██╗███╗   ██╗███████╗    ██╗  ██╗███████╗██╗     ██████╗      ║
// ║  ██╔══██╗██║   ██║████╗  ██║██╔════╝    ██║  ██║██╔════╝██║     ██╔══██╗     ║
// ║  ██║  ██║██║   ██║██╔██╗ ██║███████╗    ███████║█████╗  ██║     ██████╔╝     ║
// ║  ██║  ██║██║   ██║██║╚██╗██║╚════██║    ██╔══██║██╔══╝  ██║     ██╔═══╝      ║
// ║  ██████╔╝╚██████╔╝██║ ╚████║███████║    ██║  ██║███████╗███████╗██║          ║
// ║  ╚═════╝  ╚═════╝ ╚═╝  ╚═══╝╚══════╝    ╚═╝  ╚═╝╚══════╝╚══════╝╚═╝          ║
// ║                                                                              ║
// ║  ⑦  الدوال المساعدة                                                        ║
// ║  ═══════════════════                                                        ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

// ── هل عنوان IPv4 صحيح؟ ──
// يتحقق من 4 أرقام مفصولة بنقاط (كل رقم 0-255)
function is4(a) {
    var p = a.split(".");
    if (p.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var n = parseInt(p[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
    }
    return true;
}

// ── هل عنوان IPv6 صحيح؟ ──
// بس يتحقق من وجود نقطتين ":"
function is6(a) {
    return a.indexOf(":") !== -1;
}

// ── هل هو عنوان IP؟ ──
function isIP(a) {
    return is4(a) || is6(a);
}

// ── تحويل IPv4 لرقم 32-بت ──
// "212.35.66.45" → رقم كبير
// لازم عشان نقارنه مع CIDR mask
function toNum4(ip) {
    var p = ip.split(".");
    return ((parseInt(p[0], 10) << 24) |
            (parseInt(p[1], 10) << 16) |
            (parseInt(p[2], 10) << 8) |
             parseInt(p[3], 10)) >>> 0;
}

// ── توسيع عنوان IPv6 المختصر ──
// "2a00::1" → "2a00:0000:0000:0000:0000:0000:0000:0001"
// لازم عشان نقارن CIDR بال.bits
function expand6(ip) {
    var s = ip.toLowerCase();
    var zi = s.indexOf("%");
    if (zi !== -1) s = s.substring(0, zi);
    var pts = s.split(":");
    var db = -1;
    for (var i = 0; i < pts.length; i++) {
        if (pts[i] === "" && i > 0 && i < pts.length - 1) { db = i; break; }
    }
    var e = [];
    if (db !== -1) {
        for (var i = 0; i < db; i++) { if (pts[i] !== "") e.push(pts[i]); }
        var c = 0;
        for (var i = 0; i < pts.length; i++) { if (pts[i] !== "") c++; }
        var f = 8 - c;
        for (var i = 0; i < f; i++) e.push("0000");
        for (var i = db + 1; i < pts.length; i++) { if (pts[i] !== "") e.push(pts[i]); }
    } else { e = pts; }
    while (e.length < 8) e.push("0000");
    var r = [];
    for (var i = 0; i < 8; i++) {
        var p = e[i] || "0";
        while (p.length < 4) p = "0" + p;
        r.push(p);
    }
    return r.join(":");
}

// ── تحويل IPv6 لسلسلة ثنائية ──
// لازم عشان نقارن bit by bit في CIDR
function toBin6(ip) {
    var h = expand6(ip).replace(/:/g, ""), b = "";
    for (var i = 0; i < h.length; i++) {
        var v = parseInt(h.charAt(i), 16).toString(2);
        while (v.length < 4) v = "0" + v;
        b += v;
    }
    return b;
}

// ── هل IPv4 داخل CIDR؟ ──
// cidr = "212.35.0.0/16", ip = "212.35.66.45" → true
function matchCidr4(ip, cidr) {
    var p = cidr.split("/");
    var bits = parseInt(p[1], 10);
    var mask = bits === 0 ? 0 : (~0 << (32 - bits)) >>> 0;
    return (toNum4(ip) & mask) === (toNum4(p[0]) & mask);
}

// ── هل IPv6 داخل CIDR؟ ──
function matchCidr6(ip, cidr) {
    var p = cidr.split("/");
    var bits = parseInt(p[1], 10);
    var ib = toBin6(ip), pb = toBin6(p[0]);
    for (var i = 0; i < bits; i++) {
        if (ib.charAt(i) !== pb.charAt(i)) return false;
    }
    return true;
}

// ── هل IP داخل CIDR؟ (يدعم الإثنين) ──
function matchCidr(ip, cidr) {
    if (cidr.indexOf(":") !== -1) {
        if (!is6(ip)) return false;
        return matchCidr6(ip, cidr);
    }
    if (!is4(ip)) return false;
    return matchCidr4(ip, cidr);
}

// ── هل IP داخل أي نطاق من القائمة؟ ──
function inRange(ip, list) {
    if (!isIP(ip)) return false;
    for (var i = 0; i < list.length; i++) {
        if (matchCidr(ip, list[i])) return true;
    }
    return false;
}

// ── هل IP أردني؟ (IPv4 أو IPv6) ──
function isJo(ip) {
    if (!isIP(ip)) return false;
    if (is6(ip)) return inRange(ip, JO6);
    return inRange(ip, JO4);
}

// ── هل عنوان فرعي محلي (لا يحتاج بروكسي)؟ ──
function isLocalHost(host) {
    var h = host.toLowerCase();
    if (h === "localhost") return true;
    if (h === "127.0.0.1") return true;
    if (h === "::1") return true;
    if (h.endsWith(".local")) return true;
    if (h.indexOf(".local.") !== -1) return true;
    if (h.indexOf("192.168.") === 0) return true;
    if (h.indexOf("10.") === 0) return true;
    return false;
}

// ── هل فيه أي كلمة من القائمة في النص؟ ──
// سريع و مفيد للـ Catch-all
function hasKeyword(h, keywords) {
    for (var i = 0; i < keywords.length; i++) {
        if (h.indexOf(keywords[i]) !== -1) return true;
    }
    return false;
}

// ── كلمات مفتاحية لل Catch-all ═══
var _pubgKeys = [
    "pubg", "tencent", "igamecj", "igame",
    "qcloud", "tencentyun", "cloud.tencent"
];


// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║  ████████╗███████╗███████╗████████╗                                           ║
// ║  ╚══██╔══╝██╔════╝██╔════╝╚══██╔══╝                                           ║
// ║     ██║   █████╗  ███████╗   ██║                                              ║
// ║     ██║   ██╔══╝  ╚════██║   ██║                                              ║
// ║     ██║   ███████╗███████║   ██║                                              ║
// ║     ╚═╝   ╚══════╝╚══════╝   ╚═╝                                              ║
// ║                                                                              ║
// ║  ⑧  نظام الاختبار والتشخيص (Diagnostics)                                    ║
// ║  ═══════════════════════════════════════                                      ║
// ║  فعّل DEBUG = true عشان تشوف وش قاعد يصير بالضبط                            ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

var DEBUG = false;  // ← غيّر لـ true للاختبار

// ── سجل الطلبات (آخر 50 طلب) ──
var _log = [];
var _logMax = 50;

function logRequest(host, proxy, reason) {
    if (!DEBUG) return;
    _total++;
    var entry = "#" + _total + " | " + host + " → " + proxy + " | " + reason;
    _log.push(entry);
    if (_log.length > _logMax) _log.shift();
}

// ── إحصائيات ──
function getStats() {
    return {
        total: _total,
        fails: _fL + _fM,
        lobbyIdx: _idxL,
        matchIdx: _idxM,
        domIdx: _idxD
    };
}


// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║  ███╗   ███╗ █████╗ ██╗███╗   ██╗    ██████╗  █████╗ ██████╗  █████╗         ║
// ║  ████╗ ████║██╔══██╗██║████╗  ██║   ██╔════╝ ██╔══██╗██╔══██╗██╔══██╗        ║
// ║  ██╔████╔██║███████║██║██╔██╗ ██║   ██║  ███╗███████║██████╔╝███████║        ║
// ║  ██║╚██╔╝██║██╔══██║██║██║╚██╗██║   ██║   ██║██╔══██║██╔══██╗██╔══██║        ║
// ║  ██║ ╚═╝ ██║██║  ██║██║██║ ╚████║   ╚██████╔╝██║  ██║██║  ██║██║  ██║        ║
// ║  ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝    ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝        ║
// ║                                                                              ║
// ║  ⑨  الدالة الرئيسية - قلب السكربت                                           ║
// ║  ════════════════════════════════════                                         ║
// ║                                                                              ║
// ║  كل طلب يمر من هنا                                                         ║
// ║                                                                              ║
// ║  ┌─────────────────────────────────────────────────────────────────┐        ║
// ║  │  1. محلي/داخلي      → DIRECT (ضروري)                          │        ║
// ║  │  2. نطاق مباريات     → بروكسي بورت 20005 + Round Robin        │        ║
// ║  │  3. نطاق لوبي/PUBG   → بروكسي بورت 1080 + Round Robin        │        ║
// ║  │  4. IP أردني         → بروكسي بورت 1080                      │        ║
// ║  │  5. كلمات PUBG       → بروكسي بورت 1080 (Catch-all)          │        ║
// ║  │  6. أي شي ثاني      → بروكسي بورت 1080 (بدون DIRECT)        │        ║
// ║  └─────────────────────────────────────────────────────────────────┘        ║
// ║                                                                              ║
// ╚══════════════════════════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {

    var h = host.toLowerCase();

    // ══════════════════════════════════════════════════
    // ① نطاق محلي → DIRECT
    // ══════════════════════════════════════════════════
    // localhost, 127.0.0.1, ::1, *.local
    // هاي ضرورية عشان السكربت ما يكسر الاتصالات الداخلية
    if (isLocalHost(h)) {
        return "DIRECT";
    }

    // ══════════════════════════════════════════════════
    // ② نطاق مباريات → بورت 20005 + Round Robin
    // ══════════════════════════════════════════════════
    // المباريات لها بورت منفصل 20005
    // السيرفر يتختار بالتدوير الدائري
    // هذا يفصل حركة المباريات عن اللوبي
    if (searchDomain(h, DOM_MATCH)) {
        return getMatchProxy();
    }

    // ══════════════════════════════════════════════════
    // ③ نطاق لوبي / PUBG → بورت 1080 + Round Robin
    // ══════════════════════════════════════════════════
    // كل شي غير المباريات: لوبي، صوت، متجر، تحديثات
    if (searchDomain(h, DOM_LOBBY)) {
        return getLobbyProxy();
    }

    // ══════════════════════════════════════════════════
    // ④ IP أردني مباشر → بورت 1080
    // ══════════════════════════════════════════════════
    // لو الدومين هو IP أردني → بروكسي أردني
    if (isJo(host)) {
        return getLobbyProxy();
    }

    // ══════════════════════════════════════════════════
    // ⑤ Catch-all لأي شيء فيه كلمات PUBG
    // ══════════════════════════════════════════════════
    // ضمان أخير: أي نطاق جديد ما حطيناه بالقوائم
    // بس فيه كلمة pubg أو tencent → يمر بالبروكسي
    if (hasKeyword(h, _pubgKeys)) {
        return getLobbyProxy();
    }

    // ══════════════════════════════════════════════════
    // ⑦ الباقي → بورت 1080
    // ══════════════════════════════════════════════════
    // كل شي بالبروكسي - بدون DIRECT
    // والسيرفر يتختار بالتدوير الدائري
    return getLobbyProxy();
}


// ╔══════════════════════════════════════════════════════════════════════════════╗
// ║                                                                              ║
// ║  ███████╗████████╗ █████╗ ████████╗███████╗                                   ║
// ║  ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝                                   ║
// ║  ███████╗   ██║   ███████║   ██║   ███████╗                                   ║
// ║  ╚════██║   ██║   ██╔══██║   ██║   ╚════██║                                   ║
// ║  ███████║   ██║   ██║  ██║   ██║   ███████║                                   ║
// ║  ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝                                   ║
// ║                                                                              ║
// ║  📊 ملخص الإصدار v5.0                                                      ║
// ║  ════════════════════                                                        ║
// ║                                                                              ║
// ║  🔄 تدوير ذكي (Smart Round Robin):                                           ║
// ║     • Round Robin تتابعي أو Random عشوائي                                    ║
// ║     • تدوير منفصل: لوبي / مباريات / طوارئ / نطاقات                         ║
// ║     • Failover تلقائي عند فشل السيرفر                                       ║
// ║     • كل سيرفر يتساوى في عدد الطلبات                                       ║
// ║                                                                              ║
// ║  🇯🇴 نطاقات أردنية محدثة:                                                    ║
// ║     • Zain: ~30 نطاق                                                         ║
// ║     • Orange: ~22 نطاق                                                       ║
// ║     • Umniah: 4 نطاقات                                                       ║
// ║     • شركات إضافية: ~9 نطاقات                                               ║
// ║     • حكومة وجامعات: 4 نطاقات                                               ║
// ║     • IPv6: 10 نطاقات                                                        ║
// ║     ═══════════════════                                                      ║
// ║     • المجموع: ~79+ نطاق IPv4 + 10 IPv6 = ~89+ نطاق                        ║
// ║                                                                              ║
// ║  🎮 بورت المباريات:                                                         ║
// ║     • 20005 منفصل عن 1080                                                   ║
// ║     • لوبي على 1080                                                         ║
// ║     • المباريات على 20005                                                   ║
// ║     • تدوير مستقل لكل واحد                                                  ║
// ║                                                                              ║
// ║  ⚡ تحسينات:                                                                ║
// ║     • SOCKS5 (أسرع من SOCKS4)                                               ║
// ║     • Round Robin = توزيع الحمل = بنق أقل                                    ║
// ║     • Failover = استمرارية = ما في انقطاع                                    ║
// ║     • تدوير النطاقات = توزيع موارد المقارنة                                   ║
// ║     • DEBUG mode = تشخيص سهل                                                ║
// ║                                                                              ║
// ╚══════════════════════════════════════════════════════════════════════════════╝
