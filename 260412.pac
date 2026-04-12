// ================================================================
//
//   🎮 PUBG Mobile - JORDAN ONLY PAC
//   🇯🇴 نطاقات أردنية أدق + بروكسي أساسي واحتياطي
//
//   Version: 10.1 - JORDAN CLEAN
//
//   🏠 اللوبي      → 46.185.131.218:443
//   🎮 المباريات   → 46.185.131.218:20001
//   🏠 اللوبي 2    → 212.35.66.45:1080
//   🎮 المباريات 2 → 212.35.66.45:20005
//   🎤 الصوت       → DIRECT
//   🛡️ الحماية     → DIRECT
//
// ================================================================


// ╔══════════════════════════════════════════════════════════╗
// ║                    ① الإعدادات                           ║
// ╚══════════════════════════════════════════════════════════╝

var PX1 = "46.185.131.218";
var PX2 = "212.35.66.45";

var LOB = "SOCKS5 " + PX1 + ":443; SOCKS " + PX1 + ":443; SOCKS5 " + PX2 + ":1080; SOCKS " + PX2 + ":1080; DIRECT";
var MAT = "SOCKS5 " + PX1 + ":20001; SOCKS " + PX1 + ":20001; SOCKS5 " + PX2 + ":20005; SOCKS " + PX2 + ":20005; DIRECT";
var DIR = "DIRECT";


// ╔══════════════════════════════════════════════════════════╗
// ║   ② سيرفرات المباريات المخصصة                           ║
// ╚══════════════════════════════════════════════════════════╝

// تم حذف أي نطاقات خارجية/غير أردنية من لائحة السيرفرات اليدوية
// وسيبقى التوجيه للمباريات عبر دومينات D_MAT
var MS4 = [];
var MS6 = [];


// ╔══════════════════════════════════════════════════════════╗
// ║          ③ نطاقات أردنية IPv4                           ║
// ╚══════════════════════════════════════════════════════════╝

// نسخة محافظة ودقيقة أكثر من القائمة السابقة
// تركيز على شبكات أردنية واضحة ومرتفعة الثقة
var JO4 = [
    // ── Zain Jordan / AS48832 ──
    "176.29.0.0/16",
    "80.90.168.0/24",
    "80.90.169.0/24",
    "80.90.170.0/24",
    "80.90.171.0/24",

    // ── Orange / Jordan Telecom / AS8697 ──
    "213.139.32.0/19",

    // ── Jordan Data Communications / AS8376 ──
    "37.202.64.0/18",
    "149.200.128.0/17"
];


// ╔══════════════════════════════════════════════════════════╗
// ║          ④ نطاقات أردنية IPv6                           ║
// ╚══════════════════════════════════════════════════════════╝

var JO6 = [
    // ── Zain Jordan IPv6 ──
    "2a03:6b01::/34",
    "2a03:6b01:4000::/34",
    "2a03:6b01:8000::/34",

    // ── Jordan Data Communications IPv6 ──
    "2a01:9700:5300::/40",
    "2a01:9700:5400::/40",
    "2a01:9700:5500::/40",
    "2a01:9700:5600::/40",
    "2a01:9700:5700::/40",
    "2a01:9700:5800::/40",
    "2a01:9700:5900::/40",
    "2a01:9700:5a00::/40",
    "2a01:9700:5b00::/40",
    "2a01:9700:5c00::/40",
    "2a01:9700:5e00::/40",
    "2a01:9700:6000::/40",
    "2a01:9700:6100::/40",
    "2a01:9700:6200::/40",
    "2a01:9700:6300::/40",
    "2a01:9700:6400::/40",
    "2a01:9700:6500::/40",
    "2a01:9700:6700::/40",
    "2a01:9700:6800::/40",
    "2a01:9700:6900::/40",
    "2a01:9700:6a00::/40",
    "2a01:9700:6b00::/40",
    "2a01:9700:6c00::/40",
    "2a01:9700:6e00::/40",
    "2a01:9700:6f00::/40",
    "2a01:9700:7000::/40"
];


// ╔══════════════════════════════════════════════════════════╗
// ║          ⑤ كل دومينات PUBG Mobile                        ║
// ╚══════════════════════════════════════════════════════════╝


// ════════════════════════════════════════════════════
//  ⑤-أ  DIRECT
// ════════════════════════════════════════════════════

var D_DIR = [
    "*.voice.pubgmobile.com",
    "*.voip.pubgmobile.com",
    "*.rtc.pubgmobile.com",
    "*.audio.pubgmobile.com",
    "*.sound.pubgmobile.com",
    "*.mic.pubgmobile.com",
    "*.rtp.pubgmobile.com",
    "*.media.pubgmobile.com",
    "*.live.pubgmobile.com",
    "*.streaming.pubgmobile.com",
    "*.trtc.tencentcloud.com",
    "*.tim.qq.com",
    "*.ims.qq.com",

    "*.security.pubgmobile.com",
    "*.anticheat.pubgmobile.com",
    "*.protect.pubgmobile.com",
    "*.shield.pubgmobile.com",
    "*.guard.pubgmobile.com",
    "*.safe.pubgmobile.com",
    "*.integrity.pubgmobile.com",
    "*.scan.pubgmobile.com",
    "*.device.pubgmobile.com",
    "*.deviceid.pubgmobile.com",
    "*.fingerprint.pubgmobile.com",
    "*.kernel.pubgmobile.com",
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
    "*.ping.pubgmobile.com",
    "*.diagnostic.pubgmobile.com",
    "*.feedback.pubgmobile.com",

    "pubgmobile.com",
    "www.pubgmobile.com"
];


// ════════════════════════════════════════════════════
//  ⑤-ب  المباريات
// ════════════════════════════════════════════════════

var D_MAT = [
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
    "*.region.pubgmobile.com",
    "*.netcode.pubgmobile.com",
    "*.tcp.pubgmobile.com",
    "*.udp.pubgmobile.com",
    "*.port.pubgmobile.com",
    "*.lobby-match.pubgmobile.com",

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
    "*.winter.pubgmobile.com",

    "*.spectate.pubgmobile.com",
    "*.spectator.pubgmobile.com",
    "*.watch.pubgmobile.com",
    "*.replay.pubgmobile.com",
    "*.record.pubgmobile.com",
    "*.highlight.pubgmobile.com",
    "*.clip.pubgmobile.com",
    "*.stream.pubgmobile.com",
    "*.broadcast.pubgmobile.com",

    "*.tournament.pubgmobile.com",
    "*.esports.pubgmobile.com",
    "*.competitive.pubgmobile.com",
    "*.leaderboard.pubgmobile.com",
    "*.champion.pubgmobile.com",
    "*.pro.pubgmobile.com",

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
    "*.data.pubgmobile.com",
    "*.version.pubgmobile.com",

    "*.qcloud.com",
    "*.qcloudcdn.com",
    "*.tencentcloud.com",
    "*.cos.myqcloud.com",
    "*.file.myqcloud.com",

    "*.akamaized.net",
    "*.akamai.net",
    "*.cloudfront.net",
    "*.fastly.net",
    "*.cdn77.org",
    "*.cdn.dnsv1.com"
];


// ════════════════════════════════════════════════════
//  ⑤-ج  اللوبي والتجنيد
// ════════════════════════════════════════════════════

var D_LOB = [
    "*.recruit.pubgmobile.com",
    "*.recruiting.pubgmobile.com",
    "*.recruitment.pubgmobile.com",
    "*.team.pubgmobile.com",
    "*.squad.pubgmobile.com",
    "*.invite.pubgmobile.com",
    "*.invitation.pubgmobile.com",
    "*.friend.pubgmobile.com",
    "*.friends.pubgmobile.com",
    "*.social.pubgmobile.com",
    "*.clan.pubgmobile.com",
    "*.guild.pubgmobile.com",
    "*.crew.pubgmobile.com",
    "*.group.pubgmobile.com",
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

    "*.chat.pubgmobile.com",
    "*.message.pubgmobile.com",
    "*.inbox.pubgmobile.com",
    "*.inbox-api.pubgmobile.com",
    "*.mail.pubgmobile.com",
    "*.xmpp.pubgmobile.com",
    "*.block.pubgmobile.com",
    "*.report-player.pubgmobile.com",
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
    "*.trail.pubgmobile.com",
    "*.follow.pubgmobile.com",
    "*.follower.pubgmobile.com",
    "*.like.pubgmobile.com",
    "*.comment.pubgmobile.com",

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
    "*.discount.pubgmobile.com",
    "*.iap.pubgmobile.com",
    "*.receipt.pubgmobile.com",
    "*.order.pubgmobile.com",
    "*.transaction.pubgmobile.com",
    "*.subscribe.pubgmobile.com",
    "*.subscription.pubgmobile.com",
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
    "*.royalepassplus.pubgmobile.com",
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
    "*.crates.pubgmobile.com",
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

    "*.home.pubgmobile.com",
    "*.house.pubgmobile.com",
    "*.furniture.pubgmobile.com",
    "*.decoration.pubgmobile.com",
    "*.interior.pubgmobile.com",
    "*.visit.pubgmobile.com",
    "*.guest.pubgmobile.com",
    "*.camp.pubgmobile.com",
    "*.theme.pubgmobile.com",
    "*.background.pubgmobile.com",

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

    "*.facebook.com",
    "*.fbcdn.net",
    "*.facebook.net",
    "connect.facebook.net",
    "graph.facebook.com",
    "m.facebook.com",

    "*.googleapis.com",
    "*.googleusercontent.com",
    "play-fe.googleapis.com",
    "play.googleapis.com",
    "android.googleapis.com",
    "accounts.google.com",
    "*.gstatic.com",
    "*.google.com",
    "www.google.com",

    "*.apple.com",
    "appleid.apple.com",
    "buy.itunes.apple.com",
    "*.itunes.apple.com",

    "*.twitter.com",
    "*.twimg.com",
    "*.x.com",

    "*.qq.com",
    "*.weixin.qq.com",
    "open.weixin.qq.com",
    "*.wechat.com",
    "*.vk.com",
    "*.line.me",
    "*.line-apps.com",
    "*.naver.com",

    "*.tencent.com",
    "*.tencentyun.com",
    "*.cloud.tencent.com",
    "*.qpic.cn",
    "*.gp.qq.com",
    "*.game.qq.com",
    "speed.game.qq.com",
    "*.gpod.qq.com",
    "*.xiaojukeji.com",
    "*.wegame.com",
    "*.dnspod.net",
    "*.dnspod.com",

    "apps.apple.com",
    "play.google.com",
    "*.dl.client.open.g.aaplimg.com",
    "*.ggpht.com",

    "mtalk.google.com",
    "android.clients.google.com",
    "*.fcm.googleapis.com",
    "*.gcm.googleapis.com",
    "*.push.apple.com",
    "*.push.pubgmobile.com",
    "*.notify.pubgmobile.com",
    "*.notification.pubgmobile.com",
    "*.alert.pubgmobile.com",
    "*.announce.pubgmobile.com",
    "*.news.pubgmobile.com",
    "*.bulletin.pubgmobile.com",
    "*.banner.pubgmobile.com",
    "*.popup.pubgmobile.com",

    "*.timber.tencent.com",
    "*.crashlytics.com",
    "*.firebaseio.com",
    "*.firebase.com",
    "*.app-measurement.com",
    "*.adjust.com",
    "*.appsflyer.com",
    "*.branch.io",
    "*.myqcloud.com"
];


// ╔══════════════════════════════════════════════════════════╗
// ║          ⑥ دوال مساعدة                                  ║
// ╚══════════════════════════════════════════════════════════╝

function is6(a){return a.indexOf(":")!==-1}
function is4(a){var p=a.split(".");if(p.length!==4)return false;for(var i=0;i<4;i++){var n=parseInt(p[i],10);if(isNaN(n)||n<0||n>255)return false}return true}
function isIP(h){return is4(h)||is6(h)}

function n4(ip){var p=ip.split(".");return((parseInt(p[0],10)<<24)|(parseInt(p[1],10)<<16)|(parseInt(p[2],10)<<8)|parseInt(p[3],10))>>>0}

function exp6(ip){
    var s=ip.toLowerCase(),zi=s.indexOf("%");
    if(zi!==-1)s=s.substring(0,zi);
    var pts=s.split(":"),db=-1;
    for(var i=0;i<pts.length;i++){if(pts[i]===""&&i>0&&i<pts.length-1)db=i}
    var e=[];
    if(db!==-1){
        for(var i=0;i<db;i++){if(pts[i]!=="")e.push(pts[i])}
        var c=0;for(var i=0;i<pts.length;i++){if(pts[i]!=="")c++}
        var f=8-c;for(var i=0;i<f;i++)e.push("0000");
        for(var i=db+1;i<pts.length;i++){if(pts[i]!=="")e.push(pts[i])}
    }else{e=pts}
    while(e.length<8)e.push("0000");
    var r=[];for(var i=0;i<8;i++){var p=e[i]||"0";while(p.length<4)p="0"+p;r.push(p)}
    return r.join(":")
}

function b6(ip){var h=exp6(ip).replace(/:/g,""),b="";for(var i=0;i<h.length;i++){var v=parseInt(h.charAt(i),16).toString(2);while(v.length<4)v="0"+v;b+=v}return b}

function c4(ip,cidr){var p=cidr.split("/"),m=parseInt(p[1],10),mb=m===0?0:(~0<<(32-m))>>>0;return(n4(ip)&mb)===(n4(p[0])&mb)}
function c6(ip,cidr){var p=cidr.split("/"),ml=parseInt(p[1],10),ib=b6(ip),pb=b6(p[0]);for(var i=0;i<ml;i++){if(ib.charAt(i)!==pb.charAt(i))return false}return true}

function inC(ip,cidr){if(cidr.indexOf(":")!==-1){if(!is6(ip))return false;return c6(ip,cidr)}if(!is4(ip))return false;return c4(ip,cidr)}
function inL(ip,list){if(!isIP(ip))return false;for(var i=0;i<list.length;i++){if(inC(ip,list[i]))return true}return false}

function isJo(ip){if(!isIP(ip))return false;if(is6(ip))return inL(ip,JO6);return inL(ip,JO4)}
function isMS(ip){if(!isIP(ip))return false;if(is6(ip))return inL(ip,MS6);return inL(ip,MS4)}

function dM(host,list){
    var h=host.toLowerCase();
    for(var i=0;i<list.length;i++){
        var d=list[i].toLowerCase();
        if(d.charAt(0)==="*"){
            var b=d.substring(2);
            if(h===b)return true;
            if(h.length>b.length+1&&h.substring(h.length-b.length-1)==="."+b)return true;
        }else{
            if(h===d)return true
        }
    }
    return false
}


// ╔══════════════════════════════════════════════════════════╗
// ║           ⑦ الدالة الرئيسية                              ║
// ╚══════════════════════════════════════════════════════════╝

function FindProxyForURL(url, host) {

    var h = host.toLowerCase();

    // ① صوت + حماية + تقارير → DIRECT
    if (dM(h, D_DIR)) {
        return DIR;
    }

    // ② IP سيرفر مباراة يدوي → MAT
    if (isMS(host)) {
        return MAT;
    }

    // ③ دومينات المباريات → MAT
    if (dM(h, D_MAT)) {
        return MAT;
    }

    // ④ كل خدمات اللوبي والتجنيد → LOB
    if (dM(h, D_LOB)) {
        return LOB;
    }

    // ⑤ أي IP أردني → LOB
    if (isJo(host)) {
        return LOB;
    }

    // ⑥ أي شيء متعلق بـ PUBG / Tencent → LOB
    if (h.indexOf("pubg") !== -1 ||
        h.indexOf("tencent") !== -1 ||
        h.indexOf("igamecj") !== -1 ||
        h.indexOf("igame") !== -1 ||
        h.indexOf("qcloud") !== -1) {
        return LOB;
    }

    // ⑦ الباقي → DIRECT
    return DIR;
}
