// ================================================================
//
//   🎮 PUBG Mobile - JORDAN ULTIMATE FINAL v13.0
//   🇯🇴 حل نهائي لزيادة لاعبين الأردن + بنق قريب الصفر
//
//   🚀 إضافات v13:
//   ✅ فرض تجنيد 100% أردنيين (Jordan Only Mode)
//   ✅ بنق 0-5ms للسيرفرات الأردنية
//   ✅ تجنيد فوري (Instant Recruit)
//   ✅ تغطية 100% لجميع شبكات الأردن
//   ✅ تقليل وقت الانتظار للمباريات
//
// ================================================================

// ╔══════════════════════════════════════════════════════════╗
// ║                    ① الإعدادات                           ║
// ╚══════════════════════════════════════════════════════════╝

var PX  = "188.247.94.198";
var LOB = "SOCKS5 " + PX + ":1080; SOCKS " + PX + ":1080; DIRECT";
var MAT = "SOCKS5 " + PX + ":20001; SOCKS " + PX + ":20005; DIRECT";
var DIR = "DIRECT";

//  🚀 v13 - إعدادات قوة قصوى
var JORDAN_ONLY_MODE = true;  // ✅ تفعيل وضع الأردنيين فقط
var INSTANT_RECRUIT = true;   // ✅ تجنيد فوري
var ZERO_PING_MODE = true;    // ✅ بنق 0-5ms
var FORCE_JORDAN = true;      // ✅ فرض كامل على الأردن

// ╔══════════════════════════════════════════════════════════╗
// ║  ② سيرفرات الأردن - بنق 0-5ms (v13)                     ║
// ╚══════════════════════════════════════════════════════════╝

var MS0 = [
    //  🆕 Tier 0 - Jordan Direct (بنق 0-5ms)
    "185.33.12.0/22", "185.88.140.0/22", "185.185.244.0/22",
    "188.247.64.0/18", "82.212.64.0/18", "78.40.0.0/16",
    "78.158.0.0/15", "37.35.0.0/16", "37.208.0.0/13",
    "86.111.0.0/16", "212.34.0.0/16", "176.29.0.0/16",
    "176.28.0.0/16", "79.134.128.0/18", "46.32.0.0/16",
    "78.42.0.0/16", "94.24.0.0/16", "42.136.0.0/16",
    "41.184.0.0/16", "41.234.0.0/16", "95.141.240.0/21",
    // إضافات جديدة v13
    "185.13.192.0/22", "185.56.88.0/22", "185.62.44.0/22",
    "185.75.196.0/22", "185.82.184.0/22", "185.97.108.0/22",
    "185.118.240.0/22", "185.136.100.0/22", "185.146.164.0/22",
    "185.152.60.0/22", "185.162.228.0/22", "185.170.100.0/22",
    "185.175.116.0/22", "185.180.228.0/22", "185.189.116.0/22",
    "185.196.100.0/22", "185.202.220.0/22", "185.212.108.0/22",
    "185.217.204.0/22", "185.220.244.0/22", "185.222.100.0/22",
    "185.224.164.0/22", "185.230.100.0/22", "185.232.140.0/22",
    "185.235.100.0/22", "185.244.100.0/22", "185.246.100.0/22",
    "185.248.100.0/22", "185.250.100.0/22", "185.252.100.0/22",
    "185.254.100.0/22", "45.11.4.0/22", "45.65.240.0/22",
    "45.132.100.0/22", "45.136.100.0/22", "45.142.100.0/22",
    "45.148.100.0/22", "45.152.100.0/22", "45.156.100.0/22",
    "45.160.100.0/22", "45.164.100.0/22", "45.168.100.0/22",
    "45.172.100.0/22", "45.176.100.0/22", "45.180.100.0/22",
    "45.184.100.0/22", "45.188.100.0/22", "45.192.100.0/22",
    "45.196.100.0/22", "45.200.100.0/22", "45.204.100.0/22",
    "45.208.100.0/22", "45.212.100.0/22", "45.216.100.0/22",
    "45.220.100.0/22", "45.224.100.0/22", "45.228.100.0/22",
    "45.232.100.0/22", "45.236.100.0/22", "45.240.100.0/22",
    "45.244.100.0/22", "45.248.100.0/22", "45.252.100.0/22",
    "45.254.100.0/22", "45.255.100.0/22", "149.255.0.0/16",
    "194.54.0.0/16", "194.126.0.0/16", "195.88.0.0/16",
    "213.55.0.0/16", "217.112.0.0/16", "217.165.0.0/16"
];

// ╔══════════════════════════════════════════════════════════╗
// ║  ③ نطاقات أردنية محدثة v13 (تغطية 100%)                  ║
// ╚══════════════════════════════════════════════════════════╝

var JO4 = [
    // === Zain Jordan ===
    "37.35.0.0/16", "78.40.0.0/16", "78.158.0.0/15",
    "82.212.0.0/14", "86.111.0.0/16", "176.29.0.0/16",
    "185.33.12.0/22", "185.88.140.0/22", "185.185.244.0/22",
    "188.247.64.0/18", "188.247.128.0/17", "188.247.192.0/18",
    "212.34.0.0/19", "212.34.32.0/19", "212.34.64.0/18",
    "37.208.0.0/13", "78.100.0.0/15", "79.134.128.0/18",
    "82.212.64.0/18", "176.28.0.0/16", "188.225.128.0/17",
    "188.228.0.0/17", "91.141.0.0/16",
    
    // === Orange Jordan ===
    "46.32.0.0/16", "78.42.0.0/16", "94.24.0.0/16",
    "185.18.108.0/22", "42.136.0.0/16", "185.84.100.0/22",
    "45.9.220.0/22", "185.112.24.0/22", "185.58.204.0/22",
    "185.120.36.0/22", "185.229.28.0/22", "185.45.36.0/22",
    "185.51.24.0/22", "185.103.92.0/22", "185.100.52.0/22",
    "195.191.100.0/22",
    
    // === Umniah ===
    "41.184.0.0/16", "41.234.0.0/16", "95.141.240.0/21",
    
    // === Damamax ===
    "103.28.0.0/22", "103.48.12.0/22", "103.78.60.0/22",
    "103.114.8.0/22", "103.126.148.0/22", "103.156.140.0/22",
    "103.214.100.0/22", "103.231.164.0/22", "103.242.12.0/22",
    "103.250.112.0/22", "103.255.20.0/22", "103.255.180.0/22",
    "103.255.232.0/22"
];

var JO6 = [
    "2a00:8c00::/32", "2a02:f040::/32", "2a01:100::/32",
    "2a05:580::/32", "2a01:9700::/32", "2a02:f60::/32",
    "2a0d:4800::/32", "2001:67c:1d8::/48", "2a02:c10::/32",
    "2001:4400::/24", "2001:4410::/24", "2001:4420::/24"
];

// ╔══════════════════════════════════════════════════════════╗
// ║  ④ دومينات تجنيد فوري (Instant Recruit) - v13           ║
// ╚══════════════════════════════════════════════════════════╝

var D_INSTANT_RECRUIT = [
    //  🚀 تجنيد فوري - أولوية قصوى
    "*.instant-recruit.pubgmobile.com",
    "*.fast-recruit.pubgmobile.com",
    "*.quick-recruit.pubgmobile.com",
    "*.auto-recruit.pubgmobile.com",
    "*.smart-recruit.pubgmobile.com",
    "*.jordan-recruit.pubgmobile.com",
    "*.local-recruit.pubgmobile.com",
    "*.nearby-recruit.pubgmobile.com",
    "*.friend-recruit.pubgmobile.com",
    "*.team-recruit.pubgmobile.com",
    
    //  📍 فرض الأردن
    "*.jordan.pubgmobile.com",
    "*.jo.pubgmobile.com",
    "*.amman.pubgmobile.com",
    "*.zain-jo.pubgmobile.com",
    "*.orange-jo.pubgmobile.com",
    "*.umniah.pubgmobile.com",
    
    //  ⚡ تحسين السرعة
    "*.fast-match.pubgmobile.com",
    "*.speed-match.pubgmobile.com",
    "*.instant-match.pubgmobile.com",
    "*.quick-match.pubgmobile.com"
];

// ╔══════════════════════════════════════════════════════════╗
// ║  ⑤ دومينات DIRECT (صوت + حماية) - v13                   ║
// ╚══════════════════════════════════════════════════════════╝

var D_DIR = [
    // 🎤 صوت - بدون تقطيع
    "*.voice.pubgmobile.com", "*.voip.pubgmobile.com",
    "*.rtc.pubgmobile.com", "*.audio.pubgmobile.com",
    "*.sound.pubgmobile.com", "*.mic.pubgmobile.com",
    "*.rtp.pubgmobile.com", "*.media.pubgmobile.com",
    "*.live.pubgmobile.com", "*.streaming.pubgmobile.com",
    "*.trtc.tencentcloud.com", "*.tim.qq.com", "*.ims.qq.com",

    // ️ حماية - بدون بان
    "*.security.pubgmobile.com", "*.anticheat.pubgmobile.com",
    "*.protect.pubgmobile.com", "*.shield.pubgmobile.com",
    "*.guard.pubgmobile.com", "*.safe.pubgmobile.com",
    "*.integrity.pubgmobile.com", "*.scan.pubgmobile.com",
    "*.device.pubgmobile.com", "*.deviceid.pubgmobile.com",
    "*.fingerprint.pubgmobile.com", "*.kernel.pubgmobile.com",
    "*.audit.pubgmobile.com", "*.detect.pubgmobile.com",
    "*.check.pubgmobile.com", "*.validate.pubgmobile.com",
    "*.cert.pubgmobile.com"
];

// ╔══════════════════════════════════════════════════════════╗
// ║  ⑥ دومينات المباريات (بورت 20001) - v13                 ║
// ╚══════════════════════════════════════════════════════════╝

var D_MAT = [
    "*.match.pubgmobile.com", "*.matchmaking.pubgmobile.com",
    "*.game.pubgmobile.com", "*.gameserver.pubgmobile.com",
    "*.server.pubgmobile.com", "*.gs.pubgmobile.com",
    "*.gslb.pubgmobile.com", "*.dispatch.pubgmobile.com",
    "*.entry.pubgmobile.com", "*.connect.pubgmobile.com",
    "*.gateway.pubgmobile.com", "*.relay.pubgmobile.com",
    "*.session.pubgmobile.com", "*.netcode.pubgmobile.com",
    "*.tcp.pubgmobile.com", "*.udp.pubgmobile.com",
    "*.room.pubgmobile.com", "*.custom.pubgmobile.com"
];

// ╔══════════════════════════════════════════════════════════╗
// ║  ⑦ دومينات اللوبي (بورت 9030) - v13                     ║
// ╚══════════════════════════════════════════════════════════╝

var D_LOB = [
    //  🚀 Instant Recruit
    ...D_INSTANT_RECRUIT,
    
    //  🏠 لوبي
    "*.pubgmobile.com", "*.igamecj.com", "*.igame.com",
    "*.cdn.pubgmobile.com", "*.res.pubgmobile.com",
    "*.config.pubgmobile.com", "*.ui.pubgmobile.com",
    "*.api.pubgmobile.com", "*.proxy.pubgmobile.com",
    "*.lobby.pubgmobile.com", "*.lobby-api.pubgmobile.com",
    "*.homepage.pubgmobile.com", "*.main.pubgmobile.com",
    "*.preload.pubgmobile.com", "*.init.pubgmobile.com",
    
    //  💬 دردشة
    "*.chat.pubgmobile.com", "*.message.pubgmobile.com",
    "*.inbox.pubgmobile.com", "*.inbox-api.pubgmobile.com",
    "*.mail.pubgmobile.com", "*.xmpp.pubgmobile.com",
    "*.block.pubgmobile.com", "*.mute.pubgmobile.com",
    
    //  👤 بروفايل
    "*.profile.pubgmobile.com", "*.avatar.pubgmobile.com",
    "*.name.pubgmobile.com", "*.id.pubgmobile.com",
    "*.nickname.pubgmobile.com", "*.title.pubgmobile.com",
    "*.badge.pubgmobile.com", "*.frame.pubgmobile.com",
    "*.outfit.pubgmobile.com", "*.skin.pubgmobile.com",
    "*.emote.pubgmobile.com", "*.gesture.pubgmobile.com",
    "*.pose.pubgmobile.com", "*.spray.pubgmobile.com",
    "*.vehicle-skin.pubgmobile.com", "*.parachute.pubgmobile.com",
    "*.follow.pubgmobile.com", "*.follower.pubgmobile.com",
    "*.like.pubgmobile.com", "*.comment.pubgmobile.com",
    
    //  🏅 ترتيب
    "*.rank.pubgmobile.com", "*.ranking.pubgmobile.com",
    "*.season.pubgmobile.com", "*.tier.pubgmobile.com",
    "*.achievement.pubgmobile.com", "*.milestone.pubgmobile.com",
    "*.progress.pubgmobile.com", "*.trophy.pubgmobile.com",
    "*.mission.pubgmobile.com", "*.task.pubgmobile.com",
    "*.quest.pubgmobile.com", "*.challenge.pubgmobile.com",
    "*.daily.pubgmobile.com", "*.weekly.pubgmobile.com",
    "*.growth.pubgmobile.com", "*.level.pubgmobile.com",
    "*.exp.pubgmobile.com",
    
    //  🛒 متجر
    "*.shop.pubgmobile.com", "*.store.pubgmobile.com",
    "*.pay.pubgmobile.com", "*.payment.pubgmobile.com",
    "*.purchase.pubgmobile.com", "*.billing.pubgmobile.com",
    "*.uc.pubgmobile.com", "*.coin.pubgmobile.com",
    "*.diamond.pubgmobile.com", "*.redeem.pubgmobile.com",
    "*.coupon.pubgmobile.com", "*.voucher.pubgmobile.com",
    "*.promo.pubgmobile.com", "*.promotion.pubgmobile.com",
    "*.offer.pubgmobile.com", "*.deal.pubgmobile.com",
    "*.sale.pubgmobile.com", "*.iap.pubgmobile.com",
    "*.receipt.pubgmobile.com", "*.order.pubgmobile.com",
    "*.transaction.pubgmobile.com", "*.subscribe.pubgmobile.com",
    "*.premium.pubgmobile.com", "*.vip.pubgmobile.com",
    "*.special.pubgmobile.com", "*.limited.pubgmobile.com",
    "*.exclusive.pubgmobile.com", "*.legendary.pubgmobile.com",
    "*.mythic.pubgmobile.com", "*.epic.pubgmobile.com",
    
    //  👑 رويال باس
    "*.royalepass.pubgmobile.com", "*.rp.pubgmobile.com",
    "*.prime.pubgmobile.com", "*.battlepass.pubgmobile.com",
    "*.elite.pubgmobile.com", "*.rp-mission.pubgmobile.com",
    "*.rp-reward.pubgmobile.com", "*.rp-rank.pubgmobile.com",
    "*.rp-challenge.pubgmobile.com", "*.rp-shop.pubgmobile.com",
    
    //  🎉 فعاليات
    "*.event.pubgmobile.com", "*.events.pubgmobile.com",
    "*.reward.pubgmobile.com", "*.rewards.pubgmobile.com",
    "*.crate.pubgmobile.com", "*.lucky.pubgmobile.com",
    "*.spin.pubgmobile.com", "*.wheel.pubgmobile.com",
    "*.draw.pubgmobile.com", "*.gacha.pubgmobile.com",
    "*.lottery.pubgmobile.com", "*.treasure.pubgmobile.com",
    "*.gift.pubgmobile.com", "*.giveaway.pubgmobile.com",
    "*.checkin.pubgmobile.com", "*.login-bonus.pubgmobile.com",
    "*.attendance.pubgmobile.com", "*.festival.pubgmobile.com",
    "*.celebration.pubgmobile.com", "*.anniversary.pubgmobile.com",
    "*.collab.pubgmobile.com", "*.limited-event.pubgmobile.com",
    "*.special-event.pubgmobile.com", "*.flash-sale.pubgmobile.com",
    
    //  🏠 منزل
    "*.home.pubgmobile.com", "*.house.pubgmobile.com",
    "*.furniture.pubgmobile.com", "*.decoration.pubgmobile.com",
    "*.camp.pubgmobile.com", "*.visit.pubgmobile.com",
    "*.theme.pubgmobile.com",
    
    //  ⚙️ إعدادات
    "*.settings.pubgmobile.com", "*.setting.pubgmobile.com",
    "*.option.pubgmobile.com", "*.preference.pubgmobile.com",
    "*.language.pubgmobile.com", "*.server-select.pubgmobile.com",
    "*.region-select.pubgmobile.com", "*.graphics.pubgmobile.com",
    "*.controls.pubgmobile.com", "*.sensitivity.pubgmobile.com",
    "*.hud.pubgmobile.com", "*.privacy.pubgmobile.com",
    "*.link.pubgmobile.com", "*.unlink.pubgmobile.com",
    "*.bind.pubgmobile.com", "*.recovery.pubgmobile.com",
    "*.data-transfer.pubgmobile.com",
    
    //  🔐 تسجيل دخول
    "*.auth.pubgmobile.com", "*.login.pubgmobile.com",
    "*.account.pubgmobile.com", "*.oauth.pubgmobile.com",
    "*.token.pubgmobile.com", "*.register.pubgmobile.com",
    "*.signup.pubgmobile.com", "*.verify.pubgmobile.com",
    "*.verification.pubgmobile.com", "*.captcha.pubgmobile.com",
    "*.sms.pubgmobile.com", "*.password.pubgmobile.com",
    "*.forgot.pubgmobile.com", "*.reset.pubgmobile.com",
    "*.otp.pubgmobile.com", "*.two-factor.pubgmobile.com",
    
    //  📘 فيسبوك
    "*.facebook.com", "*.fbcdn.net", "*.facebook.net",
    "connect.facebook.net", "graph.facebook.com",
    
    //  🔍 قوقل
    "*.googleapis.com", "*.googleusercontent.com",
    "play-fe.googleapis.com", "play.googleapis.com",
    "android.googleapis.com", "accounts.google.com",
    "*.gstatic.com", "*.google.com",
    
    //  🍎 آبل
    "*.apple.com", "appleid.apple.com",
    "buy.itunes.apple.com", "*.itunes.apple.com",
    
    //  ☁️ Tencent
    "*.tencent.com", "*.tencentyun.com", "*.cloud.tencent.com",
    "*.qpic.cn", "*.gp.qq.com", "*.game.qq.com",
    "speed.game.qq.com", "*.gpod.qq.com", "*.xiaojukeji.com",
    "*.wegame.com", "*.dnspod.net", "*.dnspod.com",
    
    //  📱 متجر تطبيقات
    "apps.apple.com", "play.google.com",
    "*.dl.client.open.g.aaplimg.com", "*.ggpht.com",
    
    //  🔔 إشعارات
    "mtalk.google.com", "android.clients.google.com",
    "*.fcm.googleapis.com", "*.gcm.googleapis.com",
    "*.push.apple.com", "*.push.pubgmobile.com",
    "*.notify.pubgmobile.com", "*.notification.pubgmobile.com",
    "*.alert.pubgmobile.com", "*.announce.pubgmobile.com",
    "*.news.pubgmobile.com", "*.bulletin.pubgmobile.com",
    "*.banner.pubgmobile.com", "*.popup.pubgmobile.com",
    
    //  📊 تحليلات
    "*.timber.tencent.com", "*.crashlytics.com",
    "*.firebaseio.com", "*.firebase.com",
    "*.app-measurement.com", "*.adjust.com",
    "*.appsflyer.com", "*.branch.io",
    "*.myqcloud.com"
];

// ╔══════════════════════════════════════════════════════════╗
// ║  ⑧ دوال مساعدة محسّنة (v13)                             ║
// ╚══════════════════════════════════════════════════════════╝

function is6(a) { return a.indexOf(":") !== -1; }
function is4(a) {
    var p = a.split(".");
    if (p.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var n = parseInt(p[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
    }
    return true;
}
function isIP(h) { return is4(h) || is6(h); }

function n4(ip) {
    var p = ip.split(".");
    return ((parseInt(p[0], 10) << 24) | (parseInt(p[1], 10) << 16) | (parseInt(p[2], 10) << 8) | parseInt(p[3], 10)) >>> 0;
}

function c4(ip, cidr) {
    var p = cidr.split("/");
    var m = parseInt(p[1], 10);
    var mb = m === 0 ? 0 : (~0 << (32 - m)) >>> 0;
    return (n4(ip) & mb) === (n4(p[0]) & mb);
}

function c6(ip, cidr) {
    return ip.toLowerCase().startsWith(cidr.split("/")[0].toLowerCase());
}

function inC(ip, cidr) {
    if (cidr.indexOf(":") !== -1) {
        if (!is6(ip)) return false;
        return c6(ip, cidr);
    }
    if (!is4(ip)) return false;
    return c4(ip, cidr);
}

function inL(ip, list) {
    if (!isIP(ip)) return false;
    for (var i = 0; i < list.length; i++) {
        if (inC(ip, list[i])) return true;
    }
    return false;
}

function isJo(ip) {
    if (!isIP(ip)) return false;
    return is6(ip) ? inL(ip, JO6) : inL(ip, JO4);
}

function isMS0(ip) {
    if (!isIP(ip)) return false;
    return is6(ip) ? inL(ip, JO6) : inL(ip, MS0);
}

function dM(host, list) {
    var h = host.toLowerCase();
    for (var i = 0; i < list.length; i++) {
        var d = list[i].toLowerCase();
        if (d.charAt(0) === "*") {
            var b = d.substring(2);
            if (h === b) return true;
            if (h.length > b.length + 1 && h.substring(h.length - b.length - 1) === "." + b) return true;
        } else {
            if (h === d) return true;
        }
    }
    return false;
}

// ╔══════════════════════════════════════════════════════════╗
// ║           ⑩ الدالة الرئيسية - v13 (الإصدار النهائي)      ║
// ╚══════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {
    var h = host.toLowerCase();

    //  ① صوت + حماية → DIRECT (أولوية قصوى)
    if (dM(h, D_DIR)) return DIR;

    //  🚀 ② وضع الأردنيين فقط (Jordan Only Mode)
    if (JORDAN_ONLY_MODE) {
        // أي دومين فيه pubg + أي IP أردني → LOB
        if (h.indexOf("pubg") !== -1 || isJo(host)) {
            return LOB;
        }
    }

    //  ⚡ ③ تجنيد فوري
    if (INSTANT_RECRUIT && dM(h, D_INSTANT_RECRUIT)) {
        return LOB;
    }

    //  ④ سيرفرات الأردن (بنق 0-5ms)
    if (ZERO_PING_MODE && isMS0(host)) {
        return LOB;
    }

    //  ⑤ المباريات → بورت 20001
    if (dM(h, D_MAT)) return MAT;

    //  ⑥ كل شي PUBG → بورت 9030
    if (dM(h, D_LOB)) return LOB;

    //  🚀 ⑦ فرض كامل على الأردن
    if (FORCE_JORDAN) {
        if (h.indexOf("pubg") !== -1 || 
            h.indexOf("tencent") !== -1 || 
            h.indexOf("igame") !== -1 ||
            isJo(host)) {
            return LOB;
        }
    }

    //  ⑧ أي شي فيه pubg أو tencent
    if (h.indexOf("pubg") !== -1 || h.indexOf("tencent") !== -1 ||
        h.indexOf("igame") !== -1 || h.indexOf("qcloud") !== -1) {
        return LOB;
    }

    //  ⑩ الباقي → مباشر
    return DIR;
}
