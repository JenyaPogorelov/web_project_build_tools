import {switchForm} from "./switchForm.js";

const timerField = document.getElementById('timerField');
let tik = '';

export function timer(command) {
    let sound = new Howl({
        src: ['../voice/kids.mp3'],
    });

    const doCommand = command;

    if (timerField.value < 0) timerField.value = timerField.value * -1

    if (doCommand === 'start') {
        timerField.setAttribute('readonly', 'readonly')
        tik = setInterval(() => {
            if (+timerField.value !== 0) {
                timerField.value = timerField.value - 1;
            }
            if (+timerField.value === 0) {
                console.log('Пипип время вышло')
                sound.play();
                clearInterval(tik)
                switchForm('start')
                switchForm('stop')
                timerField.removeAttribute('readonly')
            }
        }, 1000)
    }
    if (doCommand === 'stop') {
        clearInterval(tik)
        timerField.removeAttribute('readonly')
        console.log('Таймер остановлен')
    }
}

