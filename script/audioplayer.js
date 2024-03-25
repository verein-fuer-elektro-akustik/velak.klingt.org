"use strict";

class Audioplayer {
    constructor(container) {
        this.container = container;
        this.statusElement = container.querySelector('.status');
        this.canvas = container.querySelector('canvas.spectrum');
        const r = container.getBoundingClientRect();
        this.canvas.height = r.height - r.y;
        this.canvas.width = r.width - r.x;
        this.graphics = this.canvas.getContext("2d");
    }
    play = (url) => {
        if(this.audio) {
            //this.stop();
        }
        this.audio = document.createElement('audio');
        this.audio.preload = "none";
        this.audio.crossOrigin = "anonymous";
        this.audio.controls = false;
        this.audio.onplaying = _ => {
            const audioContext = new AudioContext();
            this.gain = audioContext.createGain();
            //gain.gain.value = 0.9;
            this.gain.connect(audioContext.destination);
            this.analyser = audioContext.createAnalyser();
            this.analyser.fftSize = 1024;
            //analyser.smoothingTimeConstant = 0.8;
            //analyser.minDecibels = -140;
            //analyser.maxDecibels = 0;
            this.analyser.connect(this.gain);
            this.freqData = new Uint8Array(this.analyser.frequencyBinCount);
            this.timeData = new Uint8Array(this.analyser.frequencyBinCount);
            this.floatData = new Float32Array(this.analyser.fftSize);
            const media = audioContext.createMediaElementSource(this.audio);
            media.connect(this.analyser);
            this.animationFrameId = window.requestAnimationFrame(this.onAnimationFrame);
        }
        const sourceElement = document.createElement('source');
        sourceElement.src = url;
        this.audio.append(sourceElement);
        this.audio.play();
    }
    onAnimationFrame = (time) => {
        this.animationFrameId = window.requestAnimationFrame(this.onAnimationFrame);
        this.analyser.getByteTimeDomainData(this.timeData);
        this.analyser.getByteFrequencyData(this.freqData);
        this.analyser.getFloatTimeDomainData(this.floatData);
        this.graphics.fillStyle = theme.background;
        this.graphics.fillRect(0, 0, this.canvas.width, this.canvas.height);
        this.graphics.fillStyle = theme.f_med;
        this.graphics.lineWidth = 1;
        this.drawTimedata(0, 0, this.canvas.width, this.canvas.height);
        //drawFrequencies(24,  canvas.height-48, canvas.width-48, canvas.height/2);
        //drawFrequencies(0,  0, canvas.width, canvas.height);
        this.updateStatusText(time);
    }
    drawTimedata = (x, y, width, height) => {
        this.graphics.beginPath();
        this.graphics.strokeStyle = theme.f_med;
        const sw = width * 1.0 / this.analyser.frequencyBinCount;
        const cy = height / 2;
        let px = 0.0, py = 0.0;
        for (let i = 0; i < this.analyser.frequencyBinCount; i++) {
            py = (this.timeData[i] / 128.0) * cy;
            if (i == 0) {
                this.graphics.moveTo(x + px, y + py);
            } else {
                this.graphics.lineTo(x + px, y + py);
            }
            px += sw;
        }
        this.graphics.stroke();
    }
    /*
    drawFrequencies(x, y, width, height) => {
        //graphics.fillStyle = '#ff0000';
        //graphics.fillRect(x, y, width, height);
        graphics.fillStyle = theme.f_med;
        const barWidth = Math.floor(width / analyser.frequencyBinCount);
        let barHeight;
        let px = 0;
        for (let i = 0; i < analyser.frequencyBinCount; i++) {
            barHeight = freqData[i];
            if(barHeight < 1) {
                barHeight = 0;
            } else {
                graphics.fillRect(x + px, y + height/2 + barHeight, barWidth, 1);
            }
            px += barWidth;
        }
    }
    */
    updateStatusText = (time, extraText) => {
        let str = "";
        if (time) str += time;
        str += "<br>" + url;
        if (extraText) str += " " + extraText;
        this.statusElement.innerHTML = str;
    }
    fitCanvas = () => {
        const container = this.canvas.parentElement;
        const r = container.getBoundingClientRect();
        const W = Math.round(r.width - r.x);
        const H = Math.round(r.height - r.y);
        this.canvas.width = W;
        this.canvas.height = H;
    }
}

let container = document.body.querySelector('div.audioplayer');
let url = container.getAttribute('data-url');
var audioplayer = new Audioplayer(container);
audioplayer.fitCanvas()
container.addEventListener('click', _ => {
    audioplayer.play(url);
}, false);
window.addEventListener("resize", _ => {
    //audioplayer.fitCanvas();
}, false);

