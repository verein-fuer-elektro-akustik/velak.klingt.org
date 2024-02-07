"use strict";

//let theme;
let container, statusElement, canvas, graphics;
let sourceInfo, host, stream;
let audio, gain, analyser, freqData, timeData;
let animationFrameId;

function fetchStatus(host) {
    return window.fetch(`${host}/status-json.xsl`).then(r => {
        return r.json().then(json => {
            return json.icestats;
        });
    });
}

function onAnimationFrame(time) {

    animationFrameId = window.requestAnimationFrame(onAnimationFrame);

    analyser.getByteTimeDomainData(timeData);
    analyser.getByteFrequencyData(freqData);
    //analyser.getFloatTimeDomainData(floatData);

    graphics.fillStyle = theme.background;
    graphics.fillRect(0, 0, canvas.width, canvas.height);
    graphics.fillStyle = theme.f_med;
    graphics.lineWidth = 1;

    drawTimedata(0, 0, canvas.width, canvas.height);
    //drawFrequencies(0, 0, canvas.width, canvas.height);

    updateStatusText(time);
}

function drawTimedata(x, y, width, height) {
    graphics.beginPath();
    graphics.strokeStyle = theme.f_med;
    const sw = width * 1.0 / analyser.frequencyBinCount;
    const cy = height / 2;
    let px = 0.0, py = 0.0;
    for (let i = 0; i < analyser.frequencyBinCount; i++) {
        py = (timeData[i] / 128.0) * cy;
        if (i == 0) {
            graphics.moveTo(x + px, y + py);
        } else {
            graphics.lineTo(x + px, y + py);
        }
        px += sw;
    }
    graphics.stroke();
}

function drawFrequencies(x, y, width, height) {
    graphics.fillStyle = theme.f_med;
    const res = analyser.frequencyBinCount;
    let bwidth = Math.floor(width / res);
    if (bwidth <= 0) bwidth = 1;
    let bheight;
    let px = 0;
    for (let i = 0; i < res; i++) {
        bheight = freqData[i] * 2; // / 2;
        graphics.fillRect(x + px, height - bheight - y, bwidth, 1);
        px += bwidth;
    }
}

function updateStatusText(time, extraText) {
    let str = "";
    if (sourceInfo) str += sourceInfo.artist + ' ' + sourceInfo.title + ' [' + sourceInfo.listeners + '][' + sourceInfo.audio_channels + 'ch/' + sourceInfo.audio_samplerate + 'hz/' + sourceInfo["ice-bitrate"] + "]";
    if (time) str += " <br>" + time;
    if (extraText) str += " " + extraText;
    statusElement.innerHTML = str;
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
        gain.connect(audioContext.destination);
        analyser = audioContext.createAnalyser();
        analyser.fftSize = 1024;
        //analyser.smoothingTimeConstant = 0.8;
        //analyser.minDecibels = -140;
        //analyser.maxDecibels = 0;
        analyser.connect(gain);
        freqData = new Uint8Array(analyser.frequencyBinCount);
        timeData = new Uint8Array(analyser.frequencyBinCount);
        //floatData = new Float32Array(analyser.fftSize);
        const media = audioContext.createMediaElementSource(audio);
        media.connect(analyser);
        animationFrameId = window.requestAnimationFrame(onAnimationFrame);
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

    statusElement = container.querySelector('.status');
    canvas = container.querySelector('canvas.spectrum');
    graphics = canvas.getContext("2d");

    // const style = window.getComputedStyle(document.querySelector(':root'));
    // theme = {
    //     background: style.getPropertyValue("--background"),
    //     f_high: style.getPropertyValue("--f_high"),
    //     f_med: style.getPropertyValue("--f_med"),
    //     f_low: style.getPropertyValue("--f_low"),
    //     f_inv: style.getPropertyValue("--f_inv"),
    //     b_high: style.getPropertyValue("--b_high"),
    //     b_med: style.getPropertyValue("--b_med"),
    //     b_low: style.getPropertyValue("--b_low"),
    //     b_inv: style.getPropertyValue("--b_inv"),
    // };

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
            sourceInfo = source;
            updateStatusText(null, "<br>CLICK TO PLAY");
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
