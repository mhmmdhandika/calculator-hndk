// declaration
const calculator = document.getElementById('calculator')
let displayNumber = document.getElementById('display-number')
let exceptDoubleOperator
// variabel exceptDoubleOperator digunakan untuk menyeleksi apakah operator sudah ada di akhir string

// user menekan antara tombol nomor atau operator
calculator.addEventListener('click', function (event) {
    if (event.target.classList.contains('number-button')) {
        switch (displayNumber.innerText) {
            case '0':
                displayNumber.innerText = event.target.innerText
                break
            default:
                displayNumber.innerText += event.target.innerText
                break
        }
    } else if (event.target.classList.contains('operator-button')) {
        exceptDoubleOperator = displayNumber.innerText.slice(displayNumber.innerText.length - 1)
        switch (event.target.innerText) {
            case ('+'):
            case ('-'):
            case ('x'):
            case ('%'):
            case ('/'):
            case ('.'):
                switch (exceptDoubleOperator) {
                    case ('+'):
                    case ('-'):
                    case ('x'):
                    case ('/'):
                    case ('/100'):
                    case ('.'):
                        displayNumber.innerText
                        break
                    default:
                        displayNumber.innerText += event.target.innerText
                }
                break
            case ('Del'):
                if (displayNumber.innerText.length === 1) {
                    displayNumber.innerText = 0
                } else {
                    displayNumber.innerText = displayNumber.innerText.substring(0, displayNumber.innerText.length - 1)
                }
                break
            case ('AC'):
                displayNumber.innerText = 0
            case ('='):
                const result = displayNumber.innerText.replaceAll('x', '*').replaceAll('%', '/100').replaceAll(',', '')
                // variabel result ini juga digunakan untuk menyeleksi operator x dan %, lalu di konversi pada masing-masing returnnya tersebut.
                console.log(result)
                let internationalNumberFormat = new Intl.NumberFormat('en-US')
                displayNumber.innerText = eval(result)
                displayNumber.innerText = internationalNumberFormat.format(displayNumber.innerText)
        }
        // update innerText calculator ke variabel pengecekan
        exceptDoubleOperator = displayNumber.innerText
    }
})