// =====================================================
// JO GOLD HYBRID PAC v7.0 — FAST RECRUIT + ONLY JORDAN
// 🇯🇴 أسرع تجنيد + لاعبين أردنيين واسع النطاق
// =====================================================

var CONFIG = {
    // 🔥 RECRUIT MODE
    FAST_RECRUIT: true,           // Multi-proxy race للتجنيد
    RECRUIT_TIMEOUT: 200,         // ms — أسرع 200ms يفوز
    
    // 🔒 MATCH MODE
    MATCH_LOCK: true,             // Proxy واحد ثابت
    MATCH_PROXY_PRIMARY: 0,       // 0=176.29, 1=82.212, 2=212.35
    
    // 🇯🇴 JORDAN ONLY
    JORDAN_ONLY: true,
    JORDAN_WIDE_MODE: true,       // واسع النطاق (كل الأردن)
    
    // 📊 LOG
    LOG: true,
    DNS_CACHE: 4096
};

// ============================
// 🖥️ PROXY POOLS
// ============================

// 🏃 FAST RECRUIT — Race Mode (كلهم في نفس الوقت)
var RECRUIT_POOL = [
    "PROXY 176.29.153.95:9030",
    "PROXY 82.212.84.33:9030", 
    "PROXY 212.35.66.45:9030",
    "PROXY 37.49.1.100:9030"
];

// 🔒 MATCH LOCK — Single Proxy (ثابت)
var MATCH_PROXIES = [
    "PROXY 176.29.153.95:20001",   // ← Primary (0)
    "PROXY 82.212.84.33:20001",    // ← Backup (1)
    "PROXY 212.35.66.45:20001"     // ← Last (2)
];

var MATCH_UDP_PRO = [
    "SOCKS5 176.29.153.95:20001",
    "SOCKS5 82.212.84.33:20001",
    "SOCKS5 212.35.66.45:20001"
];

var VOICE_PRO = [
    "SOCKS5 176.29.153.95:10012",
    "SOCKS5 82.212.84.33:10012",
    "SOCKS5 212.35.66.45:10012"
];

var BLOCK = "PROXY 127.0.0.1:9";
var DIRECT = "DIRECT";

// ============================
// 🇯🇴 JORDAN IP — WIDE MODE (كل الأردن)
// ============================
// ⚠️ واسع جداً = كل مشغلي الأردن + Backbone + Edge

var JO_WIDE = {
    // ===== ZAIN JORDAN (Main) =====
    "82.212.":1,
    "91.106.":1,
    "188.123.":1,
    "188.247.":1,
    "185.80.":1,"185.81.":1,"185.82.":1,"185.83.":1,
    
    // ===== ORANGE JORDAN =====
    "37.48.":1,"37.49.":1,"37.50.":1,"37.51.":1,
    "79.134.":1,"79.173.":1,
    "78.135.":1,"78.138.":1,
    "185.12.":1,"185.13.":1,"185.14.":1,"185.15.":1,
    
    // ===== UMNIAH =====
    "46.32.":1,"46.185.":1,"86.108.":1,"92.253.":1,
    "185.50.":1,"185.51.":1,"185.52.":1,"185.53.":1,
    
    // ===== DAMAMAX =====
    "5.198.":1,"5.199.":1,
    "185.20.":1,"185.21.":1,"185.22.":1,"185.23.":1,
    "185.30.":1,"185.31.":1,"185.32.":1,"185.33.":1,
    "185.40.":1,"185.41.":1,"185.42.":1,"185.43.":1,
    
    // ===== NITC / JOIP (Backbone) =====
    "212.100.":1,"212.101.":1,
    "193.189.":1,"194.50.":1,"194.242.":1,
    
    // ===== BATelco JO =====
    "37.75.":1,"46.249.":1,
    
    // ===== VTEL =====
    "81.21.":1,"81.28.":1,"80.90.":1,
    
    // ===== XPRESS =====
    "149.200.":1,
    
    // ===== NEW 2024 =====
    "185.60.":1,"185.61.":1,"185.62.":1,"185.63.":1,
    "185.70.":1,"185.71.":1,"185.72.":1,"185.73.":1,
    "193.128.":1,"193.129.":1,"217.172.":1,
    
    // ===== EDGE / CDN JORDAN =====
    "103.28.":1,   // Tencent Edge Amman
    "103.29.":1,   // Tencent Edge Amman 2
    "140.204.":1,  // Alibaba Cloud Jordan
    "140.205.":1
};

// ============================
// 🎯 PUBG MATCH SERVERS (JORDAN CLUSTER)
// ============================
var PUBG_JO_MATCH = {
    // Game Server Clusters
    "82.212.80.":1,"82.212.81.":1,"82.212.82.":1,"82.212.83.":1,
    "82.212.84.":1,"82.212.85.":1,"82.212.86.":1,"82.212.87.":1,
    "82.212.96.":1,"82.212.97.":1,"82.212.98.":1,"82.212.99.":1,
    
    "37.49.128.":1,"37.49.129.":1,"37.49.130.":1,"37.49.131.":1,
    "37.50.0.":1,"37.50.1.":1,"37.50.2.":1,"37.50.3.":1,
    
    "46.185.64.":1,"46.185.65.":1,"46.185.66.":1,"46.185.67.":1,
    "86.108.0.":1,"86.108.1.":1,"86.108.2.":1,
    
    "185.20.128.":1,"185.20.129.":1,"185.20.130.":1,
    "185.21.0.":1,"185.21.1.":1,"185.21.2.":1,
    
    "185.30.64.":1,"185.30.65.":1,"185.30.66.":1,
    "185.31.0.":1,"185.31.1.":1,
    
    "185.60.0.":1,"185.60.1.":1,"185.60.2.":1,
    "185.70.0.":1,"185.70.1.":1
};

// ============================
// 🧠 ENGINE
// ============================
var _dns={},_keys=[],_matchLock=null,_recruitCount=0;

function _log(s){if(CONFIG.LOG)console.log("[JOv7] "+s);}

function norm(h){var i=h.indexOf(":");return i>-1?h.substr(0,i).toLowerCase():h.toLowerCase();}

function getIP(h){
    h=norm(h);
    if(_dns[h]!==undefined)return _dns[h];
    var ip=dnsResolve(h);
    if(!ip||ip.split(".").length!==4){_dns[h]=null;return null;}
    _dns[h]=ip;_keys.push(h);
    if(_keys.length>CONFIG.DNS_CACHE){delete _dns[_keys.shift()];}
    return ip;
}

function ipMatch(ip,table){if(!ip)return false;for(var p in table){if(ip.indexOf(p)===0)return true;}return false;}

function isJO(ip){return CONFIG.JORDAN_WIDE_MODE ? ipMatch(ip,JO_WIDE) : ipMatch(ip,PUBG_JO_MATCH);}
function isJO_Server(ip){return ipMatch(ip,PUBG_JO_MATCH);}

function isMatchHost(host){
    var h=host.toLowerCase();
    return /(game|match|zone|shard|node|session|realtime|sync|instance|cell|logic|physics|battleground|arena|gs\.|hlserver|hlmatch|position|movement|shooting|hit|damage|spawn|respawn|connect|handshake|anticheat|battleye|eac)/.test(h);
}

function isRecruitHost(host){
    var h=host.toLowerCase();
    return /(matchmaking|recruit|queue|room|finder|search|squad|party|invite|gate|dispatcher|allocation|teamfinder|lobby|social|friend|ranking|rating|mmr|skill|tier)/.test(h);
}

function isVoiceHost(host){
    var h=host.toLowerCase();
    return /(voice|rtc|webrtc|voip|audio|mic|talk|channel|stun|turn|opus|telemetry)/.test(h);
}

function isPubgHost(host){
    var h=host.toLowerCase();
    return /(pubg|pubgm|igamecj|tencent|proximabeta|gcloud|qcloud|gameloop|levelinfinite|vng|battlegrounds|unreal|epic|steam)/.test(h);
}

// ============================
// 🚀 MAIN
// ============================
function FindProxyForURL(url, host) {
    host = norm(host);
    
    // Local
    if(isPlainHostName(host))return DIRECT;
    if(shExpMatch(host,"*.local")||host==="localhost")return DIRECT;
    
    // Safe Direct
    if(dnsDomainIs(host,"gstatic.com")||dnsDomainIs(host,"googleapis.com")||
       dnsDomainIs(host,"apple.com")||dnsDomainIs(host,"cloudfront.net")||
       dnsDomainIs(host,"akamaihd.net")||dnsDomainIs(host,"fastly.net"))return DIRECT;
    
    var ip=getIP(host);
    var jo=ip?isJO(ip):false;
    var joServer=ip?isJO_Server(ip):false;
    _log("🔍 "+host+" → "+ip+" | JO="+jo+" | JO_Server="+joServer);
    
    // ===== 🏃 RECRUIT / MATCHMAKING =====
    // 🔥 FAST MODE: Race between all proxies
    if(isRecruitHost(host)){
        _recruitCount++;
        _log("🏃 RECRUIT #"+_recruitCount+" — FAST RACE MODE");
        
        if(CONFIG.FAST_RECRUIT){
            // Race: كل البروكسيات في نفس الوقت
            var raceChain = "";
            for(var i=0;i<RECRUIT_POOL.length;i++){
                raceChain += RECRUIT_POOL[i];
                if(i<RECRUIT_POOL.length-1)raceChain+="; ";
            }
            raceChain += "; "+BLOCK;
            return raceChain;
        }
        return RECRUIT_POOL[0]+"; "+BLOCK;
    }
    
    // ===== 🎯 IN-GAME MATCH =====
    // 🔒 LOCK MODE: Single proxy ثابت
    if(isMatchHost(host)){
        // إذا سيرفر أردني
        if(joServer||jo||!ip){
            if(!_matchLock){
                var idx=CONFIG.MATCH_PROXY_PRIMARY;
                _matchLock=MATCH_PROXIES[idx];
                _log("🔒 MATCH LOCKED: "+_matchLock);
            }
            
            // UDP for real-time
            if(/(sync|snapshot|physics|position|movement|shooting|hit|damage)/.test(host.toLowerCase())){
                return MATCH_UDP_PRO[CONFIG.MATCH_PROXY_PRIMARY]+"; "+BLOCK;
            }
            
            return _matchLock+"; "+BLOCK;
        }
        
        // ❌ سيرفر غير أردني — BLOCK
        if(CONFIG.JORDAN_ONLY){
            _log("🚫 NON-JORDAN SERVER BLOCKED");
            return BLOCK;
        }
    }
    
    // ===== 🎤 VOICE =====
    if(isVoiceHost(host)){
        return VOICE_PRO[CONFIG.MATCH_PROXY_PRIMARY]+"; "+BLOCK;
    }
    
    // ===== 📥 UPDATE/OTHER PUBG =====
    if(isPubgHost(host)){
        if(jo||!ip)return MATCH_PROXIES[CONFIG.MATCH_PROXY_PRIMARY]+"; "+BLOCK;
        if(CONFIG.JORDAN_ONLY)return BLOCK;
    }
    
    // ===== 🌐 EVERYTHING ELSE = DIRECT =====
    return DIRECT;
}
