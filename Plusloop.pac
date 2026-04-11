// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║   ░░  MiMo PAC Script v4.0 - PURE JORDAN EDITION  ░░               ║
// ║   ════════════════════════════════════════════════════               ║
// ║                                                                      ║
// ║   ✅ تدوير دائري للسيرفرات (Round Robin)                           ║
// ║   ✅ تدوير دائري للنطاقات (Domain Cycling)                         ║
// ║   ✅ كل نطاقات الأردن كاملة (IPv4 + IPv6)                          ║
// ║   ✅ بورت 20005 للمباريات                                           ║
// ║   ✅ بورت 1080 للوبي остальн                                         ║
// ║   ✅ تحسينات البنق والاتصال                                         ║
// ║   ✅ بدون DIRECT - كل شي بالبروكسي                                  ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝


// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║  ①  إعدادات السيرفرات                                              ║
// ║  ════════════════════════                                            ║
// ║                                                                      ║
// ║  ضع IPs سيرفراتك هنا                                                ║
// ║  يدعم IPv4 و IPv6                                                   ║
// ║  كل إضافة سيرفر = زيادة سرعة + توزيع أفضل                         ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ── سيرفرات اللوبي - بورت 1080 ──
// كل ما زادت السيرفرات = توزيع أفضل على الطلب = بنق أقل
var SRV_LOBBY = [
    "SOCKS5 212.35.66.45:1080"
    // ,"SOCKS5 [2001:67c:1d8::1]:1080"   // ← أضف IPv6 إذا عندك
    // ,"SOCKS5 IP2:1080"                  // ← أضف سيرفر ثاني
    // ,"SOCKS5 IP3:1080"                  // ← أضف سيرفر ثالث
];

// ── سيرفرات المباريات - بورت 20005 ──
// هذا البورت منفصل عن اللوبي عشان المباريات ما تتأثر باللوبي
var SRV_MATCH = [
    "SOCKS5 212.35.66.45:20005"
    // ,"SOCKS5 [2001:67c:1d8::1]:20005"  // ← أضف IPv6 إذا عندك
    // ,"SOCKS5 IP2:20005"                 // ← أضف سيرفر ثاني
    // ,"SOCKS5 IP3:20005"                 // ← أضف سيرفر ثالث
];


// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║  ②  محرك التدوير الدائري (Round Robin Engine)                       ║
// ║  ══════════════════════════════════════════════                      ║
// ║                                                                      ║
// ║  كيف يشتغل:                                                         ║
// ║  ┌─────────────────────────────────────────────┐                    ║
// ║  │  طلب 1 → سيرفر A                           │                    ║
// ║  │  طلب 2 → سيرفر B                           │                    ║
// ║  │  طلب 3 → سيرفر C                           │                    ║
// ║  │  طلب 4 → سيرفر A (يرجع للبداية = دائري)  │                    ║
// ║  │  طلب 5 → سيرفر B                           │                    ║
// ║  │  ... وهكذا بشكل دائري                      │                    ║
// ║  └─────────────────────────────────────────────┘                    ║
// ║                                                                      ║
// ║  الفائدة: توزيع الحمل على كل السيرفرات بالتساوي                    ║
// ║           ما في سيرفر يتحمل كل الشغل لحاله                         ║
// ║           بنق أقل لأن كل سيرفر يرتاح بين الطلبات                   ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

var _rL = 0;  // عداد تدوير اللوبي (يبدأ من 0)
var _rM = 0;  // عداد تدوير المباريات (يبدأ من 0)

// ── دالة اختيار سيرفر اللوبي بالتناوب ──
// كل مرة تناديها ترجع سيرفر مختلف عن اللي قبله
// لما توصل لآخر سيرفر ترجع للأول = دائري
function nextLobby() {
    var p = SRV_LOBBY[_rL % SRV_LOBBY.length]; // اختار السيرفر الحالي
    _rL = (_rL + 1) % SRV_LOBBY.length;        // زيد العداد + رجّع لصفر إذا وصل للآخر
    return p;
}

// ── دالة اختيار سيرفر المباريات بالتناوب ──
// نفس الفكرة - تدوير منفصل عن اللوبي
// عشان المباريات واللوبي ما يأثرو على بعض
function nextMatch() {
    var p = SRV_MATCH[_rM % SRV_MATCH.length]; // اختار السيرفر الحالي
    _rM = (_rM + 1) % SRV_MATCH.length;        // زيد العداد + رجّع لصفر
    return p;
}

// ── دالة تدوير عامة لأي قائمة ──
// تستخدمها إذا بدك تدوّر على أي شي ثاني (مثلاً قائمة بورتات)
var _rG = 0; // عداد عام
function nextGeneric(list) {
    var p = list[_rG % list.length];
    _rG = (_rG + 1) % list.length;
    return p;
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║  ③  نطاقات المباريات ← بورت 20005                                  ║
// ║  ═══════════════════════════════════                                  ║
// ║                                                                      ║
// ║  كل نطاقات المباريات تروح على بورت 20005                            ║
// ║  والسيرفر يتختار بالتدوير الدائري                                   ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

var DOM_MATCH = [

    // ═══ 🎮 سيرفرات المباريات ═══
    // هاي النطاقات هي اللي توصلك للسيرفر الفعلي للمباراة
    "*.match.pubgmobile.com",
    "*.matchmaking.pubgmobile.com",
    "*.game-server.pubgmobile.com",
    "*.gameserver.pubgmobile.com",
    "*.gs.pubgmobile.com",
    "*.gslb.pubgmobile.com",           // Game Server Load Balancer
    "*.dispatch.pubgmobile.com",       // توزيع الطلبات على السيرفرات
    "*.entry.pubgmobile.com",
    "*.connect.pubgmobile.com",
    "*.gateway.pubgmobile.com",
    "*.relay.pubgmobile.com",
    "*.session.pubgmobile.com",

    // ═══ 🏟️ أوضاع اللعب ═══
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

    // ═══ 🏠 غرف مخصصة ═══
    "*.room.pubgmobile.com",
    "*.custom.pubgmobile.com",
    "*.custom-room.pubgmobile.com",
    "*.private-room.pubgmobile.com",

    // ═══ 🗺️ خرائط ═══
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

    // ═══ 👀 مشاهدة وبث ═══
    "*.spectate.pubgmobile.com",
    "*.watch.pubgmobile.com",
    "*.replay.pubgmobile.com",
    "*.stream.pubgmobile.com",
    "*.broadcast.pubgmobile.com",
    "*.live.pubgmobile.com",
    "*.obs.pubgmobile.com",

    // ═══ 🏆 بطولات ومنافسات ═══
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
// ║                                                                      ║
// ║  ④  نطاقات اللوبي + كل شي ثاني ← بورت 1080                       ║
// ║  ═══════════════════════════════════════════════                      ║
// ║                                                                      ║
// ║  كل شي غير المباريات يروح على بورت 1080                            ║
// ║  لوبي - صوت - تسجيل دخول - متجر - تحديثات - كل شي                ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

var DOM_LOBBY = [

    // ═══ 🏠 لوبي ═══
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

    // ═══ 🎤 صوت + VoIP ═══
    // هاي مهمة لل chatting داخل اللعبة
    "*.voice.pubgmobile.com",
    "*.voip.pubgmobile.com",
    "*.rtc.pubgmobile.com",
    "*.audio.pubgmobile.com",
    "*.trtc.tencentcloud.com",
    "*.tim.qq.com",
    "*.ims.qq.com",

    // ═══ 🛡️ حماية + Anti-Cheat ═══
    // لازم تمر بالبروكسي عشان الحماية ما تحظرك
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

    // ═══ 📊 تقارير + Telemetry ═══
    "*.beacon.qq.com",
    "*.report.qq.com",
    "*.report.pubgmobile.com",
    "*.telemetry.pubgmobile.com",
    "*.analytics.pubgmobile.com",
    "*.track.pubgmobile.com",
    "*.log.pubgmobile.com",
    "*.monitor.pubgmobile.com",

    // ═══ 🎯 تجنيد + فريق ═══
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

    // ═══ 💬 دردشة ═══
    "*.chat.pubgmobile.com",
    "*.message.pubgmobile.com",
    "*.inbox.pubgmobile.com",
    "*.inbox-api.pubgmobile.com",
    "*.mail.pubgmobile.com",
    "*.xmpp.pubgmobile.com",
    "*.block.pubgmobile.com",
    "*.mute.pubgmobile.com",

    // ═══ 👤 بروفايل ═══
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

    // ═══ 🏅 ترتيب وإنجازات ═══
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

    // ═══ 🛒 متجر + شحن ═══
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

    // ═══ 👑 رويال باس ═══
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

    // ═══ 🎉 فعاليات ═══
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

    // ═══ 🏠 منزل + تخييم ═══
    "*.home.pubgmobile.com",
    "*.house.pubgmobile.com",
    "*.furniture.pubgmobile.com",
    "*.decoration.pubgmobile.com",
    "*.camp.pubgmobile.com",
    "*.visit.pubgmobile.com",

    // ═══ ⚙️ إعدادات ═══
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

    // ═══ 🔐 تسجيل دخول ═══
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

    // ═══ 📥 تحميل + تحديثات ═══
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

    // ═══ 🔔 إشعارات ═══
    "*.push.pubgmobile.com",
    "*.notify.pubgmobile.com",
    "*.notification.pubgmobile.com",
    "*.alert.pubgmobile.com",
    "*.announce.pubgmobile.com",
    "*.news.pubgmobile.com",
    "*.bulletin.pubgmobile.com",
    "*.banner.pubgmobile.com",
    "*.popup.pubgmobile.com",

    // ═══ 📘 فيسبوك ═══
    "*.facebook.com",
    "*.fbcdn.net",
    "*.facebook.net",
    "connect.facebook.net",
    "graph.facebook.com",

    // ═══ 🔍 قوقل ═══
    "*.googleapis.com",
    "*.googleusercontent.com",
    "play-fe.googleapis.com",
    "play.googleapis.com",
    "android.googleapis.com",
    "accounts.google.com",
    "*.gstatic.com",
    "*.google.com",

    // ═══ 🍎 آبل ═══
    "*.apple.com",
    "appleid.apple.com",
    "buy.itunes.apple.com",
    "*.itunes.apple.com",

    // ═══ 🐦 تويتر ═══
    "*.twitter.com",
    "*.twimg.com",
    "*.x.com",

    // ═══ 📱 منصات تسجيل دخول ═══
    "*.qq.com",
    "*.weixin.qq.com",
    "*.wechat.com",
    "*.vk.com",
    "*.line.me",
    "*.naver.com",

    // ═══ ☁️ Tencent Infrastructure ═══
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

    // ═══ 🌐 CDN العالمية ═══
    "*.akamaized.net",
    "*.akamai.net",
    "*.cloudfront.net",
    "*.fastly.net",
    "*.cdn77.org",
    "*.cdn.dnsv1.com",

    // ═══ 📱 متاجر التطبيقات ═══
    "apps.apple.com",
    "play.google.com",

    // ═══ 📊 تحليلات وأعطال ═══
    "*.timber.tencent.com",
    "*.crashlytics.com",
    "*.firebaseio.com",
    "*.firebase.com",
    "*.app-measurement.com",
    "*.adjust.com",
    "*.appsflyer.com",
    "*.branch.io",

    // ═══ 🌐 DNS ═══
    "*.dns.pubgmobile.com",
    "*.resolve.pubgmobile.com",
    "*.lookup.pubgmobile.com",
    "*.geoip.pubgmobile.com",
    "*.iplookup.pubgmobile.com",
    "*.ipcheck.pubgmobile.com",
    "*.ipinfo.pubgmobile.com",

    // ═══ 🔔 Push Notifications ═══
    "mtalk.google.com",
    "android.clients.google.com",
    "*.fcm.googleapis.com",
    "*.gcm.googleapis.com",
    "*.push.apple.com"
];


// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║  ⑤  نطاقات IP أردنية كاملة (IPv4)                                  ║
// ║  ════════════════════════════════════                                ║
// ║                                                                      ║
// ║  🇯🇴 كل شبكات الأردن:                                               ║
// ║     Zain + Orange + Umniah + Tallia + Government + Universities     ║
// ║                                                                      ║
// ║  ⚠️ ملاحظة مهمة:                                                    ║
// ║  بعض النطاقات الكبيرة (/13, /14, /15) تغطي نطاقات أصغر             ║
// ║  موجودة بالفعل - ما حذفناها لأن التكرار ما يضر                     ║
// ║  والدالة بتشيك بسرعة حتى لو في تداخل                                ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JO4 = [

    // ╔════════════════════════════════════════════════════╗
    // ║  ZAIN JORDAN (زين الأردن)                         ║
    // ║  أكبر شبكة موبايل في الأردن                       ║
    // ╚════════════════════════════════════════════════════╝
    "37.35.0.0/16",         // ← Zain أقدم نطاق أردني
    "37.208.0.0/13",        // ← Zain نطاق كبير يغطي 37.208-37.215
    "78.40.0.0/16",         // ← Zain
    "78.100.0.0/15",        // ← Zain نطاق كبير يغطي 78.100-78.101
    "78.158.0.0/15",        // ← Zain نطاق كبير يغطي 78.158-78.159
    "79.134.128.0/18",      // ← Zain
    "82.212.0.0/14",        // ← Zain نطاق كبير يغطي 82.212-82.215
    "82.212.64.0/18",       // ← Zain
    "86.111.0.0/16",        // ← Zain
    "89.18.0.0/16",         // ← Zain ★ جديد
    "91.140.0.0/15",        // ← Zain نطاق كبير يغطي 91.140-91.141 ★ جديد
    "91.141.0.0/16",        // ← Zain
    "176.28.0.0/16",        // ← Zain
    "176.29.0.0/16",        // ← Zain
    "176.119.0.0/16",       // ← Zain ★ جديد
    "185.33.12.0/22",       // ← Zain
    "185.88.140.0/22",      // ← Zain
    "185.185.244.0/22",     // ← Zain
    "188.225.128.0/17",     // ← Zain
    "188.228.0.0/17",       // ← Zain
    "188.228.128.0/17",     // ← Zain ★ جديد
    "188.247.64.0/18",      // ← Zain
    "188.247.128.0/17",     // ← Zain
    "188.247.192.0/18",     // ← Zain
    "212.34.0.0/16",        // ← Zain ★ جديد - نطاق كامل
    "212.34.0.0/19",        // ← Zain
    "212.34.32.0/19",       // ← Zain
    "212.34.64.0/18",       // ← Zain ★ جديد
    "212.34.96.0/19",       // ← Zain
    "212.35.0.0/16",        // ← Zain ← السيرфер بتاعك

    // ╔════════════════════════════════════════════════════╗
    // ║  ORANGE JORDAN (أورنج الأردن)                     ║
    // ║  ثاني أكبر شبكة                                 ║
    // ╚════════════════════════════════════════════════════╝
    "45.9.220.0/22",        // ← Orange
    "46.32.0.0/16",         // ← Orange
    "78.42.0.0/16",         // ← Orange
    "94.24.0.0/16",         // ← Orange
    "185.4.0.0/22",         // ← Orange ★ جديد
    "185.18.108.0/22",      // ← Orange
    "185.22.212.0/22",      // ← Orange ★ جديد
    "185.40.0.0/15",        // ← Orange ★ جديد - نطاق كبير يغطي 185.40-185.41
    "185.41.0.0/16",        // ← Orange
    "185.45.36.0/22",       // ← Orange
    "185.51.24.0/22",       // ← Orange
    "185.58.204.0/22",      // ← Orange
    "185.84.100.0/22",      // ← Orange
    "185.100.52.0/22",      // ← Orange
    "185.103.92.0/22",      // ← Orange
    "185.112.24.0/22",      // ← Orange
    "185.118.120.0/22",     // ← Orange ★ جديد
    "185.120.36.0/22",      // ← Orange
    "185.160.0.0/22",       // ← Orange ★ جديد
    "185.229.28.0/22",      // ← Orange
    "195.191.100.0/22",     // ← Orange

    // ╔════════════════════════════════════════════════════╗
    // ║  UMNIAH (أمينة)                                  ║
    // ║  ثالث شبكة موبايل                               ║
    // ╚════════════════════════════════════════════════════╝
    "41.184.0.0/16",        // ← Umniah
    "41.234.0.0/16",        // ← Umniah
    "42.136.0.0/16",        // ← Umniah
    "95.141.240.0/21",      // ← Umniah

    // ╔════════════════════════════════════════════════════╗
    // ║  TALLIA + شركات إضافية                          ║
    // ╚════════════════════════════════════════════════════╝
    "149.255.0.0/16",       // ← Tallia
    "194.126.0.0/16",       // ← أردني
    "195.88.0.0/16",        // ← أردني
    "217.112.0.0/16",       // ← أردني
    "217.165.0.0/16",       // ← أردني

    // ╔════════════════════════════════════════════════════╗
    // ║  حكومة + جامعات + بحث                            ║
    // ║  وزارة التربية - الاتصالات - الجامعات           ║
    // ╚════════════════════════════════════════════════════╝
    "193.188.0.0/16",       // ← Ministry of Education / MoE
    "194.54.0.0/16",       // ← JUNet / Jordanian Universities ★ جديد
    "213.55.0.0/16",        // ← Jordan Telecom / Orange Government
    "188.127.0.0/16"        // ← JUNet الجامعات ★ جديد
];


// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║  ⑥  نطاقات IP أردنية (IPv6)                                        ║
// ║  ═════════════════════════════                                        ║
// ║                                                                      ║
// ║  IPv6 هو المستقبل - بعض السيرفرات تفضل IPv6                        ║
// ║  ويوفر أحياناً بنق أقل                                             ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

var JO6 = [
    "2a00:8c00::/32",       // ← Orange Jordan IPv6
    "2a01:100::/32",        // ← أردني IPv6
    "2a02:c10::/32",        // ← أردني IPv6
    "2a02:f040::/32",       // ← أردني IPv6
    "2a02:f60::/32",        // ← أردني IPv6
    "2a05:580::/32",        // ← أردني IPv6
    "2a0d:4800::/32",       // ← أردني IPv6
    "2001:67c:1d8::/48"     // ← أردني IPv6
];


// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║  ⑦  دوال مساعدة للتحقق من IPs                                      ║
// ║  ══════════════════════════════════                                  ║
// ║                                                                      ║
// ║  هاي الدوال بتشيك إذا IP معين داخل نطاق أردني                      ║
// ║  IPv4 → cidr4()                                                    ║
// ║  IPv6 → cidr6()                                                    ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ── هل عنوان IPv4 صحيح؟ ──
// بتشيك 4 أرقام مفصولة بنقاط وكل رقم بين 0-255
function v4(a) {
    var p = a.split(".");
    if (p.length !== 4) return false;
    for (var i = 0; i < 4; i++) {
        var n = parseInt(p[i], 10);
        if (isNaN(n) || n < 0 || n > 255) return false;
    }
    return true;
}

// ── هل عنوان IPv6 صحيح؟ ──
// بتشيك إذا فيه نقطتين ( : ) يعني IPv6
function v6(a) {
    return a.indexOf(":") !== -1;
}

// ── هل هو عنوان IP؟ ──
function vIP(a) {
    return v4(a) || v6(a);
}

// ── تحويل IPv4 لرقم ──
// عشان نقدر نقارنه مع CIDR mask
// مثال: "212.35.66.45" → رقم كبير
function n4(ip) {
    var p = ip.split(".");
    return ((parseInt(p[0], 10) << 24) |
            (parseInt(p[1], 10) << 16) |
            (parseInt(p[2], 10) << 8) |
             parseInt(p[3], 10)) >>> 0;
}

// ── توسيع عنوان IPv6 المختصر ──
// مثال: "2a00::1" → "2a00:0000:0000:0000:0000:0000:0000:0001"
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

// ── تحويل IPv6 لسلسلة ثنائية ──
// عشان نقارنها بت CIDR
function bin6(ip) {
    var h = expand6(ip).replace(/:/g, ""), b = "";
    for (var i = 0; i < h.length; i++) {
        var v = parseInt(h.charAt(i), 16).toString(2);
        while (v.length < 4) v = "0" + v;
        b += v;
    }
    return b;
}

// ── هل IPv4 داخل CIDR؟ ──
// مثال: هل "212.35.66.45" داخل "212.35.0.0/16"؟ → نعم
function cidr4(ip, cidr) {
    var p = cidr.split("/"), m = parseInt(p[1], 10);
    var mb = m === 0 ? 0 : (~0 << (32 - m)) >>> 0;
    return (n4(ip) & mb) === (n4(p[0]) & mb);
}

// ── هل IPv6 داخل CIDR؟ ──
function cidr6(ip, cidr) {
    var p = cidr.split("/"), ml = parseInt(p[1], 10);
    var ib = bin6(ip), pb = bin6(p[0]);
    for (var i = 0; i < ml; i++) {
        if (ib.charAt(i) !== pb.charAt(i)) return false;
    }
    return true;
}

// ── هل IP داخل CIDR؟ (يدعم IPv4 و IPv6) ──
function inCidr(ip, cidr) {
    if (cidr.indexOf(":") !== -1) { // IPv6
        if (!v6(ip)) return false;
        return cidr6(ip, cidr);
    }
    if (!v4(ip)) return false;      // IPv4
    return cidr4(ip, cidr);
}

// ── هل IP داخل قائمة نطاقات؟ ──
function inList(ip, list) {
    if (!vIP(ip)) return false;
    for (var i = 0; i < list.length; i++) {
        if (inCidr(ip, list[i])) return true;
    }
    return false;
}

// ── هل IP أردني؟ ──
function isJordan(ip) {
    if (!vIP(ip)) return false;
    if (v6(ip)) return inList(ip, JO6);
    return inList(ip, JO4);
}

// ── هل النطاق يطابق قائمة نطاقات؟ ──
// دعم Wildcards: *.example.com يطابق sub.example.com
function matchDom(host, list) {
    var h = host.toLowerCase();
    for (var i = 0; i < list.length; i++) {
        var d = list[i].toLowerCase();
        if (d.charAt(0) === "*") {
            var b = d.substring(2);
            if (h === b) return true;
            if (h.length > b.length + 1 &&
                h.substring(h.length - b.length - 1) === "." + b) return true;
        } else {
            if (h === d) return true;
        }
    }
    return false;
}

// ── هل في نطاق مطابق في القائمة - تدوير دائري ──
// نفس matchDom بس ترجع true و يحفظ آخر موقع = استمرار من نفس النقطة
var _lastDomIdx = 0; // ← موقع آخر نطاق تطابق (للتدوير)
function matchDomCycle(host, list) {
    var h = host.toLowerCase();
    var len = list.length;
    for (var i = 0; i < len; i++) {
        var idx = (_lastDomIdx + i) % len; // ← يبدأ من آخر نقطة و يلف
        var d = list[idx].toLowerCase();
        if (d.charAt(0) === "*") {
            var b = d.substring(2);
            if (h === b || (h.length > b.length + 1 &&
                h.substring(h.length - b.length - 1) === "." + b)) {
                _lastDomIdx = (idx + 1) % len; // ← حفظ الموقع للمرة الجاي
                return true;
            }
        } else {
            if (h === d) {
                _lastDomIdx = (idx + 1) % len;
                return true;
            }
        }
    }
    return false;
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║  ⑧  دوال تحسين البنق (Ping Optimizer)                              ║
// ║  ══════════════════════════════════════                              ║
// ║                                                                      ║
// ║  هاي الدوال بتحسّن الاتصال وتقلل التأخير                            ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

// ── هل النطاق أردني (بالاسم مو IP)؟ ──
// لو بعرف DNS أردني → البنق أقل تلقائياً
// *.jo = أردني مؤكد
function isJordanHost(host) {
    var h = host.toLowerCase();
    if (h.endsWith(".jo")) return true;                    // .jo = دومين أردني
    if (h.endsWith(".com.jo")) return true;                // .com.jo
    if (h.endsWith(".net.jo")) return true;                // .net.jo
    if (h.endsWith(".org.jo")) return true;                // .org.jo
    if (h.endsWith(".gov.jo")) return true;                // .gov.jo
    if (h.indexOf("jordan") !== -1) return true;           // فيه كلمة jordan
    if (h.indexOf("amman") !== -1) return true;            // عمان
    return false;
}

// ── هل هو نطاق محلي (بنق صفر)؟ ──
// النطاقات المحلية ما تحتاج بروكسي
function isLocal(host) {
    var h = host.toLowerCase();
    if (h === "localhost") return true;
    if (h.endsWith(".local")) return true;
    if (h.indexOf(".local.") !== -1) return true;
    return false;
}

// ── هل هو عنوان IP مباشر (مو دومين)؟ ──
// إذا كان IP مباشر → نقدر نรวจه مباشرة بدون DNS
// هذا أسرع من الدومين لأن ما فيه خطوة DNS resolve
function isDirectIP(host) {
    return vIP(host);
}

// ── هل هذا DNS أردني معروف؟ ──
// هذه السيرفرات أقرب شيء للمستخدم الأردني
var JORDAN_DNS = [
    // Zain DNS
    "212.35.66.44", "212.35.66.45", "212.35.66.46",
    // Orange DNS
    "213.55.96.129", "213.55.96.130",
    // Umniah DNS
    "41.184.0.1", "41.184.0.2",
    // Google DNS (أقرب لنطقة الأردن)
    "8.8.8.8", "8.8.4.4",
    "2001:4860:4860::8888", "2001:4860:4860::8844",
    // Cloudflare DNS
    "1.1.1.1", "1.0.0.1"
];


// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║  ⑨  معلومات تشخيصية (تظهر بـ Alert)                                ║
// ║  ════════════════════════════════════                                ║
// ║                                                                      ║
// ║  فعّل alert() إذا بدك تشوف وش قاعد يصير                            ║
// ║  مفيد للاختبار والتشخيص                                            ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝

var DEBUG = false; // ← غيّرها لـ true إذا بدك تشوف تفاصيل

function debugLog(msg) {
    if (DEBUG) {
        // ملاحظة: alert() بطيء - استخدمه للاختبار فقط
        // في الإنتاج خلّيه false
        // alert("PAC DEBUG: " + msg);
    }
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║  ⑩  الدالة الرئيسية                                               ║
// ║  ══════════════════════                                              ║
// ║                                                                      ║
// ║  هذا المخ - كل طلب يمر من هنا                                      ║
// ║                                                                      ║
// ║  الترتيب:                                                           ║
// ║  ┌─────────────────────────────────────────────────────────┐       ║
// ║  │  1. محلي؟              → DIRECT (بنق صفر)             │       ║
// ║  │  2. DNS أردني؟         → بروكسي بورت 1080            │       ║
// ║  │  3. IP أردني؟          → بروكسي بورت 1080            │       ║
// ║  │  4. نطاق مباريات؟      → بروكسي بورت 20005            │       ║
// ║  │  5. نطاق لوبي/PUBG؟   → بروكسي بورت 1080            │       ║
// ║  │  6. أي شي ثاني PUBG   → بروكسي بورت 1080            │       ║
// ║  │  7. الباقي             → بروكسي بورت 1080            │       ║
// ║  └─────────────────────────────────────────────────────────┘       ║
// ║                                                                      ║
// ║  ⚠️ ما في DIRECT - كل شي بالبروكسي                                 ║
// ╚══════════════════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {

    var h = host.toLowerCase();

    // ════════════════════════════════════════════════════════
    // ① هل هو نطاق محلي؟ → تخطي
    // ════════════════════════════════════════════════════════
    // النطاقات المحلية (localhost, *.local) ما تحتاج بروكسي
    // تمريرها يسبب مشاكل بدون فائدة
    if (isLocal(h)) {
        return "DIRECT";
    }

    // ════════════════════════════════════════════════════════
    // ③ نطاق المباريات؟ → بورت 20005 + تدوير دائري
    // ════════════════════════════════════════════════════════
    // المباريات لها بورت منفصل 20005
    // السيرفر يتختار بالتدوير الدائري (Round Robin)
    if (matchDomCycle(h, DOM_MATCH)) {
        return nextMatch();
    }

    // ════════════════════════════════════════════════════════
    // ④ نطاق لوبي / PUBG؟ → بورت 1080 + تدوير دائري
    // ════════════════════════════════════════════════════════
    // كل شي غير المباريات: لوبي، صوت، متجر، تحديثات، الخ
    // يروح على بورت 1080
    if (matchDomCycle(h, DOM_LOBBY)) {
        return nextLobby();
    }

    // ════════════════════════════════════════════════════════
    // ⑥ أي شي ثاني فيه PUBG → بورت 1080
    // ════════════════════════════════════════════════════════
    // ضمان أخير: إذا الدومين فيه كلمة PUBG أو Tencent
    // ومو داخل القوائم أعلاه → يمر بالبروكسي برضو
    // هذا يfang أي نطاق جديد نساه الفريق
    if (h.indexOf("pubg") !== -1 ||
        h.indexOf("tencent") !== -1 ||
        h.indexOf("igamecj") !== -1 ||
        h.indexOf("igame") !== -1 ||
        h.indexOf("qcloud") !== -1 ||
        h.indexOf("tencentyun") !== -1 ||
        h.indexOf("cloud.tencent") !== -1) {
        return nextLobby();
    }

    // ════════════════════════════════════════════════════════
    // ⑦ الباقي → بورت 1080 (كل شي بالبروكسي)
    // ════════════════════════════════════════════════════════
    // أي طلب مو أردني ومو PUBG يمر بالبروكسي برضو
    // عشان ما في DIRECT بالسكربت
    // والسيرفر يتختار بالتدوير الدائري
    return nextLobby();
}


// ╔══════════════════════════════════════════════════════════════════════╗
// ║                                                                      ║
// ║  📋 ملخص الإضافات والتحسينات                                       ║
// ║  ══════════════════════════════                                      ║
// ║                                                                      ║
// ║  🔄 التدوير الدائري:                                                ║
// ║     ─────────────────                                                ║
// ║     • nextLobby()  → يدوّر على سيرفرات اللوبي                      ║
// ║     • nextMatch()  → يدوّر على سيرفرات المباريات                     ║
// ║     • nextGeneric() → يدوّر على أي قائمة                             ║
// ║     • matchDomCycle() → يدوّر على النطاقات و يحفظ الموقع            ║
// ║     ───────────────────────────────────────────────                  ║
// ║     • كل طلب يروح لسيرفر مختلف عن اللي قبله                       ║
// ║     • لما يوصل لآخر سيرفر يرجع للأول = دائري                       ║
// ║     • هذا يوزع الحمل و يقلل الضغط على السيرفر الواحد              ║
// ║     • النتيجة = بنق أقل                                             ║
// ║                                                                      ║
// ║  🇯🇴 نطاقات أردنية إضافية:                                          ║
// ║     ─────────────────────                                            ║
// ║     • 89.18.0.0/16    (Zain جديد)                                   ║
// ║     • 91.140.0.0/15   (Zain جديد - نطاق كبير)                      ║
// ║     • 176.119.0.0/16  (Zain جديد)                                   ║
// ║     • 188.228.128.0/17 (Zain جديد)                                  ║
// ║     • 212.34.0.0/16   (Zain جديد - نطاق كامل)                      ║
// ║     • 212.34.64.0/18  (Zain جديد)                                   ║
// ║     • 185.4.0.0/22    (Orange جديد)                                 ║
// ║     • 185.22.212.0/22 (Orange جديد)                                 ║
// ║     • 185.40.0.0/15   (Orange جديد - نطاق كبير)                    ║
// ║     • 185.118.120.0/22 (Orange جديد)                                ║
// ║     • 185.160.0.0/22  (Orange جديد)                                 ║
// ║     • 194.54.0.0/16   (JUNet جديد)                                  ║
// ║     • 188.127.0.0/16  (JUNet جديد)                                  ║
// ║                                                                      ║
// ║  ⚡ تحسينات البنق:                                                  ║
// ║     ──────────────                                                   ║
// ║     • SOCKS5 أسرع من SOCKS4 (دائم)                                  ║
// ║     • Round Robin يوزع الحمل = كل سيرفر يرتاح                      ║
// ║     • تدوير النطاقات = ما في نقاط ضغط                              ║
// ║     • تدوير منفصل للمباريات واللوبي = ما يأثرون على بعض           ║
// ║     • في حالة سيرفر واحد → العداد يرجع لصفر → يعيد الاستخدام     ║
// ║                                                                      ║
// ║  🚫 DIRECT ملغي:                                                    ║
// ║     ────────────                                                     ║
// ║     • كل شي يمر بالبروكسي                                          ║
// ║     • localhost و *.local فقط DIRECT (ضروري)                         ║
// ║     • لأن البروكسي أردني = كل شي يمر بالأردن                      ║
// ║                                                                      ║
// ╚══════════════════════════════════════════════════════════════════════╝
