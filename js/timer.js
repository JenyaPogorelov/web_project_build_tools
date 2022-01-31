// import {Howler} from 'https://cdn.jsdelivr.net/npm/howler@2.2.3/dist/howler.min.js';
// import {} from 'howler';

const timerField = document.getElementById('timerField');
let tik = '';

export function timer(command) {

    // let sound = new Howl({
    //     src: ['kids.mp3'],
    //     html5: true
    // });
    //
    // sound.play();

const doCommand = command;
    if (doCommand === 'start') {
        timerField.setAttribute('readonly', 'readonly')
        tik = setInterval(() => {
            if (+timerField.value !== 0) {
                timerField.value = timerField.value - 1;
            }
            if  (+timerField.value === 0) {
                console.log('Пипип время вышло')
                clearInterval(tik)
            }
        }, 1000)
    }
    if (doCommand === 'stop') {
        clearInterval(tik)
        timerField.removeAttribute('readonly')
        console.log('Таймер остановлен')
    }
}

