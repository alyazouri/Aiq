// ╔══════════════════════════════════════════════════════════════╗
// ║     🇯🇴 PUBG MOBILE - JORDAN ROUND ROBIN PROXY              ║
// ║                                                              ║
// ║  🔄 كل الطلبات تمر بالبروكسي بالتناوب                      ║
// ║  🚫 بدون DIRECT - كل شي بالبروكسي                          ║
// ║  🔌 البورت 20005 فقط                                        ║
// ║  🌐 IPv4 + IPv6 بالتناوب الدوري                             ║
// ╚══════════════════════════════════════════════════════════════╝


var PORT = "20005";


// ╔══════════════════════════════════════════════════════════════╗
// ║  ② كل النطاقات الأردنية IPv4                               ║
// ║     بالتناوب الدوري - كل طلب ياخذ IP مختلف                 ║
// ╚══════════════════════════════════════════════════════════════╝

var JO4 = [
    "37.35.0.0/16",
    "37.208.0.0/13",
    "78.40.0.0/16",
    "78.100.0.0/15",
    "78.158.0.0/15",
    "79.134.128.0/18",
    "82.212.0.0/14",
    "82.212.64.0/18",
    "86.111.0.0/16",
    "91.141.0.0/16",
    "176.28.0.0/16",
    "176.29.0.0/16",
    "185.33.12.0/22",
    "185.88.140.0/22",
    "185.185.244.0/22",
    "188.225.128.0/17",
    "188.228.0.0/17",
    "188.247.64.0/18",
    "188.247.128.0/17",
    "188.247.192.0/18",
    "212.35.0.0/16",
    "212.34.0.0/16",
    "212.34.0.0/19",
    "212.34.32.0/19",
    "212.34.64.0/18",
    "212.34.96.0/19",
    "46.32.0.0/16",
    "78.42.0.0/16",
    "94.24.0.0/16",
    "185.18.108.0/22",
    "185.45.36.0/22",
    "185.51.24.0/22",
    "185.84.100.0/22",
    "185.100.52.0/22",
    "185.103.92.0/22",
    "185.112.24.0/22",
    "185.120.36.0/22",
    "185.229.28.0/22",
    "195.191.100.0/22",
    "45.9.220.0/22",
    "185.58.204.0/22",
    "41.184.0.0/16",
    "41.234.0.0/16",
    "42.136.0.0/16",
    "95.141.240.0/21",
    "193.188.0.0/16",
    "194.54.0.0/16",
    "194.126.0.0/16",
    "195.88.0.0/16",
    "213.55.0.0/16",
    "149.255.0.0/16",
    "217.112.0.0/16",
    "217.165.0.0/16"
];


// ╔══════════════════════════════════════════════════════════════╗
// ║  ③ كل النطاقات الأردنية IPv6                               ║
// ║     بالتناوب الدوري مع IPv4                                 ║
// ╚══════════════════════════════════════════════════════════════╝

var JO6 = [
    "2a01:9700::/29",
    "2a00:8c00::/32",
    "2a02:f040::/32",
    "2a01:100::/32",
    "2a05:580::/32",
    "2a02:f60::/32",
    "2a0d:4800::/32",
    "2001:67c:1d8::/48",
    "2a02:c10::/32"
];


// ╔══════════════════════════════════════════════════════════════╗
// ║  ④ كل نطاقات PUBG (IPv4 + IPv6)                            ║
// ║     كل شي يمر بالبروكسي بالتناوب                           ║
// ╚══════════════════════════════════════════════════════════════╝

var D_PUBG = [
    // ═══ 🎯 تجنيد ═══
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
    "*.community.pubgmobile.com",
    "*.nearby.pubgmobile.com",
    "*.recommend.pubgmobile.com",
    "*.recommendation.pubgmobile.com",
    "*.suggest.pubgmobile.com",
    "*.suggestion.pubgmobile.com",
    "*.auto-match.pubgmobile.com",
    "*.quick-team.pubgmobile.com",
    "*.find-team.pubgmobile.com",
    "*.find-player.pubgmobile.com",
    "*.find-squad.pubgmobile.com",
    "*.join.pubgmobile.com",
    "*.request.pubgmobile.com",
    "*.pending.pubgmobile.com",
    "*.online.pubgmobile.com",
    "*.players.pubgmobile.com",
    "*.player-list.pubgmobile.com",
    "*.active-players.pubgmobile.com",
    "*.player-search.pubgmobile.com",
    "*.search.pubgmobile.com",
    "*.discover.pubgmobile.com",
    "*.region-filter.pubgmobile.com",
    "*.country-filter.pubgmobile.com",
    "*.location.pubgmobile.com",
    "*.geolocation.pubgmobile.com",
    "*.locale.pubgmobile.com",
    "*.language-match.pubgmobile.com",
    "*.visibility.pubgmobile.com",
    "*.presence.pubgmobile.com",
    "*.status.pubgmobile.com",
    "*.available.pubgmobile.com",
    "*.looking.pubgmobile.com",
    "*.lfg.pubgmobile.com",
    "*.lfp.pubgmobile.com",
    "*.add-friend.pubgmobile.com",
    "*.accept.pubgmobile.com",
    "*.decline.pubgmobile.com",
    "*.cancel.pubgmobile.com",
    "*.leave.pubgmobile.com",
    "*.kick.pubgmobile.com",
    "*.promote.pubgmobile.com",
    "*.captain.pubgmobile.com",
    "*.leader.pubgmobile.com",

    // ═══ 🌍 منطقة ═══
    "*.region.pubgmobile.com",
    "*.server-select.pubgmobile.com",
    "*.server-list.pubgmobile.com",
    "*.best-server.pubgmobile.com",
    "*.optimal-server.pubgmobile.com",
    "*.nearest-server.pubgmobile.com",
    "*.local-server.pubgmobile.com",
    "*.home-server.pubgmobile.com",
    "*.ping-test.pubgmobile.com",
    "*.latency.pubgmobile.com",
    "*.network-test.pubgmobile.com",
    "*.speed-test.pubgmobile.com",
    "*.connection-test.pubgmobile.com",
    "*.queue.pubgmobile.com",

    // ═══ 🎮 مباريات ═══
    "*.match.pubgmobile.com",
    "*.matchmaking.pubgmobile.com",
    "*.game.pubgmobile.com",
    "*.gameserver.pubgmobile.com",
    "*.server.pubgmobile.com",
    "*.gs.pubgmobile.com",
    "*.gslb.pubgmobile.com",
    "*.dispatch.pubgmobile.com",
    "*.entry.pubgmobile.com",
    "*.connect.pubgmobile.com",
    "*.gateway.pubgmobile.com",
    "*.relay.pubgmobile.com",
    "*.session.pubgmobile.com",
    "*.netcode.pubgmobile.com",
    "*.tcp.pubgmobile.com",
    "*.udp.pubgmobile.com",
    "*.port.pubgmobile.com",
    "*.ingame.pubgmobile.com",
    "*.battle.pubgmobile.com",
    "*.play.pubgmobile.com",
    "*.playing.pubgmobile.com",
    "*.ingame-server.pubgmobile.com",
    "*.game-connect.pubgmobile.com",
    "*.game-session.pubgmobile.com",
    "*.match-server.pubgmobile.com",
    "*.battle-server.pubgmobile.com",
    "*.play-server.pubgmobile.com",
    "*.game-gateway.pubgmobile.com",
    "*.game-relay.pubgmobile.com",
    "*.room.pubgmobile.com",
    "*.custom.pubgmobile.com",
    "*.arena.pubgmobile.com",
    "*.tdm.pubgmobile.com",
    "*.teamdeathmatch.pubgmobile.com",
    "*.war.pubgmobile.com",
    "*.payload.pubgmobile.com",
    "*.evoground.pubgmobile.com",
    "*.zombie.pubgmobile.com",
    "*.metro.pubgmobile.com",
    "*.infection.pubgmobile.com",
    "*.domination.pubgmobile.com",
    "*.gun-game.pubgmobile.com",
    "*.ranked-match.pubgmobile.com",
    "*.classic-match.pubgmobile.com",
    "*.arcade-match.pubgmobile.com",
    "*.erangel.pubgmobile.com",
    "*.miramar.pubgmobile.com",
    "*.sanhok.pubgmobile.com",
    "*.vikendi.pubgmobile.com",
    "*.livik.pubgmobile.com",
    "*.nusa.pubgmobile.com",
    "*.karakin.pubgmobile.com",
    "*.aftermath.pubgmobile.com",
    "*.spectate.pubgmobile.com",
    "*.watch.pubgmobile.com",
    "*.replay.pubgmobile.com",
    "*.stream.pubgmobile.com",
    "*.broadcast.pubgmobile.com",
    "*.tournament.pubgmobile.com",
    "*.esports.pubgmobile.com",
    "*.competitive.pubgmobile.com",
    "*.leaderboard.pubgmobile.com",

    // ═══ 🏠 لوبي ═══
    "*.pubgmobile.com",
    "*.igamecj.com",
    "*.igame.com",
    "*.cdn.pubgmobile.com",
    "*.res.pubgmobile.com",
    "*.config.pubgmobile.com",
    "*.ui.pubgmobile.com",
    "*.api.pubgmobile.com",
    "*.proxy.pubgmobile.com",
    "*.lobby.pubgmobile.com",
    "*.lobby-api.pubgmobile.com",
    "*.homepage.pubgmobile.com",
    "*.main.pubgmobile.com",
    "*.preload.pubgmobile.com",
    "*.init.pubgmobile.com",

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

    // ═══ 🏅 ترتيب ═══
    "*.rank.pubgmobile.com",
    "*.ranking.pubgmobile.com",
    "*.season.pubgmobile.com",
    "*.tier.pubgmobile.com",
    "*.achievement.pubgmobile.com",
    "*.milestone.pubgmobile.com",
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

    // ═══ 🛒 متجر ═══
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

    // ═══ 🏠 منزل ═══
    "*.home.pubgmobile.com",
    "*.house.pubgmobile.com",
    "*.furniture.pubgmobile.com",
    "*.decoration.pubgmobile.com",
    "*.camp.pubgmobile.com",
    "*.visit.pubgmobile.com",
    "*.theme.pubgmobile.com",

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

    // ═══ 🛡️ حماية ═══
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
    "*.safetynet.pubgmobile.com",
    "*.attest.pubgmobile.com",

    // ═══ 📥 تحميل ═══
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

    // ═══ 📊 تقارير ═══
    "*.beacon.qq.com",
    "*.report.qq.com",
    "*.report.pubgmobile.com",
    "*.telemetry.pubgmobile.com",
    "*.analytics.pubgmobile.com",
    "*.track.pubgmobile.com",
    "*.log.pubgmobile.com",
    "*.monitor.pubgmobile.com",
    "*.sentry.io",
    "*.crashlytics.com",
    "*.firebaseio.com",
    "*.firebase.com",
    "*.app-measurement.com",
    "*.adjust.com",
    "*.appsflyer.com",
    "*.branch.io",
    "*.timber.tencent.com",

    // ═══ 🎤 صوت ═══
    "*.voice.pubgmobile.com",
    "*.voip.pubgmobile.com",
    "*.rtc.pubgmobile.com",
    "*.audio.pubgmobile.com",
    "*.call.pubgmobile.com",
    "*.trtc.tencentcloud.com",
    "*.tim.qq.com",
    "*.ims.qq.com",

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

    // ═══ 📱 منصات ═══
    "*.qq.com",
    "*.weixin.qq.com",
    "*.wechat.com",
    "*.vk.com",
    "*.line.me",
    "*.naver.com",

    // ═══ ☁️ Tencent / CDN ═══
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

    // ═══ 📱 متاجر ═══
    "apps.apple.com",
    "play.google.com",

    // ═══ 🌐 DNS ═══
    "*.dns.pubgmobile.com",
    "*.resolve.pubgmobile.com",
    "*.lookup.pubgmobile.com",
    "*.geoip.pubgmobile.com",
    "*.iplookup.pubgmobile.com",
    "*.ipcheck.pubgmobile.com",
    "*.ipinfo.pubgmobile.com",

    // ═══ 🔔 Push ═══
    "mtalk.google.com",
    "android.clients.google.com",
    "*.fcm.googleapis.com",
    "*.gcm.googleapis.com",
    "*.push.apple.com",

    // ═══ 🌐 الموقع الرئيسي ═══
    "pubgmobile.com",
    "www.pubgmobile.com"
];


// ╔══════════════════════════════════════════════════════════════╗
// ║           ⑤ دوال مساعدة IPv4 + IPv6                        ║
// ╚══════════════════════════════════════════════════════════════╝

function is6(a){return a.indexOf(":")!==-1}

function is4(a){
    var p=a.split(".");
    if(p.length!==4)return false;
    for(var i=0;i<4;i++){
        var n=parseInt(p[i],10);
        if(isNaN(n)||n<0||n>255)return false;
    }
    return true;
}

function isIP(h){return is4(h)||is6(h)}

function n4(ip){
    var p=ip.split(".");
    return((parseInt(p[0],10)<<24)|(parseInt(p[1],10)<<16)|(parseInt(p[2],10)<<8)|parseInt(p[3],10))>>>0;
}

function exp6(ip){
    var s=ip.toLowerCase();
    var zi=s.indexOf("%");
    if(zi!==-1)s=s.substring(0,zi);
    var pts=s.split(":");
    var db=-1;
    for(var i=0;i<pts.length;i++){
        if(pts[i]===""&&i>0&&i<pts.length-1)db=i;
    }
    var e=[];
    if(db!==-1){
        for(var i=0;i<db;i++){if(pts[i]!=="")e.push(pts[i])}
        var c=0;
        for(var i=0;i<pts.length;i++){if(pts[i]!=="")c++}
        var f=8-c;
        for(var i=0;i<f;i++)e.push("0000");
        for(var i=db+1;i<pts.length;i++){if(pts[i]!=="")e.push(pts[i])}
    }else{e=pts}
    while(e.length<8)e.push("0000");
    var r=[];
    for(var i=0;i<8;i++){
        var p=e[i]||"0";
        while(p.length<4)p="0"+p;
        r.push(p);
    }
    return r.join(":");
}

function b6(ip){
    var h=exp6(ip).replace(/:/g,"");
    var b="";
    for(var i=0;i<h.length;i++){
        var v=parseInt(h.charAt(i),16).toString(2);
        while(v.length<4)v="0"+v;
        b+=v;
    }
    return b;
}

function c4(ip,cidr){
    var p=cidr.split("/");
    var m=parseInt(p[1],10);
    var mb=m===0?0:(~0<<(32-m))>>>0;
    return(n4(ip)&mb)===(n4(p[0])&mb);
}

function c6(ip,cidr){
    var p=cidr.split("/");
    var ml=parseInt(p[1],10);
    var ib=b6(ip);
    var pb=b6(p[0]);
    for(var i=0;i<ml;i++){
        if(ib.charAt(i)!==pb.charAt(i))return false;
    }
    return true;
}

function inC(ip,cidr){
    if(cidr.indexOf(":")!==-1){
        if(!is6(ip))return false;
        return c6(ip,cidr);
    }
    if(!is4(ip))return false;
    return c4(ip,cidr);
}

function inL(ip,list){
    if(!isIP(ip))return false;
    for(var i=0;i<list.length;i++){
        if(inC(ip,list[i]))return true;
    }
    return false;
}

function isJo(ip){
    if(!isIP(ip))return false;
    if(is6(ip))return inL(ip,JO6);
    return inL(ip,JO4);
}

function dM(host,list){
    var h=host.toLowerCase();
    for(var i=0;i<list.length;i++){
        var d=list[i].toLowerCase();
        if(d.charAt(0)==="*"){
            var b=d.substring(2);
            if(h===b)return true;
            if(h.length>b.length+1&&h.substring(h.length-b.length-1)==="."+b)return true;
        }else{if(h===d)return true}
    }
    return false;
}


// ╔══════════════════════════════════════════════════════════════╗
// ║      ⑥ Round Robin - بالتناوب الدوري                       ║
// ║                                                              ║
// ║  الدائرة: كل طلب ياخذ IP مختلف                             ║
// ║  بعد ما يخلص كل IPs يرجع للأول                             ║
// ║  كل الـ 57 نطاق IPv4 + 8 نطاق IPv6                         ║
// ╚══════════════════════════════════════════════════════════════╝

var _rr = 0;

// استخراج IP من النطاق (المضيف)
function cidrIP(cidr){
    return cidr.split("/")[0];
}

// توليد بروكسي بورت 20005
function mkP(ip){
    return "SOCKS5 " + ip + ":" + PORT + "; SOCKS " + ip + ":" + PORT;
}

// توليد سلسلة ت fallback كاملة
function mkChain(){
    var c = [];
    for(var i = 0; i < JO4.length; i++){
        c.push(mkP(cidrIP(JO4[i])));
    }
    for(var i = 0; i < JO6.length; i++){
        c.push(mkP(cidrIP(JO6[i])));
    }
    return c.join("; ");
}

// دوران دائري - كل طلب ياخذ IP مختلف
function rr(){
    var total = JO4.length + JO6.length;
    var idx = _rr % total;
    _rr++;

    if(idx < JO4.length){
        return mkP(cidrIP(JO4[idx]));
    }else{
        return mkP(cidrIP(JO6[idx - JO4.length]));
    }
}

// بروكسي أساسي + كل الباقي كـ fallback
var JO_ALL = rr() + "; " + mkChain();


// ╔══════════════════════════════════════════════════════════════╗
// ║         ⑧ الدالة الرئيسية                                  ║
// ║                                                              ║
// ║  ✅ كل شي يمر بالبروكسي                                    ║
// ║  ✅ بورت 20005 فقط                                          ║
// ║  ✅ Round Robin بالتناوب الدوري                             ║
// ║  ✅ بدون DIRECT                                             ║
// ║  ✅ fallback كامل على كل النطاقات                           ║
// ╚══════════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {

    var h = host.toLowerCase();

    // ═══ ① نطاق PUBG → Round Robin ═══
    if (dM(h, D_PUBG)) return JO_ALL;

    // ═══ ② IP أردني → Round Robin ═══
    if (isJo(host)) return JO_ALL;

    // ═══ ③ ضمان - أي شي PUBG ═══
    if (h.indexOf("pubg") !== -1 ||
        h.indexOf("tencent") !== -1 ||
        h.indexOf("igamecj") !== -1 ||
        h.indexOf("igame") !== -1 ||
        h.indexOf("qcloud") !== -1 ||
        h.indexOf("tencentyun") !== -1 ||
        h.indexOf("cloud.tencent") !== -1) {
        return JO_ALL;
    }

    // ═══ ④ الباقي كمان → Round Robin ═══
    //    لأنك قلت البروكسي سريع وما في DIRECT
    return JO_ALL;
}
