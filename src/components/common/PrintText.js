import {hot} from "react-hot-loader";


class PrintText {

    constructor (canvas, text) {
        this.сanvas = canvas;
        this.text = text;
        this.stoped = false;
        this.speed = 8;
        this.pause = 50;
        this.index = 0;
        this.lastTimestamp = 0;

        this.clear();
        this.сanvas.addEventListener('click', () => {
            this.stoped = !this.stoped;
        })
    }

    clear () {
        this.index = 0;
        this.lastTimestamp = 0;
        this.сanvas.textContent = '';
    }

    start () {
        requestAnimationFrame(this.draw.bind(this));
    }

    draw (timestamp) {

        if (this.stoped) {
            this.сanvas.textContent = this.text;
            return;
        }

        if (this.lastTimestamp % this.speed === 0) {
            this.printer()
        }

        this.lastTimestamp += 1;
        this.start();
    }

    printer () {
        this.сanvas.textContent += this.text.slice(this.index, this.index + 1) || '';

        if (this.index > this.text.length + this.pause) {
            this.clear();
        }
        else
            this.index ++;
    }

}


export default PrintText;
