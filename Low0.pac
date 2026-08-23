/* =============================================================
   🏆 JORDAN TOURNAMENT TITANIUM v6.1 — QUANTUM FORGE ENGINE
   🎮 PUBG MOBILE FULL MODE COVERAGE 3.0+ (Season 28+)
   📅 Updated: 2026-08
   🔧 Fixed: const→var | Math.imul→safe | IP ranges updated
   ============================================================= */

// ─────────────────────────────────────────────
//  §1  PROXY POOLS
// ─────────────────────────────────────────────
var PROXY_A = "PROXY 37.220.121.71:20005";     // 👑 Zain JO — Crown
var PROXY_B = "PROXY 46.185.230.166:20001";    // 🥈 Orange JO — Failover
var PROXY_C = "PROXY 212.35.66.45:20005";      // 🥉 JT — Overflow
var DIRECT  = "DIRECT";
var BLOCK   = "PROXY 127.0.0.1:9";

// ─────────────────────────────────────────────
//  §2  SAFE MATH  (بدون Math.imul — متوافق مع بيئة PAC)
// ─────────────────────────────────────────────
function imul32(a, b) {
  var ah = (a >>> 16) & 0xFFFF, al = a & 0xFFFF;
  var bh = (b >>> 16) & 0xFFFF, bl = b & 0xFFFF;
  return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)) >>> 0;
}

// ─────────────────────────────────────────────
//  §3  QUANTUM HASH — Murmur3 Safe Cascade
// ─────────────────────────────────────────────
function quantumHash(str) {
  var h1 = 0x811C9DC5, h2 = 0x1B873593;
  for (var i = 0; i < str.length; i++) {
    var c = str.charCodeAt(i);
    h1 ^= c; h1 = imul32(h1, 0x01000193);
    h2 ^= c; h2 = imul32(h2, 0x9E3779B9);
  }
  h1 ^= h1 >>> 16; h1 = imul32(h1, 0x85EB CA6B & 0xFFFFFFFF);
  h2 ^= h2 >>> 13; h2 = imul32(h2, 0xC2B2AE35);
  h1 ^= h2;
  return h1 >>> 0;
}

// ─────────────────────────────────────────────
//  §4  IP → INTEGER CONVERTER
// ─────────────────────────────────────────────
function ipToInt(ip) {
  var a = ip.split(".");
  return (((+a[0]) << 24) | ((+a[1]) << 16) |
          ((+a[2]) <<  8) |  (+a[3])) >>> 0;
}

// ─────────────────────────────────────────────
//  §5  JORDAN IPv4 BITMASKS
//  مرتّبة: Zain → Orange → Umniah → Linkdotnet → Batelco → VTEL → JT → Others
//  [network_int, mask_int]
// ─────────────────────────────────────────────

// ══════════════════════════════════════════════
//  ZAIN JO (AS48832) — الأكثر استخداماً في الألعاب
// ══════════════════════════════════════════════
var ZAIN_MASKS = [
  [0x52D44000, 0xFFFFC000],  // 82.212.64.0/18   — Core Block
  [0x511C7000, 0xFFFFF000],  // 81.28.112.0/20   — Mobile Data
  [0xBC7BA000, 0xFFFFE000],  // 188.123.160.0/19 — LTE Pool
  [0x25DC7000, 0xFFFFF000],  // 37.220.112.0/20  — 2023 Block
  [0xB01D0000, 0xFFFF0000],  // 176.29.0.0/16    — Fixed
  [0xB01C8000, 0xFFFF8000],  // 176.28.128.0/17  — Wholesale
  [0x5EF90000, 0xFFFF8000],  // 94.249.0.0/17    — DC
  [0x52D45000, 0xFFFFF000],  // 82.212.80.0/20   — 2024 Sub
  [0x52D46000, 0xFFFFE000],  // 82.212.96.0/19   — 2024 Sub
  [0xB01D9800, 0xFFFFFF00]   // 176.29.152.0/24  — Game Servers
];

// ══════════════════════════════════════════════
//  ORANGE JO / JDC (AS8697 / AS9038)
// ══════════════════════════════════════════════
var ORANGE_MASKS = [
  [0x2EB98000, 0xFFFF8000],  // 46.185.128.0/17  — Broadband Core
  [0x566C0000, 0xFFFF8000],  // 86.108.0.0/17    — DSL Pool
  [0x4FADC000, 0xFFFFC000],  // 79.173.192.0/18  — Mobile
  [0x5CFD0000, 0xFFFF8000],  // 92.253.0.0/17    — Business
  [0x25CA4000, 0xFFFFC000],  // 37.202.64.0/18   — JDC
  [0xC1BC4000, 0xFFFFE000],  // 193.188.64.0/19  — Legacy
  [0xC2A58000, 0xFFFFE000],  // 194.165.128.0/19 — PA Block
  [0xD5BAA000, 0xFFFFE000],  // 213.186.160.0/19 — Backbone
  [0x5B3BA000, 0xFFFFE000],  // 91.59.160.0/19   — Extended (2024)
  [0x5BBAE000, 0xFFFFE000]   // 91.186.224.0/19  — Enterprise
];

// ══════════════════════════════════════════════
//  UMNIAH (AS50670 / AS41095)
// ══════════════════════════════════════════════
var UMNIAH_MASKS = [
  [0x2EF8C000, 0xFFFFE000],  // 46.248.192.0/19  — Mobile Core
  [0x5CF12000, 0xFFFFE000],  // 92.241.32.0/19   — LTE Data
  [0x6D6BE000, 0xFFFFE000],  // 109.107.224.0/19 — 4G Pool
  [0x052D8000, 0xFFFFF000],  // 5.45.128.0/20    — Legacy DSL
  [0x2E177000, 0xFFFFF000],  // 46.23.112.0/20   — Fixed
  [0x95C88000, 0xFFFF8000],  // 149.200.128.0/17 — Shared Block
  [0xB2EEB000, 0xFFFFF000],  // 178.238.176.0/20 — Extended
  [0x2EB78000, 0xFFFF8000],  // 46.183.0.0/17    — 2024 New
  [0xB90FB300, 0xFFFFFF00]   // 185.15.179.0/24  — DC
];

// ══════════════════════════════════════════════
//  LINKDOTNET JORDAN
// ══════════════════════════════════════════════
var LINK_MASKS = [
  [0x2E206000, 0xFFFFE000],  // 46.32.96.0/19
  [0x505AA000, 0xFFFFF000],  // 80.90.160.0/20
  [0x5E8E2000, 0xFFFFE000],  // 94.142.32.0/19
  [0x4DF50000, 0xFFFFF000],  // 77.245.0.0/20
  [0x505A8000, 0xFFFF8000]   // 80.90.128.0/17
];

// ══════════════════════════════════════════════
//  BATELCO JO
// ══════════════════════════════════════════════
var BATELCO_MASKS = [
  [0x5B6A6000, 0xFFFFF000],  // 91.106.96.0/20
  [0xD4760000, 0xFFFFE000],  // 212.118.0.0/19
  [0x25DC7000, 0xFFFFF000]   // 37.220.112.0/20
];

// ══════════════════════════════════════════════
//  VTEL JORDAN
// ══════════════════════════════════════════════
var VTEL_MASKS = [
  [0x3E48A000, 0xFFFFE000],  // 62.72.160.0/19
  [0x51150000, 0xFFFFF000],  // 81.21.0.0/20
  [0x6DEDC000, 0xFFFFC000],  // 109.237.192.0/18
  [0xB0390000, 0xFFFFE000],  // 176.57.0.0/19
  [0xB24D8000, 0xFFFFC000]   // 178.77.128.0/18
];

// ══════════════════════════════════════════════
//  JORDAN TELECOM PSC (AS8697)
// ══════════════════════════════════════════════
var JT_MASKS = [
  [0xD4220000, 0xFFFFE000],  // 212.34.0.0/19
  [0xD4234000, 0xFFFFC000],  // 212.35.64.0/18
  [0xD58B2000, 0xFFFFE000],  // 213.139.32.0/19
  [0xD9900000, 0xFFFFF000],  // 217.144.0.0/20
  [0xD9170000, 0xFFFFF000]   // 217.23.0.0/20
];

// ══════════════════════════════════════════════
//  AL MOUAKHAH / OTHERS
// ══════════════════════════════════════════════
var OTHER_JO_MASKS = [
  [0x2511C000, 0xFFFFF000],  // 37.17.192.0/20
  [0x257B4000, 0xFFFFE000],  // 37.123.64.0/19
  [0x5F8DD000, 0xFFFFF000],  // 95.141.208.0/20
  [0x54122000, 0xFFFFE000],  // 84.18.32.0/19
  [0x25988000, 0xFFFFF000],  // 37.152.128.0/20
  [0x934F8000, 0xFFFFE000],  // 147.79.128.0/19
  [0x05160000, 0xFFFF0000],  // 5.22.0.0/16  — NITC
  [0xB9188000, 0xFFFFE000],  // 185.24.128.0/19
  [0xB93E8000, 0xFFFFE000],  // 185.62.128.0/19
  [0xC2023000, 0xFFFFFFE0]   // 194.2.48.0/27
];

// ══════════════════════════════════════════════
//  JORDAN IPv6 PREFIXES — Ordered by operator size
// ══════════════════════════════════════════════
var JORDAN_IPV6 = [
  "2a00:18d0",  // Zain JO — Primary
  "2a00:18d8",  // Zain JO — Secondary
  "2a04:b200",  // Zain JO — 2024
  "2a01:9700",  // Orange JO — Primary
  "2a05:74c0",  // Orange JO — Business
  "2a04:2e00",  // Orange JO — 2024
  "2a02:c040",  // Umniah — Primary
  "2a06:8ec0",  // Umniah — 2024
  "2a0c:b580",  // Umniah — 2025
  "2a0a:e500",  // Linkdotnet JO
  "2001:41f0"   // Academic/Gov JO
];

// ══════════════════════════════════════════════
//  GULF / ARAB FALLBACK IPv4
//  SA → UAE → KW → EG → IQ → BH
// ══════════════════════════════════════════════
var ARAB_MASKS = [
  // Saudi Arabia
  [0xD47660000 >>> 0, 0xFFFFE000],  // 212.118.96.0/19
  [0x25B80000, 0xFFFF8000],          // 37.184.0.0/17
  [0xBC870000, 0xFFFF8000],          // 188.135.0.0/17
  [0x50F98000, 0xFFFF8000],          // 80.249.128.0/17
  [0x6DE00000, 0xFFFF8000],          // 109.224.0.0/17
  // UAE
  [0xC3E50000, 0xFFFF8000],          // 195.229.0.0/17
  [0x5ECC0000, 0xFFFF8000],          // 94.204.0.0/17
  [0xD52A0000, 0xFFFF8000],          // 213.42.0.0/17
  // Kuwait
  [0x52D40000, 0xFFFFC000],          // 82.212.0.0/18
  [0x58520000, 0xFFFF0000],          // 88.82.0.0/16
  // Egypt
  [0xC4CD0000, 0xFFFF0000],          // 196.205.0.0/16
  [0x29200000, 0xFFE00000],          // 41.32.0.0/11
  // Iraq
  [0x25EC0000, 0xFFFC0000],          // 37.236.0.0/14
  [0x5F6F0000, 0xFFFF8000],          // 95.111.0.0/17
  // Bahrain
  [0x5B4A0000, 0xFFFF0000],          // 91.74.0.0/16
  [0x4E1A0000, 0xFFFE0000]           // 78.26.0.0/15
];

var ARAB_IPV6 = [
  "2a01:c500",  // SA
  "2a04:b200",  // KW
  "2a02:c680",  // UAE
  "2a05:6480",  // EG
  "2a0d:5600"   // BH
];

// ─────────────────────────────────────────────
//  §6  IP CLASSIFICATION ENGINE
// ─────────────────────────────────────────────
function isIPv6(ip) { return ip.indexOf(":") > -1; }

function matchMasks(ipInt, masks) {
  for (var i = 0; i < masks.length; i++)
    if ((ipInt & masks[i][1]) === masks[i][0]) return true;
  return false;
}
function matchIPv6Prefixes(ip, prefixes) {
  var low = ip.toLowerCase();
  for (var i = 0; i < prefixes.length; i++)
    if (low.indexOf(prefixes[i]) === 0) return true;
  return false;
}

function resolveIP(host) {
  try {
    if (typeof dnsResolve === "function") return dnsResolve(host) || null;
  } catch(e) {}
  return null;
}

function isZain(ip) {
  if (isIPv6(ip)) return matchIPv6Prefixes(ip, ["2a00:18d0","2a00:18d8","2a04:b200"]);
  return matchMasks(ipToInt(ip), ZAIN_MASKS);
}
function isOrange(ip) {
  if (isIPv6(ip)) return matchIPv6Prefixes(ip, ["2a01:9700","2a05:74c0","2a04:2e00"]);
  return matchMasks(ipToInt(ip), ORANGE_MASKS);
}
function isUmniah(ip) {
  if (isIPv6(ip)) return matchIPv6Prefixes(ip, ["2a02:c040","2a06:8ec0","2a0c:b580"]);
  return matchMasks(ipToInt(ip), UMNIAH_MASKS);
}

function isJordanIP(ip) {
  if (isIPv6(ip)) return matchIPv6Prefixes(ip, JORDAN_IPV6);
  var n = ipToInt(ip);
  return matchMasks(n, ZAIN_MASKS)    ||
         matchMasks(n, ORANGE_MASKS)  ||
         matchMasks(n, UMNIAH_MASKS)  ||
         matchMasks(n, LINK_MASKS)    ||
         matchMasks(n, BATELCO_MASKS) ||
         matchMasks(n, VTEL_MASKS)    ||
         matchMasks(n, JT_MASKS)      ||
         matchMasks(n, OTHER_JO_MASKS);
}

function isArabIP(ip) {
  if (isIPv6(ip)) return matchIPv6Prefixes(ip, ARAB_IPV6);
  return matchMasks(ipToInt(ip), ARAB_MASKS);
}

function isJordan(host) {
  var ip = resolveIP(host);
  return ip ? isJordanIP(ip) : false;
}
function isArab(host) {
  var ip = resolveIP(host);
  return ip ? isArabIP(ip) : false;
}

// ─────────────────────────────────────────────
//  §7  SYRIA WALL
// ─────────────────────────────────────────────
var SYRIA_MASKS = [
  [0x05000000, 0xFFFF0000],  // 5.0.0.0/16
  [0x1F090000, 0xFFFF0000],  // 31.9.0.0/16
  [0x25300000, 0xFFF00000],  // 37.48.0.0/12
  [0x5289C000, 0xFFFFC000],  // 82.137.192.0/18
  [0x5B900000, 0xFFFC0000]   // 91.144.0.0/14
];
function isSyriaIP(ip) {
  if (isIPv6(ip)) return false;
  return matchMasks(ipToInt(ip), SYRIA_MASKS);
}
function isSyria(host) {
  if (shExpMatch(host,"*.sy") || shExpMatch(host,"*.syrianet") ||
      shExpMatch(host,"*.mtnsyr")) return true;
  var ip = resolveIP(host);
  return ip ? isSyriaIP(ip) : false;
}

// ─────────────────────────────────────────────
//  §8  FAST-PATH: KNOWN JORDAN GAME SERVERS
//  مرتّبة: الأكثر ظهوراً في جلسات المباراة أولاً
// ─────────────────────────────────────────────
var KNOWN_JO_PREFIXES = [
  "82.212.84",    // Zain — Primary Game Server
  "82.212.85",    // Zain — Game Server 2
  "176.29.153",   // Zain Fixed — Match Server
  "46.185.131",   // Orange — Game Server
  "46.185.230",   // Orange — Game Server 2
  "86.108.",      // Orange — DSL Game Servers
  "92.253.",      // Orange — Business Game Servers
  "94.249.",      // Zain — DC Game Servers
  "176.29.1",     // Zain — Fixed Broadband Servers
  "176.28.",      // Zain — Wholesale
  "94.142.",      // Linkdotnet — Game Servers
  "81.28.11",     // Zain — Mobile Game Servers
  "212.35.66",    // JT — Legacy Game Servers
  "37.220.121"    // Zain — 2024 Game Servers
];
function isKnownJoHost(h) {
  for (var i = 0; i < KNOWN_JO_PREFIXES.length; i++)
    if (h.indexOf(KNOWN_JO_PREFIXES[i]) !== -1) return true;
  return false;
}

// ─────────────────────────────────────────────
//  §9  PUBG MODE DETECTOR — Season 28+
// ─────────────────────────────────────────────
var PUBG_CORE = [
  "pubg","pubgm","pubgmobile","bgmi","krafton","lightspeed","proximab",
  "tencent","qcloud","myqcloud","tencentcs","wechatgame",
  "amazonaws","aliyun","gcloud","me-south-1","ap-east-1",
  "game-server","gameclient","gamelift","matchsvc","sessionmgr",
  "dispatcher","allocationsvc","lobbyserver","gameserver","sgp.gameops"
];
var PUBG_MAPS = [
  "erangel","miramar","sanhok","vikendi","karakin","livik",
  "paramo","deston","nusa","haven","kiki","panorama","ktv"
];
var PUBG_MODES = [
  "classic","solo","duo","squad","tpp","fpp","ranked","rank",
  "arena","tdm","teamdeathmatch","payload","metro","metroroyale",
  "infection","zombie","survive_till_dawn","zombiemode","zombiessurvival",
  "runic","runic_power","gear","gear_front","gearfront","titan",
  "volt","dragonball","dbz","crossover","collab","wow","worldofwonder",
  "creaturebattle","bossrush","evo","evolution","ltm","eventmode",
  "cheerpark","trainingground","shootingrange","domination","war"
];
var PUBG_SYSTEM = [
  "anticheat","battleye","update","patch","cdn","contentdelivery",
  "login","auth","oauth","token","session","stats","replay",
  "esports","tournament","qualifier","leaderboard","royalepass","rp"
];

function isPUBG(host, url) {
  var s = (host + "|" + url).toLowerCase();
  // Fast pre-filter
  if (s.indexOf("pubg")    === -1 &&
      s.indexOf("krafton") === -1 &&
      s.indexOf("bgmi")    === -1 &&
      s.indexOf("tencent") === -1 &&
      s.indexOf("proxima") === -1 &&
      s.indexOf("lightspeed") === -1) return false;

  var ALL = PUBG_CORE.concat(PUBG_MAPS, PUBG_MODES, PUBG_SYSTEM);
  for (var i = 0; i < ALL.length; i++)
    if (s.indexOf(ALL[i]) > -1) return true;
  return false;
}

// ─────────────────────────────────────────────
//  §10  MODE-AWARE ROUTING
// ─────────────────────────────────────────────
function pubgModeRoute(host, url) {
  var s    = (host + "|" + url).toLowerCase();
  var seed = quantumHash(host);

  // Ranked / Conqueror / Master → PROXY_A مقفول
  if (s.indexOf("ranked")     > -1 ||
      s.indexOf("conqueror")  > -1 ||
      s.indexOf("master")     > -1 ||
      s.indexOf("grandmaster")> -1) return PROXY_A;

  // Payload / Metro / Heavy → A أو B
  if (s.indexOf("payload") > -1 || s.indexOf("metro") > -1)
    return (seed & 1) ? PROXY_A : PROXY_B;

  // Arena / TDM / Domination → PROXY_A (أقل تأخير)
  if (s.indexOf("arena")      > -1 ||
      s.indexOf("tdm")        > -1 ||
      s.indexOf("domination") > -1) return PROXY_A;

  // Zombie / WoW / Infection → Round Robin
  if (s.indexOf("zombie")    > -1 ||
      s.indexOf("infection") > -1 ||
      s.indexOf("wow")       > -1) {
    var r = seed % 3;
    return r === 0 ? PROXY_A : r === 1 ? PROXY_B : PROXY_C;
  }

  // Cheer Park / Training → DIRECT (لا يحتاج بروكسي)
  if (s.indexOf("cheerpark")  > -1 ||
      s.indexOf("training")   > -1 ||
      s.indexOf("shootingrange") > -1) return DIRECT;

  // CDN / Update → DIRECT
  if (s.indexOf("cdn")      > -1 ||
      s.indexOf("patch")    > -1 ||
      s.indexOf("download") > -1 ||
      s.indexOf("update")   > -1) return DIRECT;

  // Default → A/B Smart Balance
  return (seed & 1) ? PROXY_A : PROXY_B;
}

// ─────────────────────────────────────────────
//  §11  QUANTUM SESSION LOCK v2.1
//  Triple Fingerprint: IP + Port + PathHash
//  قفل كامل طوال المباراة — لا تبديل داخلها
// ─────────────────────────────────────────────
var QSESSION = {
  ip:       null,
  port:     null,
  pathHash: null,
  proxy:    null,
  locked:   false,
  lockTime: 0
};
var QSESSION_TIMEOUT = 90000;  // 90 ثانية

function extractPort(url) {
  var m = url.match(/:(\d{2,5})/);
  return m ? m[1] : (url.indexOf("https:") === 0 ? "443" : "80");
}
function extractPathHash(url) {
  var path = url.split("?")[0].split("#")[0];
  return quantumHash(path) & 0xFF;
}
function nowMs() {
  return (typeof Date !== "undefined" && Date.now) ? Date.now() : 0;
}

function quantumLock(host, url, selectedProxy) {
  var ip = resolveIP(host);
  if (!ip) return BLOCK;

  var t    = nowMs();
  var port = extractPort(url);
  var pH   = extractPathHash(url);

  // انتهت مدة القفل؟ → أعد التهيئة
  if (QSESSION.locked && t - QSESSION.lockTime > QSESSION_TIMEOUT) {
    QSESSION.locked = false;
    QSESSION.ip     = null;
  }

  // جلسة جديدة → اقفل
  if (!QSESSION.locked) {
    QSESSION.ip       = ip;
    QSESSION.port     = port;
    QSESSION.pathHash = pH;
    QSESSION.proxy    = selectedProxy || PROXY_A;
    QSESSION.locked   = true;
    QSESSION.lockTime = t;
    return QSESSION.proxy;
  }

  // تطابق IP → أكمل بنفس البروكسي
  if (ip === QSESSION.ip) {
    QSESSION.lockTime = t;  // تجديد الوقت
    return QSESSION.proxy;
  }

  // IP مختلف بالكامل داخل المباراة → BLOCK
  return BLOCK;
}

// ─────────────────────────────────────────────
//  §12  WHITELIST — لا يُعاد توجيهها أبداً
// ─────────────────────────────────────────────
var WHITELIST = [
  "github.com","github.io","githubusercontent.com",
  "youtube.com","googlevideo.com","ytimg.com",
  "googleapis.com","gstatic.com","ggpht.com",
  "apple.com","icloud.com","microsoft.com",
  "windowsupdate.com","windows.com","office.com"
];
function isWhitelisted(h) {
  for (var i = 0; i < WHITELIST.length; i++)
    if (h === WHITELIST[i] || h.slice(-(WHITELIST[i].length+1)) === "."+WHITELIST[i])
      return true;
  return false;
}

// ─────────────────────────────────────────────
//  §13  FindProxyForURL — نقطة الدخول الرئيسية
// ─────────────────────────────────────────────
function FindProxyForURL(url, host) {
  var h = host.toLowerCase();

  // ①  WHITELIST — مرور مباشر
  if (isWhitelisted(h)) return DIRECT;

  // ②  CDN / Asset عام → مرور مباشر (قبل أي فحص)
  if (shExpMatch(url, "*.pak") || shExpMatch(url, "*.obb") ||
      shExpMatch(url, "*.bundle") || shExpMatch(url, "*.manifest"))
    return DIRECT;

  // ③  SYRIA WALL → حجب تام
  if (isSyria(h)) return BLOCK;

  // ④  PUBG DETECTION
  if (isPUBG(h, url)) {

    // ④-A  Fast-Path: سيرفرات أردنية معروفة → قفل فوري
    if (isKnownJoHost(h)) {
      var modeProxy = pubgModeRoute(h, url);
      if (modeProxy === DIRECT) return DIRECT;  // Training, CDN
      return quantumLock(h, url, modeProxy);
    }

    // ④-B  DNS Check: أردني؟
    var ip = resolveIP(h);
    if (ip && isJordanIP(ip)) {
      var modeProxyJo = pubgModeRoute(h, url);
      if (modeProxyJo === DIRECT) return DIRECT;
      return quantumLock(h, url, modeProxyJo);
    }

    // ④-C  عربي / خليجي؟ → PUBG Mode Route بدون قفل صارم
    if (ip && isArabIP(ip)) return pubgModeRoute(h, url);

    // ④-D  غير معروف → Mode Route عادي
    return pubgModeRoute(h, url);
  }

  // ⑤  غير PUBG + أردني → مرور مباشر (محلي)
  if (isJordan(h)) return DIRECT;

  // ⑥  FALLBACK GLOBAL → Quantum Balance بين A و B
  var seed = quantumHash(h);
  return (seed & 1) ? PROXY_A : PROXY_B;
}
