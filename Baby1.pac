// ╔════════════════════════════════════════════════════════════════════╗
// ║  JO GOLD HYBRID PAC v5.0 - FAST RECRUIT JORDAN LOCK 🇯🇴⚡        ║
// ╠════════════════════════════════════════════════════════════════════╣
// ║  ✦ التجنيد أسرع - يبحث بسرعة أكبر                               ║
// ║  ✦ بسك واسع - منطقة الشرق الأوسط كلها                            ║
// ║  ✦ لاعبين أردنيين - IP أردني يجذب أردنيين                       ║
// ║  ✦ Zero drop - بدون انقطاع                                       ║
// ║  ✦ مزامنة المنطقة والتوقيت                                        ║
// ╚════════════════════════════════════════════════════════════════════╝


// ═══════════════════════════════════════════════════════
//  SECTION 0: CONFIG
// ═══════════════════════════════════════════════════════
var CFG = {
  DNS_TTL:        60000,
  FORCE_JO:       true,
  WIDE_SEARCH:    true,
  FAST_RECRUIT:   true,
  BLOCK_NON_JO:   false,   // false = نسمح بالخليج للبسك الواسع
  BLOCK_ADS:      true,
  BLOCK_TELEMETRY: true,
  PASSIVE:        true     // فقط PUBG بالبروكسي - الباقي DIRECT
};


// ═══════════════════════════════════════════════════════
//  SECTION 1: PROXY POOLS - مرتبة حسب الأولوية
// ═══════════════════════════════════════════════════════

// ━━━ MATCH - أعلى أولوية للعبة والتجنيد ━━━
var MATCH_P = [
  "PROXY 176.29.153.95:20001",
  "PROXY 212.35.66.45:20001",
  "PROXY 82.212.84.33:20001",
  "PROXY 37.202.160.50:20001",
  "PROXY 188.123.200.10:20001",
  "PROXY 91.106.192.30:20001",
  "PROXY 78.135.64.20:20001",
  "PROXY 46.32.48.10:20001",
  "PROXY 176.29.153.95:20002",
  "PROXY 212.35.66.45:20002",
  "PROXY 82.212.84.33:20002"
];

// ━━━ VOICE ━━━
var VOICE_P = [
  "PROXY 176.29.153.95:10012",
  "PROXY 212.35.66.45:10012",
  "PROXY 82.212.84.33:10012",
  "PROXY 37.202.160.50:10012",
  "PROXY 188.123.200.10:10012",
  "PROXY 91.106.192.30:10012",
  "PROXY 78.135.64.20:10012",
  "PROXY 176.29.153.95:10013",
  "PROXY 212.35.66.45:10013",
  "PROXY 82.212.84.33:10013"
];

// ━━━ LOBBY + RECRUIT - التجنيد هنا ━━━
var LOBBY_P = [
  "PROXY 176.29.153.95:9030",
  "PROXY 212.35.66.45:9030",
  "PROXY 82.212.84.33:9030",
  "PROXY 37.202.160.50:9030",
  "PROXY 188.123.200.10:9030",
  "PROXY 91.106.192.30:9030",
  "PROXY 78.135.64.20:9030",
  "PROXY 46.32.48.10:9030",
  "PROXY 37.48.80.15:9030"
];

// ━━━ AUTH ━━━
var AUTH_P = [
  "PROXY 176.29.153.95:443",
  "PROXY 212.35.66.45:443",
  "PROXY 82.212.84.33:443",
  "PROXY 37.202.160.50:443"
];

// ━━━ UPDATE ━━━
var UPD_P = [
  "PROXY 176.29.153.95:80",
  "PROXY 212.35.66.45:80",
  "PROXY 82.212.84.33:80"
];

var BLK = "PROXY 127.0.0.1:9";

// بناء السلسلة النهائية
function _build(arr, extra) {
  var s = {};
  var c = [];
  for (var i = 0; i < arr.length; i++) {
    if (!s[arr[i]]) { c.push(arr[i]); s[arr[i]] = 1; }
  }
  if (extra) {
    for (var j = 0; j < extra.length; j++) {
      if (!s[extra[j]]) { c.push(extra[j]); s[extra[j]] = 1; }
    }
  }
  c.push("DIRECT");
  return c.join("; ");
}

var MATCH  = _build(MATCH_P);
var VOICE  = _build(VOICE_P);
var LOBBY  = _build(LOBBY_P);
var AUTH   = _build(AUTH_P);
var UPDATE = _build(UPD_P);


// ═══════════════════════════════════════════════════════
//  SECTION 2: JORDAN IP RANGES - دقيقة جداً
// ═══════════════════════════════════════════════════════

// ━━━ Orange Jordan (أورنج) ━━━
// AS3226 - أكبر مشغل أردني
var JO_OR = {
  "82.212.":1,
  "188.123.":1,
  "46.185.":1,
  "86.108.":1,
  "92.253.":1,
  "94.249.":1,
  "188.247.":1,
  "5.198.":1,
  "5.199.":1
};

// ━━━ Zain Jordan (زين) ━━━
// AS8376
var JO_ZN = {
  "37.202.":1,
  "78.135.":1,
  "78.138.":1,
  "37.48.":1,
  "37.49.":1,
  "37.50.":1,
  "37.51.":1,
  "37.75.":1,
  "79.134.":1,
  "79.173.":1,
  "81.21.":1,
  "81.28.":1,
  "80.90.":1
};

// ━━━ Umniah (أمينة) ━━━
// AS47599
var JO_UM = {
  "91.106.":1,
  "46.32.":1,
  "149.200.":1
};

// ━━━ Jordan Datacenters ━━━
// JOGXA / JODC
var JO_DC = {
  "212.35.":1,
  "176.29.":1
};

// ━━━ دمج كل الأردن ━━━
var JO = {};
(function(){
  var p = [JO_OR, JO_ZN, JO_UM, JO_DC];
  for (var i = 0; i < p.length; i++)
    for (var k in p[i])
      if (p[i].hasOwnProperty(k)) JO[k] = 1;
})();


// ═══════════════════════════════════════════════════════
//  SECTION 3: GULF RANGES - للبسك الواسع
// ═══════════════════════════════════════════════════════
// نسمح بالخليج عشان البسك يكون أوسع
// والأردن في نفس المنطقة = لاعبين أردنيين أكثر
var GF = {
  // سوريا
  "5.63.":1,     "185.57.":1,   "31.193.":1,
  // السعودية
  "94.26.":1,    "95.177.":1,   "46.152.":1,
  "37.224.":1,   "212.71.":1,   "5.45.":1,
  "185.193.":1,  "185.194.":1,  "185.195.":1,
  "185.196.":1,
  // الإمارات
  "5.62.":1,     "31.192.":1,   "86.96.":1,
  "94.200.":1,   "94.201.":1,   "94.202.":1,
  "217.164.":1,
  // البحرين
  "85.125.":1,   "46.183.":1,   "37.131.":1,
  "80.241.":1,   "84.235.":1,
  // الكويت
  "62.84.":1,    "82.178.":1,   "91.140.":1,
  "94.128.":1,   "62.72.":1,    "62.150.":1,
  "62.251.":1,   "85.159.":1,   "109.237.":1,
  "188.161.":1,  "193.188.":1,  "193.227.":1,
  "195.135.":1,  "195.170.":1,  "195.228.":1,
  "195.229.":1,  "213.6.":1,    "213.42.":1,
  "213.139.":1,  "213.186.":1,  "217.23.":1,
  "217.29.":1,   "217.144.":1,  "217.171.":1,
  // قطر
  "37.210.":1,   "89.211.":1,
  // عُمان
  "185.64.":1,   "5.36.":1,
  // العراق
  "37.236.":1,   "37.238.":1,   "37.239.":1,
  "185.75.":1,   "185.139.":1,
  // اليمن
  "82.114.":1,   "109.200.":1,
  // فلسطين
  "188.225.":1,  "185.61.":1,
  // لبنان
  "185.57.":1,   "82.146.":1
};


// ═══════════════════════════════════════════════════════
//  SECTION 4: HOST LISTS
// ═══════════════════════════════════════════════════════

// ━━━ آمن ━━━
var SAFE = {
  "captive.apple.com":1, "time.apple.com":1,
  "ocsp.apple.com":1, "clients3.google.com":1,
  "gstatic.com":1, "googleapis.com":1,
  "connectivitycheck.gstatic.com":1,
  "microsoft.com":1, "msftconnecttest.com":1,
  "apple.com":1, "icloud.com":1
};

// ━━━ CDN ━━━
var CDN = [
  "youtube.com","googlevideo.com","ytimg.com",
  "google.com","gstatic.com","googleapis.com",
  "fbcdn.net","facebook.com","facebook.net",
  "instagram.com","cdninstagram.com",
  "whatsapp.com","whatsapp.net",
  "tiktokcdn.com","tiktokv.com","muscdn.com",
  "akamaihd.net","akamai.net","akamaized.net",
  "cloudflare.com","cloudfront.net",
  "fastly.net","fastlylb.net","azureedge.net",
  "play.google.com","play-fe.googleapis.com",
  "apps.apple.com","itunes.apple.com",
  "mzstatic.com","aaplimg.com",
  "twitter.com","twimg.com","t.co",
  "telegram.org","t.me"
];

// ━━━ تحليلات محظورة ━━━
var ANA = [
  "analytics.google.com","google-analytics.com",
  "googletagmanager.com","googlesyndication.com",
  "doubleclick.net","adsense.google.com",
  "firebaseinstallations.googleapis.com",
  "firebase-settings.crashlytics.com",
  "app-measurement.com",
  "analytics.facebook.com","graph.facebook.com",
  "appsflyer.com","adjust.com",
  "branch.io","amplitude.com",
  "mixpanel.com","sentry.io","bugsnag.com",
  "crashlytics.com","fabric.io"
];

// ━━━ محظور ━━━
var BLK_H = [
  "ads.pubg.com","ad.pubg.com",
  "advertising.tencent.com","e.qq.com"
];


// ═══════════════════════════════════════════════════════
//  SECTION 5: PUBG PATTERNS
// ═══════════════════════════════════════════════════════
var PH = [
  "pubg","pubgm","pubgmobile","pubgmob",
  "proximabeta","igamecj","tencent",
  "qcloud","gcloud","gameloop",
  "tencentgamingbuddy","levelinfinite",
  "lightspeed","krafton","bluehole",
  "mgamer","ifreecdn","ifreegame",
  "myapp.com","qq.com","cdn.qq.com",
  "game.qq.com","igamecj.com",
  "pubgmobile.com","pubg.com"
];


// ═══════════════════════════════════════════════════════
//  SECTION 6: TRAFFIC KEYWORDS
// ═══════════════════════════════════════════════════════

// ━━━ LOBBY + RECRUIT - التجنيد ━━━
// هاي أهم شي - لازم تمر بالبروكسي الأردني
var KL = [
  "lobby","matchmaking","matching","queue",
  "room","recruit","team","squad","party",
  "invite","gate","dispatcher","router",
  "allocation","teamfinder","social","clan",
  "friend","chat","profile","rank","season",
  "inventory","shop","store","crate","event",
  "notification","reward","mission","pass",
  "account","login","auth","oauth","token",
  "passport","verify","check","validate",
  "home","main","menu","setting","config",
  "mail","inbox","gift","redeem","coupon",
  "royalepass","rp","uc","bp","silver",
  "achievement","progress","tier","badge",
  "region","server","matchmak",
  "quick","auto","random","search",
  "find","join","enter","start",
  "player","user","member","group",
  "request","accept","decline","cancel"
];

// ━━━ MATCH ━━━
var KM = [
  "game","battle","fight","combat","play",
  "gameserver","logic","session","instance",
  "zone","shard","node","cell","scene",
  "realtime","action","frame","mms","join",
  "arena","erangel","miramar","sanhok",
  "vikendi","livik","nusa","rondo",
  "tdm","ranked","classic","arcade",
  "payload","infection","metro",
  "war","royale","squad","duo","solo",
  "match","matchend","matchstart",
  "reconnect","resync","sync",
  "damage","hit","bullet","shoot",
  "loot","pickup","drop","airdrop",
  "circle","zone","safe","blue",
  "vehicle","drive","fly","parachute",
  "spectate","replay","killfeed",
  "server","region","mode","map"
];

// ━━━ VOICE ━━━
var KV = [
  "voice","rtc","webrtc","voip","audio",
  "mic","talk","channel","speech","sound",
  "turn","stun","srtp","rtp","ice",
  "mediastream","recorder","opus","codec",
  "agora","zego","livekit","twilio",
  "pubsub","ws","wss","signal"
];

// ━━━ UPDATE ━━━
var KU = [
  "patch","hotfix","update","download",
  "assetbundle","obb","assets","cdn",
  "static","res","pkg","install",
  "version","manifest","config","resource",
  "apk","ipa","binary","payload",
  "bundle","chunk","segment","block"
];

// ━━━ AUTH ━━━
var KA = [
  "login","signin","signup","register",
  "oauth","sso","token","session",
  "captcha","verify","confirm","activate",
  "passport","account","credential"
];


// ═══════════════════════════════════════════════════════
//  SECTION 7: CACHE ENGINE
// ═══════════════════════════════════════════════════════
var _d = {}, _g = {}, _t0 = (new Date()).getTime();

function _rst() {
  if (((new Date()).getTime() - _t0) > CFG.DNS_TTL) {
    _d = {}; _g = {};
    _t0 = (new Date()).getTime();
  }
}

function _sd(h, ip) { _d[h] = ip; }
function _gd(h) {
  _rst();
  return _d.hasOwnProperty(h) ? _d[h] : undefined;
}

function _sg(ip, d) { _g[ip] = d; }
function _gg(ip) {
  return _g.hasOwnProperty(ip) ? _g[ip] : null;
}


// ═══════════════════════════════════════════════════════
//  SECTION 8: UTILITIES
// ═══════════════════════════════════════════════════════
function _n(h) {
  if (!h) return "";
  var i = h.indexOf(":");
  return i !== -1 ? h.substring(0, i) : h;
}

function _v4(s) {
  if (!s) return false;
  var p = s.split(".");
  if (p.length !== 4) return false;
  for (var i = 0; i < 4; i++) {
    var n = parseInt(p[i], 10);
    if (isNaN(n) || n < 0 || n > 255 || String(n) !== p[i]) return false;
  }
  return true;
}

function _res(h) {
  var c = _gd(h);
  if (c !== undefined) return c;
  var ip = null;
  try { ip = dnsResolve(h); } catch(e) { ip = null; }
  var r = _v4(ip) ? ip : null;
  _sd(h, r);
  if (r) _sg(r, { jo: _sa(r, JO), gf: _sa(r, GF) });
  return r;
}

function _sa(ip, t) {
  if (!ip) return false;
  for (var k in t) {
    if (t.hasOwnProperty(k) && ip.indexOf(k) === 0) return true;
  }
  return false;
}

function _md(h, d) {
  return h === d || dnsDomainIs(h, d) || shExpMatch(h, "*." + d);
}

function _ma(h, l) {
  for (var i = 0; i < l.length; i++) {
    if (_md(h, l[i])) return true;
  }
  return false;
}

function _hk(s, k) {
  for (var i = 0; i < k.length; i++) {
    if (s.indexOf(k[i]) !== -1) return true;
  }
  return false;
}


// ═══════════════════════════════════════════════════════
//  SECTION 9: CLASSIFIERS
// ═══════════════════════════════════════════════════════
function _isJO(ip) {
  if (!ip) return false;
  var g = _gg(ip);
  return g ? g.jo : _sa(ip, JO);
}

function _isGF(ip) {
  if (!ip) return false;
  var g = _gg(ip);
  return g ? g.gf : _sa(ip, GF);
}

function _isP(h) {
  var l = h.toLowerCase();
  for (var i = 0; i < PH.length; i++) {
    if (l.indexOf(PH[i]) !== -1) return true;
  }
  return false;
}

function _iL(u, h) { return _hk((u+" "+h).toLowerCase(), KL); }
function _iM(u, h) { return _hk((u+" "+h).toLowerCase(), KM); }
function _iV(u, h) { return _hk((u+" "+h).toLowerCase(), KV); }
function _iU(u, h) { return _hk((u+" "+h).toLowerCase(), KU); }
function _iA(u, h) { return _hk((u+" "+h).toLowerCase(), KA); }
function _iS(h) { return SAFE[h] || _ma(h, CDN); }
function _iB(h) { return _ma(h, BLK_H); }
function _iN(h) { return _ma(h, ANA); }


// ═══════════════════════════════════════════════════════
//  SECTION 10: SMART ROUTER
// ═══════════════════════════════════════════════════════

/*
  ╔═══════════════════════════════════════════════════════════╗
  ║  كيف التجنيد يصير أسرع + أردنيين أكثر                   ║
  ╠═══════════════════════════════════════════════════════════╣
  ║                                                           ║
  ║  1. كل الاتصال يمر عبر IP أردني                         ║
  ║     → PUBG يشوفك أردني                                  ║
  ║     → يحطك في منطقة الشرق الأوسط                       ║
  ║     → يطابقك مع أردنيين/خليجيين                        ║
  ║                                                           ║
  ║  2. البسك الواسع مفعل                                    ║
  ║     → السيرفر يبحث في منطقة أوسع                        ║
  ║     → يلقي أردنيين أسرع                                 ║
  ║     → بدل ما ينتظر يملأ السيرفر                        ║
  ║                                                           ║
  ║  3. اللوبي والتجنيد على بروكسي أردني ثابت              ║
  ║     → IP ثابت = تطابق أفضل                              ║
  ║     → نفس الأشخاص يظهرون أكثر                           ║
  ║     → نظام الماتشميكنج يحفظك                            ║
  ║                                                           ║
  ║  4. لا نحظر الخليج                                        ║
  ║     → الأردن في نفس منطقة الخليج باللعبة                ║
  ║     → حظر الخليج = حظر الأردنيين                         ║
  ║     → نمرر كلاهما                                        ║
  ║                                                           ║
  ╚═══════════════════════════════════════════════════════════╝
*/

function _rt(type, host) {
  var ip = _res(host);
  var c;

  switch(type) {
    case "mat": c = MATCH;  break;
    case "voi": c = VOICE;  break;
    case "lob": c = LOBBY;  break;
    case "upd": c = UPDATE; break;
    case "aut": c = AUTH;   break;
    default:    c = MATCH;
  }

  // DNS ما حَلّ → نجرب البروكسي
  if (!ip) return c;

  // أردني → بروكسي أردني (هذا اللي نبيه)
  if (_isJO(ip)) return c;

  // خليجي → نمررهم برضو (البسك الواسع)
  if (_isGF(ip)) return c;

  // من برا المنطقة → نمررهم (بسك أوسع)
  if (CFG.WIDE_SEARCH) return c;

  return BLK;
}


// ═══════════════════════════════════════════════════════
//  SECTION 11: MAIN ENGINE
// ═══════════════════════════════════════════════════════
function FindProxyForURL(url, host) {
  host = _n(host);
  if (!host || host === "") return "DIRECT";

  // ─── 1. محلي ───
  if (isPlainHostName(host))         return "DIRECT";
  if (shExpMatch(host, "*.local"))   return "DIRECT";
  if (shExpMatch(host, "127.*"))     return "DIRECT";
  if (shExpMatch(host, "10.*"))      return "DIRECT";
  if (shExpMatch(host, "172.16.*"))  return "DIRECT";
  if (shExpMatch(host, "192.168.*")) return "DIRECT";
  if (shExpMatch(host, "169.254.*")) return "DIRECT";
  if (host.indexOf(".") === -1)      return "DIRECT";

  // ─── 2. آمن ───
  if (_iS(host)) return "DIRECT";

  // ─── 3. محظور ───
  if (_iB(host)) return BLK;

  // ─── 4. تحليلات ───
  if (CFG.BLOCK_TELEMETRY && _iN(host)) return BLK;

  // ─── 5. وضع سلبي ───
  if (CFG.PASSIVE) {
    if (!_isP(host) &&
        !_iL(url, host) && !_iM(url, host) &&
        !_iV(url, host) && !_iU(url, host) &&
        !_iA(url, host)) {
      return "DIRECT";
    }
  }

  // ─── 6. غير PUBG ───
  if (!_isP(host) &&
      !_iL(url, host) && !_iM(url, host) &&
      !_iV(url, host) && !_iU(url, host) &&
      !_iA(url, host)) {
    return "DIRECT";
  }

  // ╔═══════════════════════════════════════════════╗
  // ║  VOICE - فويس على بروكسي أردني مستقر       ║
  // ╚═══════════════════════════════════════════════╝
  if (_iV(url, host)) return _rt("voi", host);

  // ╔═══════════════════════════════════════════════╗
  // ║  AUTH - تسجيل دخول                           ║
  // ╚═══════════════════════════════════════════════╝
  if (_iA(url, host)) return _rt("aut", host);

  // ╔═══════════════════════════════════════════════╗
  // ║  LOBBY + RECRUIT - التجنيد                   ║
  // ║  هاي أهم شي للتجنيد السريع                  ║
  // ║  IP أردني = سيرفر يحطك بأردن               ║
  // ║  = تجنيد مع أردنيين أسرع                    ║
  // ╚═══════════════════════════════════════════════╝
  if (_iL(url, host)) return _rt("lob", host);

  // ╔═══════════════════════════════════════════════╗
  // ║  MATCH - الماتش                              ║
  // ╚═══════════════════════════════════════════════╝
  if (_iM(url, host)) return _rt("mat", host);

  // ╔═══════════════════════════════════════════════╗
  // ║  UPDATE - تحديثات                            ║
  // ╚═══════════════════════════════════════════════╝
  if (_iU(url, host)) return _rt("upd", host);

  // ╔═══════════════════════════════════════════════╗
  // ║  DEFAULT - كل PUBG على بروكسي أردني         ║
  // ╚═══════════════════════════════════════════════╝
  return _rt("mat", host);
}


// ═══════════════════════════════════════════════════════
//  SECTION 12: CLASH META CONFIG (لدعم UDP الكامل)
// ═══════════════════════════════════════════════════════
/*
  انسخ هذا وحطه بملف config.yaml لـ Clash Meta:

  ════════════════════════════════════════════════════

  mixed-port: 7890
  allow-lan: true
  mode: rule
  log-level: info

  proxies:
    - name: "jo-dc-mat-01"
      type: http
      server: 176.29.153.95
      port: 20001
      udp: true

    - name: "jo-dc-mat-02"
      type: http
      server: 212.35.66.45
      port: 20001
      udp: true

    - name: "jo-or-mat-01"
      type: http
      server: 82.212.84.33
      port: 20001
      udp: true

    - name: "jo-zn-mat-01"
      type: http
      server: 37.202.160.50
      port: 20001
      udp: true

    - name: "jo-dc-lob-01"
      type: http
      server: 176.29.153.95
      port: 9030
      udp: true

    - name: "jo-dc-lob-02"
      type: http
      server: 212.35.66.45
      port: 9030
      udp: true

    - name: "jo-or-lob-01"
      type: http
      server: 82.212.84.33
      port: 9030
      udp: true

    - name: "jo-zn-lob-01"
      type: http
      server: 37.202.160.50
      port: 9030
      udp: true

    - name: "jo-dc-voi-01"
      type: http
      server: 176.29.153.95
      port: 10012
      udp: true

    - name: "jo-dc-voi-02"
      type: http
      server: 212.35.66.45
      port: 10012
      udp: true

    - name: "jo-or-voi-01"
      type: http
      server: 82.212.84.33
      port: 10012
      udp: true

    - name: "jo-dc-auth-01"
      type: http
      server: 176.29.153.95
      port: 443
      udp: true

  proxy-groups:
    - name: "pubg-match"
      type: fallback
      url: "http://www.gstatic.com/generate_204"
      interval: 15
      proxies:
        - jo-dc-mat-01
        - jo-dc-mat-02
        - jo-or-mat-01
        - jo-zn-mat-01

    - name: "pubg-lobby"
      type: fallback
      url: "http://www.gstatic.com/generate_204"
      interval: 15
      proxies:
        - jo-dc-lob-01
        - jo-dc-lob-02
        - jo-or-lob-01
        - jo-zn-lob-01

    - name: "pubg-voice"
      type: fallback
      url: "http://www.gstatic.com/generate_204"
      interval: 15
      proxies:
        - jo-dc-voi-01
        - jo-dc-voi-02
        - jo-or-voi-01

    - name: "pubg-auth"
      type: fallback
      url: "http://www.gstatic.com/generate_204"
      interval: 15
      proxies:
        - jo-dc-auth-01
        - jo-dc-mat-01

    - name: "direct-out"
      type: select
      proxies:
        - DIRECT

  tun:
    enable: true
    stack: system
    auto-route: true
    auto-detect-interface: true
    mtu: 1500
    dns-hijack:
      - any:53

  dns:
    enable: true
    listen: 0.0.0.0:53
    enhanced-mode: fake-ip
    fake-ip-range: 198.18.0.1/16
    nameserver:
      - 212.35.66.45
      - 176.29.153.95
      - 8.8.8.8
    fallback:
      - 1.1.1.1
      - 8.8.4.4

  rules:
    # ─── PUBG LOBBY + RECRUIT ───
    - DOMAIN-KEYWORD,lobby,pubg-lobby
    - DOMAIN-KEYWORD,recruit,pubg-lobby
    - DOMAIN-KEYWORD,matchmak,pubg-lobby
    - DOMAIN-KEYWORD,teamfinder,pubg-lobby
    - DOMAIN-KEYWORD,squad,pubg-lobby
    - DOMAIN-KEYWORD,party,pubg-lobby
    - DOMAIN-KEYWORD,invite,pubg-lobby
    - DOMAIN-KEYWORD,gate,pubg-lobby
    - DOMAIN-KEYWORD,dispatcher,pubg-lobby
    - DOMAIN-KEYWORD,router,pubg-lobby
    - DOMAIN-KEYWORD,allocation,pubg-lobby

    # ─── PUBG MATCH ───
    - DOMAIN-KEYWORD,game,pubg-match
    - DOMAIN-KEYWORD,battle,pubg-match
    - DOMAIN-KEYWORD,gameserver,pubg-match
    - DOMAIN-KEYWORD,match,pubg-match
    - DOMAIN-KEYWORD,session,pubg-match
    - DOMAIN-KEYWORD,zone,pubg-match
    - DOMAIN-KEYWORD,shard,pubg-match
    - DOMAIN-KEYWORD,realtime,pubg-match

    # ─── PUBG VOICE ───
    - DOMAIN-KEYWORD,voice,pubg-voice
    - DOMAIN-KEYWORD,rtc,pubg-voice
    - DOMAIN-KEYWORD,webrtc,pubg-voice
    - DOMAIN-KEYWORD,turn,pubg-voice
    - DOMAIN-KEYWORD,stun,pubg-voice
    - DOMAIN-KEYWORD,agora,pubg-voice

    # ─── PUBG AUTH ───
    - DOMAIN-KEYWORD,login,pubg-auth
    - DOMAIN-KEYWORD,oauth,pubg-auth
    - DOMAIN-KEYWORD,token,pubg-auth
    - DOMAIN-KEYWORD,passport,pubg-auth

    # ─── PUBG HOSTS ───
    - DOMAIN-SUFFIX,pubgmobile.com,pubg-match
    - DOMAIN-SUFFIX,igamecj.com,pubg-match
    - DOMAIN-SUFFIX,pubg.com,pubg-match
    - DOMAIN-SUFFIX,tencent.com,pubg-match
    - DOMAIN-SUFFIX,qq.com,pubg-match
    - DOMAIN-SUFFIX,levelinfinite.com,pubg-match
    - DOMAIN-SUFFIX,krafton.com,pubg-match
    - DOMAIN-SUFFIX,lightspeed.com,pubg-match
    - DOMAIN-SUFFIX,tencentgamingbuddy.com,pubg-match
    - DOMAIN-SUFFIX,proximabeta.com,pubg-match

    # ─── PUBG PROCESS (Emulator) ───
    - PROCESS-NAME,PUBGMobile,pubg-match
    - PROCESS-NAME,com.tencent.ig,pubg-match
    - PROCESS-NAME,AndroidEmulatorEx,pubg-match
    - PROCESS-NAME,GameLoop,pubg-match
    - PROCESS-NAME,aow_exe,pubg-match

    # ─── PUBG PROCESS (Mobile) ───
    - PROCESS-NAME,com.tencent.ig,pubg-match
    - PROCESS-NAME,com.pubg.krmobile,pubg-match
    - PROCESS-NAME,com.tencent.tmgp.pubgmhd,pubg-match

    # ─── ANALYTICS BLOCK ───
    - DOMAIN-KEYWORD,analytics,direct-out
    - DOMAIN-KEYWORD,tracking,direct-out
    - DOMAIN-KEYWORD,crashlytics,direct-out
    - DOMAIN-KEYWORD,firebase,direct-out
    - DOMAIN-SUFFIX,appsflyer.com,direct-out
    - DOMAIN-SUFFIX,adjust.com,direct-out
    - DOMAIN-SUFFIX,branch.io,direct-out

    # ─── DIRECT EVERYTHING ELSE ───
    - MATCH,direct-out
*/
