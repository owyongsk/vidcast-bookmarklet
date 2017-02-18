/*
 * Uses vidcast.dabble.me to Chromecast
 */

var video = "";
if (-1 != window.location.href.indexOf("putlockers.ch")) {
  window.location = document.getElementsByTagName("iframe")[3].src;
}
if (-1 != window.location.href.indexOf("kisscartoon.se")) {
  video = document.getElementById("my_video_1_html5_api").src;
}
if (-1 != window.location.href.indexOf("sezonlukdizi.net")) {
  var sources = document.getElementById("ms0007-drive").contentWindow.video;
  if (sources[0].label == 1080) {
    video = sources[0].file;
  }
}
if (-1 != window.location.href.indexOf("thevideos.tv")) {
  video = jwplayer().config.sources[2].file;
}
if (video) {
  window.location = "https://vidcast.dabble.me/index.html?video_link="
    + encodeURIComponent(video.replace(/&amp;/g, '&'));
}
