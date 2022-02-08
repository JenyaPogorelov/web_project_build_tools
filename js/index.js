import {printError, printResult} from './printResult.js'
import getDateDiff from './getDateDiff.js'
import {switchForm} from './switchForm.js'
import {startStopTimer} from './startStopTimer.js'

import '../css/main.css'

const form = document.getElementById('datecalc');
const buttonsSwitch = document.getElementById('switch');
const buttonTimer = document.getElementById('timerForm');

form.onsubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target)
    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')
    if (!firstDate || !secondDate) {
        printError('Введите дату')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        printResult(dateDiff);
    }
}

buttonsSwitch.onclick = (event) => {
    switchForm(event.target.name)
}

buttonTimer.onclick = (event) => {
    event.preventDefault();
    startStopTimer(event.target.id)
    // console.log(event.target)
}
