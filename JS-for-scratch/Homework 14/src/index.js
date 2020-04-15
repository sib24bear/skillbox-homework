import '../style/normalize.css';
import '../style/main.css';

import {
    printClickCounter
} from './button.js';

const btn = document.getElementById('btn');

btn.addEventListener( 'click', function() {
    printClickCounter();
});