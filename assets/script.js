// masukkan input ke variabel firstvalue atau ke secondvalue

// inisialisasi kondisi awal
let display = document.getElementById('displayNumber')
let firstValue
let secondValue
let hasil

// lakukan input
document.querySelector('#calculator').addEventListener('click', function (e) {
    if (e.target.classList.contains('number')) {
        switch (firstValue, secondValue) {
            case undefined:
                if (display.textContent === '0') {
                    display.innerText = e.target.innerText
                } else {
                    display.innerText += e.target.innerText
                }
                break
        }
    } else if (e.target.classList.contains('operator')) {
        switch (e.target.innerText) {

            case 'CE':
                firstValue = undefined
                secondValue = undefined
                display.innerText = 0
                break
            case '+':
                if (secondValue === undefined) {
                    hasil = firstValue
                    display.innerText += '+'
                } else {
                    hasil = firstValue + secondValue
                    display.innerText = hasil
                }
                break
            case '-':
                break
            case 'x':
                break
            case ':':
                break
        }
    }
})

// tampilkan hasil