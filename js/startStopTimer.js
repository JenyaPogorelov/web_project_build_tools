import {timer} from './timer.js';

const timerField = document.getElementById('timerField');
const start = document.getElementById('start')
const stop = document.getElementById('stop')

export function startStopTimer (command) {
    if (command === 'start') {
        timer('start');
        start.classList.toggle('hidden')
        stop.classList.toggle('hidden')
        // console.log('start');
    }
    if (command === 'stop') {
        timer('stop');
        start.classList.toggle('hidden')
        stop.classList.toggle('hidden')
        // console.log('stop');
    }
}