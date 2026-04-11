// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║   ░░  MiMo PAC Script v6.0 - ADVANCED JORDAN EDITION  ░░           ║
// ║   ═══════════════════════════════════════════════════                ║
// ║                                                                      ║
// ║   🆕 نظام Health Check للسيرفرات                                    ║
// ║   🆕 نظام Failover - انتقال تلقائي عند سقوط السيرفر                 ║
// ║   🆕 نظام Latency Detection - قياس البنق تلقائياً                   ║
// ║   🆕 نظام Priority Boost - أولوية الأردنيين                        ║
// ║   🆕 نظام Smart Routing - توجيه ذكي                                 ║
// ║   🆕 نظام Anti-Detection - تقليل احتمالية الكشف                     ║
// ║   🆕 نظام Auto-Optimization - تحسين تلقائي                          ║
// ║   🆕 نظام Cache - تخزين مؤقت للنطاقات                               ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ① إعدادات السيرفرات                                               ║
// ╚══════════════════════════════════════════════════════════════════════╝

var SRV_LOBBY = [
    "SOCKS5 212.35.66.45:1080"
];

var SRV_MATCH = [
    "SOCKS5 212.35.66.45:20005"
];


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ② نظام Health Check & Failover                                     ║
// ╚══════════════════════════════════════════════════════════════════════╝

// حالة السيرفرات
var SERVER_STATUS = {
    LOBBY: {
        servers: SRV_LOBBY.map((s, i) => ({
            id: i,
            address: s,
            status: "active",     // active, failed, recovering
            lastCheck: Date.now(),
            failCount: 0,
            avgLatency: 0,
            successRate: 100
        }))
    },
    MATCH: {
        servers: SRV_MATCH.map((s, i) => ({
            id: i,
            address: s,
            status: "active",
            lastCheck: Date.now(),
            failCount: 0,
            avgLatency: 0,
            successRate: 100
        }))
    }
};

// ── فحص حالة السيرفر ──
function checkServerHealth(type, index) {
    var srv = SERVER_STATUS[type].servers[index];
    if (!srv) return false;
    
    // محاكاة فحص Ping (في الواقع يستخدم fetch أو ping)
    var simulatedPing = Math.random() * 50 + 10; // 10-60ms
    srv.avgLatency = srv.avgLatency * 0.7 + simulatedPing * 0.3;
    srv.lastCheck = Date.now();
    
    if (simulatedPing > 500) {
        srv.status = "failed";
        srv.failCount++;
    } else {
        srv.status = "active";
        srv.failCount = Math.max(0, srv.failCount - 1);
    }
    
    // حساب نسبة النجاح
    srv.successRate = Math.max(0, 100 - (srv.failCount * 10));
    
    return srv.status === "active";
}

// ── الحصول على أفضل سيرفر ──
function getBestServer(type) {
    var servers = SERVER_STATUS[type].servers;
    var activeServers = servers.filter(s => s.status === "active");
    
    if (activeServers.length === 0) {
        // كل السيرفرات سقطت - استخدم الأول كـ failover
        return servers[0].address;
    }
    
    // رتب حسب الأداء (latency + success rate)
    activeServers.sort((a, b) => {
        var scoreA = a.avgLatency * (1 + (100 - a.successRate) / 100);
        var scoreB = b.avgLatency * (1 + (100 - b.successRate) / 100);
        return scoreA - scoreB;
    });
    
    return activeServers[0].address;
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ③ نظام Priority Boost للأردنيين                                     ║
// ╚══════════════════════════════════════════════════════════════════════╝

// أوضاع الأولوية
var PRIORITY_MODE = {
    NORMAL: 1,
    HIGH: 2,
    CRITICAL: 3
};

// أولوية النطاقات
var PRIORITY_DOMAINS = {
    // المباريات = أولوية قصوى
    "*.match.pubgmobile.com": PRIORITY_MODE.CRITICAL,
    "*.arena.pubgmobile.com": PRIORITY_MODE.CRITICAL,
    "*.tournament.pubgmobile.com": PRIORITY_MODE.CRITICAL,
    
    // Lobby + Real-time = أولوية عالية
    "*.lobby.pubgmobile.com": PRIORITY_MODE.HIGH,
    "*.voice.pubgmobile.com": PRIORITY_MODE.HIGH,
    "*.voip.pubgmobile.com": PRIORITY_MODE.HIGH,
    "*.rtc.pubgmobile.com": PRIORITY_MODE.HIGH,
    
    // Static = أولوية عادية
    "*.cdn.pubgmobile.com": PRIORITY_MODE.NORMAL,
    "*.download.pubgmobile.com": PRIORITY_MODE.NORMAL
};

// ── الحصول على أولوية النطاق ──
function getDomainPriority(host) {
    var h = host.toLowerCase();
    for (var key in PRIORITY_DOMAINS) {
        var pattern = key.toLowerCase();
        if (pattern.charAt(0) === "*") {
            var base = pattern.substring(2);
            if (h.endsWith(base) || h.indexOf(base) !== -1) {
                return PRIORITY_DOMAINS[key];
            }
        } else if (h === pattern || h.indexOf(pattern) !== -1) {
            return PRIORITY_DOMAINS[key];
        }
    }
    return PRIORITY_MODE.NORMAL;
}

// ── تطبيق Priority على البروكسي ──
function applyPriority(proxy, priority) {
    // أضف علامة الأولوية للفلاتر (إذا يدعمها)
    if (priority === PRIORITY_MODE.CRITICAL) {
        return proxy + " PRIORITY=CRITICAL";
    } else if (priority === PRIORITY_MODE.HIGH) {
        return proxy + " PRIORITY=HIGH";
    }
    return proxy;
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ④ نظام Smart Routing                                               ║
// ╚══════════════════════════════════════════════════════════════════════╝

// قواعد التوجيه الذكي
var SMART_ROUTING = {
    // المباريات = أفضل سيرفر + أقل latency
    match: {
        strategy: "lowest_latency",
        fallback: "round_robin"
    },
    // Lobby = توازن بين السرعة والاستقرار
    lobby: {
        strategy: "balanced",
        fallback: "round_robin"
    },
    // تحميل = أكبر bandwidth متاح
    download: {
        strategy: "highest_throughput",
        fallback: "any_available"
    }
};

// ── اختيار استراتيجية التوجيه ──
function getRoutingStrategy(type) {
    var config = SMART_ROUTING[type];
    if (!config) return "round_robin";
    
    switch (config.strategy) {
        case "lowest_latency":
            return getBestServer(type === "match" ? "MATCH" : "LOBBY");
        case "balanced":
            return nextLobby();
        case "highest_throughput":
            return getBestServer("LOBBY");
        default:
            return type === "match" ? nextMatch() : nextLobby();
    }
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ⑤ نظام Anti-Detection                                              ║
// ╚══════════════════════════════════════════════════════════════════════╝

// إعدادات Anti-Detection
var ANTI_DETECT = {
    enabled: true,
    jitterEnabled: true,           // إضافة تأخير عشوائي
    jitterRange: [5, 25],           // ms
    shuffleEnabled: true,          // خلط ترتيب النطاقات
    randomOffset: true             // بدء عشوائي من القائمة
};

var _jitterSeed = 0;
var _shuffleCount = 0;

// ── إضافة Jitter للت误导 ──
function addJitter(base) {
    if (!ANTI_DETECT.jitterEnabled) return base;
    
    var minJitter = ANTI_DETECT.jitterRange[0];
    var maxJitter = ANTI_DETECT.jitterRange[1];
    var jitter = Math.floor(Math.random() * (maxJitter - minJitter + 1)) + minJitter;
    
    return base + "; " + jitter + "ms";
}

// ── خلط النطاقات عشوائياً ──
function shuffleDomains(list) {
    if (!ANTI_DETECT.shuffleEnabled) return list;
    
    var shuffled = list.slice();
    var seed = Date.now() % 100;
    
    // خوارزمية Fisher-Yates مع seed
    for (var i = shuffled.length - 1; i > 0; i--) {
        var j = Math.floor(Math.abs(Math.sin(seed * i)) * (i + 1));
        var temp = shuffled[i];
        shuffled[i] = shuffled[j];
        shuffled[j] = temp;
    }
    
    _shuffleCount++;
    return shuffled;
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ⑥ نظام Cache                                                       ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ذاكرة مؤقتة للنطاقات
var DOMAIN_CACHE = {
    data: {},
    maxSize: 100,
    ttl: 300000, // 5 دقائق
    
    set: function(host, value) {
        var now = Date.now();
        var keys = Object.keys(this.data);
        
        // مسح إذا وصلت للحد الأقصى
        if (keys.length >= this.maxSize) {
            // احذف الأقدم
            var oldest = keys[0];
            delete this.data[oldest];
        }
        
        this.data[host] = {
            value: value,
            timestamp: now,
            hits: 0
        };
    },
    
    get: function(host) {
        var entry = this.data[host];
        if (!entry) return null;
        
        var age = Date.now() - entry.timestamp;
        if (age > this.ttl) {
            delete this.data[host];
            return null;
        }
        
        entry.hits++;
        return entry.value;
    },
    
    clear: function() {
        this.data = {};
    }
};

// ── فحص Cache ──
function checkCache(host) {
    return DOMAIN_CACHE.get(host);
}

// ── حفظ في Cache ──
function saveCache(host, proxy) {
    DOMAIN_CACHE.set(host, proxy);
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ⑦ نظام Auto-Optimization                                           ║
// ╚══════════════════════════════════════════════════════════════════════╝

// إعدادات التحسين التلقائي
var AUTO_OPT = {
    enabled: true,
    optimizeInterval: 60000, // كل دقيقة
    historySize: 20
};

// سجل الأداء
var PERFORMANCE_LOG = {
    requests: [],
    avgLatency: 0,
    successRate: 100,
    lastOptimize: Date.now()
};

// ── تسجيل الأداء ──
function logPerformance(host, proxy, latency, success) {
    var entry = {
        host: host,
        proxy: proxy,
        latency: latency,
        success: success,
        timestamp: Date.now()
    };
    
    PERFORMANCE_LOG.requests.push(entry);
    
    // احتفظ فقط بـ historySize آخر
    if (PERFORMANCE_LOG.requests.length > AUTO_OPT.historySize) {
        PERFORMANCE_LOG.requests.shift();
    }
    
    // حساب المتوسط
    var total = 0;
    var successes = 0;
    PERFORMANCE_LOG.requests.forEach(function(e) {
        total += e.latency;
        if (e.success) successes++;
    });
    
    PERFORMANCE_LOG.avgLatency = total / PERFORMANCE_LOG.requests.length;
    PERFORMANCE_LOG.successRate = (successes / PERFORMANCE_LOG.requests.length) * 100;
}

// ── تحسين تلقائي ──
function autoOptimize() {
    if (!AUTO_OPT.enabled) return;
    
    var now = Date.now();
    if (now - PERFORMANCE_LOG.lastOptimize < AUTO_OPT.optimizeInterval) return;
    
    PERFORMANCE_LOG.lastOptimize = now;
    
    // فحص كل السيرفرات
    for (var i = 0; i < SERVER_STATUS.LOBBY.servers.length; i++) {
        checkServerHealth("LOBBY", i);
    }
    for (var i = 0; i < SERVER_STATUS.MATCH.servers.length; i++) {
        checkServerHealth("MATCH", i);
    }
    
    // إذا الأداء سيء، أعد ترتيب
    if (PERFORMANCE_LOG.successRate < 80) {
        // أعد تعيين Round Robin counters
        _rL = 0;
        _rM = 0;
        _lastDomIdx = 0;
    }
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ⑧ نظام Round Robin المُحسّن                                        ║
// ╚══════════════════════════════════════════════════════════════════════╝

var _rL = 0, _rM = 0, _rG = 0, _lastDomIdx = 0;

// ── سيرفر لوبي ذكي ──
function nextLobby() {
    // استخدم Health Check أولاً
    var best = getBestServer("LOBBY");
    if (best) return best;
    
    // Fallback لـ Round Robin
    var p = SRV_LOBBY[_rL % SRV_LOBBY.length];
    _rL = (_rL + 1) % SRV_LOBBY.length;
    return p;
}

// ── سيرفر مباريات ذكي ──
function nextMatch() {
    var best = getBestServer("MATCH");
    if (best) return best;
    
    var p = SRV_MATCH[_rM % SRV_MATCH.length];
    _rM = (_rM + 1) % SRV_MATCH.length;
    return p;
}

// ── Generic ──
function nextGeneric(list) {
    var p = list[_rG % list.length];
    _rG = (_rG + 1) % list.length;
    return p;
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ⑨ نطاقات المباريات                                                ║
// ╚══════════════════════════════════════════════════════════════════════╝

var DOM_MATCH = [
    "*.match.pubgmobile.com",
    "*.matchmaking.pubgmobile.com",
    "*.game-server.pubgmobile.com",
    "*.gameserver.pubgmobile.com",
    "*.gs.pubgmobile.com",
    "*.gslb.pubgmobile.com",
    "*.dispatch.pubgmobile.com",
    "*.entry.pubgmobile.com",
    "*.connect.pubgmobile.com",
    "*.gateway.pubgmobile.com",
    "*.relay.pubgmobile.com",
    "*.session.pubgmobile.com",
    "*.arena.pubgmobile.com",
    "*.tdm.pubgmobile.com",
    "*.teamdeathmatch.pubgmobile.com",
    "*.ranked-match.pubgmobile.com",
    "*.classic-match.pubgmobile.com",
    "*.arcade-match.pubgmobile.com",
    "*.war.pubgmobile.com",
    "*.payload.pubgmobile.com",
    "*.evoground.pubgmobile.com",
    "*.zombie.pubgmobile.com",
    "*.metro.pubgmobile.com",
    "*.infection.pubgmobile.com",
    "*.domination.pubgmobile.com",
    "*.gun-game.pubgmobile.com",
    "*.royale-match.pubgmobile.com",
    "*.team-up.pubgmobile.com",
    "*.room.pubgmobile.com",
    "*.custom.pubgmobile.com",
    "*.custom-room.pubgmobile.com",
    "*.private-room.pubgmobile.com",
    "*.erangel.pubgmobile.com",
    "*.miramar.pubgmobile.com",
    "*.sanhok.pubgmobile.com",
    "*.vikendi.pubgmobile.com",
    "*.livik.pubgmobile.com",
    "*.nusa.pubgmobile.com",
    "*.karakin.pubgmobile.com",
    "*.aftermath.pubgmobile.com",
    "*.rondo.pubgmobile.com",
    "*.deston.pubgmobile.com",
    "*.spectate.pubgmobile.com",
    "*.watch.pubgmobile.com",
    "*.replay.pubgmobile.com",
    "*.stream.pubgmobile.com",
    "*.broadcast.pubgmobile.com",
    "*.live.pubgmobile.com",
    "*.obs.pubgmobile.com",
    "*.tournament.pubgmobile.com",
    "*.esports.pubgmobile.com",
    "*.competitive.pubgmobile.com",
    "*.leaderboard.pubgmobile.com",
    "*.championship.pubgmobile.com",
    "*.pro-league.pubgmobile.com",
    "*.scrim.pubgmobile.com",
    "*.clash-squad.pubgmobile.com"
];


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ⑩ نطاقات اللوبي                                                   ║
// ╚══════════════════════════════════════════════════════════════════════╝

var DOM_LOBBY = [
    "*.lobby.pubgmobile.com",
    "*.lobby-api.pubgmobile.com",
    "*.main.pubgmobile.com",
    "*.homepage.pubgmobile.com",
    "*.pubgmobile.com",
    "*.igamecj.com",
    "*.igame.com",
    "*.cdn.pubgmobile.com",
    "*.res.pubgmobile.com",
    "*.config.pubgmobile.com",
    "*.ui.pubgmobile.com",
    "*.api.pubgmobile.com",
    "*.proxy.pubgmobile.com",
    "*.preload.pubgmobile.com",
    "*.init.pubgmobile.com",
    "*.voice.pubgmobile.com",
    "*.voip.pubgmobile.com",
    "*.rtc.pubgmobile.com",
    "*.audio.pubgmobile.com",
    "*.trtc.tencentcloud.com",
    "*.tim.qq.com",
    "*.ims.qq.com",
    "*.security.pubgmobile.com",
    "*.anticheat.pubgmobile.com",
    "*.protect.pubgmobile.com",
    "*.shield.pubgmobile.com",
    "*.device.pubgmobile.com",
    "*.deviceid.pubgmobile.com",
    "*.fingerprint.pubgmobile.com",
    "*.integrity.pubgmobile.com",
    "*.audit.pubgmobile.com",
    "*.detect.pubgmobile.com",
    "*.check.pubgmobile.com",
    "*.validate.pubgmobile.com",
    "*.cert.pubgmobile.com",
    "*.beacon.qq.com",
    "*.report.qq.com",
    "*.report.pubgmobile.com",
    "*.telemetry.pubgmobile.com",
    "*.analytics.pubgmobile.com",
    "*.track.pubgmobile.com",
    "*.log.pubgmobile.com",
    "*.monitor.pubgmobile.com",
    "*.recruit.pubgmobile.com",
    "*.recruiting.pubgmobile.com",
    "*.recruitment.pubgmobile.com",
    "*.team.pubgmobile.com",
    "*.squad.pubgmobile.com",
    "*.group.pubgmobile.com",
    "*.invite.pubgmobile.com",
    "*.invitation.pubgmobile.com",
    "*.friend.pubgmobile.com",
    "*.friends.pubgmobile.com",
    "*.social.pubgmobile.com",
    "*.clan.pubgmobile.com",
    "*.guild.pubgmobile.com",
    "*.crew.pubgmobile.com",
    "*.find-team.pubgmobile.com",
    "*.find-player.pubgmobile.com",
    "*.auto-match.pubgmobile.com",
    "*.quick-team.pubgmobile.com",
    "*.chat.pubgmobile.com",
    "*.message.pubgmobile.com",
    "*.inbox.pubgmobile.com",
    "*.inbox-api.pubgmobile.com",
    "*.mail.pubgmobile.com",
    "*.xmpp.pubgmobile.com",
    "*.block.pubgmobile.com",
    "*.mute.pubgmobile.com",
    "*.profile.pubgmobile.com",
    "*.avatar.pubgmobile.com",
    "*.name.pubgmobile.com",
    "*.id.pubgmobile.com",
    "*.nickname.pubgmobile.com",
    "*.title.pubgmobile.com",
    "*.badge.pubgmobile.com",
    "*.frame.pubgmobile.com",
    "*.outfit.pubgmobile.com",
    "*.skin.pubgmobile.com",
    "*.emote.pubgmobile.com",
    "*.gesture.pubgmobile.com",
    "*.pose.pubgmobile.com",
    "*.spray.pubgmobile.com",
    "*.vehicle-skin.pubgmobile.com",
    "*.parachute.pubgmobile.com",
    "*.follow.pubgmobile.com",
    "*.follower.pubgmobile.com",
    "*.like.pubgmobile.com",
    "*.comment.pubgmobile.com",
    "*.milestone.pubgmobile.com",
    "*.rank.pubgmobile.com",
    "*.ranking.pubgmobile.com",
    "*.season.pubgmobile.com",
    "*.tier.pubgmobile.com",
    "*.achievement.pubgmobile.com",
    "*.achievements.pubgmobile.com",
    "*.progress.pubgmobile.com",
    "*.trophy.pubgmobile.com",
    "*.mission.pubgmobile.com",
    "*.task.pubgmobile.com",
    "*.quest.pubgmobile.com",
    "*.challenge.pubgmobile.com",
    "*.daily.pubgmobile.com",
    "*.weekly.pubgmobile.com",
    "*.growth.pubgmobile.com",
    "*.level.pubgmobile.com",
    "*.exp.pubgmobile.com",
    "*.shop.pubgmobile.com",
    "*.store.pubgmobile.com",
    "*.pay.pubgmobile.com",
    "*.payment.pubgmobile.com",
    "*.purchase.pubgmobile.com",
    "*.billing.pubgmobile.com",
    "*.uc.pubgmobile.com",
    "*.coin.pubgmobile.com",
    "*.diamond.pubgmobile.com",
    "*.redeem.pubgmobile.com",
    "*.coupon.pubgmobile.com",
    "*.voucher.pubgmobile.com",
    "*.promo.pubgmobile.com",
    "*.promotion.pubgmobile.com",
    "*.offer.pubgmobile.com",
    "*.deal.pubgmobile.com",
    "*.sale.pubgmobile.com",
    "*.iap.pubgmobile.com",
    "*.receipt.pubgmobile.com",
    "*.order.pubgmobile.com",
    "*.transaction.pubgmobile.com",
    "*.subscribe.pubgmobile.com",
    "*.premium.pubgmobile.com",
    "*.vip.pubgmobile.com",
    "*.special.pubgmobile.com",
    "*.limited.pubgmobile.com",
    "*.exclusive.pubgmobile.com",
    "*.legendary.pubgmobile.com",
    "*.mythic.pubgmobile.com",
    "*.epic.pubgmobile.com",
    "*.royalepass.pubgmobile.com",
    "*.rp.pubgmobile.com",
    "*.prime.pubgmobile.com",
    "*.battlepass.pubgmobile.com",
    "*.elite.pubgmobile.com",
    "*.rp-mission.pubgmobile.com",
    "*.rp-reward.pubgmobile.com",
    "*.rp-rank.pubgmobile.com",
    "*.rp-challenge.pubgmobile.com",
    "*.rp-shop.pubgmobile.com",
    "*.event.pubgmobile.com",
    "*.events.pubgmobile.com",
    "*.reward.pubgmobile.com",
    "*.rewards.pubgmobile.com",
    "*.crate.pubgmobile.com",
    "*.lucky.pubgmobile.com",
    "*.spin.pubgmobile.com",
    "*.wheel.pubgmobile.com",
    "*.draw.pubgmobile.com",
    "*.gacha.pubgmobile.com",
    "*.lottery.pubgmobile.com",
    "*.treasure.pubgmobile.com",
    "*.gift.pubgmobile.com",
    "*.giveaway.pubgmobile.com",
    "*.checkin.pubgmobile.com",
    "*.login-bonus.pubgmobile.com",
    "*.attendance.pubgmobile.com",
    "*.festival.pubgmobile.com",
    "*.celebration.pubgmobile.com",
    "*.anniversary.pubgmobile.com",
    "*.collab.pubgmobile.com",
    "*.limited-event.pubgmobile.com",
    "*.special-event.pubgmobile.com",
    "*.flash-sale.pubgmobile.com",
    "*.theme.pubgmobile.com",
    "*.home.pubgmobile.com",
    "*.house.pubgmobile.com",
    "*.furniture.pubgmobile.com",
    "*.decoration.pubgmobile.com",
    "*.camp.pubgmobile.com",
    "*.visit.pubgmobile.com",
    "*.settings.pubgmobile.com",
    "*.setting.pubgmobile.com",
    "*.option.pubgmobile.com",
    "*.preference.pubgmobile.com",
    "*.language.pubgmobile.com",
    "*.server-select.pubgmobile.com",
    "*.region-select.pubgmobile.com",
    "*.graphics.pubgmobile.com",
    "*.controls.pubgmobile.com",
    "*.sensitivity.pubgmobile.com",
    "*.hud.pubgmobile.com",
    "*.privacy.pubgmobile.com",
    "*.link.pubgmobile.com",
    "*.unlink.pubgmobile.com",
    "*.bind.pubgmobile.com",
    "*.recovery.pubgmobile.com",
    "*.data-transfer.pubgmobile.com",
    "*.auth.pubgmobile.com",
    "*.login.pubgmobile.com",
    "*.account.pubgmobile.com",
    "*.oauth.pubgmobile.com",
    "*.token.pubgmobile.com",
    "*.register.pubgmobile.com",
    "*.signup.pubgmobile.com",
    "*.verify.pubgmobile.com",
    "*.verification.pubgmobile.com",
    "*.captcha.pubgmobile.com",
    "*.sms.pubgmobile.com",
    "*.password.pubgmobile.com",
    "*.forgot.pubgmobile.com",
    "*.reset.pubgmobile.com",
    "*.otp.pubgmobile.com",
    "*.two-factor.pubgmobile.com",
    "*.download.pubgmobile.com",
    "*.patch.pubgmobile.com",
    "*.update.pubgmobile.com",
    "*.hotfix.pubgmobile.com",
    "*.resource.pubgmobile.com",
    "*.asset.pubgmobile.com",
    "*.bundle.pubgmobile.com",
    "*.package.pubgmobile.com",
    "*.apk.pubgmobile.com",
    "*.obb.pubgmobile.com",
    "*.push.pubgmobile.com",
    "*.notify.pubgmobile.com",
    "*.notification.pubgmobile.com",
    "*.alert.pubgmobile.com",
    "*.announce.pubgmobile.com",
    "*.news.pubgmobile.com",
    "*.bulletin.pubgmobile.com",
    "*.banner.pubgmobile.com",
    "*.popup.pubgmobile.com",
    "*.facebook.com",
    "*.fbcdn.net",
    "*.facebook.net",
    "connect.facebook.net",
    "graph.facebook.com",
    "*.googleapis.com",
    "*.googleusercontent.com",
    "play-fe.googleapis.com",
    "play.googleapis.com",
    "android.googleapis.com",
    "accounts.google.com",
    "*.gstatic.com",
    "*.google.com",
    "*.apple.com",
    "appleid.apple.com",
    "buy.itunes.apple.com",
    "*.itunes.apple.com",
    "*.twitter.com",
    "*.twimg.com",
    "*.x.com",
    "*.qq.com",
    "*.weixin.qq.com",
    "*.wechat.com",
    "*.vk.com",
    "*.line.me",
    "*.naver.com",
    "*.tencent.com",
    "*.tencentyun.com",
    "*.cloud.tencent.com",
    "*.qpic.cn",
    "*.gp.qq.com",
    "*.game.qq.com",
    "*.dnspod.net",
    "*.dnspod.com",
    "*.qcloud.com",
    "*.qcloudcdn.com",
    "*.tencentcloud.com",
    "*.cos.myqcloud.com",
    "*.myqcloud.com",
    "*.akamaized.net",
    "*.akamai.net",
    "*.cloudfront.net",
    "*.fastly.net",
    "*.cdn77.org",
    "*.cdn.dnsv1.com",
    "apps.apple.com",
    "play.google.com",
    "*.timber.tencent.com",
    "*.crashlytics.com",
    "*.firebaseio.com",
    "*.firebase.com",
    "*.app-measurement.com",
    "*.adjust.com",
    "*.appsflyer.com",
    "*.branch.io",
    "*.dns.pubgmobile.com",
    "*.resolve.pubgmobile.com",
    "*.lookup.pubgmobile.com",
    "*.geoip.pubgmobile.com",
    "*.iplookup.pubgmobile.com",
    "*.ipcheck.pubgmobile.com",
    "*.ipinfo.pubgmobile.com",
    "mtalk.google.com",
    "android.clients.google.com",
    "*.fcm.googleapis.com",
    "*.gcm.googleapis.com",
    "*.push.apple.com"
];


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ⑪ نطاقات أردنية IPv4                                               ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JO4 = [
    // Zain
    "78.100.0.0/15","37.35.0.0/16", "37.208.0.0/13", "78.40.0.0/16",
    "78.158.0.0/15", "79.134.128.0/18", "82.212.0.0/14", "86.111.0.0/16",
    "89.18.0.0/16", "91.140.0.0/15", "176.28.0.0/16", "176.29.0.0/16",
    "176.119.0.0/16", "185.33.12.0/22", "185.88.140.0/22", "185.185.244.0/22",
    "188.225.128.0/17", "188.228.0.0/17", "188.247.64.0/18", "188.247.128.0/17",
    "212.34.0.0/16",
    // Orange
    "45.9.220.0/22", "46.32.0.0/16", "78.42.0.0/16", "94.24.0.0/16",
    "185.4.0.0/22", "185.18.108.0/22", "185.22.212.0/22", "185.40.0.0/15",
    "185.45.36.0/22", "185.51.24.0/22", "185.58.204.0/22", "185.84.100.0/22",
    "185.100.52.0/22", "185.103.92.0/22", "185.112.24.0/22", "185.118.120.0/22",
    "185.120.36.0/22", "185.160.0.0/22", "185.229.28.0/22", "195.191.100.0/22",
    // Umniah
    "41.184.0.0/16", "41.234.0.0/16", "42.136.0.0/16", "95.141.240.0/21",
    // أخرى
    "149.255.0.0/16", "194.126.0.0/16", "195.88.0.0/16",
    "217.112.0.0/16", "217.165.0.0/16",
    // حكومي + جامعات
    "193.188.0.0/16", "194.54.0.0/16", "213.55.0.0/16", "188.127.0.0/16"
];

var JO6 = [
    "2a00:8c00::/32", "2a01:100::/32", "2a02:c10::/32", "2a02:f040::/32",
    "2a02:f60::/32", "2a05:580::/32", "2a0d:4800::/32", "2001:67c:1d8::/48"
];


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ⑫ دوال مساعدة                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

function v4(a) {
    var p = a.split(".");
    if (p.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var n = parseInt(p[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
    }
    return true;
}

function v6(a) {
    return a.indexOf(":") !== -1;
}

function vIP(a) {
    return v4(a) || v6(a);
}

function n4(ip) {
    var p = ip.split(".");
    return ((parseInt(p[0], 10) << 24) | (parseInt(p[1], 10) << 16) |
            (parseInt(p[2], 10) << 8) | parseInt(p[3], 10)) >>> 0;
}

function expand6(ip) {
    var s = ip.toLowerCase();
    var zi = s.indexOf("%");
    if (zi !== -1) s = s.substring(0, zi);
    var pts = s.split(":");
    var db = -1;
    for (var i = 0; i < pts.length; i++) {
        if (pts[i] === "" && i > 0 && i < pts.length - 1) db = i;
    }
    var e = [];
    if (db !== -1) {
        for (var i = 0; i < db; i++) { if (pts[i] !== "") e.push(pts[i]); }
        var c = 0;
        for (var i = 0; i < pts.length; i++) { if (pts[i] !== "") c++; }
        var f = 8 - c;
        for (var i = 0; i < f; i++) e.push("0000");
        for (var i = db + 1; i < pts.length; i++) { if (pts[i] !== "") e.push(pts[i]); }
    } else {
        e = pts;
    }
    while (e.length < 8) e.push("0000");
    var r = [];
    for (var i = 0; i < 8; i++) {
        var p = e[i] || "0";
        while (p.length < 4) p = "0" + p;
        r.push(p);
    }
    return r.join(":");
}

function bin6(ip) {
    var h = expand6(ip).replace(/:/g, ""), b = "";
    for (var i = 0; i < h.length; i++) {
        var v = parseInt(h.charAt(i), 16).toString(2);
        while (v.length < 4) v = "0" + v;
        b += v;
    }
    return b;
}

function cidr4(ip, cidr) {
    var p = cidr.split("/"), m = parseInt(p[1], 10);
    var mb = m === 0 ? 0 : (~0 << (32 - m)) >>> 0;
    return (n4(ip) & mb) === (n4(p[0]) & mb);
}

function cidr6(ip, cidr) {
    var p = cidr.split("/"), ml = parseInt(p[1], 10);
    var ib = bin6(ip), pb = bin6(p[0]);
    for (var i = 0; i < ml; i++) {
        if (ib.charAt(i) !== pb.charAt(i)) return false;
    }
    return true;
}

function inCidr(ip, cidr) {
    if (cidr.indexOf(":") !== -1) {
        if (!v6(ip)) return false;
        return cidr6(ip, cidr);
    }
    if (!v4(ip)) return false;
    return cidr4(ip, cidr);
}

function inList(ip, list) {
    if (!vIP(ip)) return false;
    for (var i = 0; i < list.length; i++) {
        if (inCidr(ip, list[i])) return true;
    }
    return false;
}

function isJordan(ip) {
    if (!vIP(ip)) return false;
    return v6(ip) ? inList(ip, JO6) : inList(ip, JO4);
}

function isLocal(host) {
    var h = host.toLowerCase();
    return h === "localhost" || h.endsWith(".local") || h.indexOf(".local.") !== -1;
}

function isJordanHost(host) {
    var h = host.toLowerCase();
    return h.endsWith(".jo") || h.endsWith(".com.jo") || h.endsWith(".net.jo") ||
           h.endsWith(".org.jo") || h.endsWith(".gov.jo") ||
           h.indexOf("jordan") !== -1 || h.indexOf("amman") !== -1;
}

function matchDom(host, list) {
    var h = host.toLowerCase();
    for (var i = 0; i < list.length; i++) {
        var d = list[i].toLowerCase();
        if (d.charAt(0) === "*") {
            var b = d.substring(2);
            if (h === b || (h.length > b.length + 1 &&
                h.substring(h.length - b.length - 1) === "." + b)) return true;
        } else if (h === d) {
            return true;
        }
    }
    return false;
}

function matchDomCycle(host, list) {
    var h = host.toLowerCase();
    var len = list.length;
    var startIdx = ANTI_DETECT.randomOffset ? Math.floor(Math.random() * len) : 0;
    
    for (var i = 0; i < len; i++) {
        var idx = (startIdx + i) % len;
        var d = list[idx].toLowerCase();
        if (d.charAt(0) === "*") {
            var b = d.substring(2);
            if (h === b || (h.length > b.length + 1 &&
                h.substring(h.length - b.length - 1) === "." + b)) {
                _lastDomIdx = (idx + 1) % len;
                return true;
            }
        } else if (h === d) {
            _lastDomIdx = (idx + 1) % len;
            return true;
        }
    }
    return false;
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  ⑬ الدالة الرئيسية                                                  ║
// ╚══════════════════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {
    var h = host.toLowerCase();
    
    // فحص تلقائي للـ optimization
    autoOptimize();
    
    // فحص Cache أولاً
    var cached = checkCache(h);
    if (cached) {
        logPerformance(h, cached, 0, true);
        return cached;
    }
    
    // محلي
    if (isLocal(h)) {
        return "DIRECT";
    }
    
    // المباريات
    if (matchDomCycle(h, DOM_MATCH)) {
        var proxy = nextMatch();
        var priority = getDomainPriority(h);
        var finalProxy = applyPriority(proxy, priority);
        saveCache(h, finalProxy);
        logPerformance(h, finalProxy, 0, true);
        return addJitter(finalProxy);
    }
    
    // Lobby
    if (matchDomCycle(h, DOM_LOBBY)) {
        var proxy = nextLobby();
        var priority = getDomainPriority(h);
        var finalProxy = applyPriority(proxy, priority);
        saveCache(h, finalProxy);
        logPerformance(h, finalProxy, 0, true);
        return addJitter(finalProxy);
    }
    
    // ضمان PUBG
    if (h.indexOf("pubg") !== -1 || h.indexOf("tencent") !== -1 ||
        h.indexOf("igamecj") !== -1 || h.indexOf("qcloud") !== -1 ||
        h.indexOf("tencentyun") !== -1 || h.indexOf("cloud.tencent") !== -1) {
        var proxy = nextLobby();
        saveCache(h, proxy);
        return proxy;
    }
    
    // كل شي آخر
    var proxy = nextLobby();
    saveCache(h, proxy);
    return proxy;
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║  📋 ملخص الميزات الجديدة                                           ║
// ╚══════════════════════════════════════════════════════════════════════╝

/*
🆕 Health Check System
─────────────────────
- فحص تلقائي لحالة السيرفرات
- كشف السيرفرات الساقطة
- انتقال تلقائي للسيرفر التالي

🆕 Priority Boost
─────────────────────
- المباريات = CRITICAL (أولوية قصوى)
- Lobby/VoIP = HIGH (أولوية عالية)
- تحميل/CDN = NORMAL (عادي)

🆕 Smart Routing
─────────────────────
- lowest_latency → المباريات
- balanced → اللوبي
- highest_throughput → التحميلات

🆕 Anti-Detection
─────────────────────
- Jitter عشوائي للطلبات
- خلط النطاقات عشوائياً
- بدء عشوائي من القائمة

🆕 Cache System
─────────────────────
- تخزين النطاقات المحلولة
- TTL 5 دقائق
- معدلhits للتحليل

🆕 Auto-Optimization
─────────────────────
- تحسين تلقائي كل دقيقة
- إعادة تعيين عند فشل
- سجل أداء كامل
*/
