/*
 * Uses vidcast.dabble.me to Chromecast
 *
 * or outputs the URL to download the mp4
 */

var href = window.location.href;

if (-1 != href.indexOf("putlocker")) {
  window.location = document.getElementsByTagName("iframe")[3].src;
}
if (-1 != href.indexOf("kisscartoon")) {
  video = document.getElementById("my_video_1_html5_api").src;
}
if (-1 != href.indexOf("kissanime")) {
  video = document.getElementById("my_video_1_html5_api").src;
}
if (-1 != href.indexOf("cartoonhd.online")) {
  video = document.getElementById("flixvideostream_html5_api").src;
}
if (-1 != href.indexOf("yesmovies.to")) {
  video = document.getElementsByClassName("jw-video")[0].src;
}
if (-1 != href.indexOf("sezonlukdizi.net")) {
  var sources = document.getElementsByTagName("iframe")[1].contentWindow.video;
  if (sources) {
    video = sources[0].file;
  }
}
if (-1 != href.indexOf("thevideos.tv")) {
  sources = jwplayer().config.sources;
  video = sources[sources.length-1].file;
}
if (-1 != href.indexOf("openload")) {
  video = document.querySelector("#olvideo_html5_api").src;
}
if (video) {
  if (window.sk_vid_cast) {
    window.location = "https://vidcast.dabble.me/index.html?video_link="
      + encodeURIComponent(video.replace(/&amp;/g, '&'));
  } else {
    window.prompt("Copy to clipboard: Ctrl+C, Enter", video);
  }
} else {
  alert("Can't find an mp4 here!");
}
