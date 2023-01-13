"use strict";

//const HOST = 'https://rrr.disktree.net:8443';
//const HOST = 'http://195.201.41.121:8000';
//const STREAM = 'velak';
//const PI2 = Math.PI / 2;

function fetchStatus(host) {
    return window.fetch(host + "/status-json.xsl").then(r => {
        return r.json().then(json => {
            return json.icestats;
        });
    });
}

let theme;
let container, statusElement, canvas;
let sourceInfo, host, stream;
let audio, gain, analyser, freqData, timeData, floatData;
let graphics;
let animationFrameId;

function onAnimationFrame(time) {

    animationFrameId = window.requestAnimationFrame(onAnimationFrame);

    analyser.getByteTimeDomainData(timeData);
    analyser.getByteFrequencyData(freqData);
    analyser.getFloatTimeDomainData(floatData);

    graphics.fillStyle = theme.background;
    graphics.fillRect(0, 0, canvas.width, canvas.height);
    graphics.fillStyle = theme.f_med;
    graphics.lineWidth = 1;

    drawTimedata(canvas.width, canvas.height);
    drawFrequencies(0, 0, canvas.width, canvas.heigh);

    updateStatusText(time);
}

function drawTimedata(width, height) {
    graphics.beginPath();
    graphics.strokeStyle = theme.f_med;
    let sw = width * 1.0 / analyser.frequencyBinCount;
    let cy = height / 2;
    let px = 0.0, py = 0.0;
    for (let i = 0; i < analyser.frequencyBinCount; i++) {
        var v = timeData[i] / 128.0;
        py = v * cy;
        if (i == 0) {
            graphics.moveTo(px, py);
        } else {
            graphics.lineTo(px, py);
        }
        px += sw;
    }
    graphics.stroke();
}

function drawFrequencies(x, y, width, height) {
    const res = analyser.frequencyBinCount;
    let bwidth = Math.floor(width / res); // * 2.5;
    if(bwidth<=0) bwidth = 1;
    let bheight;
    let px = 0;
    for (let i = 0; i < res; i++) {
        bheight = freqData[i]; // / 2;
        graphics.fillRect(x + px, height - bheight - y, bwidth, bheight);
        px += bwidth;
    }
}

function updateStatusText(time, extraText) {
    let str = "";
    if (sourceInfo) str += sourceInfo.artist + ' ' + sourceInfo.title + ' [' + sourceInfo.audio_channels + 'ch/' + sourceInfo.audio_samplerate + 'hz/' + sourceInfo["ice-bitrate"] + "]";
    if (time) str += " " + time;
    if (extraText) str += " " + extraText;
    statusElement.textContent = str;
}

function playStream(source) {

    audio = document.createElement('audio');
    audio.preload = "none";
    audio.crossOrigin = "anonymous";
    audio.controls = false;
    audio.onplaying = _ => {

        const audioContext = new AudioContext();

        gain = audioContext.createGain();
        //gain.gain.value = 0.9;
        gain.connect( audioContext.destination );

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 512
        //analyser.smoothingTimeConstant = 0.8;
        //analyser.minDecibels = -140;
        //analyser.maxDecibels = 0;
        //analyser.connect(audioContext.destination);
        analyser.connect( gain );

        freqData = new Uint8Array(analyser.frequencyBinCount);
        timeData = new Uint8Array(analyser.frequencyBinCount);
        floatData = new Float32Array(analyser.fftSize);

        const media = audioContext.createMediaElementSource(audio);
        media.connect(analyser);

        animationFrameId = window.requestAnimationFrame(onAnimationFrame);

        //toggle.style.display = 'none';
        //toggle.textContent = 'LÄERM';
    }

    const sourceElement = document.createElement('source');
    sourceElement.type = source.server_type;
    //sourceElement.src = source.listenurl;
    sourceElement.src = host + '/' + source.server_name;
    audio.append(sourceElement);
    audio.play();
}

function stopStream() {
    if (audio) {
        audio.pause();
        audio.onpause = _ => {
            audio = null;
        }
        graphics.clearRect(0, 0, canvas.width, canvas.height);
        if (animationFrameId) {
            window.cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }
}

function fitCanvas() {
    if (canvas) {
        const container = canvas.parentElement;
        const r = container.getBoundingClientRect();
        const W = Math.round(r.width - r.x);
        const H = Math.round(r.height - r.y);
        canvas.width = W;
        canvas.height = H;
    }
}

window.addEventListener('load', _ => {

    container = document.body.querySelector('div.livestream');
    if (!container)
        return;

    host = container.getAttribute('data-host');
    stream = container.getAttribute('data-stream');
    console.log(host, stream);

    statusElement = container.querySelector('.status');
    canvas = container.querySelector('canvas.spectrum');
    graphics = canvas.getContext("2d");

    const style = window.getComputedStyle(document.querySelector(':root'));
    theme = {
        background: style.getPropertyValue("--background"),
        f_med: style.getPropertyValue("--f_med")
    };

    fitCanvas();
    window.onresize = _ => { fitCanvas(); }

    fetchStatus(host).then(status => {
        let source;
        if (Array.isArray(status.source)) {
            for (let i = 0; i < status.source.length; i++) {
                const src = status.source[i];
                if (src.server_name === stream) {
                    source = src;
                    break;
                }
            }
        } else if (status.source.server_name === stream) {
            source = status.source;
        }
        if (source) {
            console.info(source);
            sourceInfo = source;
            //statusElement.textContent = source.artist+" PLAY";
            updateStatusText(null, "CLICK TO PLAY");
            container.onclick = _ => {
                if (audio) {
                    stopStream();
                } else {
                    if (source) {
                        playStream(source);
                    }
                }
            }
        } else {
            console.warn('No livestream source found');
        }
    });
}, false);
