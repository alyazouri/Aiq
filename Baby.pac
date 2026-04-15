var CONFIG = {
    LOG: false,

    // ثبات المباراة
    MATCH_PROXY_INDEX: 0,       // 0 الرئيسي | 1 احتياطي
    LOCK_MATCH_SESSION: true,   // تثبيت بروكسي المباراة

    // سياسة المرور
    BLOCK_NON_JO: true,
    DIRECT_SAFE: true,
    DIRECT_UPDATES: true,

    // كاش DNS
    DNS_CACHE_SIZE: 2048
};

// ============================
// PROXIES
// ============================
var DIRECT = "DIRECT";
var BLOCK  = "PROXY 127.0.0.1:9";

// Match TCP
var MATCH_MASTER = "PROXY 176.29.153.95:20001";
var MATCH_BACKUP = "PROXY 82.212.84.33:20001";

// Match UDP / voice UDP
var MATCH_UDP_MASTER = "SOCKS5 176.29.153.95:20001";
var MATCH_UDP_BACKUP = "SOCKS5 82.212.84.33:20001";

var VOICE_MASTER = "SOCKS5 176.29.153.95:10012";
var VOICE_BACKUP = "SOCKS5 82.212.84.33:10012";

// Lobby / auth
var LOBBY_PROXY = "PROXY 212.35.66.45:9030; PROXY 176.29.153.95:9030; DIRECT";
var AUTH_PROXY  = "PROXY 176.29.153.95:443; PROXY 82.212.84.33:443; DIRECT";

// Updates
var UPDATE_PROXY = "PROXY 212.35.66.45:80; DIRECT";

// ============================
// JORDAN PREFIXES
// ============================
var JO = {
    // Zain
    "82.212.":1, "91.106.":1, "188.123.":1, "188.247.":1,
    "185.80.":1, "185.81.":1,

    // Orange
    "37.48.":1, "37.49.":1, "37.50.":1, "37.51.":1,
    "79.134.":1, "79.173.":1, "78.135.":1, "78.138.":1,
    "185.12.":1, "185.13.":1,

    // Umniah
    "46.32.":1, "46.185.":1, "86.108.":1, "92.253.":1,
    "185.50.":1, "185.51.":1,

    // Damamax / others
    "5.198.":1, "5.199.":1,
    "185.20.":1, "185.21.":1, "185.30.":1, "185.31.":1,
    "185.40.":1, "185.41.":1,

    // NITC / JOIP
    "212.100.":1, "212.101.":1, "193.189.":1, "194.50.":1,

    // Batelco / VTEL / XPRESS / misc
    "37.75.":1, "46.249.":1,
    "81.21.":1, "81.28.":1, "80.90.":1,
    "149.200.":1,
    "185.60.":1, "185.61.":1, "185.70.":1, "185.71.":1,
    "193.128.":1, "193.129.":1, "217.172.":1,

    // DC useful
    "176.29.":1, "212.35.":1
};

// ============================
// SAFE / DIRECT DOMAINS
// ============================
var SAFE_DOMAINS = [
    "gstatic.com",
    "googleapis.com",
    "cloudfront.net",
    "akamaihd.net",
    "akamaized.net",
    "apple.com",
    "icloud.com",
    "microsoft.com",
    "msftconnecttest.com",
    "windows.com"
];

// ============================
// PUBG HOST HINTS
// ============================
var PUBG_HINTS = [
    "pubg", "pubgm", "pubgmobile", "igamecj", "proximabeta",
    "tencent", "qcloud", "gcloud", "gameloop", "levelinfinite",
    "krafton", "bluehole", "lightspeed", "battlegrounds",
    "hlserver", "hlmatch"
];

// ============================
// CACHE
// ============================
var _dnsCache = {};
var _dnsKeys = [];
var _sessionMatchProxy = null;

// ============================
// UTILS
// ============================
function _log(s) {
    if (CONFIG.LOG) console.log("[PAC-V3] " + s);
}

function _norm(host) {
    if (!host) return "";
    var i = host.indexOf(":");
    return (i >= 0 ? host.substring(0, i) : host).toLowerCase();
}

function _isIPv4(ip) {
    if (!ip) return false;
    var p = ip.split(".");
    if (p.length !== 4) return false;

    for (var i = 0; i < 4; i++) {
        var n = parseInt(p[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
    }
    return true;
}

function _dns(host) {
    host = _norm(host);

    if (_dnsCache.hasOwnProperty(host)) {
        return _dnsCache[host];
    }

    var ip = null;
    try {
        ip = dnsResolve(host);
    } catch (e) {
        ip = null;
    }

    if (!_isIPv4(ip)) ip = null;

    _dnsCache[host] = ip;
    _dnsKeys.push(host);

    if (_dnsKeys.length > CONFIG.DNS_CACHE_SIZE) {
        delete _dnsCache[_dnsKeys.shift()];
    }

    return ip;
}

function _isLocalIP(ip) {
    if (!ip) return false;

    if (ip.indexOf("127.") === 0) return true;
    if (ip.indexOf("10.") === 0) return true;
    if (ip.indexOf("192.168.") === 0) return true;
    if (ip.indexOf("169.254.") === 0) return true;

    var p = ip.split(".");
    if (p.length === 4) {
        var a = parseInt(p[0], 10);
        var b = parseInt(p[1], 10);
        if (a === 172 && b >= 16 && b <= 31) return true;
    }

    return false;
}

function _startsWithAnyPrefix(ip, table) {
    if (!ip) return false;
    for (var k in table) {
        if (table.hasOwnProperty(k) && ip.indexOf(k) === 0) {
            return true;
        }
    }
    return false;
}

function _isJO(ip) {
    return _startsWithAnyPrefix(ip, JO);
}

function _domainMatch(host, dom) {
    return host === dom || dnsDomainIs(host, "." + dom) || shExpMatch(host, "*." + dom);
}

function _inDomains(host, list) {
    for (var i = 0; i < list.length; i++) {
        if (_domainMatch(host, list[i])) return true;
    }
    return false;
}

function _hasAny(s, arr) {
    s = s.toLowerCase();
    for (var i = 0; i < arr.length; i++) {
        if (s.indexOf(arr[i]) !== -1) return true;
    }
    return false;
}

function _isPubgHost(host) {
    return _hasAny(host, PUBG_HINTS);
}

// ============================
// TRAFFIC CLASSIFIER
// ============================
function _classify(url, host) {
    var s = (url + " " + host).toLowerCase();

    // Voice first
    if (/(voice|rtc|webrtc|voip|audio|mic|talk|channel|stun|turn|opus|zego|agora|rtp|srtp)/.test(s)) {
        return { type: "voice", proto: "UDP" };
    }

    // Auth
    if (/(login|signin|signup|oauth|token|passport|verify|auth|session)/.test(s)) {
        return { type: "auth", proto: "TCP" };
    }

    // Lobby
    if (/(lobby|matchmaking|queue|room|squad|party|invite|social|clan|friend|chat|presence|ranking|shop|store|reward|profile|inventory)/.test(s)) {
        return { type: "lobby", proto: "TCP" };
    }

    // Update
    if (/(patch|update|download|assetbundle|obb|assets|static|res|pkg|manifest|version|delta|cdn)/.test(s)) {
        return { type: "update", proto: "TCP" };
    }

    // Match
    if (/(game|battle|combat|session|zone|shard|node|realtime|frame|sync|snapshot|physics|hit|damage|spawn|respawn|mapload|connect|handshake|battleye|eac|vac|position|movement|shooting|reload|grenade|vehicle|server|match)/.test(s)) {
        var proto = "TCP";
        if (/(sync|snapshot|physics|hit|damage|position|movement|shooting|voice|rtc|turn|stun)/.test(s)) {
            proto = "UDP";
        }
        return { type: "match", proto: proto };
    }

    // PUBG unknown -> match
    if (_isPubgHost(host)) {
        return { type: "match", proto: "TCP" };
    }

    return { type: "unknown", proto: "TCP" };
}

// ============================
// PROXY DECISION
// ============================
function _getLockedMatchProxy() {
    if (!_sessionMatchProxy || !CONFIG.LOCK_MATCH_SESSION) {
        _sessionMatchProxy = (CONFIG.MATCH_PROXY_INDEX === 0) ? MATCH_MASTER : MATCH_BACKUP;
    }
    return _sessionMatchProxy;
}

function _routeTraffic(traffic, host) {
    var ip = _dns(host);
    var jo = false;

    if (ip) {
        if (_isLocalIP(ip)) return DIRECT;
        jo = _isJO(ip);
    }

    _log(host + " | ip=" + ip + " | jo=" + jo + " | type=" + traffic.type + " | proto=" + traffic.proto);

    // إذا DNS فشل، لا نعتبره غير أردني مباشرة
    var allowUnknown = (ip === null);

    if (traffic.type === "voice") {
        if (jo || allowUnknown) {
            return VOICE_MASTER + "; " + VOICE_BACKUP + "; " + BLOCK;
        }
        return CONFIG.BLOCK_NON_JO ? BLOCK : DIRECT;
    }

    if (traffic.type === "auth") {
        if (jo || allowUnknown) {
            return AUTH_PROXY;
        }
        return CONFIG.BLOCK_NON_JO ? BLOCK : DIRECT;
    }

    if (traffic.type === "lobby") {
        if (jo || allowUnknown) {
            return LOBBY_PROXY;
        }
        return CONFIG.BLOCK_NON_JO ? BLOCK : DIRECT;
    }

    if (traffic.type === "update") {
        if (CONFIG.DIRECT_UPDATES) return DIRECT;
        if (jo || allowUnknown) return UPDATE_PROXY;
        return DIRECT;
    }

    if (traffic.type === "match") {
        if (jo || allowUnknown) {
            if (traffic.proto === "UDP") {
                return MATCH_UDP_MASTER + "; " + MATCH_UDP_BACKUP + "; " + BLOCK;
            }
            return _getLockedMatchProxy() + "; " + MATCH_BACKUP + "; " + BLOCK;
        }
        return CONFIG.BLOCK_NON_JO ? BLOCK : DIRECT;
    }

    return DIRECT;
}

// ============================
// MAIN
// ============================
function FindProxyForURL(url, host) {
    host = _norm(host);

    if (!host) return DIRECT;

    // Local
    if (isPlainHostName(host)) return DIRECT;
    if (shExpMatch(host, "*.local")) return DIRECT;
    if (host === "localhost") return DIRECT;

    // Safe direct
    if (CONFIG.DIRECT_SAFE && _inDomains(host, SAFE_DOMAINS)) {
        return DIRECT;
    }

    var traffic = _classify(url, host);

    // غير معروف وغير PUBG = مباشر
    if (traffic.type === "unknown" && !_isPubgHost(host)) {
        return DIRECT;
    }

    return _routeTraffic(traffic, host);
}
