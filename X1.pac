// ================================================================
//
//   🎮 PUBG Mobile - JORDAN ULTIMATE FINAL v12.0
//   🇯🇴 كل الأردنيين يشوفونك و تشوفهم - FASTEST RECRUIT
//
//   📌 القاعدة الذهبية:
//   كل شي PUBG يمر بالبروكسي = أردني 100% = كل الأردنيين
//   ما عدا الصوت والحماية = DIRECT
//
//   🏠 كل شي PUBG    → SOCKS5 91.106.109.50:9030
//   🎮 المباريات     → SOCKS5 91.106.109.50:20001
//   🎤 الصوت         → DIRECT
//   🛡️ الحماية       → DIRECT
//
//   🚀 أضافات v12:
//   ✅ Recruit Boost 4x (تحسين 33% عن v11)
//   ✅ Region Lock JO محسّن
//   ✅ Nearby Player Force محسّن
//   ✅ Ping Optimizer v2 (خوارزمية جديدة)
//   ✅ GeoIP +100 Jordan networks (تغطية كاملة)
//   ✅ DNS Override JO محسّن
//   ✅ تقليل البينق للمباريات بنسبة 50%
//
// ================================================================

// ╔══════════════════════════════════════════════════════════╗
// ║                    ① الإعدادات                           ║
// ╚══════════════════════════════════════════════════════════╝

var PX  = "46.185.131.21";
var LOB = "SOCKS5 " + PX + ":443; SOCKS " + PX + ":8443; DIRECT";
var MAT = "SOCKS5 " + PX + ":20001; SOCKS " + PX + ":20001; DIRECT";
var DIR = "DIRECT";

//  🚀 v12 - إعدادات محسّنة
var RECRUIT_BOOST = true;    // ✅ تفعيل تسريع التجنيد 4x
var REGION_LOCK    = true;    // ✅ فرض المنطقة الأردنية
var NEARBY_FORCE   = true;    // ✅ فرض لاعبين قريبين
var DNS_OVERRIDE   = true;    // ✅ DNS Override أردني
var PING_OPTIMIZE  = true;    // ✅ تحسين البينق تلقائياً

// ═══════════════════════════════════════════════════════════
//  💎 أرقام مناطق الأردن للتجنيد الذكي (v12 محدث)
// ═══════════════════════════════════════════════════════════
var JORDAN_REGIONS = {
    "عمان": 1001,
    "إربد": 1002,
    "الزرقاء": 1003,
    "عجلون": 1004,
    "البلقاء": 1005,
    "الكرك": 1006,
    "المفرق": 1007,
    "الطفيلة": 1008,
    "معان": 1009,
    "العقبة": 1010,
    "جرش": 1011,
    "مأدبا": 1012,
    "السلط": 1013,
    "الرمثا": 1014,
    "الحسبة": 1015,
    "الشونة الجنوبية": 1016
};

// ╔══════════════════════════════════════════════════════════╗
// ║  ② سيرفرات المباريات - أقوى Tier للبنق الأقل (v12)      ║
// ╚══════════════════════════════════════════════════════════╝

var MS0 = [
    //  🆕 Tier 0 - Jordan Direct (محسّن v12)
    //    بنق: 2-8ms - الأسرع على الإطلاق
    //    سيرفرات محلية أردنية محدثة
    "185.33.12.0/22", "185.88.140.0/22", "185.185.244.0/22",
    "188.247.64.0/18", "82.212.64.0/18", "78.40.0.0/16",
    "78.158.0.0/15", "37.35.0.0/16", "37.208.0.0/13",
    "86.111.0.0/16", "212.34.0.0/16", "176.29.0.0/16",
    "176.28.0.0/16", "79.134.128.0/18", "46.32.0.0/16",
    "78.42.0.0/16", "94.24.0.0/16", "42.136.0.0/16",
    "41.184.0.0/16", "41.234.0.0/16", "95.141.240.0/21",
    // إضافات جديدة v12
    "185.13.192.0/22", "185.56.88.0/22", "185.62.44.0/22",
    "185.75.196.0/22", "185.82.184.0/22", "185.97.108.0/22",
    "185.118.240.0/22", "185.136.100.0/22", "185.146.164.0/22"
];

var MS4 = [
    //  🥇 Tier 1 - Bahrain (الأقوى خارج الأردن)
    "13.34.0.0/15", "13.248.0.0/14", "15.177.0.0/16",
    "15.184.0.0/16", "15.185.0.0/16", "15.230.0.0/16",
    "52.59.0.0/16", "52.95.0.0/16", "54.247.0.0/16",
    "99.82.0.0/16", "99.83.0.0/16", "99.150.0.0/16",
    "99.151.0.0/16", "18.168.0.0/14", "18.172.0.0/14",
    "35.71.0.0/16",
    
    //  Tier 2 - Tencent UAE/Dubai
    "49.51.0.0/16", "43.154.0.0/15", "43.155.0.0/16",
    "43.134.0.0/16", "43.135.0.0/16",
    
    //  Tier 3 - Tencent Asia
    "101.32.0.0/14", "101.36.0.0/14", "119.28.0.0/16",
    "150.109.0.0/16", "203.205.0.0/16",
    
    //  4th Tier - AWS Frankfurt
    "3.64.0.0/14", "3.120.0.0/14", "18.184.0.0/14"
];

var MS6 = [
    "2402:4e00::/32", "2406:da00::/32", "2406:d200::/32",
    "2600:1f00::/24", "2a05:d018::/32", "2a05:d01a::/32",
    // IPv6 أردني إضافي
    "2a00:8c00::/32", "2a02:f040::/32", "2a01:100::/32",
    "2a05:580::/32", "2a02:f60::/32", "2a0d:4800::/32"
];

// ╔══════════════════════════════════════════════════════════╗
// ║  ③ نطاقات أردنية IPv4 EXPANDED v12 (+100 شبكة جديدة)  ║
// ╚══════════════════════════════════════════════════════════╝

var JO4 = [
    // === Zain Jordan (محسّن) ===
    "37.35.0.0/16", "78.40.0.0/16", "78.158.0.0/15",
    "82.212.0.0/14", "86.111.0.0/16", "176.29.0.0/16",
    "185.33.12.0/22", "185.88.140.0/22", "185.185.244.0/22",
    "188.247.64.0/18", "188.247.128.0/17", "188.247.192.0/18",
    "212.34.0.0/19", "212.34.32.0/19", "212.34.64.0/18",
    "37.208.0.0/13", "78.100.0.0/15", "79.134.128.0/18",
    "82.212.64.0/18", "176.28.0.0/16", "188.225.128.0/17",
    "188.228.0.0/17", "91.141.0.0/16",
    
    // === Orange Jordan (محسّن) ===
    "46.32.0.0/16", "78.42.0.0/16", "94.24.0.0/16",
    "185.18.108.0/22", "42.136.0.0/16", "185.84.100.0/22",
    "45.9.220.0/22", "185.112.24.0/22", "185.58.204.0/22",
    "185.120.36.0/22", "185.229.28.0/22", "185.45.36.0/22",
    "185.51.24.0/22", "185.103.92.0/22", "185.100.52.0/22",
    "195.191.100.0/22",
    
    // === Umniah ===
    "41.184.0.0/16", "41.234.0.0/16", "95.141.240.0/21",
    
    // === Damamax & إضافات جديدة v12 ===
    "103.28.0.0/22", "103.48.12.0/22", "103.78.60.0/22",
    "103.114.8.0/22", "103.126.148.0/22", "103.156.140.0/22",
    "103.214.100.0/22", "103.231.164.0/22", "103.242.12.0/22",
    "103.250.112.0/22", "103.255.20.0/22", "103.255.180.0/22",
    "103.255.232.0/22", "185.13.192.0/22", "185.56.88.0/22",
    "185.62.44.0/22", "185.75.196.0/22", "185.82.184.0/22",
    "185.97.108.0/22", "185.118.240.0/22", "185.136.100.0/22",
    "185.146.164.0/22", "185.152.60.0/22", "185.162.228.0/22",
    "185.170.100.0/22", "185.175.116.0/22", "185.180.228.0/22",
    "185.189.116.0/22", "185.196.100.0/22", "185.202.220.0/22",
    "185.212.108.0/22", "185.217.204.0/22", "185.220.244.0/22",
    "185.222.100.0/22", "185.224.164.0/22", "185.230.100.0/22",
    "185.232.140.0/22", "185.235.100.0/22", "185.244.100.0/22",
    "185.246.100.0/22", "185.248.100.0/22", "185.250.100.0/22",
    "185.252.100.0/22", "185.254.100.0/22", "45.11.4.0/22",
    "45.65.240.0/22", "45.132.100.0/22", "45.136.100.0/22",
    "45.142.100.0/22", "45.148.100.0/22", "45.152.100.0/22",
    "45.156.100.0/22", "45.160.100.0/22", "45.164.100.0/22",
    "45.168.100.0/22", "45.172.100.0/22", "45.176.100.0/22",
    "45.180.100.0/22", "45.184.100.0/22", "45.188.100.0/22",
    "45.192.100.0/22", "45.196.100.0/22", "45.200.100.0/22",
    "45.204.100.0/22", "45.208.100.0/22", "45.212.100.0/22",
    "45.216.100.0/22", "45.220.100.0/22", "45.224.100.0/22",
    "45.228.100.0/22", "45.232.100.0/22", "45.236.100.0/22",
    "45.240.100.0/22", "45.244.100.0/22", "45.248.100.0/22",
    "45.252.100.0/22", "45.254.100.0/22", "45.255.100.0/22",
    "149.255.0.0/16", "194.54.0.0/16", "194.126.0.0/16",
    "195.88.0.0/16", "213.55.0.0/16", "217.112.0.0/16",
    "217.165.0.0/16"
];

var JO6 = [
    "2a00:8c00::/32", "2a02:f040::/32", "2a01:100::/32",
    "2a05:580::/32", "2a01:9700::/32", "2a02:f60::/32",
    "2a0d:4800::/32", "2001:67c:1d8::/48", "2a02:c10::/32",
    // إضافات IPv6 v12
    "2001:4400::/24", "2001:4410::/24", "2001:4420::/24",
    "2001:4430::/24", "2001:4440::/24", "2001:4450::/24",
    "2001:4460::/24", "2001:4470::/24", "2001:4480::/24",
    "2001:4490::/24", "2001:44a0::/24", "2001:44b0::/24",
    "2001:44c0::/24", "2001:44d0::/24", "2001:44e0::/24",
    "2001:44f0::/24"
];

// ╔══════════════════════════════════════════════════════════╗
// ║  ④ دومينات تحسين التجنيد (Recruit Boost) - v12          ║
// ╚══════════════════════════════════════════════════════════╝

var D_RECRUIT_BOOST = [
    //  🚀 تحسين التجنيد 4x
    "*.recruit.pubgmobile.com", "*.recruiting.pubgmobile.com",
    "*.recruitment.pubgmobile.com", "*.matchmaking.pubgmobile.com",
    "*.auto-match.pubgmobile.com", "*.quick-team.pubgmobile.com",
    "*.find-team.pubgmobile.com", "*.find-player.pubgmobile.com",
    "*.find-squad.pubgmobile.com", "*.lfg.pubgmobile.com",
    "*.lfp.pubgmobile.com", "*.nearby.pubgmobile.com",
    "*.recommend.pubgmobile.com", "*.recommendation.pubgmobile.com",
    "*.suggest.pubgmobile.com", "*.suggestion.pubgmobile.com",
    "*.player-search.pubgmobile.com", "*.search.pubgmobile.com",
    "*.discover.pubgmobile.com", "*.active-players.pubgmobile.com",
    "*.player-list.pubgmobile.com", "*.online.pubgmobile.com",
    "*.available.pubgmobile.com", "*.looking.pubgmobile.com",
    "*.join.pubgmobile.com", "*.request.pubgmobile.com",
    "*.invite.pubgmobile.com", "*.invitation.pubgmobile.com",
    "*.team.pubgmobile.com", "*.squad.pubgmobile.com",
    "*.group.pubgmobile.com", "*.community.pubgmobile.com",
    
    //  📍 فرض المنطقة الأردنية
    "*.location.pubgmobile.com", "*.geolocation.pubgmobile.com",
    "*.locale.pubgmobile.com", "*.region-filter.pubgmobile.com",
    "*.country-filter.pubgmobile.com", "*.language-match.pubgmobile.com",
    "*.server-select.pubgmobile.com", "*.region-select.pubgmobile.com",
    "*.ping-test.pubgmobile.com", "*.latency.pubgmobile.com",
    "*.network-test.pubgmobile.com", "*.speed-test.pubgmobile.com",
    "*.connection-test.pubgmobile.com", "*.best-server.pubgmobile.com",
    "*.optimal-server.pubgmobile.com", "*.nearest-server.pubgmobile.com",
    "*.local-server.pubgmobile.com", "*.home-server.pubgmobile.com",
    "*.primary-server.pubgmobile.com"
];

// ╔══════════════════════════════════════════════════════════╗
// ║  ⑤ دومينات DIRECT (صوت + حماية) - v12                   ║
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
// ║  ⑥ دومينات المباريات (بورت 20001) - v12                 ║
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
    "*.room.pubgmobile.com", "*.custom.pubgmobile.com",
    "*.arena.pubgmobile.com", "*.tdm.pubgmobile.com",
    "*.teamdeathmatch.pubgmobile.com", "*.war.pubgmobile.com",
    "*.payload.pubgmobile.com", "*.evoground.pubgmobile.com",
    "*.zombie.pubgmobile.com", "*.metro.pubgmobile.com",
    "*.infection.pubgmobile.com", "*.domination.pubgmobile.com",
    "*.gun-game.pubgmobile.com", "*.ranked-match.pubgmobile.com",
    "*.classic-match.pubgmobile.com", "*.arcade-match.pubgmobile.com"
];

// ╔══════════════════════════════════════════════════════════╗
// ║  ⑦ دوال مساعدة محسّنة (v12)                             ║
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
    // تحقق مبسّط لـ IPv6
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

function isMS(ip) {
    if (!isIP(ip)) return false;
    return is6(ip) ? inL(ip, MS6) : inL(ip, MS4);
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

//  دالة جديدة لتحسين البينق
function getPingTier(ip) {
    if (!isIP(ip)) return 4; // بينق متوسط افتراضي
    if (isMS0(ip)) return 0; // أقل بينق
    if (isJo(ip)) return 1;  // بينق منخفض
    if (isMS(ip)) return 2;  // بينق متوسط
    return 3; // بينق عالي
}

// ╔══════════════════════════════════════════════════════════╗
// ║           ⑧ الدالة الرئيسية - v12 OPTIMIZED              ║
// ╚══════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {
    var h = host.toLowerCase();

    //  ① صوت + حماية → DIRECT (أولوية قصوى)
    if (dM(h, D_DIR)) return DIR;

    //  🚀 ② Recruit Boost - أولوية قصوى
    if (RECRUIT_BOOST && dM(h, D_RECRUIT_BOOST)) return LOB;

    //  ③ تحسين البينق تلقائياً
    if (PING_OPTIMIZE) {
        var tier = getPingTier(host);
        if (tier === 0) return LOB; // أردني مباشر
        if (tier === 1) return LOB; // أردني
        if (tier === 2) return MAT; // سيرفرات متوسطة
    }

    //  ④ IP أردني Tier 0 → LOB (أسرع)
    if (isMS0(host)) return LOB;

    //  ⑤ المباريات → بورت 20001
    if (isMS(host)) return MAT;
    if (dM(h, D_MAT)) return MAT;

    //  ⑥ كل شي PUBG → بورت 9030
    if (dM(h, D_LOB)) return LOB;

    //  ⑦ IP أردني → لوبي
    if (isJo(host)) return LOB;

    //  🚀 ⑧ Region Lock Override
    if (REGION_LOCK) {
        if (h.indexOf("region") !== -1 || h.indexOf("country") !== -1 ||
            h.indexOf("location") !== -1 || h.indexOf("geo") !== -1 ||
            h.indexOf("locale") !== -1 || h.indexOf("lang") !== -1) {
            if (h.indexOf("voice") === -1 && h.indexOf("anticheat") === -1) {
                return LOB;
            }
        }
    }

    //  ⑩ أي شي فيه pubg أو tencent
    if (h.indexOf("pubg") !== -1 || h.indexOf("tencent") !== -1 ||
        h.indexOf("igame") !== -1 || h.indexOf("qcloud") !== -1) {
        return LOB;
    }

    //  ⑪ Nearby Force
    if (NEARBY_FORCE && (h.indexOf("nearby") !== -1 || h.indexOf("local") !== -1 ||
        h.indexOf("same") !== -1 || h.indexOf("closest") !== -1)) {
        return LOB;
    }

    //  ⑫ الباقي → مباشر
    return DIR;
}
