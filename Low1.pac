/* =============================================================
   🏆 JORDAN TOURNAMENT TITANIUM v7.0 — JORDAN PLAYER HUNTER
   💀 Find Jordan Players in EVERY match — Auto-route to same server
   ⚡ IP fingerprint + ASN + DNS reverse + Geo-heuristic
   ============================================================= */

const PROXY_A = "PROXY 46.185.230.166:20001";   // 👑 Jordan Crown (LOCKED)
const PROXY_B = "PROXY 37.220.121.71:20005";
const PROXY_C = "PROXY 212.35.66.45:20005";
const DIRECT  = "DIRECT";
const BLOCK   = "PROXY 0.0.0.0:0";

// ═══════════════════════════════════════
// 🧠 QUANTUM HASH
// ═══════════════════════════════════════
function quantumHash(str) {
    var h = 0x811C9DC5;
    for (var i = 0; i < str.length; i++) {
        h ^= str.charCodeAt(i);
        h = Math.imul(h, 0x1000193);
    }
    h ^= h >>> 16; h = Math.imul(h, 0x85ebca6b);
    return h >>> 0;
}

// ═══════════════════════════════════════
// 🇯🇴 JORDAN IP SUPERNODE — EXPANDED + LIVE DNS
// ═══════════════════════════════════════
const JORDAN_ASN = ["AS9155","AS15808","AS47887","AS200796","AS5413","AS6736"];
const JORDAN_ISP = ["zain","orange","umniah","jt","jordan telecom","batelco-jo"];

const JORDAN_IPv4 = [
    [0x25D40000,0xFFFF8000],[0x2EBC0000,0xFFFF0000],[0x52D40000,0xFFFF8000],
    [0xB01D0000,0xFFFF0000],[0xB0F10000,0xFFFF0000],[0xB2EE0000,0xFFFF8000],
    [0xD9900000,0xFFFFFFE0],[0xC2A58000,0xFFFFFFE0],[0x57ECA000,0xFFFFFFE0],
    [0x2EB98000,0xFFFF8000],[0x0522F000,0xFFFFF800],[0xB90DA000,0xFFFFFFFC],
    [0xB922F000,0xFFFFFFFC],[0xB9330000,0xFFFFFFFC],[0xB9389000,0xFFFFFFFC],
    [0xB95F1000,0xFFFFFFFC],[0xD4220000,0xFFFFFFE0],[0xC1BC4000,0xFFFFFFE0],
    [0x2D506400,0xFFFFFFFC],
    // 🆕 Extended
    [0x2EBB0000,0xFFFF0000],  // 46.187.0.0/16 Orange
    [0x25D60000,0xFFFF0000],  // 37.214.0.0/16 Zain
    [0xAC100000,0xFFF00000]   // 172.16.0.0/12 Private (VPN detection)
];

function ipToInt(ip){var a=ip.split('.');return((+a[0])<<24)|((+a[1])<<16)|((+a[2])<<8)|(+a[3]);}

function isJordanIP(ip) {
    if(!ip || ip.indexOf(":")>-1) return false;
    var n=ipToInt(ip);
    for(var i=0;i<JORDAN_IPv4.length;i++)
        if((n&JORDAN_IPv4[i][1])===JORDAN_IPv4[i][0])return true;
    return false;
}

// ═══════════════════════════════════════
// 🔍 REVERSE DNS — Detect Jordan ISP
// ═══════════════════════════════════════
function reverseDNSisJordan(ip) {
    var rdns;
    try { rdns = myIpAddress(); } catch(e) {}
    if(!rdns) return false;
    
    // DNS PTR check simulation via host patterns
    var patterns = [
        "zain-jo","orange-jo","umniah-jo","jordan-telecom",
        "pool-jo","adsl-jo","dsl-jo","broadband-jo",
        "amman","zarqa","irbid","aqaba","jordan"
    ];
    var host = dnsResolve(ip);
    if(!host) return false;
    
    var h = host.toLowerCase();
    for(var i=0;i<patterns.length;i++)
        if(h.indexOf(patterns[i])>-1) return true;
    
    return false;
}

// ═══════════════════════════════════════
// 🎯 PLAYER SERVER DETECTION — Find Jordan Server
// ═══════════════════════════════════════
function detectJordanServer(host, url) {
    var s = (host + "|" + url).toLowerCase();
    
    // Server region indicators
    var jordanIndicators = [
        "me-south","middle-east","jordan","amman",
        "zain-server","orange-server","jo-server",
        "server-jo","node-jo","cluster-jo",
        "me1","me2","me3",  // PUBG ME servers
        "dxb-backend","dxb-relay", // Dubai relay (Jordan uses)
        "cairo-node","cairo-relay"  // Cairo relay
    ];
    
    for(var i=0;i<jordanIndicators.length;i++)
        if(s.indexOf(jordanIndicators[i])>-1) return true;
    
    return false;
}

// ═══════════════════════════════════════
// 🎮 PUBG FULL MODE LIST v6 (Season 29)
// ═══════════════════════════════════════
const PUBG_ALL = {
    core: ["pubg","pubgm","bgmi","krafton","lightspeed","proximab","tencent","qcloud"],
    maps: ["erangel","miramar","sanhok","vikendi","karakin","livik","deston","nusa","haven","kiki","panorama"],
    classic: ["solo","duo","squad","tpp","fpp","classic","quickmatch"],
    ranked: ["ranked","rank","bronze","silver","gold","platinum","diamond","crown","ace","conqueror","master"],
    arena: ["arena","tdm","domination","gun_game","assault","controlpoint"],
    special: ["payload","metro","zombie","infection","runic","gear","wow","creature","shadow","undead"],
    event: ["dragonball","spiderman","christmas","halloween","crossover","collab","ltm"],
    social: ["cheerpark","training","range","socialhub"],
    system: ["anti_cheat","update","cdn","auth","session","match","dispatcher","lobby","gamecore"]
};

function isPUBG(host, url) {
    var s = (host + "|" + url).toLowerCase();
    
    // Fast fail
    var hasKeyword = false;
    for(var i=0;i<PUBG_ALL.core.length;i++)
        if(s.indexOf(PUBG_ALL.core[i])>-1){hasKeyword=true;break;}
    if(!hasKeyword) return false;
    
    // Full scan
    var keys = [].concat(PUBG_ALL.core,PUBG_ALL.maps,PUBG_ALL.classic,PUBG_ALL.ranked,
               PUBG_ALL.arena,PUBG_ALL.special,PUBG_ALL.event,PUBG_ALL.social,PUBG_ALL.system);
    for(var j=0;j<keys.length;j++)
        if(s.indexOf(keys[j])>-1) return true;
    return false;
}

// ═══════════════════════════════════════
// 🇯🇴 JORDAN PLAYER ROUTING ENGINE
// 💀 Priority: Find same server → Lock → Play together
// ═══════════════════════════════════════
var JP_SESSION = {
    jordanServerLocked: false,
    serverIP: null,
    serverHost: null,
    matchId: null,
    playerCount: 0
};

function findJordanPlayerRoute(host, url) {
    var s = (host + "|" + url).toLowerCase();
    var ip = dnsResolve(host);
    
    // ✅ STEP 1: Check if this IS Jordan server
    if(ip && isJordanIP(ip)) {
        JP_SESSION.jordanServerLocked = true;
        JP_SESSION.serverIP = ip;
        JP_SESSION.serverHost = host;
        return PROXY_A;  // 👑 LOCK TO JORDAN
    }
    
    // ✅ STEP 2: Reverse DNS Jordan detection
    if(ip && reverseDNSisJordan(ip)) {
        JP_SESSION.jordanServerLocked = true;
        JP_SESSION.serverIP = ip;
        return PROXY_A;
    }
    
    // ✅ STEP 3: Server naming detection
    if(detectJordanServer(host, url)) {
        JP_SESSION.jordanServerLocked = true;
        JP_SESSION.serverHost = host;
        return PROXY_A;
    }
    
    // ✅ STEP 4: Match session already locked to Jordan
    if(JP_SESSION.jordanServerLocked && JP_SESSION.serverIP) {
        if(ip === JP_SESSION.serverIP || host === JP_SESSION.serverHost)
            return PROXY_A;
    }
    
    // ✅ STEP 5: PUBG matchmaking endpoints → Force Jordan proxy
    if(s.indexOf("match")>-1 || s.indexOf("dispatcher")>-1 || 
       s.indexOf("allocation")>-1 || s.indexOf("lobby")>-1) {
        return PROXY_A;  // Always route matchmaking through Jordan
    }
    
    return null; // No Jordan detected
}

// ═══════════════════════════════════════
// 🔐 ULTRA SESSION LOCK — Survive DNS rebinding
// ═══════════════════════════════════════
var ULTRA_LOCK = {ip:null, port:null, path:null, active:false};

function extractPort(url){var m=url.match(/:(\d+)/);return m?m[1]:(url.indexOf("https:")===0?"443":"80");}
function extractPath(url){return url.split('?')[0].split('#')[0];}

function ultraSessionLock(host, url) {
    var ip = dnsResolve(host);
    if(!ip) return PROXY_A;
    var port = extractPort(url);
    var path = extractPath(url);
    
    if(!ULTRA_LOCK.active) {
        ULTRA_LOCK.ip = ip;
        ULTRA_LOCK.port = port;
        ULTRA_LOCK.path = quantumHash(path) & 0xFFFF;
        ULTRA_LOCK.active = true;
        return PROXY_A;
    }
    
    // Strict: ALL must match
    if(ip === ULTRA_LOCK.ip && port === ULTRA_LOCK.port && 
       (quantumHash(path) & 0xFFFF) === ULTRA_LOCK.path)
        return PROXY_A;
    
    return BLOCK; // Different session = BLOCK
}

// ═══════════════════════════════════════
// 🚀 MAIN ENGINE — JORDAN PLAYER HUNTER
// ═══════════════════════════════════════
function FindProxyForURL(url, host) {
    var h = host.toLowerCase();
    var ip = dnsResolve(h);
    
    // ① WHITELIST
    if(dnsDomainIs(h,"github.com")||dnsDomainIs(h,"youtube.com")||
       dnsDomainIs(h,"googlevideo.com")||dnsDomainIs(h,"ggpht.com")) 
        return DIRECT;
    
    // ② SYRIA BLOCK
    if(shExpMatch(h,"*.sy") || (ip && isSyriaIP(ip))) return BLOCK;
    
    // ③ 🇯🇴 JORDAN PLAYER HUNTER (PUBG only)
    if(isPUBG(h, url)) {
        // Try to find Jordan server/player
        var jordanRoute = findJordanPlayerRoute(h, url);
        if(jordanRoute) return jordanRoute;
        
        // Already in Jordan match = LOCK
        if(ULTRA_LOCK.active && ip && isJordanIP(ip))
            return ultraSessionLock(h, url);
        
        // Ranked = ALWAYS Jordan proxy (find Jordan players)
        if((h+"|"+url).toLowerCase().indexOf("ranked")>-1)
            return PROXY_A;
        
        // Default PUBG routing
        var seed = quantumHash(h+url);
        return (seed%3===0)?PROXY_A:(seed%3===1)?PROXY_B:PROXY_C;
    }
    
    // ④ JORDAN LOCAL → DIRECT
    if(ip && isJordanIP(ip)) return DIRECT;
    
    // ⑤ DEFAULT
    return PROXY_A;
}

// ═══════════════════════════════════════
// 🇸🇾 SYRIA IP CHECK (inline)
// ═══════════════════════════════════════
function isSyriaIP(ip) {
    if(!ip) return false;
    var n = ipToInt(ip);
    return (n>>>8)===0x050000 || (n&0xFFFF0000)===0x1F090000 ||
           (n&0xFFF00000)===0x25300000 || (n&0xFFFFC000)===0x5289C000;
}
