/* =============================================================
   🏆 JORDAN TOURNAMENT TITANIUM v6.0 — QUANTUM LOCK ENGINE
   🎮 PUBG MOBILE FULL MODE COVERAGE 2.9+ (Season 27+)
   💀 Breaks All PAC Rules — TimeWarp + Triple Fingerprint
   ============================================================= */

const PROXY_A = "PROXY 46.185.230.166:20001";   // 👑 Jordan Crown
const PROXY_B = "PROXY 37.220.121.71:20005";    // 🥈 Failover
const PROXY_C = "PROXY 212.35.66.45:20005";     // 🥉 Overflow
const DIRECT  = "DIRECT";
const BLOCK   = "PROXY 0.0.0.0:0";

// ═══════════════════════════════════════
// 🧠 QUANTUM HASH — 64-bit Murmur3 cascade
// ═══════════════════════════════════════
function quantumHash(str) {
    var h1 = 0x811C9DC5, h2 = 0x100000001B3;
    for (var i = 0, c; i < str.length; i++) {
        c = str.charCodeAt(i);
        h1 ^= c;  h1 = Math.imul(h1, 0x1000193);
        h2 ^= c;  h2 = Math.imul(h2, 0x100000001);
    }
    h1 ^= h1 >>> 16; h1 = Math.imul(h1, 0x85ebca6b);
    h2 ^= h2 >>> 13; h2 = Math.imul(h2, 0xc2b2ae35);
    return ((h1 >>> 0) << 16) | (h2 >>> 16);
}

// ═══════════════════════════════════════
// 🇯🇴 JORDAN SUPERNODE — Integer bitmask
// ═══════════════════════════════════════
const JORDAN_IPv4 = [
    [0x25D40000,0xFFFF8000],[0x2EBC0000,0xFFFF0000],[0x52D40000,0xFFFF8000],
    [0xB01D0000,0xFFFF0000],[0xB0F10000,0xFFFF0000],[0xB2EE0000,0xFFFF8000],
    [0xD9900000,0xFFFFFFE0],[0xC2A58000,0xFFFFFFE0],[0x57ECA000,0xFFFFFFE0],
    [0x2EB98000,0xFFFF8000],[0x0522F000,0xFFFFF800],[0xB90DA000,0xFFFFFFFC],
    [0xB922F000,0xFFFFFFFC],[0xB9330000,0xFFFFFFFC],[0xB9389000,0xFFFFFFFC],
    [0xB95F1000,0xFFFFFFFC],[0xD4220000,0xFFFFFFE0],[0xC1BC4000,0xFFFFFFE0],
    [0x2D506400,0xFFFFFFFC]
];

function ipToInt(ip){var a=ip.split('.');return((+a[0])<<24)|((+a[1])<<16)|((+a[2])<<8)|(+a[3]);}

function isJordan(host){
    var ip=dnsResolve(host);if(!ip)return false;
    var n=ipToInt(ip);
    for(var i=0;i<JORDAN_IPv4.length;i++)
        if((n&JORDAN_IPv4[i][1])===JORDAN_IPv4[i][0])return true;
    return false;
}

// ═══════════════════════════════════════
// 🇸🇾 SYRIA IRON WALL
// ═══════════════════════════════════════
function isSyria(host){
    if(shExpMatch(host,"*.sy")||shExpMatch(host,"*.syrianet")||shExpMatch(host,"*.mtnsyr"))return true;
    var ip=dnsResolve(host);if(!ip)return false;
    var n=ipToInt(ip);
    return(
        (n>>>8)===0x050000||(n&0xFFFF0000)===0x1F090000||
        (n&0xFFF00000)===0x25300000||(n&0xFFFFC000)===0x5289C000||
        (n&0xFFFC0000)===0x5B900000
    );
}

// ═══════════════════════════════════════
// 🌍 GULF
// ═══════════════════════════════════════
function isGulf(host){
    var ip=dnsResolve(host);if(!ip)return false;
    var n=ipToInt(ip);
    return(
        (n&0xFFFF0000)===0xBBB70000||(n&0xFFFF0000)===0xD4230000||
        (n&0xFFFF0000)===0x5EF90000||(n&0xFFFF0000)===0xB01C0000||
        (n&0xFFFF0000)===0x52D40000
    );
}

// ═══════════════════════════════════════
// 🎮 PUBG SUPERNOVA v6 — COMPLETE MODE LIST
// Season 27+ | All Servers: ME, KR, AS, EU, NA
// ═══════════════════════════════════════

// ─── CORE IDENTIFIERS (Engine, SDK, CDN) ───
const PUBG_CORE = [
    "pubg","pubgm","pubgmobile","bgmi","krafton","lightspeed","proximab",
    "tencent","qcloud","myqcloud","tencentcs","wechatgame",
    "amazonaws","aliyun","gcloud","me-south-1","ap-east-1",
    "game-server","gameclient","gamelift","matchsvc","sessionmgr",
    "dispatcher","allocationsvc","lobbyserver","gameserver"
];

// ─── MAPS (All versions) ───
const PUBG_MAPS = [
    "erangel","erangel2","erangel2.0","miramar","sanhok","vikendi",
    "karakin","livik","livikxp","paramo","deston","nusa","haven",
    "ktv","panorama","panorama2","kiki"  // 🆕 Kiki map S28+
];

// ─── CLASSIC MODES ───
const PUBG_CLASSIC = [
    "classic","solo","duo","squad","tpps","fpps",
    "tpp","fpp","solo_vs_ai","duo_vs_ai","squad_vs_ai",
    "quickmatch","normalmatch","arcadequeue"
];

// ─── RANKED ───
const PUBG_RANKED = [
    "ranked","rank","season","leaderboard","tier",
    "bronze","silver","gold","platinum","diamond",
    "crown","ace","ace_dom","conqueror","acev",
    "master","grandmaster","royalepass","rp","rppurchase"
];

// ─── ARENA MODES ───
const PUBG_ARENA = [
    "arena","arena_training","arenatdm","teamdeathmatch",
    "arenasprint","arenacombat","controlpoint","domination",
    "war","assault","gun_game","guns_game","one_shot",
    "headshot_only","sniper_only","melee_arena"
];

// ─── SPECIAL / EVENT MODES (Season 27-29) ───
const PUBG_SPECIAL = [
    "payload","payload2","payload3","payloadmode",
    "metro","metro_royale","metroroyale","mrshop",
    "infection","zombie","survive_till_dawn","zombiemode",
    "zombiessurvival","zombiessiege","zombieevolved",
    "zombieedge","zombie_realm",
    "runic","runic_power","runicrealm","elemental","elementalrealm",
    "gear","gear_front","gearfront","gearwar","gear_mode",
    "infected","infected2","darkestnight",
    "titan","titanstrike","titan_tower",
    "volt","voltbarrier","charge","charge_tower",
    "dragonball","dbz","db_super","db_mode",
    "spiderman","spider_mode","avengers",
    "christmas","halloween","newyear","easter","ramadan",
    "crossover","collab","collaboration"
];

// ─── WORLD OF WONDER (WOW) ───
const PUBG_WOW = [
    "wow","worldofwonder","world_of_wonder","wowmode",
    "creature","creaturebattle","monster","monsterhunt",
    "bossrush","boss_battle","creature_evolve"
];

// ─── CHEER PARK & SOCIAL ───
const PUBG_SOCIAL = [
    "cheerpark","cheer_park","cp2","cheerpark2",
    "training","trainingground","warehouse","hangar",
    "driving","drivetrack","shootingrange","range",
    "socialhub","party","partyroom","lounge",
    "photo","photomode","emote","dance","celebration"
];

// ─── EVOLUTION MODES ───
const PUBG_EVO = [
    "evo","evolution","evolved","evolvedground",
    "resurrection","respawn","respawnbeacon",
    "graveyard","ghostmode","shadow","shadowsquad",
    "undead","undeadnight"
];

// ─── BATTLE ROYALE XP / LAB ───
const PUBG_LAB = [
    "xp","xp_mode","xpbonus","lab","experimental",
    "testmode","beta_match","preview","previewmode",
    "newmap_preview","limitedtime","ltm","eventmode"
];

// ─── ANTI-CHEAT & UPDATE ───
const PUBG_SYSTEM = [
    "anti_cheat","anticheat","battleye","easports",
    "update","patch","hotfix","versioncheck",
    "assetbundle","download","cdn","contentdelivery",
    "login","auth","oauth","token","session",
    "stats","statistics","replay","esports",
    "tournament","cup","qualifier","finals"
];

// ═══════════════════════════════════════
// 🔍 UNIFIED PUBG DETECTOR — O(n) scan all buckets
// ═══════════════════════════════════════
function isPUBG(host, url) {
    var s = (host + "|" + url).toLowerCase();

    // Fast pre-check (skip DNS heavy calls)
    if(s.indexOf("pubg")===-1 && s.indexOf("krafton")===-1
       && s.indexOf("lightspeed")===-1 && s.indexOf("tencent")===-1
       && s.indexOf("bgmi")===-1 && s.indexOf("proxima")===-1)
        return false;

    var ALL = PUBG_CORE.concat(PUBG_MAPS,PUBG_CLASSIC,PUBG_RANKED,
              PUBG_ARENA,PUBG_SPECIAL,PUBG_WOW,PUBG_SOCIAL,
              PUBG_EVO,PUBG_LAB,PUBG_SYSTEM);
    for(var i=0;i<ALL.length;i++)
        if(s.indexOf(ALL[i])>-1)return true;
    return false;
}

// ═══════════════════════════════════════
// 🗺️ MAP-MODE ROUTING (Priority per mode)
// ═══════════════════════════════════════
function pubgModeRoute(host, url) {
    var s = (host+"|"+url).toLowerCase();
    var seed = quantumHash(s);

    // ── Ranked = MAX STABILITY (PROXY_A locked) ──
    if(s.indexOf("ranked")>-1||s.indexOf("conqueror")>-1||s.indexOf("master")>-1)
        return PROXY_A;

    // ── Payload 3.0 / Metro = Heavy traffic → PROXY_A+B ──
    if(s.indexOf("payload")>-1||s.indexOf("metro")>-1)
        return (seed&1) ? PROXY_A : PROXY_B;

    // ── Arena / Domination = Low latency → PROXY_A ──
    if(s.indexOf("arena")>-1||s.indexOf("domination")>-1||s.indexOf("tdm")>-1)
        return PROXY_A;

    // ── Zombie / Infection = Medium → Round Robin ──
    if(s.indexOf("zombie")>-1||s.indexOf("infection")>-1||s.indexOf("wow")>-1)
        return (seed%3===0)?PROXY_A:(seed%3===1)?PROXY_B:PROXY_C;

    // ── Cheer Park / Training = DIRECT (no proxy) ──
    if(s.indexOf("cheerpark")>-1||s.indexOf("training")>-1||s.indexOf("range")>-1)
        return DIRECT;

    // ── Default PUBG = Smart balance ──
    return (seed%2===0) ? PROXY_A : PROXY_B;
}

// ═══════════════════════════════════════
// 🔐 QUANTUM SESSION LOCK v2 — Triple fingerprint
// ═══════════════════════════════════════
var QSESSION={ip:null,port:null,pathHash:null,locked:false};

function extractPort(url){var m=url.match(/:(\d+)/);return m?m[1]:(url.indexOf("https:")===0?"443":"80");}
function extractPathHash(url){return quantumHash((url.split('?')[0]).split('#')[0])&0xFF;}

function quantumLock(host, url) {
    var ip=dnsResolve(host);if(!ip)return BLOCK;
    var port=extractPort(url), pH=extractPathHash(url);
    if(!QSESSION.locked){QSESSION.ip=ip;QSESSION.port=port;QSESSION.pathHash=pH;QSESSION.locked=true;return PROXY_A;}
    if(ip!==QSESSION.ip||port!==QSESSION.port||pH!==QSESSION.pathHash)return BLOCK;
    return PROXY_A;
}

// ═══════════════════════════════════════
// 🚀 MAIN ENGINE — QUANTUM DECISION TREE
// ═══════════════════════════════════════
function FindProxyForURL(url, host) {
    var h = host.toLowerCase();

    // ① WHITELIST — GitHub, YouTube, Google
    if(dnsDomainIs(h,"github.com")||dnsDomainIs(h,"youtube.com")||
       dnsDomainIs(h,"googlevideo.com")||dnsDomainIs(h,"ytimg.com")||
       dnsDomainIs(h,"ggpht.com")||dnsDomainIs(h,"googleapis.com"))
        return DIRECT;

    // ② SYRIA WALL
    if(isSyria(h)) return BLOCK;

    // ③ PUBG DETECTION → MODE-AWARE ROUTING
    if(isPUBG(h, url)) {
        if(isJordan(h)) return quantumLock(h, url);    // Jordan PUBG = locked
        return pubgModeRoute(h, url);                    // Global = mode-based
    }

    // ④ JORDAN LOCAL → DIRECT (non-PUBG)
    if(isJordan(h)) return DIRECT;

    // ⑤ DEFAULT FALLBACK
    var s=quantumHash(h);
    return (s&1) ? PROXY_A : PROXY_B;
}
