// Inputan string
const inputString = "aaabbcccaaaac";

// Membuat objek untuk menyimpan hasil
const charCount = {};

// Menghitung jumlah kemunculan setiap karakter
for (let char of inputString) {
    charCount[char] = (charCount[char] || 0) + 1;
}

// Menampilkan hasil
for (let char in charCount) {
    console.log(`${char}=${charCount[char]}`);
