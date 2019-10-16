import {hot} from "react-hot-loader";

class Scroller {

    constructor () {
        this.elements = [];
        window.addEventListener('scroll',  this.onWindowScroll.bind(this));

    }

    onWindowScroll (eve) {
        const y = eve.target.scrollingElement.scrollTop;

        console.log(y, this.elements.find(it => {
            console.log(it)
        }));

/*        const block = this.elements.find((it) => {
            console.log(it);
            return it.y > y
        });

        console.log(y, block);*/
    }

    add (y, elem, callback) {
        this.elements[y] = {
            y: y,
            used: false,
            elem: elem,
            callback: callback,
        };
    }

    find (y) {
        if (this.elements[y] && !this.elements[y].used)
            return this.elements[y];
    }

    used (y) {
        if (this.elements[y] && !this.elements[y].used)
            this.elements[y].used = true;
    }

}


export default Scroller;