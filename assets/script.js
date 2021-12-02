// inisialisasi bil1, bil2, oprs, hasil

// input nilai a
const nilaiA = parseInt(prompt('Masukkan nilai A!'))

// Pilih salah satu operasi dari (+), (-), (x), (:)

const pilihOperasi = prompt('Masukkan salah satu operasi dari (+), (-), (x), (:)')

// input nilai b
const nilaiB = parseInt(prompt('Masukkan nilai B!'))

// jika memilih operasi (+) = a + b
// jika memilih operasi (-) = a - b
// jika memilih operasi (x) = a * b
// jika memilih operasi (:) = a / b
let hasil
if (pilihOperasi === '+') {
    hasil = nilaiA + nilaiB
} else if (pilihOperasi === '-') {
    hasil = nilaiA - nilaiB
} else if (pilihOperasi === 'x') {
    hasil = nilaiA * nilaiB
} else if (pilihOperasi === ':') {
    hasil = nilaiA / nilaiB
} else {
    hasil = 'Kamu memasukkan input yang salah!'
}

// tampilkan hasilnya
console.log(hasil)