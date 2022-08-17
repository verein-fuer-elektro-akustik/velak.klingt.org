"use strict";

const HOST = 'https://rrr.disktree.net:8443';
const STREAM = 'schokolade';
const PI2 = Math.PI / 2;

function fetchStatus() {
    return window.fetch(HOST + "/status-json.xsl").then(r => {
        return r.json().then(json => {
            return json.icestats;
        });
    });
}

let theme;
let toggle;
let canvas;
let graphics;
let audio;
let analyser;
let freqData, timeData, floatData;
let animationFrameId;

function onAnimationFrame(time) {

    animationFrameId = window.requestAnimationFrame(onAnimationFrame);

    analyser.getByteTimeDomainData(timeData);
    analyser.getByteFrequencyData(freqData);
    analyser.getFloatTimeDomainData(floatData);

    let sumOfSquares = 0;
    for (let i = 0; i < floatData.length; i++) {
        sumOfSquares += floatData[i] ** 2;
    }
    //const avgPowerDecibels = 10 * Math.log10(sumOfSquares / floatData.length);
    //console.log(avgPowerDecibels);
    const RMS = Math.sqrt(sumOfSquares / floatData.length);

    /*//let frequencyBinCount = analyser.frequencyBinCount;
    let hw = canvas.width / 2, hh = canvas.height / 2;
    let v, x, y;
    graphics.clearRect(0, 0, canvas.width, canvas.height);
    graphics.fillStyle = "#fff000";
    graphics.strokeStyle = theme.fg; //"#000000";
    graphics.lineWidth = RMS * 1000 * (canvas.width / 1000);
    graphics.beginPath();
    for (let i = 0; i < analyser.fftSize; i++) {
        v = i * PI2 / 180;
        x = Math.cos(v) * (0 + timeData[i] * (RMS * 2));
        y = Math.sin(v) * (0 + timeData[i] * (RMS * 2));
        graphics.lineTo(hw + x, hh + y);
    }
    graphics.stroke();*/
    
    // Draw time data
    graphics.clearRect( 0, 0, canvas.width, canvas.height );
    graphics.strokeStyle = theme.background; 
    //graphics.lineWidth = RMS * 10 * (canvas.width / 1000);
    graphics.lineWidth = RMS * 100;
    const w = canvas.width;
    const h = canvas.height;
    const x = 0;
    const y = 0;
	const sliceWidth = w * 1.0 / analyser.frequencyBinCount;
    const cy = h / 2;
    var px = 0.0, py = 0.0;
    graphics.beginPath();
    for( let i=0; i<analyser.frequencyBinCount; i++) {
        let v = timeData[i] / 128.0;
        py = v * cy;
        if( i === 0 ) {
            graphics.moveTo(px+x, py+y);
        } else {
            graphics.lineTo(px+x, py+y);
        }
        px += sliceWidth;
    }
    //graphics.lineTo( w, centerY);
    graphics.stroke();
}

function playStream(source) {

    audio = document.createElement('audio');
    audio.preload = "none";
    audio.crossOrigin = "anonymous";
    audio.controls = false;
    audio.onplaying = e => {

        const audioContext = new AudioContext();

        //gain = audioContext.createGain();
        //gain.connect( audioContext.destination );

        analyser = audioContext.createAnalyser();
        analyser.fftSize = 2048;
        //analyser.smoothingTimeConstant = 0.8;
        //analyser.minDecibels = -140;
        //analyser.maxDecibels = 0;
        analyser.connect(audioContext.destination);
        //analyser.connect( gain );

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
    sourceElement.src = HOST + '/' + source.server_name;
    audio.append(sourceElement);
    audio.play();

    //toggle.textContent = '///';
    //toggle.style.pointerEvents = 'none';
}

function stopStream() {
    if (audio) {
        audio.pause();
        audio.onpause = e => {
            audio = null;
        }
        graphics.clearRect(0, 0, canvas.width, canvas.height);
        if (animationFrameId) {
            window.cancelAnimationFrame(animationFrameId);
            animationFrameId = null;
        }
    }
    //toggle.style.display = 'block';
    //toggle.style.pointerEvents = null;
}

function fitCanvas() {
    if (canvas) {
        const container = document.body.querySelector("main");
        const r = container.getBoundingClientRect();
        const s = (r.width < r.height ? r.width : r.height) / 1.6;
        canvas.width = s;
        canvas.height = s;
    }
}

window.onload = e => {

    console.log("stream");

    toggle = document.body.querySelector('main > .toggle');
    canvas = document.body.querySelector('canvas.spectrum');
    graphics = canvas.getContext("2d");

    const style = window.getComputedStyle(document.querySelector(':root'));
    theme = {
        background: style.getPropertyValue("--background"),
        f_med: style.getPropertyValue("--f_med")
    };

    fitCanvas();
    window.onresize = _ => { fitCanvas(); }

    fetchStatus().then(status => {
        let source;
        if(Array.isArray(status.source)) {
            for (let i = 0; i < status.source.length; i++) {
                const src = status.source[i];
                if (src.server_name === STREAM) {
                    source = src;
                    break;
                }
            }
        } else if(status.source.server_name=== STREAM) {
            source = status.source;
        }
        if(source) {
            console.warn(source);
            canvas.onclick = e => {
                if (audio) {
                    stopStream();
                } else {
                    if (source) {
                        playStream(source);
                    }
                }
            }
        } else {
            console.warn('no stream source found');
        }
    });
}
