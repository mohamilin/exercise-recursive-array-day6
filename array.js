/*
SOAL 1 :
Buatlah data array yang berisi minimal 5 pekerjaan dibidang IT 
    (Ex. Front end developer). 
        Tampilkan panjang data Array
        Tampilkan seluruh item pada array
        Gunakan Console.log
        Tampilkan data tersebut pada Halaman HTML menggunakan list tag
*/

let itDivision = [
    "Front-End",
    "Back-End",
    "Senior Enginer",
    "UI-UX Design",
    "Web Security",
    "Data Analys",
];

console.log(itDivision.length()); //panjang data
console.log(itDivision); // menampilkan seluruh item array


/*
Buatlah sebuah data array yang berisi nama pada tim teman-teman.
Bagi tim menjadi 2 tim dan terdiri dari 1 orang leader
Console.log data array tersebut dengan memisahkan setiap data menggunakan  koma (,)
Tampilkan list data tersebut ke halaman HTML
hidden:
Cek built-in method Array
*/

let teamOne = ['amilin', 'imam', 'yogi', 'firdaus','ibnu'];
let teamTwo = ['naufal', 'zainal','dhani', 'andika', 'aziz'];
console.log(`team satu : ${teamOne} dan team dua : ${teamTwo}`);

/*



Diberikan 1 data array [3, 5, 7, 9, 11]
    Buat sebuah program untuk membuat Array baru dari hasil perkalian array sebelumnya dengan perkalian 5.
    Tampilkan pada console.log
*/
    let nums = [1, 3, 4, 5, 6];
    let newNums = nums.map(e => {
        return e * 5;
    });

    console.log(newNums);


/*


Tersedia 2 data Array. Tugas kita adalah untuk cek apakah ada nilai yang sama pada kedua Array.
Array pertama = [‘Math’, ‘English’, ‘Programming’]
Array kedua = [‘Geography’, ‘Spanish’, ‘Programming’]
Program akan mengembalikan nilai TRUE or FALSE
*/

let arrayOne = ['Math', 'English', 'Programming'];
let arrayTwo = ['Geo', 'Spanish', 'Programming'];

let check = true;

for( let i = 0; i < arrayTwo.length; i++) {
  if(arrayOne.indexOf(arrayTwo[i]) > -1 ) {
    check = false;
    break;
  }
}

console.log(check);


/*

Buatlah sebuah aplikasi twitter untuk membuat sebuah tweet dan menampilkannya.
    Gunakan Array untuk menampung data tweet
    Contoh UI pada slide selanjutnya
*/



/*
Buatlah sebuah program registrasi berisi username dan password
Lakukan validasi berikut
Username minimal 6 karakter
Password minimal 8 karakter
Saat user melakukan registrasi simpan data didalam Array
Tampilkan data setiap user melakukan registrasi
Saat password ditampilkan, ganti dengan string yang berbeda. Gunakan replace method



*/