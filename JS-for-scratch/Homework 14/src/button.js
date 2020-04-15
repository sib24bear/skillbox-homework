import '../style/button.css';

import {
    Counter
} from './lib.js';

const makeCounter = new Counter();

export function printClickCounter() {
    makeCounter.up();
    console.log(makeCounter.read()); 
    btn.innerText = `${makeCounter.read()} click`;
}