const app_url = 'https://velak.klingt.org/hls';
const params = new URLSearchParams(window.location.search);
let streamName = params.get('stream');
if (!streamName) streamName = "stream";
const video = document.getElementById('video');
const catption = document.getElementById('caption');
const src = app_url + '/' + streamName + '.m3u8';
if (video.canPlayType('application/vnd.apple.mpegurl')) {
	video.src = src;
} else if (Hls.isSupported()) {
	const hls = new Hls();
	hls.on(Hls.Events.ERROR, e => {
		//console.log(e,"....");
		//caption.textContent = "Failed to play";
	});
	hls.loadSource(src);
	hls.attachMedia(video);
}


