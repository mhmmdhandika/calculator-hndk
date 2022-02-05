// algoritma kalkulator

// deklarasi
// const displayNumber 
// const calculator = operatorButton & numberButton

// proses
// jika user menekan tombol yang berisi number
// cek apakah displayNumber == 0 ?
// ya, maka ubah displayNumber = numberButton
// tidak, maka tambahkan displayNumber += numberButton

// jika user menekan tombol yang berisi operator
// cek apakah displayNumber == operatorButton ?
// ya, maka displayNumber tidak berubah
// tidak, maka lakukan operasi dari displayNumber

// declaration
const displayNumber = document.getElementById('display-number')
const calculator = document.getElementById('calculator')
let exceptDoubleOperator = displayNumber.innerText.slice(displayNumber.innerText.length - 1)
// variabel exceptDoubleOperator digunakan untuk menyeleksi apakah operator sudah ada di akhir string

// progress
calculator.addEventListener('click', function (event) {
    if (event.target.classList.contains('number-button')) {
        switch (displayNumber.innerText) {
            case '0':
                displayNumber.innerText = event.target.innerText
                break
            default:
                displayNumber.innerText += event.target.innerText
                displayNumber.classList.add('text-wrap')
                break
        }
    } else if (event.target.classList.contains('operator-button')) {
        switch (event.target.innerText) {
            case ('+'):
            case ('-'):
            case ('x'):
            case ('/'):
                // switch (exceptDoubleOperator) {
                //     case ('+'):
                //     case ('-'):
                //     case ('x'):
                //     case ('/'):
                //         displayNumber.innerText
                //         break
                //     case (event.target.innerText == 'x'):
                //         displayNumber.innerText += '*'
                //         break
                //     default:
                //         displayNumber.innerText += event.target.innerText
                // }
        }
    }
})