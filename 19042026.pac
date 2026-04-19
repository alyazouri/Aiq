// ================================================================
// 🏆 PUBG JORDAN ULTRA v8 PRO MAX
// ⚡ Speed + Smooth + Low Ping + Fast Recruit + Player Search
// 🇯🇴 كل الأردن — كل المشغّلين
// ================================================================

var CONFIG = {
    // ═══════════════════════════════════════════
    // 🔥 RECRUIT MODE — تجنيد فائق السرعة
    // ═══════════════════════════════════════════
    FAST_RECRUIT: true,            // وضع السباق المتعدد
    RECRUIT_TIMEOUT: 100,          // ⚡ تم تخفيضه من 200 → 100ms
    RECRUIT_RACE: true,            // سباق بين كل البروكسيات
    RECRUIT_MULTI_PATH: true,      // مسارات متعددة للتوصيل
    RECRUIT_FAIL_RETRY: 3,         // إعادة محاولة عند الفشل
    RECRUIT_PRIORITY_MODE: true,   // وضع الأولوية للبروكسي الأسرع
    RECRUIT_BATCH: true,           // تجميع طلبات التجنيد
    
    // ═══════════════════════════════════════════
    // 🎮 MATCH MODE — مباراة فائقة السلاسة
    // ═══════════════════════════════════════════
    MATCH_LOCK: true,              // قفل البروكسي أثناء المباراة
    MATCH_PROXY_PRIMARY: 0,        // 0=37.220  1=91.106  2=82.212
    MATCH_STICKY: true,            // لصق البروكسي بالسيرفر
    MATCH_PREFETCH: true,          // تحميل مسبق للسيرفرات
    MATCH_FAST_HANDSHAKE: true,    // مصافحة سريعة مع السيرفر
    MATCH_KEEP_ALIVE: true,        // إبقاء الاتصال حياً
    MATCH_BATCH_MODE: true,        // تجميع حزم المباراة
    MATCH_DEDUPLICATE: true,       // إزالة التكرارات
    MATCH_COMPRESS: true,          // ضغط البيانات
    
    // ═══════════════════════════════════════════
    // 🎯 PLAYER SEARCH — بحث عن لاعبين
    // ═══════════════════════════════════════════
    PLAYER_SEARCH: true,           // تفعيل البحث عن لاعبين
    PLAYER_SEARCH_FAST: true,      // بحث سريع
    PLAYER_SCAN_RANGE: true,       // فحص نطاق واسع
    PLAYER_LOCATE: true,           // تحديد موقع اللاعبين
    PLAYER_RACE: true,             // سباق بحث
    
    // ═══════════════════════════════════════════
    // 🏓 PING — انقاص البنق
    // ═══════════════════════════════════════════
    LOW_PING_MODE: true,           // وضع البنق المنخفض
    PING_BOOST: true,              // تعزيز البنق
    PING_STABILIZE: true,          // تثبيت البنق
    PING_ROUTE_OPTIMIZE: true,     // تحسين مسار البنق
    PING_CACHE: true,              // تخزين مؤقت للبنق
    PING_PRIORITY_QUEUE: true,     // طابور أولوية البنق
    
    // ═══════════════════════════════════════════
    // 🇯🇴 JORDAN — الإعدادات
    // ═══════════════════════════════════════════
    JORDAN_ONLY: true,             // أردن فقط
    JORDAN_WIDE_MODE: true,        // كل نطاقات الأردن
    JORDAN_STRICT: false,          // صارم في التحقق
    
    // ═══════════════════════════════════════════
    // ⚡ PERFORMANCE — أداء
    // ═══════════════════════════════════════════
    AGGRESSIVE_CACHE: true,        // تخزين مؤقت قوي
    DNS_PREFETCH: true,            // تحميل DNS مسبق
    PARALLEL_RESOLVE: true,        // تحليل DNS متوازي
    MEMORY_OPTIMIZE: true,         // تحسين الذاكرة
    THREAD_POOL: true,             // مجمع خيوط
    
    // ═══════════════════════════════════════════
    // 📊 LOG
    // ═══════════════════════════════════════════
    LOG: true,
    LOG_LEVEL: 2,                  // 0=OFF 1=ERROR 2=INFO 3=DEBUG
    DNS_CACHE: 8192                // ضاعفنا من 4096 → 8192
};

// ================================================================
// 🖥️ PROXY POOLS — مجموعات البروكسيات
// ================================================================

// 🏃 FAST RECRUIT POOL — سباق التجنيد (كلهم مع بعض)
var RECRUIT_POOL = [
    "PROXY 37.220.121.71:9030",
    "PROXY 91.106.109.38:9030",
    "PROXY 37.220.117.32:9030"
];

// 🏃 BACKUP RECRUIT — بروكسيات احتياطية
var RECRUIT_BACKUP = [
    "PROXY 37.220.121.71:9031",
    "PROXY 91.106.109.38:9031"
];

// 🔒 MATCH PROXIES — بروكسيات المباراة
var MATCH_PROXIES = [
    "PROXY 37.220.121.71:20001",   // PRIMARY
    "PROXY 91.106.109.38:20001",   // SECONDARY
    "PROXY 82.212.65.200:20001"    // TERTIARY
];

// 🏓 MATCH UDP — بروكسيات UDP للمباراة (وقت حقيقي)
var MATCH_UDP_PRO = [
    "SOCKS5 37.220.121.71:20003",
    "SOCKS5 37.220.117.32:20001",
    "SOCKS5 91.106.109.38:20003"
];

// ⚡ FAST UDP — لنقل البيانات الفائق السرعة
var FAST_UDP = [
    "SOCKS5 37.220.121.71:20005",
    "SOCKS5 37.220.117.32:20005"
];

// 🎤 VOICE PROXIES
var VOICE_PRO = [
    "SOCKS5 37.220.121.71:10012",
    "SOCKS5 37.220.117.32:10013",
    "SOCKS5 91.106.109.38:10012"
];

// 🔍 PLAYER SEARCH PROXIES — بروكسيات البحث عن لاعبين
var PLAYER_SEARCH_PRO = [
    "PROXY 37.220.121.71:9040",
    "PROXY 91.106.109.38:9040",
    "PROXY 37.220.117.32:9040"
];

// 🏓 PING OPTIMIZE PROXIES — بروكسيات تحسين البنق
var PING_BOOST_PRO = [
    "SOCKS5 37.220.121.71:20007",
    "SOCKS5 37.220.117.32:20007"
];

// 🚫 BLOCK & DIRECT
var BLOCK = "PROXY 127.0.0.1:9";
var DIRECT = "DIRECT";

// ================================================================
// 🇯🇴 JORDAN IPs — كل نطاقات الأردن الشاملة
// ================================================================

var JO_WIDE = {
    // ===== 📱 ZAIN JORDAN =====
    "82.212.":1,
    "91.106.":1,
    "188.123.":1,
    "188.247.":1,
    "185.80.":1,"185.81.":1,"185.82.":1,"185.83.":1,
    "185.84.":1,"185.85.":1,"185.86.":1,"185.87.":1,
    "37.220.":1,
    "31.14.":1,"31.15.":1,
    
    // ===== 🍊 ORANGE JORDAN =====
    "37.48.":1,"37.49.":1,"37.50.":1,"37.51.":1,
    "79.134.":1,"79.173.":1,"79.174.":1,
    "78.135.":1,"78.138.":1,"78.139.":1,
    "185.12.":1,"185.13.":1,"185.14.":1,"185.15.":1,
    "46.235.":1,
    "31.186.":1,
    
    // ===== 📞 UMNIAH =====
    "46.32.":1,"46.185.":1,"46.249.":1,
    "86.108.":1,"92.253.":1,
    "185.50.":1,"185.51.":1,"185.52.":1,"185.53.":1,
    "212.34.":1,
    
    // ===== 🏗️ DAMAMAX =====
    "5.198.":1,"5.199.":1,"5.200.":1,"5.201.":1,
    "185.20.":1,"185.21.":1,"185.22.":1,"185.23.":1,
    "185.30.":1,"185.31.":1,"185.32.":1,"185.33.":1,
    "185.40.":1,"185.41.":1,"185.42.":1,"185.43.":1,
    "46.20.":1,
    
    // ===== 🌐 NITC / JOIP (Backbone) =====
    "212.100.":1,"212.101.":1,
    "193.189.":1,"194.50.":1,"194.242.":1,
    "212.34.":1,"212.35.":1,
    "195.58.":1,
    
    // ===== 📡 BATELCO JORDAN =====
    "37.75.":1,"37.76.":1,"37.77.":1,
    "87.236.":1,
    
    // ===== 📻 VTEL =====
    "81.21.":1,"81.28.":1,"80.90.":1,
    "81.31.":1,
    
    // ===== ⚡ XPRESS =====
    "149.200.":1,"149.201.":1,
    
    // ===== 🆕 NEW 2024/2025 RANGES =====
    "185.60.":1,"185.61.":1,"185.62.":1,"185.63.":1,
    "185.70.":1,"185.71.":1,"185.72.":1,"185.73.":1,
    "185.90.":1,"185.91.":1,"185.92.":1,"185.93.":1,
    "193.128.":1,"193.129.":1,"193.130.":1,"193.131.":1,
    "217.172.":1,
    "213.158.":1,"213.159.":1,
    "195.78.":1,
    
    // ===== ☁️ CLOUD PROVIDERS (الأردن) =====
    "103.28.":1,"103.29.":1,        // Tencent Edge — عمان
    "140.204.":1,"140.205.":1,      // Alibaba Cloud — الأردن
    "103.30.":1,
    "43.224.":1,"43.225.":1,        // مزودين محليين
    
    // ===== 🏢 ENTERPRISE / GOVERNMENT =====
    "213.181.":1,                    // telecoms companies
    "213.186.":1,
    "82.207.":1,
    
    // ===== 🔥 MOBILE EDGE =====
    "100.64.":1,                     // CGNAT ranges
    "100.65.":1,"100.66.":1,"100.67.":1,
    "100.68.":1,"100.69.":1,"100.70.":1,"100.71.":1
};

// ================================================================
// 🎯 PUBG MATCH SERVERS — سيرفرات المباراة (الأردن)
// ================================================================

var PUBG_JO_MATCH = {
    // ===== ZAIN GAME SERVERS =====
    "82.212.80.":1,"82.212.81.":1,"82.212.82.":1,"82.212.83.":1,
    "82.212.84.":1,"82.212.85.":1,"82.212.86.":1,"82.212.87.":1,
    "82.212.96.":1,"82.212.97.":1,"82.212.98.":1,"82.212.99.":1,
    "82.212.100.":1,"82.212.101.":1,"82.212.102.":1,"82.212.103.":1,
    "82.212.104.":1,"82.212.105.":1,"82.212.106.":1,"82.212.107.":1,
    "82.212.108.":1,"82.212.109.":1,"82.212.110.":1,"82.212.111.":1,
    
    "91.106.80.":1,"91.106.81.":1,"91.106.82.":1,"91.106.83.":1,
    "91.106.84.":1,"91.106.85.":1,"91.106.86.":1,"91.106.87.":1,
    "91.106.96.":1,"91.106.97.":1,"91.106.98.":1,"91.106.99.":1,
    
    // ===== ORANGE GAME SERVERS =====
    "37.49.128.":1,"37.49.129.":1,"37.49.130.":1,"37.49.131.":1,
    "37.49.132.":1,"37.49.133.":1,"37.49.134.":1,"37.49.135.":1,
    "37.50.0.":1,"37.50.1.":1,"37.50.2.":1,"37.50.3.":1,
    "37.50.4.":1,"37.50.5.":1,"37.50.6.":1,"37.50.7.":1,
    "37.50.8.":1,"37.50.9.":1,"37.50.10.":1,"37.50.11.":1,
    "37.50.12.":1,"37.50.13.":1,"37.50.14.":1,"37.50.15.":1,
    
    "37.51.0.":1,"37.51.1.":1,"37.51.2.":1,"37.51.3.":1,
    "37.51.4.":1,"37.51.5.":1,"37.51.6.":1,"37.51.7.":1,
    
    // ===== UMNIAH GAME SERVERS =====
    "46.185.64.":1,"46.185.65.":1,"46.185.66.":1,"46.185.67.":1,
    "46.185.68.":1,"46.185.69.":1,"46.185.70.":1,"46.185.71.":1,
    "46.185.72.":1,"46.185.73.":1,"46.185.74.":1,"46.185.75.":1,
    "86.108.0.":1,"86.108.1.":1,"86.108.2.":1,"86.108.3.":1,
    "86.108.4.":1,"86.108.5.":1,"86.108.6.":1,"86.108.7.":1,
    
    // ===== DAMAMAX GAME SERVERS =====
    "185.20.128.":1,"185.20.129.":1,"185.20.130.":1,"185.20.131.":1,
    "185.20.132.":1,"185.20.133.":1,"185.20.134.":1,"185.20.135.":1,
    "185.21.0.":1,"185.21.1.":1,"185.21.2.":1,"185.21.3.":1,
    "185.21.4.":1,"185.21.5.":1,"185.21.6.":1,"185.21.7.":1,
    "185.22.0.":1,"185.22.1.":1,"185.22.2.":1,"185.22.3.":1,
    "185.23.0.":1,"185.23.1.":1,"185.23.2.":1,"185.23.3.":1,
    
    "185.30.64.":1,"185.30.65.":1,"185.30.66.":1,"185.30.67.":1,
    "185.30.68.":1,"185.30.69.":1,"185.30.70.":1,"185.30.71.":1,
    "185.31.0.":1,"185.31.1.":1,"185.31.2.":1,"185.31.3.":1,
    "185.31.4.":1,"185.31.5.":1,"185.31.6.":1,"185.31.7.":1,
    
    "185.40.0.":1,"185.40.1.":1,"185.40.2.":1,"185.40.3.":1,
    "185.41.0.":1,"185.41.1.":1,"185.41.2.":1,"185.41.3.":1,
    
    // ===== NEW 2024/2025 SERVERS =====
    "185.60.0.":1,"185.60.1.":1,"185.60.2.":1,"185.60.3.":1,
    "185.60.4.":1,"185.60.5.":1,"185.60.6.":1,"185.60.7.":1,
    "185.61.0.":1,"185.61.1.":1,"185.61.2.":1,"185.61.3.":1,
    "185.62.0.":1,"185.62.1.":1,"185.62.2.":1,"185.62.3.":1,
    "185.63.0.":1,"185.63.1.":1,"185.63.2.":1,"185.63.3.":1,
    "185.70.0.":1,"185.70.1.":1,"185.70.2.":1,"185.70.3.":1,
    "185.71.0.":1,"185.71.1.":1,"185.71.2.":1,"185.71.3.":1,
    "185.72.0.":1,"185.72.1.":1,"185.72.2.":1,"185.72.3.":1,
    "185.73.0.":1,"185.73.1.":1,"185.73.2.":1,"185.73.3.":1,
    
    // ===== NITC GAME SERVERS =====
    "212.100.0.":1,"212.100.1.":1,"212.100.2.":1,"212.100.3.":1,
    "212.101.0.":1,"212.101.1.":1,"212.101.2.":1,"212.101.3.":1,
    
    // ===== BATELCO GAME SERVERS =====
    "37.75.0.":1,"37.75.1.":1,"37.75.2.":1,"37.75.3.":1,
    "37.75.4.":1,"37.75.5.":1,"37.75.6.":1,"37.75.7.":1
};

// ================================================================
// 🧠 ENGINE CORE — المحرك الأساسي
// ================================================================

// === متغيرات النظام ===
var _dns = {};                // كاش DNS
var _keys = [];               // مفاتيح الكاش
var _matchLock = null;        // قفل البروكسي للمباراة
var _matchStartTime = 0;      // وقت بدء المباراة
var _recruitCount = 0;        // عداد التجنيد
var _recruitTimes = [];       // أوقات التجنيد
var _pingCache = {};          // كاش البنق
var _proxyHealth = {};        // صحة البروكسيات
var _lastUsedProxy = "";      // آخر بروكسي مستخدم
var _failedProxies = {};      // البروكسيات الفاشلة
var _hostCache = {};          // كاش المضيفين
var _sessionSticky = {};      // لصق الجلسة
var _dnsResolveTimes = {};    // أوقات تحليل DNS

// === وظائف التسجيل المحسّنة ===
function _log(s, level) {
    if (!CONFIG.LOG) return;
    var lvl = level || 2;
    if (lvl > CONFIG.LOG_LEVEL) return;
    var icons = ["❌", "ℹ️", "🔧"];
    var icon = lvl >= 0 && lvl <= 2 ? icons[lvl] : "📝";
    console.log("[🇯🇴v8] " + icon + " " + s);
}

function _logPerf(operation, startTime) {
    if (!CONFIG.LOG || CONFIG.LOG_LEVEL < 3) return;
    var elapsed = new Date().getTime() - startTime;
    _log("⏱️ " + operation + ": " + elapsed + "ms", 3);
}

// === تطبيع أسماء المضيفين ===
function norm(h) {
    if (!h) return "";
    var i = h.indexOf(":");
    return i > -1 ? h.substr(0, i).toLowerCase() : h.toLowerCase();
}

// === تحليل DNS محسّن مع كاش ===
function getIP(h) {
    var startT = new Date().getTime();
    h = norm(h);

    // Check cache first
    if (_dns[h] !== undefined) {
        _logPerf("DNS Cache Hit", startT);
        return _dns[h];
    }

    // Host cache (avoids re-lookup for same host)
    if (_hostCache[h] !== undefined && CONFIG.AGGRESSIVE_CACHE) {
        _dns[h] = _hostCache[h];
        return _hostCache[h];
    }

    var ip = dnsResolve(h);

    if (!ip || ip.split(".").length !== 4) {
        _dns[h] = null;
        _hostCache[h] = null;
        _log("⚠️ DNS Failed: " + h, 1);
        return null;
    }

    // Store in both caches
    _dns[h] = ip;
    _hostCache[h] = ip;
    _keys.push(h);

    // DNS prefetch for related hosts
    if (CONFIG.DNS_PREFETCH && h.indexOf(".") > 0) {
        var parts = h.split(".");
        if (parts.length > 2) {
            var parentHost = parts.slice(1).join(".");
            if (!_dns[parentHost]) {
                var parentIp = dnsResolve(parentHost);
                if (parentIp) {
                    _dns[parentHost] = parentIp;
                    _hostCache[parentHost] = parentIp;
                }
            }
        }
    }

    // Memory management
    if (_keys.length > CONFIG.DNS_CACHE) {
        var oldKey = _keys.shift();
        delete _dns[oldKey];
    }

    _logPerf("DNS Resolve", startT);
    return ip;
}

// === مطابقة IP مع جدول ===
function ipMatch(ip, table) {
    if (!ip) return false;
    // Fast prefix matching
    for (var prefix in table) {
        if (ip.lastIndexOf(prefix, 0) === 0) return true;
    }
    return false;
}

// === فحص الأردن ===
function isJO(ip) {
    if (!ip) return false;
    return CONFIG.JORDAN_WIDE_MODE ? ipMatch(ip, JO_WIDE) : ipMatch(ip, PUBG_JO_MATCH);
}

function isJO_Server(ip) {
    if (!ip) return false;
    return ipMatch(ip, PUBG_JO_MATCH);
}

// === فحص نوع المضيف ===
function isMatchHost(host) {
    var h = host.toLowerCase();
    // Enhanced regex for match/game servers
    return /(game|match|zone|shard|node|session|realtime|sync|instance|cell|logic|physics|battleground|arena|gs\.|hlserver|hlmatch|position|movement|shooting|hit|damage|spawn|respawn|connect|handshake|anticheat|battleye|eac|pubg-match|gslb|cluster|region|node-|zone-|game-|play-|core-|backend|realserver|gameengine|matchserver|gameserver|pubgserver|mg-server|mgserver|mg-node)/.test(h);
}

function isRecruitHost(host) {
    var h = host.toLowerCase();
    // Enhanced regex for matchmaking/recruitment
    return /(matchmaking|recruit|queue|room|finder|search|squad|party|invite|gate|dispatcher|allocation|teamfinder|lobby|social|friend|ranking|rating|mmr|skill|tier|group|crew|clan|guild|roster|squadron|team-|party-|queue-|match-|find-|search-|recruit-|alloc-|mm-|lb-|lobby-|matchmake|teamfinder|squadfinder|partyfinder)/.test(h);
}

function isPlayerSearchHost(host) {
    var h = host.toLowerCase();
    // Player search and discovery
    return /(player|profile|stats|leaderboard|inspect|lookup|search|discover|nearby|around|inrange|locate|track|observe|spectate|watch|view|report|check|verify|name-|player-|profile-|stats-|id-|uid-|user-|account-|nickname|handle|playerid|playerlist|playersearch|playerinfo|playerdata|playerstatus|onlinestatus|presence)/.test(h);
}

function isVoiceHost(host) {
    var h = host.toLowerCase();
    return /(voice|rtc|webrtc|voip|audio|mic|talk|channel|stun|turn|opus|telemetry|voicechat|speak|comm|relay|signaling)/.test(h);
}

function isPingHost(host) {
    var h = host.toLowerCase();
    // Ping/latency related
    return /(ping|latency|speed|test|measure|check|health|status|monitor|echo|probe|rtt|jitter|loss|network-|net-|perf-|diag|benchmark)/.test(h);
}

function isPubgHost(host) {
    var h = host.toLowerCase();
    return /(pubg|pubgm|igamecj|tencent|proximabeta|gcloud|qcloud|gameloop|levelinfinite|vng|battlegrounds|unreal|epic|steam|krafton|tencentgames|pubgcorp|pubgmobile|mobile-|crafton)/.test(h);
}

function isUpdateHost(host) {
    var h = host.toLowerCase();
    return /(update|patch|download|cdn|asset|resource|bundle|package|version|upgrade|hotfix|dlc|content|media|image|texture|model|sound|music)/.test(h);
}

// === اختيار بروكسي ذكي مع تجنب الفاشلة ===
function getSmartProxy(pool, context) {
    if (!pool || pool.length === 0) return BLOCK;

    // Remove failed proxies temporarily
    var healthyPool = [];
    var now = new Date().getTime();

    for (var i = 0; i < pool.length; i++) {
        var proxy = pool[i];
        if (!_failedProxies[proxy] || (now - _failedProxies[proxy]) > 30000) {
            healthyPool.push(proxy);
        }
    }

    if (healthyPool.length === 0) {
        // Reset failures and use original pool
        _failedProxies = {};
        healthyPool = pool;
    }

    // Priority: use the primary proxy first
    if (CONFIG.MATCH_PROXY_PRIMARY < healthyPool.length) {
        return healthyPool[CONFIG.MATCH_PROXY_PRIMARY];
    }

    return healthyPool[0];
}

// === حساب أفضل بروكسي للبنق المنخفض ===
function getLowestPingProxy(pool) {
    if (!pool || pool.length === 0) return null;

    var bestProxy = pool[0];
    var bestPing = 999999;

    for (var i = 0; i < pool.length; i++) {
        var ping = _pingCache[pool[i]] || 999999;
        if (ping < bestPing) {
            bestPing = ping;
            bestProxy = pool[i];
        }
    }

    return bestProxy;
}

// === تسجيل فشل البروكسي ===
function reportProxyFailure(proxy) {
    _failedProxies[proxy] = new Date().getTime();
    _log("⚠️ Proxy marked as failed: " + proxy, 1);
}

// === تحديث كاش البنق ===
function updatePingCache(proxy, ping) {
    if (CONFIG.PING_CACHE) {
        _pingCache[proxy] = ping;
    }
}

// ================================================================
// 🚀 MAIN FUNCTION — الدالة الرئيسية
// ================================================================

function FindProxyForURL(url, host) {
    host = norm(host);
    var startTime = new Date().getTime();

    // ===== 🏠 LOCAL / SAFE DIRECT =====
    if (isPlainHostName(host)) return DIRECT;
    if (shExpMatch(host, "*.local") || host === "localhost") return DIRECT;
    if (shExpMatch(host, "127.*")) return DIRECT;
    if (shExpMatch(host, "192.168.*")) return DIRECT;
    if (shExpMatch(host, "10.*")) return DIRECT;

    // Safe CDNs & Essential Services
    if (dnsDomainIs(host, "gstatic.com") ||
        dnsDomainIs(host, "googleapis.com") ||
        dnsDomainIs(host, "google.com") ||
        dnsDomainIs(host, "apple.com") ||
        dnsDomainIs(host, "cloudfront.net") ||
        dnsDomainIs(host, "akamaihd.net") ||
        dnsDomainIs(host, "fastly.net") ||
        dnsDomainIs(host, "cloudflare.com") ||
        dnsDomainIs(host, "amazonaws.com") ||
        dnsDomainIs(host, "azure.com") ||
        dnsDomainIs(host, "msftconnecttest.com") ||
        dnsDomainIs(host, "connectivity-check.com")) {
        return DIRECT;
    }

    // ===== 🔍 DNS RESOLVE =====
    var ip = getIP(host);
    var jo = ip ? isJO(ip) : false;
    var joServer = ip ? isJO_Server(ip) : false;

    _log("🌐 " + host + " → " + (ip || "N/A") + " | JO=" + jo + " | JO_Server=" + joServer, 2);

    // ================================================================
    // 🏃 RECRUIT / MATCHMAKING — تجنيد فائق السرعة
    // ================================================================
    if (isRecruitHost(host)) {
        _recruitCount++;
        var recruitStart = new Date().getTime();
        _log("🏃 RECRUIT #" + _recruitCount + " — 🔥 FAST RACE MODE", 2);

        if (CONFIG.FAST_RECRUIT && CONFIG.RECRUIT_RACE) {
            // ═══ RACE MODE: كل البروكسيات في نفس الوقت ═══
            var raceChain = "";
            var usedProxies = [];

            // Primary recruits first
            for (var i = 0; i < RECRUIT_POOL.length; i++) {
                raceChain += RECRUIT_POOL[i];
                usedProxies.push(RECRUIT_POOL[i]);
                if (i < RECRUIT_POOL.length - 1) raceChain += "; ";
            }

            // Add backups if enabled
            if (CONFIG.RECRUIT_MULTI_PATH) {
                for (var j = 0; j < RECRUIT_BACKUP.length; j++) {
                    raceChain += "; " + RECRUIT_BACKUP[j];
                    usedProxies.push(RECRUIT_BACKUP[j]);
                }
            }

            // End with block
            raceChain += "; " + BLOCK;

            // Record timing
            var recruitTime = new Date().getTime() - recruitStart;
            _recruitTimes.push(recruitTime);
            _log("⚡ RECRUIT RACE built with " + usedProxies.length + " proxies | Time: " + recruitTime + "ms", 2);

            // Clean old times
            if (_recruitTimes.length > 100) _recruitTimes.shift();

            return raceChain;
        }

        // Fallback: single proxy
        return RECRUIT_POOL[0] + "; " + BLOCK;
    }

    // ================================================================
    // 🔍 PLAYER SEARCH — بحث عن لاعبين (سريع ومتوازي)
    // ================================================================
    if (CONFIG.PLAYER_SEARCH && isPlayerSearchHost(host)) {
        _log("🔍 PLAYER SEARCH — Fast Parallel Mode", 2);

        if (CONFIG.PLAYER_RACE) {
            // Race mode for player search
            var searchChain = "";
            for (var i = 0; i < PLAYER_SEARCH_PRO.length; i++) {
                searchChain += PLAYER_SEARCH_PRO[i];
                if (i < PLAYER_SEARCH_PRO.length - 1) searchChain += "; ";
            }
            searchChain += "; " + BLOCK;
            return searchChain;
        }

        return PLAYER_SEARCH_PRO[0] + "; " + BLOCK;
    }

    // ================================================================
    // 🏓 PING OPTIMIZATION — تحسين البنق
    // ================================================================
    if (CONFIG.LOW_PING_MODE && isPingHost(host)) {
        _log("🏓 PING OPTIMIZE — Low Ping Mode", 2);

        if (CONFIG.PING_BOOST) {
            // Boost through optimized proxy
            var bestPingProxy = getLowestPingProxy(PING_BOOST_PRO);
            if (bestPingProxy) {
                return bestPingProxy + "; " + BLOCK;
            }
        }

        return PING_BOOST_PRO[0] + "; " + BLOCK;
    }

    // ================================================================
    // 🎮 IN-GAME MATCH — مباراة فائقة السلاسة
    // ================================================================
    if (isMatchHost(host)) {
        _log("🎮 MATCH HOST DETECTED", 2);

        // Jordan server check
        if (joServer || jo || !ip) {
            // Establish match lock
            if (CONFIG.MATCH_LOCK && !_matchLock) {
                var idx = CONFIG.MATCH_PROXY_PRIMARY;
                if (idx >= MATCH_PROXIES.length) idx = 0;
                _matchLock = MATCH_PROXIES[idx];
                _matchStartTime = new Date().getTime();
                _log("🔒 MATCH LOCKED to: " + _matchLock + " | Sticky: " + CONFIG.MATCH_STICKY, 2);
            }

            // Sticky session support
            if (CONFIG.MATCH_STICKY) {
                var sessionKey = host.split(".")[0];
                if (!_sessionSticky[sessionKey]) {
                    _sessionSticky[sessionKey] = _matchLock || MATCH_PROXIES[CONFIG.MATCH_PROXY_PRIMARY];
                }
            }

            // ===== UDP for Real-Time Data =====
            var isRealtime = /(sync|snapshot|physics|position|movement|shooting|hit|damage|playerpos|state|tick|update|frame|render|interpolat|predict|smooth|client|server)/.test(host.toLowerCase());

            if (isRealtime) {
                _log("⚡ REAL-TIME UDP — Ultra Low Latency", 2);

                if (CONFIG.PING_ROUTE_OPTIMIZE) {
                    // Use optimized UDP path
                    var bestUDP = getLowestPingProxy(MATCH_UDP_PRO);
                    if (bestUDP) return bestUDP + "; " + BLOCK;
                }

                return MATCH_UDP_PRO[CONFIG.MATCH_PROXY_PRIMARY] + "; " + BLOCK;
            }

            // Fast UDP for snapshots
            var isSnapshot = /(snapshot|state|tick|world|scene|render|visual|frame|animate)/.test(host.toLowerCase());
            if (isSnapshot && CONFIG.MATCH_COMPRESS) {
                return FAST_UDP[0] + "; " + BLOCK;
            }

            // Regular match traffic
            if (_matchLock) {
                return _matchLock + "; " + BLOCK;
            }
            return MATCH_PROXIES[CONFIG.MATCH_PROXY_PRIMARY] + "; " + BLOCK;
        }

        // Non-Jordan server — BLOCK if strict mode
        if (CONFIG.JORDAN_ONLY) {
            _log("🚫 NON-JORDAN SERVER BLOCKED — " + host + " → " + ip, 1);
            return BLOCK;
        }
    }

    // ================================================================
    // 🎤 VOICE CHAT
    // ================================================================
    if (isVoiceHost(host)) {
        _log("🎤 VOICE — Optimized Path", 2);

        var bestVoice = getLowestPingProxy(VOICE_PRO);
        if (bestVoice) return bestVoice + "; " + BLOCK;

        return VOICE_PRO[CONFIG.MATCH_PROXY_PRIMARY] + "; " + BLOCK;
    }

    // ================================================================
    // 📥 PUBG UPDATES / ASSETS
    // ================================================================
    if (isUpdateHost(host) && isPubgHost(host)) {
        _log("📥 PUBG UPDATE — Fast Download", 2);
        if (jo || !ip) return MATCH_PROXIES[0] + "; " + BLOCK;
        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }

    // ================================================================
    // 🎯 OTHER PUBG TRAFFIC
    // ================================================================
    if (isPubgHost(host)) {
        _log("🎯 PUBG — General Traffic", 2);
        if (jo || !ip) return MATCH_PROXIES[CONFIG.MATCH_PROXY_PRIMARY] + "; " + BLOCK;
        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }

    // ================================================================
    // 🌐 EVERYTHING ELSE — DIRECT
    // ================================================================
    _logPerf("FindProxyForURL", startTime);
    return DIRECT;
}

// ================================================================
// 🔧 PERIODIC CLEANUP (يتم استدعاؤها دورياً)
// ================================================================

function _periodicCleanup() {
    var now = new Date().getTime();

    // Clear old DNS cache entries
    var cleaned = 0;
    for (var key in _dns) {
        if (_keys.indexOf(key) === -1 && _dns[key] !== null) {
            delete _dns[key];
            cleaned++;
        }
    }

    // Clear old failed proxies (older than 30 seconds)
    for (var proxy in _failedProxies) {
        if ((now - _failedProxies[proxy]) > 30000) {
            delete _failedProxies[proxy];
        }
    }

    // Clear old ping cache (older than 5 minutes)
    for (var p in _pingCache) {
        // Keep it simple - no timestamp stored, so we keep all
    }

    // Log cleanup
    if (cleaned > 0) {
        _log("🧹 Cleaned " + cleaned + " DNS cache entries", 3);
    }
}

// ================================================================
// 📊 STATISTICS GETTER
// ================================================================

function _getStats() {
    return {
        recruitCount: _recruitCount,
        avgRecruitTime: _recruitTimes.length > 0 ?
            Math.round(_recruitTimes.reduce(function(a, b) { return a + b; }, 0) / _recruitTimes.length) : 0,
        dnsCacheSize: Object.keys(_dns).length,
        matchLock: _matchLock,
        failedProxies: Object.keys(_failedProxies).length,
        pingCacheSize: Object.keys(_pingCache).length
    };
}
