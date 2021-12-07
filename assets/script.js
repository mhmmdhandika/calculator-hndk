// Inisialisasi tombol dan layar kalkulator
let calculator = document.getElementById('calculator')
let display = document.getElementById('displayNumber')

// digunakan untuk menyeleksi jika operator sudah ada di akhir string, maka operator tidak ditampilkan dan harus memasukkan input nilai
let excptDouble

// user memasukkan nilai dan operator
calculator.addEventListener('click', function (e) {
    if (e.target.classList.contains('number')) {
        switch (display.innerText) {
            case '0':
                display.innerText = e.target.innerText
                break
            default:
                display.innerText += e.target.innerText
                break
        }
    } else if (e.target.classList.contains('operator')) {
        excptDouble = display.innerText.slice(display.innerText.length - 1)

        function checkForOperator() {
            if (excptDouble === '+' || excptDouble === '-' || excptDouble === 'x' || excptDouble === '/' || display.innerText === '0') {
                display.innerText
            } else if (e.target.innerText === 'x') {
                display.innerText += "*"
            } else {
                display.innerText += e.target.innerText
            }
        }
        switch (e.target.innerText) {
            case ('+'):
            case ('-'):
            case ('x'):
            case ('/'):
                checkForOperator()
                break
            case ('CE'):
                const ce = display.innerText.substring(0, display.innerText.length - 1)
                if (display.innerText.length === 1) {
                    display.innerText = 0
                } else {
                    display.innerText = ce
                }
                break
            case ('='):
                // menampilkan hasil
                const result = eval(display.innerText)
                display.innerText = result
                break
        }
    }
    // update tampilan kalkulator ke variabel pengecekan
    excptDouble = display.innerText
})

// eksekusi nilai a dan b
// tampilkan hasilnya