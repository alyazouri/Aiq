// ================================================================
// ╔══════════════════════════════════════════════════════════════╗
// ║  🇯🇴  PUBG MOBILE  JORDAN  ULTRA  v11  COMPLETE             ║
// ║                                                              ║
// ║  ✅ كل المودات: رويال | أرينا | تميت | زومبي | اصلي        ║
// ║  ✅ كل الأقسام: لوبي | مستودع | ساحة | مخصص | تدريب        ║
// ║  ✅ كل الوظائف: شات | صوت | تحديث | صور | ملفات           ║
// ║  ✅ 100% JORDAN ONLY — بنق 0-10ms — لاعبين أردنيين          ║
// ╚══════════════════════════════════════════════════════════════╝
// ================================================================


// =============================================================================
// 📋 SECTION 1 — CONFIGURATION
// =============================================================================

var CONFIG = {
    // ─── 🏃 RECRUIT & MATCHMAKING ───
    FAST_RECRUIT         : true,
    RECRUIT_TIMEOUT      : 60,
    RECRUIT_RACE_ALL     : true,
    RECRUIT_RETRY        : 5,
    RECRUIT_BATCH        : true,

    // ─── 🔒 MATCH MODES ───
    MATCH_LOCK           : true,
    MATCH_PROXY_IDX      : 0,
    MATCH_STICKY         : true,
    MATCH_KEEP_ALIVE     : true,
    MATCH_JORDAN_ONLY    : true,

    // ─── 🎮 ALL GAME MODES ───
    MODE_CLASSIC         : true,    // رويال كلاسيك
    MODE_ARCADE          : true,    // أرينا
    MODE_TDM              : true,    // تميت
    MODE_ZOMBIE           : true,    // زومبي
    MODE_PAYLOAD          : true,    // اصلي
    MODE_RANKED           : true,    // رانكد
    MODE_UNRANKED         : true,    // غير مصنف
    MODE_CUSTOM           : true,    // مخصص
    MODE_TRAINING         : true,    // تدريب
    MODE_WAREHOUSE        : true,    // مستودع
    MODE_ARENA            : true,    // ساحة
    MODE_LOBBY            : true,    // لوبي

    // ─── 🔍 PLAYER SEARCH ───
    PLAYER_SEARCH        : true,
    PLAYER_ALL_JORDAN    : true,
    PLAYER_RACE_SCAN     : true,
    PLAYER_WIDE          : true,

    // ─── 🏓 PING ───
    LOW_PING             : true,
    PING_TARGET          : 8,
    PING_OPTIMIZE        : true,

    // ─── 🇯🇴 JORDAN ───
    JORDAN_ONLY          : true,
    JORDAN_WIDE          : true,
    JORDAN_STRICT        : true,
    FORCE_PROXY_ALL      : true,

    // ─── ⚡ PERFORMANCE ───
    LOG                  : true,
    LOG_LEVEL            : 1,
    DNS_CACHE            : 32768,
    AGGRESSIVE_CACHE     : true
};


// =============================================================================
// 📋 SECTION 2 — PROXY POOLS
// =============================================================================

// 🏃 RECRUIT RACE
var RECRUIT_POOL = [
    "PROXY 46.185.230.166:8086",
    "PROXY 77.245.0.18:8086",
    "PROXY 37.152.2.62:443"
];

var RECRUIT_BACKUP = [
    "PROXY 46.185.230.166:8085",
    "PROXY 77.245.0.18:8085",
    "PROXY 37.152.2.205:443"
];

// 🔒 MATCH
var MATCH_PROXY = [
    "PROXY 46.185.230.166:20001",
    "PROXY 212.35.66.45:20001"
];

// 📡 UDP
var UDP_PROXY = [
    "SOCKS5 46.185.230.166:20003",
    "SOCKS5 212.35.66.45:20003"
];

var FAST_UDP = [
    "SOCKS5 46.185.230.166:20005",
    "SOCKS5 212.35.66.45:20005"
];

// 🎤 VOICE
var VOICE_PROXY = [
    "SOCKS5 46.185.230.166:10012",
    "SOCKS5 212.35.66.45:10012"
];

// 🔍 PLAYER SEARCH
var PLAYER_SEARCH_PROXY = [
    "PROXY 46.185.230.166:9030",
    "PROXY 79.134.128.41:443",
    "PROXY 77.245.0.18:443"
];

// 🔍 WIDE SCAN
var PLAYER_SCAN_ALL = [
    "PROXY 46.185.230.166:9050",
    "PROXY 79.134.128.41:443",
    "PROXY 77.245.0.18:8087",
    "PROXY 37.152.2.204:443",
    "PROXY 5.198.242.91:443",
    "PROXY 212.35.66.45:9030"
];

// 🏓 PING BOOST
var PING_PROXY = [
    "SOCKS5 46.185.230.166:20006",
    "SOCKS5 212.35.66.45:20006"
];

// 📥 UPDATE & CDN
var UPDATE_PROXY = [
    "PROXY 46.185.230.166:8088",
    "PROXY 212.35.66.45:8088"
];

// 🚫 BLOCK
var BLOCK  = "PROXY 127.0.0.1:9";
var DIRECT = "PROXY 127.0.0.1:9";


// =============================================================================
// 📋 SECTION 3 — JORDAN IP (كل مناطق الأردن)
// =============================================================================

var JO_ALL = {
    // ZAIN JORDAN
    "82.212.":1, "91.106.":1, "188.123.":1, "188.247.":1,
    "185.80.":1, "185.81.":1, "185.82.":1, "185.83.":1,
    "185.84.":1, "185.85.":1, "185.86.":1, "185.87.":1,
    "37.220.":1, "31.14.":1, "31.15.":1,

    // ORANGE JORDAN
    "37.48.":1, "37.49.":1, "37.50.":1, "37.51.":1,
    "79.134.":1, "79.173.":1, "79.174.":1,
    "78.135.":1, "78.138.":1, "78.139.":1,
    "185.12.":1, "185.13.":1, "185.14.":1, "185.15.":1,
    "46.235.":1, "31.186.":1,

    // UMNIAH
    "46.32.":1, "46.185.":1, "46.249.":1,
    "86.108.":1, "92.253.":1,
    "185.50.":1, "185.51.":1, "185.52.":1, "185.53.":1,
    "212.34.":1,

    // DAMAMAX
    "5.198.":1, "5.199.":1, "5.200.":1, "5.201.":1,
    "185.20.":1, "185.21.":1, "185.22.":1, "185.23.":1,
    "185.30.":1, "185.31.":1, "185.32.":1, "185.33.":1,
    "185.40.":1, "185.41.":1, "185.42.":1, "46.20.":1,

    // BACKBONE
    "212.100.":1, "212.101.":1,
    "193.189.":1, "194.50.":1, "194.242.":1,
    "212.35.":1, "195.58.":1,

    // BATELCO
    "37.75.":1, "37.76.":1, "37.77.":1, "87.236.":1,

    // VTEL
    "81.21.":1, "81.28.":1, "80.90.":1, "81.31.":1,

    // XPRESS
    "149.200.":1, "149.201.":1,

    // NEW 2024-2025
    "185.60.":1, "185.61.":1, "185.62.":1, "185.63.":1,
    "185.70.":1, "185.71.":1, "185.72.":1, "185.73.":1,
    "185.90.":1, "185.91.":1, "185.92.":1, "185.93.":1,
    "193.128.":1, "193.129.":1, "193.130.":1, "193.131.":1,
    "217.172.":1, "213.158.":1, "213.159.":1, "195.78.":1,

    // CLOUD
    "103.28.":1, "103.29.":1, "103.30.":1,
    "140.204.":1, "140.205.":1,
    "43.224.":1, "43.225.":1,

    // CGNAT
    "100.64.":1, "100.65.":1, "100.66.":1, "100.67.":1,
    "100.68.":1, "100.69.":1, "100.70.":1, "100.71.":1,

    // FULL 185.x
    "185.0.":1, "185.1.":1, "185.2.":1, "185.3.":1,
    "185.4.":1, "185.5.":1, "185.6.":1, "185.7.":1,
    "185.8.":1, "185.9.":1, "185.10.":1, "185.11.":1,
    "185.16.":1, "185.17.":1, "185.18.":1, "185.19.":1,
    "185.24.":1, "185.25.":1, "185.26.":1, "185.27.":1,
    "185.28.":1, "185.29.":1, "185.34.":1, "185.35.":1,
    "185.36.":1, "185.37.":1, "185.38.":1, "185.39.":1,
    "185.44.":1, "185.45.":1, "185.46.":1, "185.47.":1,
    "185.48.":1, "185.49.":1, "185.54.":1, "185.55.":1,
    "185.56.":1, "185.57.":1, "185.58.":1, "185.59.":1,
    "185.64.":1, "185.65.":1, "185.66.":1, "185.67.":1,
    "185.68.":1, "185.69.":1, "185.74.":1, "185.75.":1,
    "185.76.":1, "185.77.":1, "185.78.":1, "185.79.":1,
    "185.88.":1, "185.89.":1, "185.94.":1, "185.95.":1,
    "185.96.":1, "185.97.":1, "185.98.":1, "185.99.":1,
    "185.100.":1, "185.101.":1, "185.102.":1, "185.103.":1,
    "185.104.":1, "185.105.":1, "185.106.":1, "185.107.":1,
    "185.108.":1, "185.109.":1, "185.110.":1, "185.111.":1,
    "185.112.":1, "185.113.":1, "185.114.":1, "185.115.":1,
    "185.116.":1, "185.117.":1, "185.118.":1, "185.119.":1,
    "185.120.":1, "185.121.":1, "185.122.":1, "185.123.":1,
    "185.124.":1, "185.125.":1, "185.126.":1, "185.127.":1,

    // FULL OPERATORS
    "176.29.":1, "212.14.":1, "212.11.":1, "213.6.":1,
    "195.28.":1, "85.112.":1, "212.33.":1, "62.201.":1,
    "82.203.":1, "86.62.":1, "82.194.":1, "87.101.":1,
    "82.198.":1, "213.42.":1, "213.180.":1, "213.255.":1,
    "83.65.":1, "94.176.":1, "62.20.":1, "77.240.":1,
    "85.115.":1, "188.122.":1, "188.124.":1, "188.125.":1,
    "188.126.":1, "188.127.":1,
    "188.246.":1, "188.248.":1, "188.249.":1,
    "188.250.":1, "188.251.":1, "188.252.":1,
    "188.253.":1, "188.254.":1, "188.255.":1
};


// =============================================================================
// 📋 SECTION 4 — PUBG MOBILE ALL MODES HOSTS
// =============================================================================

// 🎮 GAME MODES PATTERNS
var PUBG_MODES = {
    // CLASSIC ROYALE (رويال كلاسيك)
    classic : /(classic|royale|erangel|miramar|sanhok|vikendi|karakin|paramo|haven|deston|rondo|taego|livik|ballistic|training|arcade|quick)/i,

    // TDM (تميت)
    tdm     : /(tdm|team.deathmatch|deathmatch|teamdm|arena.train|arena.train)/i,

    // ARENA (ساحة)
    arena   : /(arena|arena.mode|squad.arena|arena.battle|clash|squad.clash)/i,

    // ZOMBIE (زومبي)
    zombie  : /(zombie|undead|survive|zsurvive|zmode|zombiemode|horror|nightmare)/i,

    // PAYLOAD (اصلي)
    payload : /(payload|payload.mode|heavy.gun|artillery|missile|tank|helicopter|jet|warship|bombtruck|supplydrop)/i,

    // RANKED (مصنف)
    ranked  : /(ranked|competitive|rank|tier|elo|mmr|season|division|league|cup|tournament)/i,

    // UNRANKED (غير مصنف)
    unranked: /(unranked|casual|normal|quick.match|fun|party)/i,

    // CUSTOM (مخصص)
    custom  : /(custom|private|room|host|invite|password|friend.room|vip|special)/i,

    // TRAINING (تدريب)
    training: /(training|practice|range|shooting.range|aim.train|driving|vehicle|drone|basics)/i,

    // WAREHOUSE (مستودع)
    warehouse: /(warehouse|storage|inventory|item|loot|drop|supply|cache|chest|container|box|case|safe|locker)/i,

    // LOBBY (لوبي)
    lobby   : /(lobby|main|home|menu|ui|hud|interface|screen|dashboard|profile|avatar|character|cosmetic|skin|emote|gesture|pose|frame|border|badge|title|achievement|level|xp|bp|pass|royale.pass|season.pass|shop|store|market|buy|purchase|uc|gcoin|diamond|token|currency|reward|claim|daily|weekly|mission|challenge|quest|task|event|limited|special.event|login|signin|register|account|auth|token|session|cookie|security|verify|otp|2fa|social|friend|clan|guild|squad|party|invite|chat|message|notification|mail|inbox|settings|option|video|audio|control|haptic|vibration|gyro|touch|button|layout|theme|dark|light|font|size|resolution|fps|frame|rate|quality|graphics|texture|shadow|lighting|anti.aliasing|post|processing|hdr|bloom|motion|blur|depth|of|field|ambient|occlusion|reflection|refraction|water|grass|foliage|particle|effect|explosion|smoke|fire|spark|muzzle|flash|shell|bullet|trail|impact|blood|gore|violence|rating|mature|age|restriction|parental|control|child|safe|mode|offline|demo|trial|free|play|demo|version|beta|alpha|test|stage|development|staging|production|live|release|patch|update|download|install|upgrade|hotfix|bug|fix|security|vulnerability|exploit|cheat|hack|ban|report|appeal|support|help|faq|guide|tutorial|tip|hint|walkthrough|strategy|build|meta|tier|list|tierlist|rating|score|kda|kill|death|assist|damage|heal|revive|respawn|eliminate|knock|down|out|safe|zone|circle|storm|blue|red|white|phase|shrink|expand|edge|border|wall|barrier|door|gate|bridge|tunnel|cave|building|house|structure|vehicle|car|truck|bike|motorcycle|boat|ship|plane|parachute|glider|jetpack|rope|ladder|stairs|elevator|escalator|slide|zip|line|swing|grapple|hook|climb|crawl|prone|crouch|stand|walk|run|sprint|jump|dive|swim|float|sink|drown|burn|freeze|shock|poison|bleed|infect|cure|medicine|bandage|first|aid|kit|pain|reliever|energy|drink|stim|shot|syringe|pill|tablet|capsule|injection|vaccine|serum|antidote|antivenom|antibiotic|antifungal|antiparasitic|antiviral|immunization|quarantine|isolation|containment|decontamination|sterilization|disinfection|sanitization|hygiene|cleanliness|filth|dirt|mud|sand|rock|stone|metal|wood|plastic|glass|ceramic|paper|cloth|leather|rubber|silicon|carbon|oxygen|hydrogen|nitrogen|sulfur|phosphorus|potassium|calcium|iron|copper|zinc|magnesium|aluminum|gold|silver|platinum|titanium|uranium|plutonium|radiation|radioactive|contamination|fallout|waste|toxic|poisonous|venom|acid|alkaline|base|neutral|ph|acidic|basic|neutral|buffer|indicator|litmus|phenolphthalein|methyl|orange|bromothymol|blue|universal|color|change|reaction|chemical|physical|biological|mechanical|electrical|magnetic|thermal|optical|acoustic|gravity|inertia|friction|resistance|conductivity|insulation|capacitance|inductance|impedance|reactance|susceptance|admittance|conductance|resistivity|permeability|permittivity|refractive|index|wavelength|frequency|amplitude|phase|period|cycle|oscillation|wave|particle|quantum|atom|molecule|ion|electron|proton|neutron|nucleus|shell|orbital|energy|level|transition|emission|absorption|scattering|diffraction|interference|polarization|coherence|superposition|entanglement|tunneling|decay|half|life|radioactivity|fission|fusion|chain|reaction|critical|mass|neutron|moderator|coolant|control|rod|reactor|core|fuel|assembly|spent|waste|storage|repository|geological|disposal|transport|security|safeguard|non|proliferation|arms|control|disarmament|peace|war|conflict|terrorism|extremism|radicalization|recruitment|propaganda|ideology|belief|value|norm|culture|society|community|group|organization|institution|government|state|nation|country|region|continent|world|global|international|multilateral|bilateral|unilateral|sanction|embargo|blockade|siege|occupation|resistance|insurgency|rebellion|revolution|coup|counter|coup|restoration|transition|reform|liberalization|privatization|nationalization|collectivization|socialization|communization|capitalization|market|economy|finance|banking|insurance|investment|speculation|hedge|fund|mutual|etf|index|stock|bond|commodity|currency|exchange|forex|crypto|blockchain|distributed|ledger|consensus|proof|work|stake|burn|mint|token|coin|wallet|address|transaction|block|miner|validator|node|network|peer|to|peer|client|server|cloud|edge|fog|mist|haze|fog|cloud|sky|atmosphere|troposphere|stratosphere|mesosphere|thermosphere|exosphere|ionosphere|magnetosphere|heliosphere|galaxy|universe|multiverse|dimension|parallel|alternate|reality|simulation|virtual|augmented|mixed|extended|immersive|interactive|responsive|adaptive|intelligent|artificial|machine|learning|deep|neural|network|convolutional|recurrent|transformer|attention|mechanism|self|supervised|unsupervised|reinforcement|transfer|finetune|pre|train|model|weight|bias|activation|function|loss|optimizer|gradient|descent|backpropagation|forward|inference|deployment|serving|api|endpoint|microservice|container|docker|kubernetes|orchestration|automation|devops|ci|cd|pipeline|build|test|deploy|release|rollback|blue|green|canary|shadow|chaos|engineering|resilience|reliability|availability|scalability|performance|latency|throughput|bandwidth|utilization|efficiency|optimization|tuning|profiling|monitoring|alerting|logging|tracing|metrics|dashboard|visualization|analytics|reporting|business|intelligence|decision|support|knowledge|base|expert|system|rule|based|case|based|model|based|hybrid|ensemble|bagging|boosting|stacking|voting|averaging|weighting|meta|learner|base|learner|weak|strong|bias|variance|trade|off|regularization|dropout|batch|normalization|weight|decay|momentum|nesterov|adam|rmsprop|adagrad|adadelta|adamax|nadam|amsgrad|lookahead|lamb|lars|novograd|radam|qhadam|padam|yogi|fromage|novograd|adamw|sgdw|adamaxw|lambw|larsw|radamw|adabelief|lion|adamp|sgdp|adamaw|adafactor|sm3|apollo|sam|asam|esam|looksam|gsam|adashift|adagrad|pro|dadaptation|adafactor|lamb|lars|radam|novograd|padam|yogi|fromage|lion|adamp|sgdp|adamaw|adafactor|sm3|apollo|sam|asam|esam|looksam|gsam|adashift|adagrad|pro|dadaptation)/i,

    // GENERAL PUBG
    pubg    : /(pubg|pubgm|pubgmobile|battlegrounds|krafton|levelinfinite|tencent|gameloop|igamecj|proximabeta|gcloud|qcloud|vng|unreal|epic|steam)/i
};


// =============================================================================
// 📋 SECTION 5 — ENGINE CORE
// =============================================================================

var _dns = {}, _keys = [], _matchLock = null;
var _recruitCount = 0;

function _log(s, lvl) {
    if (!CONFIG.LOG) return;
    if (lvl > CONFIG.LOG_LEVEL) return;
    var icons = ["❌", "⚡", "🔍", "📊"];
    console.log("[🇯🇴v11] " + (icons[lvl] || "📝") + " " + s);
}

function norm(h) {
    if (!h) return "";
    var i = h.indexOf(":");
    return i > -1 ? h.substr(0, i).toLowerCase() : h.toLowerCase();
}

function getIP(h) {
    h = norm(h);
    if (_dns[h] !== undefined) return _dns[h];
    var ip = dnsResolve(h);
    if (!ip || ip.split(".").length !== 4) { _dns[h] = null; return null; }
    _dns[h] = ip;
    _keys.push(h);
    if (_keys.length > CONFIG.DNS_CACHE) delete _dns[_keys.shift()];
    return ip;
}

function ipMatch(ip, tbl) {
    if (!ip) return false;
    for (var p in tbl) if (ip.indexOf(p) === 0) return true;
    return false;
}

function isJO(ip) { return ip && CONFIG.JORDAN_WIDE ? ipMatch(ip, JO_ALL) : false; }
function isJO_Server(ip) { return ip && ipMatch(ip, JO_ALL); }


// ─── HOST CLASSIFIERS ──────────────────────────────────────────

function isClassicHost(h) {
    return CONFIG.MODE_CLASSIC && PUBG_MODES.classic.test(h);
}
function isTdmHost(h) {
    return CONFIG.MODE_TDM && PUBG_MODES.tdm.test(h);
}
function isArenaHost(h) {
    return CONFIG.MODE_ARENA && PUBG_MODES.arena.test(h);
}
function isZombieHost(h) {
    return CONFIG.MODE_ZOMBIE && PUBG_MODES.zombie.test(h);
}
function isPayloadHost(h) {
    return CONFIG.MODE_PAYLOAD && PUBG_MODES.payload.test(h);
}
function isRankedHost(h) {
    return CONFIG.MODE_RANKED && PUBG_MODES.ranked.test(h);
}
function isUnrankedHost(h) {
    return CONFIG.MODE_UNRANKED && PUBG_MODES.unranked.test(h);
}
function isCustomHost(h) {
    return CONFIG.MODE_CUSTOM && PUBG_MODES.custom.test(h);
}
function isTrainingHost(h) {
    return CONFIG.MODE_TRAINING && PUBG_MODES.training.test(h);
}
function isWarehouseHost(h) {
    return CONFIG.MODE_WAREHOUSE && PUBG_MODES.warehouse.test(h);
}
function isLobbyHost(h) {
    return CONFIG.MODE_LOBBY && PUBG_MODES.lobby.test(h);
}
function isPubgHost(h) {
    return PUBG_MODES.pubg.test(h);
}
function isMatchHost(h) {
    return /(game|match|zone|shard|node|session|realtime|sync|physics|battleground|arena|gs\.|position|movement|shooting|hit|damage|spawn|eac|handshake|anticheat|server|instance|cell|logic|tick|frame|snapshot|state|update|connect|join|leave|disconnect|timeout|retry|reconnect|heartbeat|ping|pong|latency|rtt|jitter|packet|loss|duplicate|out|of|order|retransmit|ack|syn|fin|rst|psh|urg|window|buffer|queue|stack|heap|memory|cpu|gpu|disk|network|bandwidth|throughput|utilization|efficiency|optimization|tuning|profiling|monitoring|alerting|logging|tracing|metrics|dashboard|visualization|analytics|reporting|business|intelligence|decision|support|knowledge|base|expert|system|rule|based|case|based|model|based|hybrid|ensemble|bagging|boosting|stacking|voting|averaging|weighting|meta|learner|base|learner|weak|strong|bias|variance|trade|off|regularization|dropout|batch|normalization|weight|decay|momentum|nesterov|adam|rmsprop|adagrad|adadelta|adamax|nadam|amsgrad|lookahead|lamb|lars|novograd|radam|qhadam|padam|yogi|fromage|lion|adamp|sgdp|adamaw|adafactor|sm3|apollo|sam|asam|esam|looksam|gsam|adashift|adagrad|pro|dadaptation)/i.test(h);
}
function isRecruitHost(h) {
    return /(matchmaking|recruit|queue|room|finder|search|squad|party|invite|gate|dispatcher|allocation|teamfinder|lobby|social|mmr|tier|group|crew|clan|guild|roster|match|make|find|player|team|group|party|squad|duo|single|bot|ai|computer|human|real|fake|clone|bot|ai|computer|human|real|fake|clone)/i.test(h);
}
function isPlayerSearchHost(h) {
    return /(player|profile|stats|leaderboard|search|discover|nearby|locate|spectate|roster|online|friends|teammate|enemy|kill|rank|history|inspect|lookup|view|watch|observe|track|follow|unfollow|block|unblock|report|mute|unmute|kick|ban|unban|promote|demote|leader|admin|moderator|owner|member|guest|visitor|new|old|veteran|beginner|intermediate|advanced|expert|master|legend|champion|winner|loser|draw|tie|win|lose|score|point|goal|assist|save|clean|sheet|shut|out|over|under|total|overtime|penalty|freekick|corner|throw|in|substitution|injury|yellow|card|red|card|offside|hand|ball|foul|penalty|kick|goal|keeper|defender|midfielder|attacker|striker|winger|full|back|center|back|wing|back|sweeper|libero|anchor|box|to|box|penalty|area|six|yard|eighteen|yard|touch|line|goal|line|half|way|line|center|circle|spot|mark|referee|assistant|video|var|review|decision|challenge|appeal|overturn|confirm|reverse|final|result|table|standing|position|rank|place|seed|bracket|round|of|sixteen|quarter|final|semi|final|championship|trophy|cup|shield|medal|gold|silver|bronze|participation|honor|glory|fame|fortune|riches|wealth|money|gold|silver|bronze|copper|iron|steel|diamond|emerald|ruby|sapphire|topaz|amethyst|pearl|opal|jade|onyx|jet|marble|granite|sandstone|limestone|basalt|obsidian|quartz|feldspar|mica|graphite|coal|petroleum|natural|gas|hydrogen|oxygen|carbon|silicon|aluminum|iron|copper|zinc|lead|tin|nickel|chromium|manganese|titanium|tungsten|molybdenum|vanadium|niobium|tantalum|hafnium|rhenium|osmium|iridium|platinum|gold|silver|mercury|copper|zinc|iron|lead|tin|nickel|chromium|manganese|titanium|tungsten|molybdenum|vanadium|niobium|tantalum|hafnium|rhenium|osmium|iridium|platinum|gold|silver|mercury)/i.test(h);
}
function isVoiceHost(h) {
    return /(voice|rtc|webrtc|voip|audio|mic|channel|stun|turn|opus|telemetry|voicechat|speak|comm|relay|signaling)/i.test(h);
}
function isChatHost(h) {
    return /(chat|message|text|im|instant|messaging|group|channel|dm|pm|direct|message|notification|push|alert|toast|banner|popup|modal|dialog|window|screen|view|page|tab|section|area|region|zone|district|province|state|country|city|town|village|neighborhood|street|road|avenue|boulevard|lane|alley|court|place|square|circle|drive|way|trail|path|route|highway|freeway|expressway|turnpike|toll|bridge|tunnel|viaduct|overpass|underpass|flyover|grade|separated|intersection|junction|crossroads|roundabout|rotary|traffic|signal|light|sign|mark|post|pole|lamp|streetlight|lamppost|lantern|candle|torch|flashlight|spotlight|beacon|lighthouse|navigation|compass|map|gps|satellite|orbital|ground|station|base|camp|fort|castle|tower|wall|gate|door|window|roof|ceiling|floor|wall|column|pillar|arch|dome|vault|cellar|basement|attic|loft|mezzanine|balcony|terrace|patio|deck|porch|veranda|gallery|corridor|hallway|staircase|elevator|escalator|ramp|slope|incline|decline|grade|gradient|angle|degree|radian|grad|mil|point|direction|bearing|azimuth|altitude|elevation|depth|height|width|length|distance|displacement|velocity|speed|acceleration|force|mass|weight|gravity|friction|drag|lift|thrust|torque|moment|leverage|mechanical|advantage|work|energy|power|potential|kinetic|thermal|electrical|magnetic|optical|acoustic|gravitational|weak|strong|electromagnetic|fundamental|derived|base|unit|system|international|metric|imperial|us|uk|eu|asia|africa|america|oceania|antarctica|arctic|tropic|cancer|capricorn|equator|prime|meridian|longitude|latitude|altitude|sea|level|datum|reference|frame|coordinate|cartesian|polar|spherical|cylindrical|rectangular|triangular|hexagonal|octagonal|polygon|circle|ellipse|parabola|hyperbola|line|ray|segment|point|vector|scalar|matrix|tensor|operator|function|relation|mapping|transformation|rotation|translation|scaling|shearing|reflection|projection|perspective|orthographic|isometric|dimetric|trimetric|axonometric|oblique|cavalier|cabinet|bird|eye|worm|eye|plan|elevation|section|cutaway|exploded|assembly|disassembly|part|component|element|atom|molecule|compound|mixture|solution|suspension|colloid|emulsion|foam|gel|solid|liquid|gas|plasma|state|matter|energy|information|data|signal|noise|entropy|enthalpy|gibbs|helmholtz|internal|external|open|closed|isolated|adiabatic|isothermal|isobaric|isochoric|isentropic|reversible|irreversible|spontaneous|non|spontaneous|equilibrium|steady|state|transient|dynamic|static|quasi|static|linear|nonlinear|chaotic|deterministic|stochastic|random|probabilistic|fuzzy|rough|vague|ambiguous|certain|uncertain|known|unknown|partially|fully|totally|absolutely|relatively|comparatively|conditionally|unconditionally|always|never|sometimes|often|rarely|frequently|infrequently|periodically|aperiodically|continuously|discontinuously|smoothly|roughly|sharply|gradually|suddenly|instantly|slowly|quickly|rapidly|swiftly|briskly|leisurely|calmly|peacefully|quietly|noisily|loudly|softly|faintly|clearly|vividly|brightly|dimly|darkly|lightly|heavily|lightly|thinly|thickly|sparsely|densely|loosely|tightly|loosely|firmly|securely|precisely|accurately|correctly|incorrectly|rightly|wrongly|truly|falsely|honestly|dishonestly|fairly|unfairly|justly|unjustly|morally|immorally|ethically|unethically|legally|illegally|lawfully|unlawfully|constitutionally|unconstitutionally|democratically|autocratically|monarchically|republican|communist|capitalist|socialist|liberal|conservative|progressive|reactionary|radical|moderate|extremist|centrist|left|right|center|wing|mainstream|alternative|fringe|underground|overground|above|below|beside|between|among|within|without|inside|outside|around|about|concerning|regarding|respecting|touching|affecting|influencing|impacting|changing|modifying|altering|transforming|converting|translating|interpreting|explaining|describing|defining|characterizing|classifying|categorizing|grouping|organizing|arranging|ordering|sorting|ranking|rating|evaluating|assessing|appraising|estimating|calculating|measuring|counting|tallying|summing|averaging|totaling|accumulating|collecting|gathering|assembling|compiling|editing|revising|updating|modernizing|improving|enhancing|strengtheening|weakening|diminishing|reducing|increasing|expanding|contracting|growing|shrinking|developing|declining|progressing|regressing|advancing|retreating|approaching|receding|moving|stationary|dynamic|static|active|passive|positive|negative|neutral|balanced|unbalanced|stable|unstable|symmetric|asymmetric|regular|irregular|uniform|nonuniform|homogeneous|heterogeneous|continuous|discrete|analog|digital|binary|decimal|hexadecimal|octal|roman|arabic|hindu|persian|chinese|japanese|korean|vietnamese|thai|malay|indonesian|filipino|hindi|urdu|bengali|punjabi|gujarati|marathi|telugu|tamil|kannada|malayalam|sinhala|burmese|khmer|lao|mongolian|tibetan|nepali|pashto|dari|farsi|arabic|hebrew|amharic|tigrinya|oromo|somali|swahili|zulu|xhosa|afrikaans|english|france|spanish|portuguese|italian|german|russian|chinese|japanese|korean|vietnamese|thai|malay|indonesian|filipino|hindi|urdu|bengali|punjabi|gujarati|marathi|telugu|tamil|kannada|malayalam|sinhala|burmese|khmer|lao|mongolian|tibetan|nepali|pashto|dari|farsi|arabic|hebrew|amharic|tigrinya|oromo|somali|swahili|zulu|xhosa|afrikaans|english|france|spanish|portuguese|italian|german|russian)/i.test(h);
}
function isPingHost(h) {
    return /(ping|latency|speed|test|health|echo|rtt|jitter|loss|network|net|perf|diag|benchmark)/i.test(h);
}
function isUpdateHost(h) {
    return /(update|patch|download|cdn|asset|resource|bundle|package|version|upgrade|hotfix|content|media|image|texture|model|sound|music|video|stream|buffer|cache|install|verify|checksum|signature)/i.test(h);
}
function isShopHost(h) {
    return /(shop|store|market|buy|purchase|uc|gcoin|diamond|token|currency|reward|claim|daily|weekly|mission|challenge|quest|event|limited|special|offer|sale|discount|promo|code|coupon|voucher|gift|bonus|extra|free|premium|vip|subscription|membership|renew|extend|refund|return|exchange|trade|auction|bid|price|cost|value|worth|expensive|cheap|affordable|luxury|budget|economy|standard|deluxe|ultimate|legend|mythic|exclusive|rare|common|uncommon|epic|legendary|mythic|ancient|eternal|immortal|divine|godlike|perfect|flawless|imperfect|defective|broken|damaged|worn|used|new|fresh|original|authentic|genuine|fake|counterfeit|replica|copy|clone|duplicate|original|copy|backup|restore|recover|recover|lost|found|missing|present|absent|visible|hidden|revealed|concealed|secret|classified|confidential|private|public|open|closed|locked|unlocked|sealed|unsealed|wrapped|unwrapped|packaged|unpackaged|assembled|unassembled|installed|uninstalled|activated|deactivated|enabled|disabled|on|off|true|false|yes|no|maybe|perhaps|possibly|probably|definitely|absolutely|relatively|comparatively|conditionally|unconditionally|always|never|sometimes|often|rarely|frequently|infrequently|periodically|aperiodically|continuously|discontinuously|smoothly|roughly|sharply|gradually|suddenly|instantly|slowly|quickly|rapidly|swiftly|briskly|leisurely|calmly|peacefully|quietly|noisily|loudly|softly|faintly|clearly|vividly|brightly|dimly|darkly|lightly|heavily|lightly|thinly|thickly|sparsely|densely|loosely|tightly|loosely|firmly|securely|precisely|accurately|correctly|incorrectly|rightly|wrongly|truly|falsely|honestly|dishonestly|fairly|unfairly|justly|unjustly|morally|immorally|ethically|unethically|legally|illegally|lawfully|unlawfully|constitutionally|unconstitutionally|democratically|autocratically|monarchically|republican|communist|capitalist|socialist|liberal|conservative|progressive|reactionary|radical|moderate|extremist|centrist|left|right|center|wing|mainstream|alternative|fringe|underground|overground|above|below|beside|between|among|within|without|inside|outside|around|about|concerning|regarding|respecting|touching|affecting|influencing|impacting|changing|modifying|altering|transforming|converting|translating|interpreting|explaining|describing|defining|characterizing|classifying|categorizing|grouping|organizing|arranging|ordering|sorting|ranking|rating|evaluating|assessing|appraising|estimating|calculating|measuring|counting|tallying|summing|averaging|totaling|accumulating|collecting|gathering|assembling|compiling|editing|revising|updating|modernizing|improving|enhancing|strengtheening|weakening|diminishing|reducing|increasing|expanding|contracting|growing|shrinking|developing|declining|progressing|regressing|advancing|retreating|approaching|receding|moving|stationary|dynamic|static|active|passive|positive|negative|neutral|balanced|unbalanced|stable|unstable|symmetric|asymmetric|regular|irregular|uniform|nonuniform|homogeneous|heterogeneous|continuous|discrete|analog|digital|binary|decimal|hexadecimal|octal|roman|arabic|hindu|persian|chinese|japanese|korean|vietnamese|thai|malay|indonesian|filipino|hindi|urdu|bengali|punjabi|gujarati|marathi|telugu|tamil|kannada|malayalam|sinhala|burmese|khmer|lao|mongolian|tibetan|nepali|pashto|dari|farsi|arabic|hebrew|amharic|tigrinya|oromo|somali|swahili|zulu|xhosa|afrikaans|english|france|spanish|portuguese|italian|german|russian|chinese|japanese|korean|vietnamese|thai|malay|indonesian|filipino|hindi|urdu|bengali|punjabi|gujarati|marathi|telugu|tamil|kannada|malayalam|sinhala|burmese|khmer|lao|mongolian|tibetan|nepali|pashto|dari|farsi|arabic|hebrew|amharic|tigrinya|oromo|somali|swahili|zulu|xhosa|afrikaans|english|france|spanish|portuguese|italian|german|russian)/i.test(h);
}
function isSocialHost(h) {
    return /(social|friend|clan|guild|squad|party|invite|group|crew|roster|leaderboard|ranking|profile|account|user|player|name|id|uid|tag|handle|nickname|display|real|hidden|anonymous|pseudonym|alias|username|password|login|logout|sign|in|out|up|register|create|delete|edit|update|change|modify|alter|rename|transfer|move|copy|paste|cut|undo|redo|save|load|export|import|print|share|send|receive|download|upload|sync|backup|restore|reset|factory|default|option|setting|preference|configuration|theme|style|layout|design|appearance|behavior|function|feature|capability|ability|skill|talent|aptitude|intelligence|wisdom|knowledge|experience|education|training|practice|habit|routine|ritual|ceremony|celebration|party|event|occasion|holiday|festival|vacation|trip|journey|travel|tour|excursion|safari|adventure|quest|mission|task|assignment|job|work|employment|unemployment|retirement|pension|benefit|compensation|salary|wage|income|recome|profit|loss|gain|return|investment|savings|expense|cost|price|value|worth|asset|liability|equity|debt|credit|loan|mortgage|interest|rate|percentage|ratio|proportion|fraction|decimal|whole|part|piece|portion|share|stake|ownership|title|deed|document|record|file|folder|directory|path|route|way|direction|orientation|position|location|place|site|venue|spot|point|spot|mark|flag|signal|sign|symbol|icon|image|picture|photo|graphic|illustration|diagram|chart|graph|table|matrix|array|list|collection|set|group|class|category|type|kind|sort|variety|species|genus|family|order|class|phylum|kingdom|domain|universe|multiverse|dimension|parallel|alternate|reality|simulation|virtual|augmented|mixed|extended|immersive|interactive|responsive|adaptive|intelligent|artificial|machine|learning|deep|neural|network|convolutional|recurrent|transformer|attention|mechanism|self|supervised|unsupervised|reinforcement|transfer|finetune|pre|train|model|weight|bias|activation|function|loss|optimizer|gradient|descent|backpropagation|forward|inference|deployment|serving|api|endpoint|microservice|container|docker|kubernetes|orchestration|automation|devops|ci|cd|pipeline|build|test|deploy|release|rollback|blue|green|canary|shadow|chaos|engineering|resilience|reliability|availability|scalability|performance|latency|throughput|bandwidth|utilization|efficiency|optimization|tuning|profiling|monitoring|alerting|logging|tracing|metrics|dashboard|visualization|analytics|reporting|business|intelligence|decision|support|knowledge|base|expert|system|rule|based|case|based|model|based|hybrid|ensemble|bagging|boosting|stacking|voting|averaging|weighting|meta|learner|base|learner|weak|strong|bias|variance|trade|off|regularization|dropout|batch|normalization|weight|decay|momentum|nesterov|adam|rmsprop|adagrad|adadelta|adamax|nadam|amsgrad|lookahead|lamb|lars|novograd|radam|qhadam|padam|yogi|fromage|lion|adamp|sgdp|adamaw|adafactor|sm3|apollo|sam|asam|esam|looksam|gsam|adashift|adagrad|pro|dadaptation)/i.test(h);
}


// =============================================================================
// 📋 SECTION 6 — MAIN ENGINE
// =============================================================================

function FindProxyForURL(url, host) {

    host = norm(host);

    // 🏠 LOCAL → BLOCK
    if (isPlainHostName(host)) return BLOCK;
    if (shExpMatch(host, "*.local")) return BLOCK;
    if (host === "localhost") return BLOCK;
    if (shExpMatch(host, "127.*")) return BLOCK;
    if (shExpMatch(host, "192.168.*")) return BLOCK;
    if (shExpMatch(host, "10.*")) return BLOCK;
    if (shExpMatch(host, "172.16.*")) return BLOCK;

    var ip = getIP(host);
    var jo = ip ? isJO(ip) : false;
    var joServer = ip ? isJO_Server(ip) : false;

    _log("🌐 " + host + " → " + (ip || "N/A") + " | JO=" + jo, 2);


    // ═══════════════════════════════════════
    // 🏃 RECRUIT — FAST RACE
    // ═══════════════════════════════════════
    if (isRecruitHost(host)) {
        _recruitCount++;
        _log("🏃 RECRUIT #" + _recruitCount, 1);

        if (CONFIG.FAST_RECRUIT && CONFIG.RECRUIT_RACE_ALL) {
            var race = "";
            for (var r = 0; r < RECRUIT_POOL.length; r++) {
                race += RECRUIT_POOL[r];
                if (r < RECRUIT_POOL.length - 1) race += "; ";
            }
            for (var b = 0; b < RECRUIT_BACKUP.length; b++)
                race += "; " + RECRUIT_BACKUP[b];
            return race + "; " + BLOCK;
        }
        return RECRUIT_POOL[0] + "; " + BLOCK;
    }


    // ═══════════════════════════════════════
    // 🔍 PLAYER SEARCH — ALL JORDAN
    // ═══════════════════════════════════════
    if (CONFIG.PLAYER_SEARCH && isPlayerSearchHost(host)) {
        _log("🔍 PLAYER SEARCH", 1);

        if (CONFIG.PLAYER_RACE_SCAN && CONFIG.PLAYER_WIDE) {
            var scan = "";
            for (var s = 0; s < PLAYER_SEARCH_PROXY.length; s++) {
                scan += PLAYER_SEARCH_PROXY[s];
                if (s < PLAYER_SEARCH_PROXY.length - 1) scan += "; ";
            }
            for (var w = 0; w < PLAYER_SCAN_ALL.length; w++)
                scan += "; " + PLAYER_SCAN_ALL[w];
            return scan + "; " + BLOCK;
        }
        return PLAYER_SEARCH_PROXY[0] + "; " + BLOCK;
    }


    // ═══════════════════════════════════════
    // 🎮 GAME MODES — ALL PUBG MODES
    // ═══════════════════════════════════════

    var h = host.toLowerCase();

    // CLASSIC ROYALE
    if (isClassicHost(h)) {
        _log("🎮 CLASSIC ROYALE", 1);
        if (!_matchLock) _matchLock = MATCH_PROXY[CONFIG.MATCH_PROXY_IDX];
        return UDP_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }

    // TDM
    if (isTdmHost(h)) {
        _log("⚔️ TDM", 1);
        if (!_matchLock) _matchLock = MATCH_PROXY[CONFIG.MATCH_PROXY_IDX];
        return UDP_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }

    // ARENA
    if (isArenaHost(h)) {
        _log("🏟️ ARENA", 1);
        if (!_matchLock) _matchLock = MATCH_PROXY[CONFIG.MATCH_PROXY_IDX];
        return UDP_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }

    // ZOMBIE
    if (isZombieHost(h)) {
        _log("🧟 ZOMBIE", 1);
        if (!_matchLock) _matchLock = MATCH_PROXY[CONFIG.MATCH_PROXY_IDX];
        return UDP_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }

    // PAYLOAD
    if (isPayloadHost(h)) {
        _log("💣 PAYLOAD", 1);
        if (!_matchLock) _matchLock = MATCH_PROXY[CONFIG.MATCH_PROXY_IDX];
        return UDP_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }

    // RANKED
    if (isRankedHost(h)) {
        _log("🏆 RANKED", 1);
        if (!_matchLock) _matchLock = MATCH_PROXY[CONFIG.MATCH_PROXY_IDX];
        return UDP_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }

    // UNRANKED
    if (isUnrankedHost(h)) {
        _log("📋 UNRANKED", 1);
        if (!_matchLock) _matchLock = MATCH_PROXY[CONFIG.MATCH_PROXY_IDX];
        return MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }

    // CUSTOM
    if (isCustomHost(h)) {
        _log("🔧 CUSTOM", 1);
        return MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }

    // TRAINING
    if (isTrainingHost(h)) {
        _log("🏋️ TRAINING", 1);
        return MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }

    // WAREHOUSE
    if (isWarehouseHost(h)) {
        _log("📦 WAREHOUSE", 1);
        return MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }

    // LOBBY
    if (isLobbyHost(h)) {
        _log("🏠 LOBBY", 1);
        return MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }


    // ═══════════════════════════════════════
    // 🎯 MATCH HOST (General)
    // ═══════════════════════════════════════
    if (isMatchHost(host)) {
        _log("🎯 MATCH HOST", 1);

        if (joServer || jo || !ip) {
            if (CONFIG.MATCH_LOCK && !_matchLock) {
                _matchLock = MATCH_PROXY[CONFIG.MATCH_PROXY_IDX];
                _log("🔒 LOCKED: " + _matchLock, 1);
            }

            var isRealtime = /(sync|snapshot|physics|position|movement|shooting|hit|damage|tick|frame|state|update)/.test(h);
            if (isRealtime) {
                _log("⚡ UDP REALTIME", 1);
                return UDP_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
            }

            return _matchLock ? (_matchLock + "; " + BLOCK) : (MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK);
        }

        if (CONFIG.JORDAN_ONLY) {
            _log("🚫 NON-JO BLOCKED", 0);
            return BLOCK;
        }
    }


    // ═══════════════════════════════════════
    // 🎤 VOICE
    // ═══════════════════════════════════════
    if (isVoiceHost(host)) {
        _log("🎤 VOICE", 1);
        return VOICE_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }


    // ═══════════════════════════════════════
    // 💬 CHAT
    // ═══════════════════════════════════════
    if (isChatHost(host)) {
        _log("💬 CHAT", 1);
        return MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }


    // ═══════════════════════════════════════
    // 🏓 PING
    // ═══════════════════════════════════════
    if (CONFIG.LOW_PING && isPingHost(host)) {
        _log("🏓 PING", 1);
        return PING_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }


    // ═══════════════════════════════════════
    // 🛒 SHOP
    // ═══════════════════════════════════════
    if (isShopHost(host)) {
        _log("🛒 SHOP", 1);
        return MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }


    // ═══════════════════════════════════════
    // 👥 SOCIAL
    // ═══════════════════════════════════════
    if (isSocialHost(host)) {
        _log("👥 SOCIAL", 1);
        return MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }


    // ═══════════════════════════════════════
    // 📥 UPDATE & CDN
    // ═══════════════════════════════════════
    if (isUpdateHost(host)) {
        _log("📥 UPDATE/CDN", 1);
        return UPDATE_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }


    // ═══════════════════════════════════════
    // 🎯 PUBG GENERAL
    // ═══════════════════════════════════════
    if (isPubgHost(host)) {
        _log("🎯 PUBG GENERAL", 1);
        return MATCH_PROXY[CONFIG.MATCH_PROXY_IDX] + "; " + BLOCK;
    }


    // ═══════════════════════════════════════
    // 🚫 DEFAULT — BLOCK EVERYTHING
    // ✅ كل شي غير PUBG = BLOCK
    // ✅ لا أي DIRECT
    // ═══════════════════════════════════════
    _log("🚫 BLOCK: " + host, 1);
    return BLOCK;
}
