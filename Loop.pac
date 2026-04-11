// ╔══════════════════════════════════════════════════════════════╗
// ║  MiMo PAC Script v3.0                                       ║
// ║  ═══════════════════════════════════                        ║
// ║  ✅ Round Robin تدوير تلقائي                                ║
// ║  ✅ بورت 20005 للمباريات المنفصل                            ║
// ║  ✅ بورت 1080 للوبي остальн                                  ║
// ║  ✅ IPv6 مدعوم                                               ║
// ║  ✅ كل شي بالبروكسي - بدون DIRECT                           ║
// ╚══════════════════════════════════════════════════════════════╝


// ╔══════════════════════════════════════════════════════════════╗
// ║  ① إعدادات البروكسي                                        ║
// ╚══════════════════════════════════════════════════════════════╝

// بروكسي اللوبي - بورت 1080
// ضع سيرفراتك هنا ( Round Robin يوزع بينهم )
var PROXY_LOBBY = [
    "SOCKS5 212.35.66.45:1080",
    // "SOCKS5 IP2:1080",
    // "SOCKS5 [IPv6]:1080"
];

// بروكسي المباريات - بورت 20005 (منفصل عن اللوبي)
// ضع سيرفراتك هنا
var PROXY_MATCH = [
    "SOCKS5 212.35.66.45:20005",
    // "SOCKS5 IP2:20005",
    // "SOCKS5 [IPv6]:20005"
];


// ╔══════════════════════════════════════════════════════════════╗
// ║  ② Round Robin محرك التدوير                                 ║
// ║  يوزع الطلبات بالتناوب على السيرفرات                        ║
// ╚══════════════════════════════════════════════════════════════╝

var _rrL = 0; // عداد اللوبي
var _rrM = 0; // عداد المباريات

function getLobby() {
    _rrL = (_rrL + 1) % PROXY_LOBBY.length;
    return PROXY_LOBBY[_rrL];
}

function getMatch() {
    _rrM = (_rrM + 1) % PROXY_MATCH.length;
    return PROXY_MATCH[_rrM];
}


// ╔══════════════════════════════════════════════════════════════╗
// ║  ③ نطاقات المباريات → بورت 20005                            ║
// ╚══════════════════════════════════════════════════════════════╝

var D_MATCH = [
    // ═══ 🎮 مباريات وسيرفرات ═══
    "*.match.pubgmobile.com",
    "*.matchmaking.pubgmobile.com",
    "*.game-server.pubgmobile.com",
    "*.gameserver.pubgmobile.com",
    "*.gs.pubgmobile.com",
    "*.gslb.pubgmobile.com",
    "*.dispatch.pubgmobile.com",
    "*.entry.pubgmobile.com",
    "*.connect.pubgmobile.com",
    "*.gateway.pubgmobile.com",
    "*.relay.pubgmobile.com",
    "*.session.pubgmobile.com",

    // ═══ 🏟️ أوضاع اللعب ═══
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
    "*.room.pubgmobile.com",
    "*.custom.pubgmobile.com",

    // ═══ 🗺️ الخرائط ═══
    "*.erangel.pubgmobile.com",
    "*.miramar.pubgmobile.com",
    "*.sanhok.pubgmobile.com",
    "*.vikendi.pubgmobile.com",
    "*.livik.pubgmobile.com",
    "*.nusa.pubgmobile.com",
    "*.karakin.pubgmobile.com",
    "*.aftermath.pubgmobile.com",

    // ═══ 👀 مشاهدة وبث ═══
    "*.spectate.pubgmobile.com",
    "*.watch.pubgmobile.com",
    "*.replay.pubgmobile.com",
    "*.stream.pubgmobile.com",
    "*.broadcast.pubgmobile.com",

    // ═══ 🏆 بطولات ═══
    "*.tournament.pubgmobile.com",
    "*.esports.pubgmobile.com",
    "*.competitive.pubgmobile.com",
    "*.leaderboard.pubgmobile.com"
];


// ╔══════════════════════════════════════════════════════════════╗
// ║  ④ نطاقات اللوبي والباقي → بورت 1080                       ║
// ╚══════════════════════════════════════════════════════════════╝

var D_LOBBY = [
    // ═══ 🏠 لوبي ═══
    "*.lobby.pubgmobile.com",
    "*.lobby-api.pubgmobile.com",
    "*.main.pubgmobile.com",
    "*.homepage.pubgmobile.com",

    // ═══ 🔧 عام ═══
    "*.pubgmobile.com",
    "*.igamecj.com",
    "*.igame.com",
    "*.cdn.pubgmobile.com",
    "*.res.pubgmobile.com",
    "*.config.pubgmobile.com",
    "*.ui.pubgmobile.com",
    "*.api.pubgmobile.com",

    // ═══ 🎤 صوت ═══
    "*.voice.pubgmobile.com",
    "*.voip.pubgmobile.com",
    "*.rtc.pubgmobile.com",
    "*.audio.pubgmobile.com",
    "*.trtc.tencentcloud.com",
    "*.tim.qq.com",
    "*.ims.qq.com",

    // ═══ 🛡️ حماية ═══
    "*.security.pubgmobile.com",
    "*.anticheat.pubgmobile.com",
    "*.protect.pubgmobile.com",
    "*.shield.pubgmobile.com",
    "*.device.pubgmobile.com",
    "*.fingerprint.pubgmobile.com",
    "*.integrity.pubgmobile.com",
    "*.audit.pubgmobile.com",
    "*.detect.pubgmobile.com",
    "*.check.pubgmobile.com",
    "*.validate.pubgmobile.com",
    "*.cert.pubgmobile.com",

    // ═══ 📊 تقارير ═══
    "*.beacon.qq.com",
    "*.report.qq.com",
    "*.report.pubgmobile.com",
    "*.telemetry.pubgmobile.com",
    "*.analytics.pubgmobile.com",
    "*.track.pubgmobile.com",
    "*.log.pubgmobile.com",
    "*.monitor.pubgmobile.com",

    // ═══ 🎯 تجنيد ═══
    "*.recruit.pubgmobile.com",
    "*.team.pubgmobile.com",
    "*.squad.pubgmobile.com",
    "*.group.pubgmobile.com",
    "*.invite.pubgmobile.com",
    "*.friend.pubgmobile.com",
    "*.clan.pubgmobile.com",
    "*.guild.pubgmobile.com",
    "*.find-team.pubgmobile.com",
    "*.find-player.pubgmobile.com",

    // ═══ 💬 دردشة ═══
    "*.chat.pubgmobile.com",
    "*.message.pubgmobile.com",
    "*.inbox.pubgmobile.com",
    "*.mail.pubgmobile.com",
    "*.xmpp.pubgmobile.com",

    // ═══ 👤 بروفايل ═══
    "*.profile.pubgmobile.com",
    "*.avatar.pubgmobile.com",
    "*.id.pubgmobile.com",
    "*.nickname.pubgmobile.com",
    "*.skin.pubgmobile.com",
    "*.emote.pubgmobile.com",
    "*.outfit.pubgmobile.com",

    // ═══ 🏅 ترتيب وإنجازات ═══
    "*.rank.pubgmobile.com",
    "*.ranking.pubgmobile.com",
    "*.season.pubgmobile.com",
    "*.tier.pubgmobile.com",
    "*.achievement.pubgmobile.com",
    "*.mission.pubgmobile.com",
    "*.quest.pubgmobile.com",
    "*.progress.pubgmobile.com",

    // ═══ 🛒 متجر ═══
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

    // ═══ 👑 رويال باس ═══
    "*.royalepass.pubgmobile.com",
    "*.rp.pubgmobile.com",
    "*.elite.pubgmobile.com",
    "*.battlepass.pubgmobile.com",

    // ═══ 🎉 فعاليات ═══
    "*.event.pubgmobile.com",
    "*.reward.pubgmobile.com",
    "*.crate.pubgmobile.com",
    "*.lucky.pubgmobile.com",
    "*.spin.pubgmobile.com",
    "*.gacha.pubgmobile.com",
    "*.gift.pubgmobile.com",
    "*.checkin.pubgmobile.com",

    // ═══ 🏠 منزل ═══
    "*.home.pubgmobile.com",
    "*.house.pubgmobile.com",
    "*.furniture.pubgmobile.com",
    "*.camp.pubgmobile.com",

    // ═══ ⚙️ إعدادات ═══
    "*.settings.pubgmobile.com",
    "*.language.pubgmobile.com",
    "*.graphics.pubgmobile.com",
    "*.controls.pubgmobile.com",
    "*.sensitivity.pubgmobile.com",

    // ═══ 🔐 تسجيل دخول ═══
    "*.auth.pubgmobile.com",
    "*.login.pubgmobile.com",
    "*.account.pubgmobile.com",
    "*.oauth.pubgmobile.com",
    "*.token.pubgmobile.com",
    "*.verify.pubgmobile.com",
    "*.captcha.pubgmobile.com",

    // ═══ 📥 تحميل ═══
    "*.download.pubgmobile.com",
    "*.patch.pubgmobile.com",
    "*.update.pubgmobile.com",
    "*.resource.pubgmobile.com",
    "*.apk.pubgmobile.com",
    "*.obb.pubgmobile.com",

    // ═══ 🔔 إشعارات ═══
    "*.push.pubgmobile.com",
    "*.notify.pubgmobile.com",
    "*.notification.pubgmobile.com",
    "*.announce.pubgmobile.com",
    "*.news.pubgmobile.com",

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

    // ═══ 📱 متجر ═══
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

    // ═══ 🌐 DNS ═══
    "*.dns.pubgmobile.com",
    "*.resolve.pubgmobile.com",
    "*.geoip.pubgmobile.com",
    "*.iplookup.pubgmobile.com",

    // ═══ 🔔 Push ═══
    "mtalk.google.com",
    "android.clients.google.com",
    "*.fcm.googleapis.com",
    "*.gcm.googleapis.com",
    "*.push.apple.com"
];


// ╔══════════════════════════════════════════════════════════════╗
// ║  ⑤ نطاقات IP أردنية                                        ║
// ╚══════════════════════════════════════════════════════════════╝

// ═══ IPv4 ═══
var JO4 = [
    // ── Zain ──
    "37.35.0.0/16",
    "37.208.0.0/13",
    "78.40.0.0/16",
    "78.100.0.0/15",
    "78.158.0.0/15",
    "79.134.128.0/18",
    "82.212.0.0/14",
    "82.212.64.0/18",
    "86.111.0.0/16",
    "91.141.0.0/16",
    "176.28.0.0/16",
    "176.29.0.0/16",
    "185.33.12.0/22",
    "185.88.140.0/22",
    "185.185.244.0/22",
    "188.225.128.0/17",
    "188.228.0.0/17",
    "188.247.64.0/18",
    "188.247.128.0/17",
    "188.247.192.0/18",
    "212.34.0.0/16",
    "212.34.0.0/19",
    "212.34.32.0/19",
    "212.34.96.0/19",
    "212.35.0.0/16",

    // ── Orange ──
    "46.32.0.0/16",
    "78.42.0.0/16",
    "94.24.0.0/16",
    "185.18.108.0/22",
    "185.45.36.0/22",
    "185.51.24.0/22",
    "185.84.100.0/22",
    "185.100.52.0/22",
    "185.103.92.0/22",
    "185.112.24.0/22",
    "185.120.36.0/22",
    "185.229.28.0/22",
    "195.191.100.0/22",
    "45.9.220.0/22",
    "185.58.204.0/22",

    // ── Umniah ──
    "41.184.0.0/16",
    "41.234.0.0/16",
    "42.136.0.0/16",
    "95.141.240.0/21",

    // ── حكومة + جامعات ──
    "193.188.0.0/16",
    "194.54.0.0/16",
    "213.55.0.0/16",

    // ── شركات إضافية ──
    "149.255.0.0/16",
    "194.126.0.0/16",
    "195.88.0.0/16",
    "217.112.0.0/16",
    "217.165.0.0/16"
];

// ═══ IPv6 ═══
var JO6 = [
    "2a00:8c00::/32",
    "2a02:f040::/32",
    "2a01:100::/32",
    "2a05:580::/32",
    "2a02:f60::/32",
    "2a0d:4800::/32",
    "2001:67c:1d8::/48",
    "2a02:c10::/32"
];


// ╔══════════════════════════════════════════════════════════════╗
// ║  ⑥ دوال مساعدة                                             ║
// ╚══════════════════════════════════════════════════════════════╝

function is4(a) {
    var p = a.split(".");
    if (p.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var n = parseInt(p[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
    }
    return true;
}

function is6(a) {
    return a.indexOf(":") !== -1;
}

function isIP(a) {
    return is4(a) || is6(a);
}

function n4(ip) {
    var p = ip.split(".");
    return ((parseInt(p[0], 10) << 24) |
            (parseInt(p[1], 10) << 16) |
            (parseInt(p[2], 10) << 8) |
             parseInt(p[3], 10)) >>> 0;
}

function exp6(ip) {
    var s = ip.toLowerCase();
    var zi = s.indexOf("%");
    if (zi !== -1) s = s.substring(0, zi);
    var pts = s.split(":");
    var db = -1;
    for (var i = 0; i < pts.length; i++) {
        if (pts[i] === "" && i > 0 && i < pts.length - 1) db = i;
    }
    var e = [];
    if (db !== -1) {
        for (var i = 0; i < db; i++) { if (pts[i] !== "") e.push(pts[i]); }
        var c = 0;
        for (var i = 0; i < pts.length; i++) { if (pts[i] !== "") c++; }
        var f = 8 - c;
        for (var i = 0; i < f; i++) e.push("0000");
        for (var i = db + 1; i < pts.length; i++) { if (pts[i] !== "") e.push(pts[i]); }
    } else {
        e = pts;
    }
    while (e.length < 8) e.push("0000");
    var r = [];
    for (var i = 0; i < 8; i++) {
        var p = e[i] || "0";
        while (p.length < 4) p = "0" + p;
        r.push(p);
    }
    return r.join(":");
}

function b6(ip) {
    var h = exp6(ip).replace(/:/g, ""), b = "";
    for (var i = 0; i < h.length; i++) {
        var v = parseInt(h.charAt(i), 16).toString(2);
        while (v.length < 4) v = "0" + v;
        b += v;
    }
    return b;
}

function c4(ip, cidr) {
    var p = cidr.split("/"), m = parseInt(p[1], 10);
    var mb = m === 0 ? 0 : (~0 << (32 - m)) >>> 0;
    return (n4(ip) & mb) === (n4(p[0]) & mb);
}

function c6(ip, cidr) {
    var p = cidr.split("/"), ml = parseInt(p[1], 10);
    var ib = b6(ip), pb = b6(p[0]);
    for (var i = 0; i < ml; i++) {
        if (ib.charAt(i) !== pb.charAt(i)) return false;
    }
    return true;
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
    if (is6(ip)) return inL(ip, JO6);
    return inL(ip, JO4);
}

function dM(host, list) {
    var h = host.toLowerCase();
    for (var i = 0; i < list.length; i++) {
        var d = list[i].toLowerCase();
        if (d.charAt(0) === "*") {
            var b = d.substring(2);
            if (h === b) return true;
            if (h.length > b.length + 1 &&
                h.substring(h.length - b.length - 1) === "." + b) return true;
        } else {
            if (h === d) return true;
        }
    }
    return false;
}


// ╔══════════════════════════════════════════════════════════════╗
// ║  ⑧ الدالة الرئيسية                                         ║
// ║                                                              ║
// ║  المنطق:                                                     ║
// ║  🎮 نطاقات مباريات → بورت 20005 (Round Robin)              ║
// ║  🏠 نطاقات لوبي + كل شي → بورت 1080 (Round Robin)        ║
// ║  🇯🇴 IPs أردنية → بورت 1080                                 ║
// ║  ❌ لا يوجد DIRECT                                          ║
// ╚══════════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {

    var h = host.toLowerCase();

    // ═══ ① نطاقات مباريات → بورت 20005 ═══
    if (dM(h, D_MATCH)) {
        return getMatch();
    }

    // ═══ ② نطاقات لوبي + كل شي PUBG → بورت 1080 ═══
    if (dM(h, D_LOBBY)) {
        return getLobby();
    }

    // ═══ ③ IP أردني → بورت 1080 ═══
    if (isJo(host)) {
        return getLobby();
    }

    // ═══ ④ ضمان - أي شي فيه PUBG → بورت 1080 ═══
    if (h.indexOf("pubg") !== -1 ||
        h.indexOf("tencent") !== -1 ||
        h.indexOf("igamecj") !== -1 ||
        h.indexOf("igame") !== -1 ||
        h.indexOf("qcloud") !== -1 ||
        h.indexOf("tencentyun") !== -1 ||
        h.indexOf("cloud.tencent") !== -1) {
        return getLobby();
    }

    // ═══ ⑤ الباقي → بورت 1080 (كل شي بالبروكسي) ═══
    return getLobby();
}
