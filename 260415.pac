// =====================================================
// JO GOLD HYBRID PAC v3.0 — ADVANCED + UDP SUPPORT
// Author: JO GOLD TEAM
// =====================================================
// هدفه:
// 1) الأردن أولاً (Tight → Full)
// 2) اللوبي على بروكسي أردني ثابت
// 3) الماتش على بروكسي أردني/منخفض بنق
// 4) الفويس على مسار مستقل (UDP aware)
// 5) fallback إلى الخليج فقط
// 6) Direct لكل شيء عادي
// 7) UDP-aware proxy selection (SOCKS5)
// =====================================================

// ============================
// ⚙️ CONFIGURATION
// ============================
var CONFIG = {
    DNS_CACHE_MAX: 512,
    USE_SOCKS5_FOR_UDP: true,
    BLOCK_UNKNOWN: true,
    LOG_ENABLED: false,
    PING_THRESHOLD_MS: 80,     // للبروكسيات السريعة فقط
    UDP_PORTS: [5060, 10012, 3478, 3479, 49152, 65000],
    VOICE_UDP_PORTS: [10012, 3478, 3479, 49152]
};

// ============================
// 🖥️ PROXIES — EDIT HERE
// ============================
var PROXY = {
    LOBBY:     "PROXY 176.29.153.95:9030; PROXY 212.35.66.45:9030; DIRECT",
    MATCH_TCP: "PROXY 176.29.153.95:20001; PROXY 82.212.84.33:20001; DIRECT",
    MATCH_UDP: "SOCKS5 176.29.153.95:20001; SOCKS5 82.212.84.33:20001; DIRECT",
    VOICE_TCP: "PROXY 82.212.84.33:10012; PROXY 82.212.84.33:20001; DIRECT",
    VOICE_UDP: "SOCKS5 82.212.84.33:10012; SOCKS5 176.29.153.95:10012; DIRECT",
    UPDATE:    "PROXY 212.35.66.45:80; DIRECT",
    GULF_FALLBACK: "PROXY 85.159.100.10:8080; DIRECT",
    BLOCK:     "PROXY 127.0.0.1:9",
    DIRECT:    "DIRECT"
};

// ============================
// 🔐 SAFE DIRECT DOMAINS (DNS + TLS)
// ============================
var SAFE_DIRECT_DOMAINS = {
    // Apple
    "captive.apple.com":1, "time.apple.com":1, "ocsp.apple.com":1,
    "push.apple.com":1, "gs-loc.apple.com":1,
    // Google
    "clients3.google.com":1, "clients4.google.com":1,
    "gstatic.com":1, "googleapis.com":1, "dl.google.com":1,
    // Windows
    "msftconnecttest.com":1, "www.msftconnecttest.com":1,
    "windowsupdate.com":1, "update.microsoft.com":1,
    // DNS
    "dns.google":1, "one.one.one.one":1
};

var CDN_DIRECT_LIST = [
    "youtube.com","googlevideo.com","ytimg.com","ggpht.com",
    "fbcdn.net","facebook.com","facebook.net",
    "instagram.com","cdninstagram.com",
    "tiktokcdn.com","tiktokv.com","tiktok.com",
    "akamaihd.net","akamai.net","cloudfront.net",
    "fastly.net","jsdelivr.net","unpkg.com",
    "github.com","githubassets.com","githubusercontent.com",
    "steamcontent.com","steamcdn-a.akamaihd.net",
    "discord.com","discordapp.com","discord.gg","discord.media"
];

// ============================
// 🇯🇴 JORDAN IP RANGES (UPDATED 2024)
// ============================
// Tight = مباشر أردني مؤكد (أولوية 1)
// Full  = أردني ممكن (أولوية 2)
// ============================
var JO_TIGHT = {
    // Orange Jordan
    "37.48.":1, "37.49.":1, "37.50.":1, "37.51.":1,
    "79.134.":1, "79.173.":1,
    // Zain Jordan
    "82.212.":1, "91.106.":1,
    // Umniah
    "46.32.":1, "46.185.":1, "86.108.":1,
    // Batelco Jordan
    "92.253.":1,
    // Others
    "188.123.":1, "188.247.":1, "149.200.":1,
    "37.75.":1, "46.249.":1
};

var JO_FULL = {
    "78.135.":1, "78.138.":1,
    "5.198.":1, "5.199.":1,
    "81.21.":1, "81.28.":1,
    "80.90.":1,
    "185.20.":1, "185.21.":1,
    "185.30.":1, "185.31.":1,
    "185.40.":1, "185.41.":1,
    "193.189.":1, "194.50.":1,
    "212.100.":1, "212.101.":1
};

// ============================
// 🇸🇦🇦🇪🇰🇼🇶🇦🇧🇭🇴🇲 GULF IP RANGES (UPDATED)
// ============================
var GULF_NETS = {
    // 🇸🇦 Saudi STC
    "62.72.":1, "62.150.":1, "62.251.":1,
    "85.159.":1, "109.107.":1, "109.237.":1,
    "188.161.":1, "193.188.":1, "193.227.":1,
    "195.135.":1, "195.170.":1, "195.228.":1, "195.229.":1,
    "213.6.":1, "213.42.":1, "213.139.":1, "213.186.":1,
    "217.23.":1, "217.29.":1, "217.144.":1, "217.171.":1,
    "5.45.":1,
    "94.26.":1, "95.177.":1, "46.152.":1, "37.224.":1,
    "185.193.":1, "185.194.":1, "185.195.":1, "185.196.":1,

    // 🇧🇭 Bahrain Batelco
    "85.125.":1, "46.183.":1, "37.131.":1, "80.241.":1, "84.235.":1,
    "212.71.":1,

    // 🇦🇪 UAE Etisalat
    "5.62.":1, "31.192.":1, "31.193.":1, "86.96.":1,
    "94.200.":1, "94.201.":1, "94.202.":1, "217.164.":1,

    // 🇦🇪 UAE Du
    "62.84.":1, "82.178.":1, "91.140.":1, "94.128.":1,

    // 🇰🇼 Kuwait
    "37.210.":1, "89.211.":1,
    "185.22.":1, "185.23.":1,

    // 🇶🇦 Qatar Ooredoo
    "5.36.":1, "185.64.":1, "185.128.":1,

    // 🇴🇲 Oman Omantel
    "188.96.":1, "188.97.":1, "188.98.":1
};

// ============================
// 🎮 PUBG / GAME DOMAINS (EXPANDED)
// ============================
var PUBG_DOMAINS = [
    "pubg", "pubgm", "pubgmobile", "igamecj",
    "tencent", "wegame", "proximabeta",
    "gcloud", "qcloud", "gameloop",
    "vng", "levelinfinite", "rekoo",
    "unrealengine", "epicgames",
    "game.helpshift", "helpshift",
    "poe.game.qq", "poe.qq",
    "battlegrounds", "steam",
    "hlserver", "hlmatch"
];

// ============================
// 🧠 CORE ENGINE — FAST PATH
// ============================
var _dnsCache = {};
var _dnsCacheKeys = [];
var _log = CONFIG.LOG_ENABLED ? function(s){console.log("[JO_GOLD] "+s);} : function(s){};

function normalizeHost(host) {
    if (!host) return "";
    var i = host.indexOf(":");
    if (i !== -1) host = host.substring(0, i);
    return host.toLowerCase();
}

function isIPv4(ip) {
    if (!ip) return false;
    var p = ip.split(".");
    if (p.length !== 4) return false;
    for (var i=0;i<4;i++) {
        var n = parseInt(p[i],10);
        if (n < 0 || n > 255) return false;
    }
    return true;
}

function getIP(host) {
    host = normalizeHost(host);
    if (_dnsCache[host] !== undefined) return _dnsCache[host];

    var ip = dnsResolve(host);

    if (isIPv4(ip)) {
        // LRU cache eviction
        _dnsCache[host] = ip;
        _dnsCacheKeys.push(host);
        if (_dnsCacheKeys.length > CONFIG.DNS_CACHE_MAX) {
            var old = _dnsCacheKeys.shift();
            delete _dnsCache[old];
        }
        return ip;
    }
    _dnsCache[host] = null;
    return null;
}

// ============================
// ⚡ ULTRA FAST IP PREFIX MATCH (bitwise)
// ============================
function ipToOctets(ip) {
    var p = ip.split(".");
    return {o1:parseInt(p[0],10), o2:parseInt(p[1],10), o3:parseInt(p[2],10), o4:parseInt(p[3],10)};
}

function startsWithIP(ip, table) {
    if (!ip) return false;
    for (var prefix in table) {
        var oct = prefix.split(".");
        if (ip.indexOf(prefix) === 0) return true;
    }
    return false;
}

function isJordanIP(ip) {
    return startsWithIP(ip, JO_TIGHT) || startsWithIP(ip, JO_FULL);
}

function isGulfIP(ip) {
    return startsWithIP(ip, GULF_NETS);
}

function isLocalIP(ip) {
    if (!ip) return false;
    return ip.indexOf("127.")==0 || ip.indexOf("10.")==0 ||
           ip.indexOf("192.168.")==0 || ip.indexOf("172.16.")==0 ||
           ip.indexOf("172.17.")==0 || ip.indexOf("172.18.")==0 ||
           ip.indexOf("172.19.")==0 || ip.indexOf("172.2")==0 ||
           ip.indexOf("172.30.")==0 || ip.indexOf("172.31.")==0 ||
           ip === "0.0.0.0" || ip === "::1" || ip.indexOf("fe80::")===0;
}

// ============================
// 🌐 DOMAIN MATCHERS
// ============================
function isSafeDirect(host) {
    if (SAFE_DIRECT_DOMAINS[host]) return true;
    for (var i=0;i<CDN_DIRECT_LIST.length;i++) {
        if (dnsDomainIs(host, CDN_DIRECT_LIST[i])) return true;
    }
    return false;
}

function isPUBGHost(host) {
    host = host.toLowerCase();
    for (var i=0;i<PUBG_DOMAINS.length;i++) {
        if (host.indexOf(PUBG_DOMAINS[i]) !== -1) return true;
    }
    return false;
}

// ============================
// 🔎 TRAFFIC CLASSIFIER (ENHANCED)
// ============================
function getTrafficType(url, host) {
    var s = (url + " " + host).toLowerCase();
    var result = {type:"unknown", proto:"TCP"};

    // Detect UDP ports from URL (WebSocket, STUN, etc.)
    if (/udp|stun|turn|webrtc|dtls|rtp|rtcp|srtp/.test(s)) {
        result.proto = "UDP";
    }
    // Check port in host
    var portIdx = host.lastIndexOf(":");
    if (portIdx !== -1) {
        var port = parseInt(host.substring(portIdx+1),10);
        if (CONFIG.VOICE_UDP_PORTS.indexOf(port)!==-1) result.proto="UDP";
        if (CONFIG.UDP_PORTS.indexOf(port)!==-1) result.proto="UDP";
    }

    // Voice / RTC
    if (/(voice|rtc|webrtc|voip|audio|mic|talk|channel|speech|sound|stun|turn|telemetry|opus|aac-stream)/.test(s)) {
        result.type = "voice";
        if (result.proto !== "UDP") result.proto = "UDP"; // Voice = UDP أولاً
        return result;
    }

    // Lobby
    if (/(lobby|matchmaking|matching|queue|room|recruit|team|squad|party|invite|gate|dispatcher|router|allocation|teamfinder|social|clan|friend|chat|notification|presence)/.test(s)) {
        result.type = "lobby";
        return result;
    }

    // Match / Gameplay
    if (/(game|battle|fight|combat|play|gameserver|logic|session|instance|zone|shard|node|cell|scene|realtime|action|frame|mms|join|sync|snapshot|state|physics|hit|damage|spawn|respawn|inventory|equip|mapload|loading|connect|handshake|auth)/.test(s)) {
        result.type = "match";
        if (/(snapshot|state|sync|physics)/.test(s)) result.proto = "UDP";
        return result;
    }

    // Update / CDN
    if (/(patch|hotfix|update|download|assetbundle|obb|assets|cdn|static|res|pkg|manifest|version|delta|binary|chunk|dlc|expansion|install)/.test(s)) {
        result.type = "update";
        return result;
    }

    // Anti-cheat (MUST proxy)
    if (/(anticheat|anti-cheat|battleye|easyanticheat|beclient|be_service|eac|vac|fairfight|integrity|signature|scan|detect)/.test(s)) {
        result.type = "match";
        return result;
    }

    return result;
}

// ============================
// 📡 PROXY SELECTOR
// ============================
function selectProxy(trafficType, proto, isJO, isGF, ip) {
    var key;

    switch(trafficType) {
        case "voice":
            key = (proto === "UDP") ? "VOICE_UDP" : "VOICE_TCP";
            break;
        case "lobby":
            key = "LOBBY";
            break;
        case "match":
            key = (proto === "UDP") ? "MATCH_UDP" : "MATCH_TCP";
            break;
        case "update":
            key = "UPDATE";
            break;
        default:
            key = null;
    }

    if (!key) return null;

    if (isJO) return PROXY[key];
    if (isGF) {
        // Gulf = fallback to match proxy (not lobby)
        if (trafficType === "lobby") return PROXY["LOBBY"];
        return PROXY[key];
    }
    if (!ip) return PROXY[key]; // unresolved → try proxy anyway

    return null;
}

// ============================
// 🚀 MAIN ENTRY POINT
// ============================
function FindProxyForURL(url, host) {
    host = normalizeHost(host);

    // ── Local / Intranet ──
    if (isPlainHostName(host)) return PROXY.DIRECT;
    if (shExpMatch(host, "*.local")) return PROXY.DIRECT;
    if (host === "localhost") return PROXY.DIRECT;

    // ── Safe Direct (OS, CDN, non-game) ──
    if (isSafeDirect(host)) return PROXY.DIRECT;

    // ── Get IP ──
    var ip = getIP(host);
    var isJO = false, isGF = false;
    if (ip) {
        if (isLocalIP(ip)) return PROXY.DIRECT;
        isJO = isJordanIP(ip);
        isGF = isGulfIP(ip);
    }

    // ── Non-PUBG traffic = DIRECT ──
    var traffic = getTrafficType(url, host);
    _log("host=" + host + " | ip=" + ip + " | type=" + traffic.type + " | proto=" + traffic.proto);

    if (!isPUBGHost(host) && traffic.type === "unknown") {
        return PROXY.DIRECT;
    }

    // ── Classified traffic routing ──
    var chosen = selectProxy(traffic.type, traffic.proto, isJO, isGF, ip);

    if (chosen) return chosen;

    // ── Default for PUBG unknown type ──
    if (isPUBGHost(host)) {
        if (isJO) return PROXY.MATCH_TCP;
        if (isGF) return PROXY.GULF_FALLBACK;
        if (!ip) return PROXY.MATCH_TCP;
    }

    // ── Final fallback ──
    if (CONFIG.BLOCK_UNKNOWN) {
        return PROXY.BLOCK;
    }
    return PROXY.DIRECT;
}

// ============================
// 🧪 OPTIONAL: UDP HELPER (for environments with myIpAddressEx)
// ============================
function isUDPRequest(url, host) {
    var s = (url + " " + host).toLowerCase();
    if (/udp|stun|turn|webrtc/.test(s)) return true;
    var pi = host.lastIndexOf(":");
    if (pi !== -1) {
        var pt = parseInt(host.substring(pi+1),10);
        return CONFIG.UDP_PORTS.indexOf(pt) !== -1;
    }
    return false;
}
