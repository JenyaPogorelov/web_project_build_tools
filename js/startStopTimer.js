import {timer} from './timer.js';
import {switchForm} from "./switchForm.js";


const timerField = document.getElementById('timerField');
const start = document.getElementById('start')
const stop = document.getElementById('stop')

export function startStopTimer (command) {
    if (command === 'start') {
        timer('start');
        switchForm('start')
        switchForm('stop')
        // start.classList.toggle('hidden')
        // stop.classList.toggle('hidden')
    }
    if (command === 'stop') {
        timer('stop');
        switchForm('start')
        switchForm('stop')
        // start.classList.toggle('hidden')
        // stop.classList.toggle('hidden')
    }
}