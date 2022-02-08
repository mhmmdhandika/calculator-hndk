// declaration
const calculator = document.getElementById('calculator')
let displayNumber = document.getElementById('display-number')
// exceptDoubleOperator variable is used for selecting operator is already at the end of the string or not.
let exceptDoubleOperator

// user pressing the number buttons or operator buttons
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
                // result variable is used for replace x => *, % => /100 and , (comma) => '' (empty string). This variable is also used at the time of execution of the calculation in the eval() function later.
                const result = displayNumber.innerText.replaceAll('x', '*').replaceAll('%', '/100').replaceAll(',', '')
                console.log(result)
                let internationalNumberFormat = new Intl.NumberFormat('en-US')
                displayNumber.innerText = eval(result)
                displayNumber.innerText = internationalNumberFormat.format(displayNumber.innerText)
        }
        // update innerText calculator ke variabel pengecekan
        exceptDoubleOperator = displayNumber.innerText
    }
})