const timerField = document.getElementById('timerField');

export function timer(command) {
const doCommand = command;
    if (doCommand === 'start') {
        const tik = setInterval(() => {
            if (+timerField.value !== 0 || doCommand === 'stop') {
                timerField.value = timerField.value - 1;
            }
            if  (+timerField.value === 0) {
                console.log('Пипип время вышло')
                clearInterval(tik)
            }
            if (doCommand === 'stop') {
                console.log('Таймер остановлен')
                clearInterval(tik)
            }
        }, 1000)
    }
}

