// ================================================================
// ╔══════════════════════════════════════════════════════════════════╗
// ║                                                                ║
// ║   🇯🇴  PUBG  JORDAN  ULTRA  v11  PRO  MAX  COMPLETE           ║
// ║                                                                ║
// ║   🏠 اللوبي          🏃 المصنفة         🎯 الغير مصنف         ║
// ║   🏟️ الساحة          💎 التميت رويال    🔫 المستودع            ║
// ║   🚀 إيفو جراوند     🏰 ميترو رويال     🎮 الأركيد            ║
// ║   👥 كل اللاعبين     🎤 الصوت           🏓 بنق منخفض          ║
// ║   ❌ لا يوجد DIRECT                                           ║
// ║                                                                ║
// ╚══════════════════════════════════════════════════════════════════╝
// ================================================================



// ================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 📋 القسم 1  ═══════════  الإعدادات الكاملة  CONFIG
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ================================================================

var CONFIG = {

    // ╔══════════════════════════════════════╗
    // ║  🏠 اللوبي  LOBBY                   ║
    // ╚══════════════════════════════════════╝
    JORDAN_LOBBY_FORCE:       true,
    LOBBY_LOCK:               true,
    LOBBY_PROXY_PRIMARY:      0,
    LOBBY_STICKY:             true,
    LOBBY_RACE:               true,

    // ╔══════════════════════════════════════╗
    // ║  🏃 المصنفة  RANKED                 ║
    // ╚══════════════════════════════════════╝
    RANKED_ENABLED:           true,
    RANKED_JORDAN_ONLY:       true,
    RANKED_LOCK:              true,
    RANKED_PROXY_PRIMARY:     0,
    RANKED_STICKY:            true,
    RANKED_RACE:              true,

    // ╔══════════════════════════════════════╗
    // ║  🎯 الغير مصنف  UNRANKED / CASUAL   ║
    // ╚══════════════════════════════════════╝
    UNRANKED_ENABLED:         true,
    UNRANKED_JORDAN_ONLY:     true,
    UNRANKED_LOCK:            true,
    UNRANKED_RACE:            true,

    // ╔══════════════════════════════════════╗
    // ║  🏟️ الساحة  ARENA                   ║
    // ╚══════════════════════════════════════╝
    ARENA_ENABLED:            true,
    ARENA_JORDAN_ONLY:        true,
    ARENA_LOCK:               true,
    ARENA_PROXY_PRIMARY:      0,
    ARENA_STICKY:             true,
    ARENA_RACE:               true,

    // ╔══════════════════════════════════════╗
    // ║  💎 التميت رويال  ULTIMATE ROYALE    ║
    // ╚══════════════════════════════════════╝
    ULTIMATE_ENABLED:         true,
    ULTIMATE_JORDAN_ONLY:     true,
    ULTIMATE_LOCK:            true,
    ULTIMATE_RACE:            true,

    // ╔══════════════════════════════════════╗
    // ║  🔫 المستودع  WAREHOUSE / TRAINING   ║
    // ╚══════════════════════════════════════╝
    WAREHOUSE_ENABLED:        true,
    WAREHOUSE_JORDAN_ONLY:    true,
    WAREHOUSE_LOCK:           true,
    WAREHOUSE_RACE:           true,

    // ╔══════════════════════════════════════╗
    // ║  🚀 إيفو جراوند  EVOGROUND          ║
    // ╚══════════════════════════════════════╝
    EVOGROUND_ENABLED:        true,
    EVOGROUND_JORDAN_ONLY:    true,
    EVOGROUND_LOCK:           true,
    EVOGROUND_RACE:           true,

    // ╔══════════════════════════════════════╗
    // ║  🏰 ميترو رويال  METRO ROYALE       ║
    // ╚══════════════════════════════════════╝
    METRO_ENABLED:            true,
    METRO_JORDAN_ONLY:        true,
    METRO_LOCK:               true,
    METRO_RACE:               true,

    // ╔══════════════════════════════════════╗
    // ║  🎮 الأركيد  ARCADE                  ║
    // ╚══════════════════════════════════════╝
    ARCADE_ENABLED:           true,
    ARCADE_JORDAN_ONLY:       true,
    ARCADE_LOCK:              true,
    ARCADE_RACE:              true,

    // ╔══════════════════════════════════════╗
    // ║  🌍 العالمية  WORLD / GLOBAL        ║
    // ╚══════════════════════════════════════╝
    WORLD_ENABLED:            true,
    WORLD_JORDAN_ONLY:        true,
    WORLD_RACE:               true,

    // ╔══════════════════════════════════════╗
    // ║  👥 اللاعبين  PLAYERS                ║
    // ╚══════════════════════════════════════╝
    PLAYER_SEARCH:            true,
    PLAYER_JORDAN_MAX:        true,
    PLAYER_SCAN_ALL_JO:       true,
    PLAYER_ALL_PROVIDERS:     true,
    PLAYER_RACE:              true,

    // ╔══════════════════════════════════════╗
    // ║  🔥 التجنيد  RECRUIT                ║
    // ╚══════════════════════════════════════╝
    FAST_RECRUIT:             true,
    RECRUIT_TIMEOUT:          50,
    RECRUIT_RACE:             true,
    RECRUIT_MULTI_PATH:       true,
    RECRUIT_JORDAN_ONLY:      true,

    // ╔══════════════════════════════════════╗
    // ║  🏓 البنق  PING                     ║
    // ╚══════════════════════════════════════╝
    LOW_PING_MODE:            true,
    PING_BOOST:               true,
    PING_STABILIZE:           true,
    PING_ROUTE_OPTIMIZE:      true,
    PING_CACHE:               true,

    // ╔══════════════════════════════════════╗
    // ║  🇯🇴 الأردن  JORDAN                  ║
    // ╚══════════════════════════════════════╝
    JORDAN_ONLY:              true,
    JORDAN_WIDE_MODE:         true,
    JORDAN_STRICT:            true,

    // ╔══════════════════════════════════════╗
    // ║  ⚡ الأداء  PERFORMANCE              ║
    // ╚══════════════════════════════════════╝
    AGGRESSIVE_CACHE:         true,
    DNS_PREFETCH:             true,
    FORCE_PROXY:              true,

    // ╔══════════════════════════════════════╗
    // ║  📊 السجل  LOG                       ║
    // ╚══════════════════════════════════════╝
    LOG:                      true,
    LOG_LEVEL:                2,
    DNS_CACHE:                8192
};



// ================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 🖥️ القسم 2  ═══════════  البروكسيات الكاملة
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ================================================================

// ══════════════════════════════════════════
// 🏠 اللوبي  LOBBY
// ══════════════════════════════════════════
var LOBBY_POOL = [
    "PROXY 46.185.230.166:8086",
    "PROXY 77.245.0.18:8086",
    "PROXY 37.152.2.62:443",
    "PROXY 79.134.128.41:443"
];

var LOBBY_BACKUP = [
    "PROXY 46.185.230.166:8085",
    "PROXY 77.245.0.18:8085",
    "PROXY 37.152.2.205:443",
    "PROXY 5.198.242.91:443"
];

// ══════════════════════════════════════════
// 🏃 التجنيد  RECRUIT
// ══════════════════════════════════════════
var RECRUIT_POOL = [
    "PROXY 46.185.230.166:8086",
    "PROXY 77.245.0.18:8086",
    "PROXY 37.152.2.62:443",
    "PROXY 79.134.128.41:443",
    "PROXY 212.35.66.45:8086"
];

var RECRUIT_BACKUP = [
    "PROXY 46.185.230.166:8085",
    "PROXY 77.245.0.18:8085",
    "PROXY 37.152.2.205:443",
    "PROXY 5.198.242.91:443",
    "PROXY 212.35.66.45:8085"
];

// ══════════════════════════════════════════
// 🏃 المصنفة  RANKED
// ══════════════════════════════════════════
var RANKED_POOL = [
    "PROXY 46.185.230.166:20001",
    "PROXY 212.35.66.45:20001",
    "PROXY 77.245.0.18:20001"
];

var RANKED_UDP = [
    "SOCKS5 46.185.230.166:20003",
    "SOCKS5 212.35.66.45:20003",
    "SOCKS5 77.245.0.18:20003"
];

// ══════════════════════════════════════════
// 🎯 الغير مصنف  UNRANKED
// ══════════════════════════════════════════
var UNRANKED_POOL = [
    "PROXY 46.185.230.166:20010",
    "PROXY 212.35.66.45:20010",
    "PROXY 77.245.0.18:20010"
];

var UNRANKED_UDP = [
    "SOCKS5 46.185.230.166:20011",
    "SOCKS5 212.35.66.45:20011",
    "SOCKS5 77.245.0.18:20011"
];

// ══════════════════════════════════════════
// 🏟️ الساحة  ARENA (TDM + Domination + Assault)
// ══════════════════════════════════════════
var ARENA_POOL = [
    "PROXY 46.185.230.166:20020",
    "PROXY 212.35.66.45:20020",
    "PROXY 77.245.0.18:20020",
    "PROXY 79.134.128.41:20020"
];

var ARENA_UDP = [
    "SOCKS5 46.185.230.166:20021",
    "SOCKS5 212.35.66.45:20021",
    "SOCKS5 77.245.0.18:20021"
];

// ══════════════════════════════════════════
// 💎 التميت رويال  ULTIMATE ROYALE
// ══════════════════════════════════════════
var ULTIMATE_POOL = [
    "PROXY 46.185.230.166:20030",
    "PROXY 212.35.66.45:20030",
    "PROXY 77.245.0.18:20030"
];

var ULTIMATE_UDP = [
    "SOCKS5 46.185.230.166:20031",
    "SOCKS5 212.35.66.45:20031",
    "SOCKS5 77.245.0.18:20031"
];

// ══════════════════════════════════════════
// 🔫 المستودع  WAREHOUSE
// ══════════════════════════════════════════
var WAREHOUSE_POOL = [
    "PROXY 46.185.230.166:20040",
    "PROXY 212.35.66.45:20040",
    "PROXY 77.245.0.18:20040"
];

var WAREHOUSE_UDP = [
    "SOCKS5 46.185.230.166:20041",
    "SOCKS5 212.35.66.45:20041",
    "SOCKS5 77.245.0.18:20041"
];

// ══════════════════════════════════════════
// 🚀 إيفو جراوند  EVOGROUND
// ══════════════════════════════════════════
var EVOGROUND_POOL = [
    "PROXY 46.185.230.166:20050",
    "PROXY 212.35.66.45:20050",
    "PROXY 77.245.0.18:20050"
];

var EVOGROUND_UDP = [
    "SOCKS5 46.185.230.166:20051",
    "SOCKS5 212.35.66.45:20051",
    "SOCKS5 77.245.0.18:20051"
];

// ══════════════════════════════════════════
// 🏰 ميترو رويال  METRO ROYALE
// ══════════════════════════════════════════
var METRO_POOL = [
    "PROXY 46.185.230.166:20060",
    "PROXY 212.35.66.45:20060",
    "PROXY 77.245.0.18:20060"
];

var METRO_UDP = [
    "SOCKS5 46.185.230.166:20061",
    "SOCKS5 212.35.66.45:20061",
    "SOCKS5 77.245.0.18:20061"
];

// ══════════════════════════════════════════
// 🎮 الأركيد  ARCADE
// ══════════════════════════════════════════
var ARCADE_POOL = [
    "PROXY 46.185.230.166:20070",
    "PROXY 212.35.66.45:20070",
    "PROXY 77.245.0.18:20070"
];

var ARCADE_UDP = [
    "SOCKS5 46.185.230.166:20071",
    "SOCKS5 212.35.66.45:20071",
    "SOCKS5 77.245.0.18:20071"
];

// ══════════════════════════════════════════
// 🌍 العالمية  WORLD
// ══════════════════════════════════════════
var WORLD_POOL = [
    "PROXY 46.185.230.166:20080",
    "PROXY 212.35.66.45:20080",
    "PROXY 77.245.0.18:20080"
];

var WORLD_UDP = [
    "SOCKS5 46.185.230.166:20081",
    "SOCKS5 212.35.66.45:20081",
    "SOCKS5 77.245.0.18:20081"
];

// ══════════════════════════════════════════
// ⚡ عام للمباراة  GENERAL MATCH
// ══════════════════════════════════════════
var MATCH_PROXIES = [
    "PROXY 46.185.230.166:20001",
    "PROXY 212.35.66.45:20001",
    "PROXY 77.245.0.18:20001"
];

var MATCH_UDP_PRO = [
    "SOCKS5 46.185.230.166:20003",
    "SOCKS5 212.35.66.45:20003",
    "SOCKS5 77.245.0.18:20003"
];

var FAST_UDP = [
    "SOCKS5 46.185.230.166:20005",
    "SOCKS5 212.35.66.45:20005",
    "SOCKS5 77.245.0.18:20005"
];

// ══════════════════════════════════════════
// 🎤 الصوت  VOICE
// ══════════════════════════════════════════
var VOICE_PRO = [
    "SOCKS5 46.185.230.166:10012",
    "SOCKS5 212.35.66.45:10012",
    "SOCKS5 77.245.0.18:10012"
];

// ══════════════════════════════════════════
// 🔍 البحث عن لاعبين  PLAYER SEARCH
// ══════════════════════════════════════════
var PLAYER_SEARCH_PRO = [
    "PROXY 46.185.230.166:9030",
    "PROXY 79.134.128.41:443",
    "PROXY 77.245.0.18:443",
    "PROXY 212.35.66.45:9030",
    "PROXY 37.152.2.62:443",
    "PROXY 5.198.242.91:443"
];

var PLAYER_SCAN_ALL_PRO = [
    "PROXY 46.185.230.166:9050",
    "PROXY 79.134.128.41:443",
    "PROXY 77.245.0.18:8087",
    "PROXY 37.152.2.204:443",
    "PROXY 5.198.242.91:443",
    "PROXY 212.35.66.45:9030",
    "PROXY 46.185.230.166:8086",
    "PROXY 77.245.0.18:8086"
];

var PLAYER_MAX_PRO = [
    "PROXY 46.185.230.166:9030",
    "PROXY 46.185.230.166:8086",
    "PROXY 46.185.230.166:8085",
    "PROXY 77.245.0.18:443",
    "PROXY 77.245.0.18:8086",
    "PROXY 77.245.0.18:8087",
    "PROXY 79.134.128.41:443",
    "PROXY 37.152.2.62:443",
    "PROXY 37.152.2.205:443",
    "PROXY 212.35.66.45:9030",
    "PROXY 212.35.66.45:8086",
    "PROXY 5.198.242.91:443"
];

// ══════════════════════════════════════════
// 🏓 تحسين البنق  PING
// ══════════════════════════════════════════
var PING_BOOST_PRO = [
    "SOCKS5 46.185.230.166:20006",
    "SOCKS5 212.35.66.45:20006",
    "SOCKS5 77.245.0.18:20006"
];

// ══════════════════════════════════════════
// 🚫 حظر  NO DIRECT
// ══════════════════════════════════════════
var BLOCK  = "PROXY 127.0.0.1:9";
var DIRECT = "PROXY 127.0.0.1:9";



// ================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 🇯🇴 القسم 3  ═══════════  نطاقات IP الأردن
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ================================================================

var JO_WIDE = {
    "82.212.":1,"91.106.":1,"188.123.":1,"188.247.":1,
    "185.80.":1,"185.81.":1,"185.82.":1,"185.83.":1,
    "185.84.":1,"185.85.":1,"185.86.":1,"185.87.":1,
    "37.220.":1,"31.14.":1,"31.15.":1,
    "37.48.":1,"37.49.":1,"37.50.":1,"37.51.":1,
    "79.134.":1,"79.173.":1,"79.174.":1,
    "78.135.":1,"78.138.":1,"78.139.":1,
    "185.12.":1,"185.13.":1,"185.14.":1,"185.15.":1,
    "46.235.":1,"31.186.":1,
    "46.32.":1,"46.185.":1,"46.249.":1,
    "86.108.":1,"92.253.":1,
    "185.50.":1,"185.51.":1,"185.52.":1,"185.53.":1,
    "212.34.":1,"212.35.":1,
    "5.198.":1,"5.199.":1,"5.200.":1,"5.201.":1,
    "185.20.":1,"185.21.":1,"185.22.":1,"185.23.":1,
    "185.30.":1,"185.31.":1,"185.32.":1,"185.33.":1,
    "185.40.":1,"185.41.":1,"185.42.":1,"185.43.":1,
    "46.20.":1,
    "212.100.":1,"212.101.":1,
    "193.189.":1,"194.50.":1,"194.242.":1,"195.58.":1,
    "37.75.":1,"37.76.":1,"37.77.":1,"87.236.":1,
    "81.21.":1,"81.28.":1,"80.90.":1,"81.31.":1,
    "149.200.":1,"149.201.":1,
    "185.60.":1,"185.61.":1,"185.62.":1,"185.63.":1,
    "185.70.":1,"185.71.":1,"185.72.":1,"185.73.":1,
    "185.90.":1,"185.91.":1,"185.92.":1,"185.93.":1,
    "193.128.":1,"193.129.":1,"193.130.":1,"193.131.":1,
    "217.172.":1,"213.158.":1,"213.159.":1,"195.78.":1,
    "103.28.":1,"103.29.":1,"103.30.":1,
    "140.204.":1,"140.205.":1,"43.224.":1,"43.225.":1,
    "213.181.":1,"213.186.":1,"82.207.":1,
    "100.64.":1,"100.65.":1,"100.66.":1,"100.67.":1,
    "100.68.":1,"100.69.":1,"100.70.":1,"100.71.":1,
    "176.29.":1,"212.14.":1,"212.11.":1,"213.6.":1,
    "195.28.":1,"85.112.":1,"212.33.":1,"62.201.":1,
    "82.203.":1,"86.62.":1,"82.194.":1,"87.101.":1,
    "82.198.":1,"213.42.":1,"213.180.":1,"213.255.":1,
    "83.65.":1,"94.176.":1,"62.20.":1,"77.240.":1,"85.115.":1,
    "188.122.":1,"188.124.":1,"188.125.":1,"188.126.":1,"188.127.":1,
    "188.246.":1,"188.248.":1,"188.249.":1,"188.250.":1,
    "188.251.":1,"188.252.":1,"188.253.":1,"188.254.":1,"188.255.":1,
    "77.245.":1,"37.152.":1,"5.198.":1
};



// ================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 🎯 القسم 4  ═══════════  سيرفرات PUBG الأردن
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ================================================================

var PUBG_JO_MATCH = {
    "82.212.80.":1,"82.212.81.":1,"82.212.82.":1,"82.212.83.":1,
    "82.212.84.":1,"82.212.85.":1,"82.212.86.":1,"82.212.87.":1,
    "82.212.96.":1,"82.212.97.":1,"82.212.98.":1,"82.212.99.":1,
    "82.212.100.":1,"82.212.101.":1,"82.212.102.":1,"82.212.103.":1,
    "82.212.104.":1,"82.212.105.":1,"82.212.106.":1,"82.212.107.":1,
    "82.212.108.":1,"82.212.109.":1,"82.212.110.":1,"82.212.111.":1,
    "91.106.80.":1,"91.106.81.":1,"91.106.82.":1,"91.106.83.":1,
    "91.106.84.":1,"91.106.85.":1,"91.106.86.":1,"91.106.87.":1,
    "91.106.96.":1,"91.106.97.":1,"91.106.98.":1,"91.106.99.":1,
    "37.49.128.":1,"37.49.129.":1,"37.49.130.":1,"37.49.131.":1,
    "37.49.132.":1,"37.49.133.":1,"37.49.134.":1,"37.49.135.":1,
    "37.50.0.":1,"37.50.1.":1,"37.50.2.":1,"37.50.3.":1,
    "37.50.4.":1,"37.50.5.":1,"37.50.6.":1,"37.50.7.":1,
    "37.50.8.":1,"37.50.9.":1,"37.50.10.":1,"37.50.11.":1,
    "37.50.12.":1,"37.50.13.":1,"37.50.14.":1,"37.50.15.":1,
    "37.51.0.":1,"37.51.1.":1,"37.51.2.":1,"37.51.3.":1,
    "37.51.4.":1,"37.51.5.":1,"37.51.6.":1,"37.51.7.":1,
    "46.185.64.":1,"46.185.65.":1,"46.185.66.":1,"46.185.67.":1,
    "46.185.68.":1,"46.185.69.":1,"46.185.70.":1,"46.185.71.":1,
    "46.185.72.":1,"46.185.73.":1,"46.185.74.":1,"46.185.75.":1,
    "86.108.0.":1,"86.108.1.":1,"86.108.2.":1,"86.108.3.":1,
    "86.108.4.":1,"86.108.5.":1,"86.108.6.":1,"86.108.7.":1,
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
    "185.60.0.":1,"185.60.1.":1,"185.60.2.":1,"185.60.3.":1,
    "185.60.4.":1,"185.60.5.":1,"185.60.6.":1,"185.60.7.":1,
    "185.61.0.":1,"185.61.1.":1,"185.61.2.":1,"185.61.3.":1,
    "185.62.0.":1,"185.62.1.":1,"185.62.2.":1,"185.62.3.":1,
    "185.63.0.":1,"185.63.1.":1,"185.63.2.":1,"185.63.3.":1,
    "185.70.0.":1,"185.70.1.":1,"185.70.2.":1,"185.70.3.":1,
    "185.71.0.":1,"185.71.1.":1,"185.71.2.":1,"185.71.3.":1,
    "185.72.0.":1,"185.72.1.":1,"185.72.2.":1,"185.72.3.":1,
    "185.73.0.":1,"185.73.1.":1,"185.73.2.":1,"185.73.3.":1,
    "212.100.0.":1,"212.100.1.":1,"212.100.2.":1,"212.100.3.":1,
    "212.101.0.":1,"212.101.1.":1,"212.101.2.":1,"212.101.3.":1,
    "37.75.0.":1,"37.75.1.":1,"37.75.2.":1,"37.75.3.":1,
    "37.75.4.":1,"37.75.5.":1,"37.75.6.":1,"37.75.7.":1,
    "212.100.16.":1,"212.100.17.":1,"212.100.18.":1,"212.100.19.":1,
    "212.100.20.":1,"212.100.21.":1,"212.100.22.":1,"212.100.23.":1,
    "212.100.24.":1,"212.100.25.":1,"212.100.26.":1,"212.100.27.":1,
    "212.100.28.":1,"212.100.29.":1,"212.100.30.":1,"212.100.31.":1,
    "212.100.32.":1,"212.100.33.":1,"212.100.34.":1,"212.100.35.":1,
    "212.100.36.":1,"212.100.37.":1,"212.100.38.":1,"212.100.39.":1,
    "212.100.40.":1,"212.100.41.":1,"212.100.42.":1,"212.100.43.":1,
    "212.100.44.":1,"212.100.45.":1,"212.100.46.":1,"212.100.47.":1,
    "212.100.48.":1,"212.100.49.":1,"212.100.50.":1,"212.100.51.":1,
    "212.100.52.":1,"212.100.53.":1,"212.100.54.":1,"212.100.55.":1,
    "212.100.56.":1,"212.100.57.":1,"212.100.58.":1,"212.100.59.":1,
    "212.100.60.":1,"212.100.61.":1,"212.100.62.":1,"212.100.63.":1,
    "212.100.64.":1,"212.100.65.":1,"212.100.66.":1,"212.100.67.":1,
    "212.100.68.":1,"212.100.69.":1,"212.100.70.":1,"212.100.71.":1,
    "212.100.72.":1,"212.100.73.":1,"212.100.74.":1,"212.100.75.":1,
    "212.100.76.":1,"212.100.77.":1,"212.100.78.":1,"212.100.79.":1,
    "212.100.80.":1,"212.100.81.":1,"212.100.82.":1,"212.100.83.":1,
    "212.100.84.":1,"212.100.85.":1,"212.100.86.":1,"212.100.87.":1,
    "212.100.88.":1,"212.100.89.":1,"212.100.90.":1,"212.100.91.":1,
    "212.100.92.":1,"212.100.93.":1,"212.100.94.":1,"212.100.95.":1,
    "212.100.96.":1,"212.100.97.":1,"212.100.98.":1,"212.100.99.":1,
    "212.100.100.":1,"212.100.101.":1,"212.100.102.":1,"212.100.103.":1,
    "212.100.104.":1,"212.100.105.":1,"212.100.106.":1,"212.100.107.":1,
    "212.100.108.":1,"212.100.109.":1,"212.100.110.":1,"212.100.111.":1,
    "212.100.112.":1,"212.100.113.":1,"212.100.114.":1,"212.100.115.":1,
    "212.100.116.":1,"212.100.117.":1,"212.100.118.":1,"212.100.119.":1,
    "212.100.120.":1,"212.100.121.":1,"212.100.122.":1,"212.100.123.":1,
    "212.100.124.":1,"212.100.125.":1,"212.100.126.":1,"212.100.127.":1,
    "212.100.128.":1,"212.100.129.":1,"212.100.130.":1,"212.100.131.":1,
    "212.100.132.":1,"212.100.133.":1,"212.100.134.":1,"212.100.135.":1,
    "212.100.136.":1,"212.100.137.":1,"212.100.138.":1,"212.100.139.":1,
    "212.100.140.":1,"212.100.141.":1,"212.100.142.":1,"212.100.143.":1,
    "212.100.144.":1,"212.100.145.":1,"212.100.146.":1,"212.100.147.":1,
    "212.100.148.":1,"212.100.149.":1,"212.100.150.":1,"212.100.151.":1,
    "212.100.152.":1,"212.100.153.":1,"212.100.154.":1,"212.100.155.":1,
    "212.100.156.":1,"212.100.157.":1,"212.100.158.":1,"212.100.159.":1,
    "212.100.160.":1,"212.100.161.":1,"212.100.162.":1,"212.100.163.":1,
    "212.100.164.":1,"212.100.165.":1,"212.100.166.":1,"212.100.167.":1,
    "212.100.168.":1,"212.100.169.":1,"212.100.170.":1,"212.100.171.":1,
    "212.100.172.":1,"212.100.173.":1,"212.100.174.":1,"212.100.175.":1,
    "212.100.176.":1,"212.100.177.":1,"212.100.178.":1,"212.100.179.":1,
    "212.100.180.":1,"212.100.181.":1,"212.100.182.":1,"212.100.183.":1,
    "212.100.184.":1,"212.100.185.":1,"212.100.186.":1,"212.100.187.":1,
    "212.100.188.":1,"212.100.189.":1,"212.100.190.":1,"212.100.191.":1,
    "212.100.192.":1,"212.100.193.":1,"212.100.194.":1,"212.100.195.":1,
    "212.100.196.":1,"212.100.197.":1,"212.100.198.":1,"212.100.199.":1,
    "212.100.200.":1,"212.100.201.":1,"212.100.202.":1,"212.100.203.":1,
    "212.100.204.":1,"212.100.205.":1,"212.100.206.":1,"212.100.207.":1,
    "212.100.208.":1,"212.100.209.":1,"212.100.210.":1,"212.100.211.":1,
    "212.100.212.":1,"212.100.213.":1,"212.100.214.":1,"212.100.215.":1,
    "212.100.216.":1,"212.100.217.":1,"212.100.218.":1,"212.100.219.":1,
    "212.100.220.":1,"212.100.221.":1,"212.100.222.":1,"212.100.223.":1,
    "212.100.224.":1,"212.100.225.":1,"212.100.226.":1,"212.100.227.":1,
    "212.100.228.":1,"212.100.229.":1,"212.100.230.":1,"212.100.231.":1,
    "212.100.232.":1,"212.100.233.":1,"212.100.234.":1,"212.100.235.":1,
    "212.100.236.":1,"212.100.237.":1,"212.100.238.":1,"212.100.239.":1,
    "212.100.240.":1,"212.100.241.":1,"212.100.242.":1,"212.100.243.":1,
    "212.100.244.":1,"212.100.245.":1,"212.100.246.":1,"212.100.247.":1,
    "212.100.248.":1,"212.100.249.":1,"212.100.250.":1,"212.100.251.":1,
    "212.100.252.":1,"212.100.253.":1,"212.100.254.":1,"212.100.255.":1
};



// ================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 🧠 القسم 5  ═══════════  المحرك  ENGINE
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ================================================================

var _dns            = {};
var _keys           = [];
var _matchLock      = null;
var _matchStartTime = 0;
var _recruitCount   = 0;
var _recruitTimes   = [];
var _lobbyLock      = null;
var _playerCount    = 0;
var _arenaLock      = null;
var _ultimateLock   = null;
var _warehouseLock  = null;
var _evogroundLock  = null;
var _metroLock      = null;
var _arcadeLock     = null;
var _unrankedLock   = null;
var _pingCache      = {};
var _failedProxies  = {};
var _hostCache      = {};
var _sessionSticky  = {};
var _modeCount      = {
    lobby: 0, ranked: 0, unranked: 0,
    arena: 0, ultimate: 0, warehouse: 0,
    evoground: 0, metro: 0, arcade: 0,
    world: 0, voice: 0, player: 0,
    recruit: 0, ping: 0, update: 0, blocked: 0
};



// ─── التسجيل ──────────────────────────

function _log(s, level) {
    if (!CONFIG.LOG) return;
    var lvl = level || 2;
    if (lvl > CONFIG.LOG_LEVEL) return;
    var icons = ["❌", "ℹ️", "🔧"];
    var icon = (lvl >= 0 && lvl <= 2) ? icons[lvl] : "📝";
    console.log("[🇯🇴v11] " + icon + " " + s);
}



// ─── تطبيع ────────────────────────────

function norm(h) {
    if (!h) return "";
    var i = h.indexOf(":");
    return i > -1 ? h.substr(0, i).toLowerCase() : h.toLowerCase();
}



// ─── DNS ───────────────────────────────

function getIP(h) {
    h = norm(h);
    if (_dns[h] !== undefined) return _dns[h];
    if (_hostCache[h] !== undefined && CONFIG.AGGRESSIVE_CACHE) {
        _dns[h] = _hostCache[h];
        return _hostCache[h];
    }
    var ip = dnsResolve(h);
    if (!ip || ip.split(".").length !== 4) {
        _dns[h] = null;
        _hostCache[h] = null;
        return null;
    }
    _dns[h] = ip;
    _hostCache[h] = ip;
    _keys.push(h);
    if (_keys.length > CONFIG.DNS_CACHE) {
        var oldKey = _keys.shift();
        delete _dns[oldKey];
    }
    return ip;
}



// ─── مطابقة IP ─────────────────────────

function ipMatch(ip, table) {
    if (!ip) return false;
    for (var prefix in table) {
        if (ip.lastIndexOf(prefix, 0) === 0) return true;
    }
    return false;
}

function isJO(ip) {
    if (!ip) return false;
    return ipMatch(ip, JO_WIDE);
}

function isJO_Server(ip) {
    if (!ip) return false;
    return ipMatch(ip, PUBG_JO_MATCH);
}



// ═══════════════════════════════════════
// 🏷️ كاشفات المودات  MODE DETECTORS
// ═══════════════════════════════════════

// 🏠 اللوبي
function isLobbyHost(host) {
    var h = host.toLowerCase();
    return /(lobby|menu|main|home|dashboard|hub|portal|entrance|welcome|start|title|loading|preload|init|auth|login|sign|session|token|verify|account|profile|avatar|outfit|skin|inventory|shop|store|crate|reward|pass|mission|event|news|feed|social|chat|message|notification|setting|option|config|preference|customize|emote|spray|frame|badge|pubg-auth|pubg-login|pubg-session|pubg-api|pubg-lobby|pubg-menu|pubg-home|pubg-main|pubg-start|pubg-init|pubg-load)/.test(h);
}

// 🏃 المصنفة (رانكد)
function isRankedHost(host) {
    var h = host.toLowerCase();
    return /(ranked|rank|competitive|comp|season|tier|rating|elo|lp|points|bronze|silver|gold|platinum|diamond|crown|ace|conqueror|leaderboard|ranking|standings|ladder|ranked-match|ranked-game|ranked-queue|ranked-mode|competitive-mode|season-rank|rank-tier)/.test(h);
}

// 🎯 الغير مصنف (كاجوال)
function isUnrankedHost(host) {
    var h = host.toLowerCase();
    return /(unranked|casual|normal|standard|quick|fill|auto-fill|pub-match|public|unrated|non-ranked|casual-match|casual-game|casual-mode|standard-match|normal-match|quick-match|pub-game|friendly|custom|private-room)/.test(h);
}

// 🏟️ الساحة (أرينا)
function isArenaHost(host) {
    var h = host.toLowerCase();
    return /(arena|tdm|team-deathmatch|deathmatch|domination|assault|gun-game|arena-match|arena-game|arena-mode|arena-server|arena-queue|arena-room|glory|gun-team|arena-battle|arena-brawl|arena-fight|clash|skirmish)/.test(h);
}

// 💎 التميت رويال
function isUltimateHost(host) {
    var h = host.toLowerCase();
    return /(ultimate|royale|ultimate-royale|ult-royale|prestige|legendary|champion|elite-royale|royal|royal-match|royal-game|ultimate-match|ultimate-game|ultimate-mode|prestige-mode|champion-mode)/.test(h);
}

// 🔫 المستودع (تدريب)
function isWarehouseHost(host) {
    var h = host.toLowerCase();
    return /(warehouse|training|practice|shooting-range|range|tutorial|bot|solo-practice|warm-up|drill|exercise|test-fire|weapon-test|aim-training|range-mode|training-mode|practice-mode|tutorial-mode|bot-match|solo-training)/.test(h);
}

// 🚀 إيفو جراوند
function isEvogroundHost(host) {
    var h = host.toLowerCase();
    return /(evo|evoground|evo-ground|payload|infection|zombie|survive|survival|monster|alien|supers|superpowers|bluezone|blue-zone|rush|mad|rampage|evo-mode|evo-match|payload-mode|infection-mode|zombie-mode|survival-mode|infection-match|payload-match)/.test(h);
}

// 🏰 ميترو رويال
function isMetroHost(host) {
    var h = host.toLowerCase();
    return /(metro|metro-royale|underground|metro-mode|metro-match|metro-game|metro-server|metro-queue|metro-room|metro-battle|metro-extract|extraction|metro-underground|metro-tunnel|metro-city)/.test(h);
}

// 🎮 الأركيد
function isArcadeHost(host) {
    var h = host.toLowerCase();
    return /(arcade|sniper|sniper-training|war|war-mode|mini|mini-zone|fast|quick-arcade|arcade-match|arcade-game|arcade-mode|arcade-server|arcade-queue|arcade-room|quick-game|mini-game|mini-match|small-map|fast-match)/.test(h);
}

// 🌍 العالمية
function isWorldHost(host) {
    var h = host.toLowerCase();
    return /(world|global|international|cross-region|cross-server|multi-region|world-server|global-server|world-match|global-match|world-mode|global-mode|inter-server|cross-play|cross-region-match)/.test(h);
}

// 🔍 البحث عن لاعبين
function isPlayerSearchHost(host) {
    var h = host.toLowerCase();
    return /(player|profile|stats|leaderboard|inspect|lookup|discover|nearby|around|inrange|locate|track|observe|spectate|watch|view|report|check|verify|name-|player-|profile-|stats-|id-|uid-|user-|account-|nickname|handle|playerid|playerlist|playersearch|playerinfo|playerdata|playerstatus|onlinestatus|presence|roster|alive|online|friends|buddy|contact|member|teammate|squadmate|opponent|kill|killed|eliminate|knock|finish|assist|damage|headshot|win|top|achievements|medals|trophies|history|match-history|recent|last|current|rankings|standings|ladder|scoreboard)/.test(h);
}

// 🏃 التجنيد
function isRecruitHost(host) {
    var h = host.toLowerCase();
    return /(matchmaking|recruit|queue|room|finder|search|squad|party|invite|gate|dispatcher|allocation|teamfinder|social|friend|group|crew|clan|guild|roster|squadron|matchmake|teamfinder|squadfinder|partyfinder|fill|mode-|map-|region-|server-|match-making|find-team|find-squad|find-party|join-team|join-squad|join-party)/.test(h);
}

// 🎤 الصوت
function isVoiceHost(host) {
    var h = host.toLowerCase();
    return /(voice|rtc|webrtc|voip|audio|mic|talk|channel|stun|turn|opus|telemetry|voicechat|speak|comm|relay|signaling|push-to-talk|open-mic|group-voice|team-voice|squad-voice)/.test(h);
}

// 🏓 البنق
function isPingHost(host) {
    var h = host.toLowerCase();
    return /(ping|latency|speed|test|measure|check|health|status|monitor|echo|probe|rtt|jitter|loss|network-|net-|perf-|diag|benchmark|connectivity|speedtest)/.test(h);
}

// 🎯 PUBG عام
function isPubgHost(host) {
    var h = host.toLowerCase();
    return /(pubg|pubgm|igamecj|tencent|proximabeta|gcloud|qcloud|gameloop|levelinfinite|vng|battlegrounds|unreal|epic|steam|krafton|tencentgames|pubgcorp|pubgmobile|mobile-|crafton|pubg-api|pubg-cdn|pubg-asset)/.test(h);
}

// 📥 التحديث
function isUpdateHost(host) {
    var h = host.toLowerCase();
    return /(update|patch|download|cdn|asset|resource|bundle|package|version|upgrade|hotfix|dlc|content|media|image|texture|model|sound|music|binary|executable|setup|install)/.test(h);
}

// ═══════════════════════════════════════
// 🎮 كشف مود المباراة المحدد
// ═══════════════════════════════════════

function isMatchHost(host) {
    var h = host.toLowerCase();
    return /(game|match|zone|shard|node|session|realtime|sync|instance|cell|logic|physics|battleground|arena|gs\.|hlserver|hlmatch|position|movement|shooting|hit|damage|spawn|respawn|connect|handshake|anticheat|battleye|eac|gslb|cluster|node-|zone-|game-|play-|core-|backend|realserver|gameengine|matchserver|gameserver|pubgserver|mg-server|ingame|in-match|in-game|active-match|live-match|battle|royale|erangel|miramar|sanhok|vikendi|livik|nusa|deston|taego|karakin|rondo|metro-map|arena-map)/.test(h);
}



// ─── أفضل بروكسي ──────────────────────

function getSmartProxy(pool) {
    if (!pool || pool.length === 0) return BLOCK;
    var healthyPool = [];
    var now = new Date().getTime();
    for (var i = 0; i < pool.length; i++) {
        var proxy = pool[i];
        if (!_failedProxies[proxy] || (now - _failedProxies[proxy]) > 30000) {
            healthyPool.push(proxy);
        }
    }
    if (healthyPool.length === 0) {
        _failedProxies = {};
        healthyPool = pool;
    }
    if (CONFIG.MATCH_PROXY_PRIMARY < healthyPool.length) {
        return healthyPool[CONFIG.MATCH_PROXY_PRIMARY];
    }
    return healthyPool[0];
}

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

// ─── بناء سلسلة سباق ──────────────────

function buildRaceChain(pool1, pool2) {
    var chain = "";
    for (var i = 0; i < pool1.length; i++) {
        chain += pool1[i];
        if (i < pool1.length - 1) chain += "; ";
    }
    if (pool2) {
        for (var j = 0; j < pool2.length; j++) {
            chain += "; " + pool2[j];
        }
    }
    chain += "; " + BLOCK;
    return chain;
}

// ─── بناء سلسلة مباراة ────────────────

function buildMatchChain(host, lockVar, lockVarSet, pool, udpPool, label) {
    if (!lockVar) {
        var idx = CONFIG.MATCH_PROXY_PRIMARY;
        if (idx >= pool.length) idx = 0;
        lockVar = pool[idx];
        _log("🔒 " + label + " LOCKED to: " + lockVar, 2);
    }

    if (CONFIG.MATCH_STICKY) {
        var sessionKey = host.split(".")[0];
        if (!_sessionSticky[sessionKey]) {
            _sessionSticky[sessionKey] = lockVar;
        }
    }

    var isRealtime = /(sync|snapshot|physics|position|movement|shooting|hit|damage|playerpos|state|tick|update|frame|render|interpolat|predict|smooth|client|server)/.test(host.toLowerCase());

    if (isRealtime) {
        var bestUDP = getLowestPingProxy(udpPool);
        if (bestUDP) return bestUDP + "; " + BLOCK;
        return udpPool[CONFIG.MATCH_PROXY_PRIMARY] + "; " + BLOCK;
    }

    var isSnapshot = /(snapshot|state|tick|world|scene|render|visual|frame|animate)/.test(host.toLowerCase());
    if (isSnapshot) {
        return FAST_UDP[0] + "; " + BLOCK;
    }

    return lockVar + "; " + BLOCK;
}



// ================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 🚀 القسم 6  ═══════════  الدالة الرئيسية
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ================================================================

function FindProxyForURL(url, host) {

    host = norm(host);



    // ─────────────────────────────────────
    // 🏠 المضيف المحلي
    // ─────────────────────────────────────
    if (isPlainHostName(host))           return BLOCK;
    if (shExpMatch(host, "*.local"))     return BLOCK;
    if (host === "localhost")            return BLOCK;
    if (shExpMatch(host, "127.*"))       return BLOCK;
    if (shExpMatch(host, "192.168.*"))   return BLOCK;
    if (shExpMatch(host, "10.*"))        return BLOCK;

// 🚫 GitHub EXCLUDE from SAFE DIRECT
if (
    shExpMatch(host, "*github.com") ||
    host === "github.com" ||
    shExpMatch(host, "*.githubusercontent.com") ||
    shExpMatch(host, "*.raw.githubusercontent.com")
) {
    _log("🚫 GITHUB EXCLUDED — FORCE PROXY", 1);
    return MATCH_PROXIES[0] + "; " + BLOCK;
}

    // ─────────────────────────────────────
    // 🔍 تحليل IP
    // ─────────────────────────────────────
    var ip       = getIP(host);
    var jo       = ip ? isJO(ip) : false;
    var joServer = ip ? isJO_Server(ip) : false;



    // ╔══════════════════════════════════════╗
    // ║  1️⃣  🏠 اللوبي  LOBBY               ║
    // ╚══════════════════════════════════════╝

    if (isLobbyHost(host)) {
        _modeCount.lobby++;
        _log("🏠 LOBBY #" + _modeCount.lobby + " — JORDAN LOBBY", 2);

        if (CONFIG.LOBBY_LOCK && !_lobbyLock) {
            _lobbyLock = LOBBY_POOL[CONFIG.LOBBY_PROXY_PRIMARY < LOBBY_POOL.length ? CONFIG.LOBBY_PROXY_PRIMARY : 0];
            _log("🔒 LOBBY LOCKED: " + _lobbyLock, 2);
        }

        if (CONFIG.LOBBY_RACE) {
            return buildRaceChain(LOBBY_POOL, LOBBY_BACKUP);
        }

        if (_lobbyLock) return _lobbyLock + "; " + BLOCK;
        return LOBBY_POOL[0] + "; " + BLOCK;
    }



    // ╔══════════════════════════════════════╗
    // ║  2️⃣  🏃 المصنفة  RANKED              ║
    // ╚══════════════════════════════════════╝

    if (CONFIG.RANKED_ENABLED && isRankedHost(host)) {
        _modeCount.ranked++;
        _log("🏆 RANKED #" + _modeCount.ranked + " — COMPETITIVE MODE", 2);

        if (joServer || jo || !ip) {
            if (CONFIG.RANKED_RACE) {
                return buildRaceChain(RANKED_POOL, RANKED_UDP);
            }
            return buildMatchChain(host, _matchLock, "_matchLock", RANKED_POOL, RANKED_UDP, "RANKED");
        }

        if (CONFIG.JORDAN_ONLY) {
            _log("🚫 NON-JORDAN RANKED BLOCKED", 1);
            return BLOCK;
        }
    }



    // ╔══════════════════════════════════════╗
    // ║  3️⃣  🎯 الغير مصنف  UNRANKED         ║
    // ╚══════════════════════════════════════╝

    if (CONFIG.UNRANKED_ENABLED && isUnrankedHost(host)) {
        _modeCount.unranked++;
        _log("🎯 UNRANKED #" + _modeCount.unranked + " — CASUAL MODE", 2);

        if (joServer || jo || !ip) {
            if (CONFIG.UNRANKED_RACE) {
                return buildRaceChain(UNRANKED_POOL, UNRANKED_UDP);
            }
            return buildMatchChain(host, _unrankedLock, "_unrankedLock", UNRANKED_POOL, UNRANKED_UDP, "UNRANKED");
        }

        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }



    // ╔══════════════════════════════════════╗
    // ║  4️⃣  🏟️ الساحة  ARENA               ║
    // ╚══════════════════════════════════════╝

    if (CONFIG.ARENA_ENABLED && isArenaHost(host)) {
        _modeCount.arena++;
        _log("🏟️ ARENA #" + _modeCount.arena + " — TDM / DOMINATION / ASSAULT", 2);

        if (joServer || jo || !ip) {
            if (CONFIG.ARENA_RACE) {
                return buildRaceChain(ARENA_POOL, ARENA_UDP);
            }
            return buildMatchChain(host, _arenaLock, "_arenaLock", ARENA_POOL, ARENA_UDP, "ARENA");
        }

        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }



    // ╔══════════════════════════════════════╗
    // ║  5️⃣  💎 التميت رويال  ULTIMATE       ║
    // ╚══════════════════════════════════════╝

    if (CONFIG.ULTIMATE_ENABLED && isUltimateHost(host)) {
        _modeCount.ultimate++;
        _log("💎 ULTIMATE ROYALE #" + _modeCount.ultimate + " — PRESTIGE MODE", 2);

        if (joServer || jo || !ip) {
            if (CONFIG.ULTIMATE_RACE) {
                return buildRaceChain(ULTIMATE_POOL, ULTIMATE_UDP);
            }
            return buildMatchChain(host, _ultimateLock, "_ultimateLock", ULTIMATE_POOL, ULTIMATE_UDP, "ULTIMATE");
        }

        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }



    // ╔══════════════════════════════════════╗
    // ║  6️⃣  🔫 المستودع  WAREHOUSE          ║
    // ╚══════════════════════════════════════╝

    if (CONFIG.WAREHOUSE_ENABLED && isWarehouseHost(host)) {
        _modeCount.warehouse++;
        _log("🔫 WAREHOUSE #" + _modeCount.warehouse + " — TRAINING MODE", 2);

        if (joServer || jo || !ip) {
            if (CONFIG.WAREHOUSE_RACE) {
                return buildRaceChain(WAREHOUSE_POOL, WAREHOUSE_UDP);
            }
            return buildMatchChain(host, _warehouseLock, "_warehouseLock", WAREHOUSE_POOL, WAREHOUSE_UDP, "WAREHOUSE");
        }

        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }



    // ╔══════════════════════════════════════╗
    // ║  7️⃣  🚀 إيفو جراوند  EVOGROUND       ║
    // ╚══════════════════════════════════════╝

    if (CONFIG.EVOGROUND_ENABLED && isEvogroundHost(host)) {
        _modeCount.evoground++;
        _log("🚀 EVOGROUND #" + _modeCount.evoground + " — PAYLOAD / INFECTION / ZOMBIE", 2);

        if (joServer || jo || !ip) {
            if (CONFIG.EVOGROUND_RACE) {
                return buildRaceChain(EVOGROUND_POOL, EVOGROUND_UDP);
            }
            return buildMatchChain(host, _evogroundLock, "_evogroundLock", EVOGROUND_POOL, EVOGROUND_UDP, "EVOGROUND");
        }

        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }



    // ╔══════════════════════════════════════╗
    // ║  8️⃣  🏰 ميترو رويال  METRO ROYALE    ║
    // ╚══════════════════════════════════════╝

    if (CONFIG.METRO_ENABLED && isMetroHost(host)) {
        _modeCount.metro++;
        _log("🏰 METRO ROYALE #" + _modeCount.metro + " — UNDERGROUND MODE", 2);

        if (joServer || jo || !ip) {
            if (CONFIG.METRO_RACE) {
                return buildRaceChain(METRO_POOL, METRO_UDP);
            }
            return buildMatchChain(host, _metroLock, "_metroLock", METRO_POOL, METRO_UDP, "METRO");
        }

        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }



    // ╔══════════════════════════════════════╗
    // ║  9️⃣  🎮 الأركيد  ARCADE              ║
    // ╚══════════════════════════════════════╝

    if (CONFIG.ARCADE_ENABLED && isArcadeHost(host)) {
        _modeCount.arcade++;
        _log("🎮 ARCADE #" + _modeCount.arcade + " — QUICK MATCH / SNIPER / WAR", 2);

        if (joServer || jo || !ip) {
            if (CONFIG.ARCADE_RACE) {
                return buildRaceChain(ARCADE_POOL, ARCADE_UDP);
            }
            return buildMatchChain(host, _arcadeLock, "_arcadeLock", ARCADE_POOL, ARCADE_UDP, "ARCADE");
        }

        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }



    // ╔══════════════════════════════════════╗
    // ║  🔟  🌍 العالمية  WORLD MODE          ║
    // ╚══════════════════════════════════════╝

    if (CONFIG.WORLD_ENABLED && isWorldHost(host)) {
        _modeCount.world++;
        _log("🌍 WORLD #" + _modeCount.world + " — GLOBAL MATCH", 2);

        if (joServer || jo || !ip) {
            if (CONFIG.WORLD_RACE) {
                return buildRaceChain(WORLD_POOL, WORLD_UDP);
            }
            return buildMatchChain(host, null, null, WORLD_POOL, WORLD_UDP, "WORLD");
        }

        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }



    // ═══════════════════════════════════════
    // 🏃 التجنيد السريع  FAST RECRUIT
    // ═══════════════════════════════════════

    if (isRecruitHost(host)) {
        _modeCount.recruit++;
        _recruitCount++;
        _log("🏃 RECRUIT #" + _recruitCount + " — FAST RACE — JORDAN ONLY", 2);

        return buildRaceChain(RECRUIT_POOL, RECRUIT_BACKUP);
    }



    // ═══════════════════════════════════════
    // 🔍 البحث عن لاعبين  PLAYER SEARCH
    // ═══════════════════════════════════════

    if (isPlayerSearchHost(host)) {
        _modeCount.player++;
        _playerCount++;
        _log("🔍 PLAYER #" + _playerCount + " — ALL JORDAN ZONES — MAX", 2);

        var searchChain = "";
        for (var i = 0; i < PLAYER_SEARCH_PRO.length; i++) {
            searchChain += PLAYER_SEARCH_PRO[i];
            if (i < PLAYER_SEARCH_PRO.length - 1) searchChain += "; ";
        }
        for (var j = 0; j < PLAYER_SCAN_ALL_PRO.length; j++) {
            searchChain += "; " + PLAYER_SCAN_ALL_PRO[j];
        }
        for (var k = 0; k < PLAYER_MAX_PRO.length; k++) {
            searchChain += "; " + PLAYER_MAX_PRO[k];
        }
        searchChain += "; " + BLOCK;
        return searchChain;
    }



    // ═══════════════════════════════════════
    // 🏓 تحسين البنق  PING
    // ═══════════════════════════════════════

    if (CONFIG.LOW_PING_MODE && isPingHost(host)) {
        _modeCount.ping++;
        _log("🏓 PING OPTIMIZE — Low Ping Mode", 2);

        var bestPingProxy = getLowestPingProxy(PING_BOOST_PRO);
        if (bestPingProxy) return bestPingProxy + "; " + BLOCK;
        return PING_BOOST_PRO[0] + "; " + BLOCK;
    }



    // ═══════════════════════════════════════
    // 🎮 أي مباراة لم تُكتشف — GENERAL MATCH
    // ═══════════════════════════════════════

    if (isMatchHost(host)) {
        _log("🎮 GENERAL MATCH — UNCLASSIFIED MODE", 2);

        if (joServer || jo || !ip) {
            return buildMatchChain(host, _matchLock, "_matchLock", MATCH_PROXIES, MATCH_UDP_PRO, "GENERAL");
        }

        if (CONFIG.JORDAN_ONLY) return BLOCK;
    }



    // ═══════════════════════════════════════
    // 🎤 الصوت  VOICE
    // ═══════════════════════════════════════

    if (isVoiceHost(host)) {
        _modeCount.voice++;
        _log("🎤 VOICE — Optimized Path", 2);

        var bestVoice = getLowestPingProxy(VOICE_PRO);
        if (bestVoice) return bestVoice + "; " + BLOCK;
        return VOICE_PRO[CONFIG.MATCH_PROXY_PRIMARY] + "; " + BLOCK;
    }



    // ═══════════════════════════════════════
    // 📥 تحديث PUBG
    // ═══════════════════════════════════════

    if (isUpdateHost(host) && isPubgHost(host)) {
        _modeCount.update++;
        _log("📥 PUBG UPDATE", 2);
        if (jo || !ip) return MATCH_PROXIES[0] + "; " + BLOCK;
        return BLOCK;
    }



    // ═══════════════════════════════════════
    // 🎯 أي حركة PUBG أخرى
    // ═══════════════════════════════════════

    if (isPubgHost(host)) {
        _log("🎯 PUBG — General Traffic", 2);
        if (jo || !ip) return MATCH_PROXIES[0] + "; " + BLOCK;
        return BLOCK;
    }



    // ═══════════════════════════════════════
    // 🚫 كل شيء آخر — حظر
    // ═══════════════════════════════════════

    _modeCount.blocked++;
    return BLOCK;
}



// ================================================================
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// 🔧 القسم 7  ═══════════  صيانة وإحصائيات
// |||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||
// ================================================================

function _periodicCleanup() {
    var now = new Date().getTime();
    var cleaned = 0;
    for (var key in _dns) {
        if (_keys.indexOf(key) === -1 && _dns[key] !== null) {
            delete _dns[key];
            cleaned++;
        }
    }
    for (var proxy in _failedProxies) {
        if ((now - _failedProxies[proxy]) > 30000) {
            delete _failedProxies[proxy];
        }
    }
    if (cleaned > 0) {
        _log("🧹 Cleaned " + cleaned + " DNS entries", 3);
    }
}

function _getStats() {
    return {
        lobby:        _modeCount.lobby,
        ranked:       _modeCount.ranked,
        unranked:     _modeCount.unranked,
        arena:        _modeCount.arena,
        ultimate:     _modeCount.ultimate,
        warehouse:    _modeCount.warehouse,
        evoground:    _modeCount.evoground,
        metro:        _modeCount.metro,
        arcade:       _modeCount.arcade,
        world:        _modeCount.world,
        voice:        _modeCount.voice,
        player:       _modeCount.player,
        recruit:      _modeCount.recruit,
        ping:         _modeCount.ping,
        update:       _modeCount.update,
        blocked:      _modeCount.blocked,
        lobbyLock:    _lobbyLock,
        matchLock:    _matchLock,
        dnsCache:     Object.keys(_dns).length,
        failed:       Object.keys(_failedProxies).length
    };
}
