import {printError, printResult} from './printResult.js'
import getDateDiff from './getDateDiff.js'

const form = document.getElementById('datecalc');

form.onsubmit = (event) => {
    event.preventDefault();

    // console.log(event);
    const formData = new FormData(event.target)

    const firstDate = formData.get('firstDate')
    const secondDate = formData.get('secondDate')
    if (!firstDate || !secondDate) {
        printError('Oooooooops - введите дату')
    } else {
        const dateDiff = getDateDiff(firstDate, secondDate)
        printResult(dateDiff);
        // console.log(dateDiff);
    }

}