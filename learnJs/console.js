/*== Belajar POP-UP BOX ==

- alert = Memunculkan pop-up sederhana
    alert("hai");

- prompt = Memunculkan pop-up textbox input
    prompt("nama :");
    
- confirm = Memunculkan pop-up konfirmasi (Boolean)
    confirm("nama :");
 
*/
// alert("Selamat Datang");

// var loop = true;

// while (loop == true) {
//     var nama = prompt("Masukan Nama:");
//     alert("halo" + nama);
//     loop = confirm("Mau lagi," + nama + ":");

// }
// alert("Makasih")

// var jumlAngkot = 15;
// var angkotBeroprasi = 6;
// var nomerAngkot = 1;

// for (nomerAngkot; nomerAngkot <= jumlAngkot; nomerAngkot++) {

//     if (nomerAngkot <= angkotBeroprasi && nomerAngkot != 4) {

//         alert("angkot : " + nomerAngkot + "beroprasi dengan baik");

//     } else if (nomerAngkot === 8 || nomerAngkot === 10 || nomerAngkot === 4) {

//         alert("angkot :" + nomerAngkot + "sedang lembur");

//     } else {
//         alert("angkot :" + nomerAngkot + "tidak beroprasi dengan baik");
//     }  
// }

// var inp = prompt("masukkan nilai :");

// switch (inp) {
//     case '1':
//         alert("angka")
//         break;
//     case '2':
//         alert("angka")
//         break;
//     case 'a':
//         alert("angka")
//         break;
//     case 'true':
//         alert("boolean")
//         break;
//     case 'c':
//         alert("angka")
//         break;
//     default:
//         alert("tidak memiliki nilai !")
//         break;
// }



//Belajar function

// function mencobaFunction(nilaiA, nilaiB) {

//     var total = (nilaiA + nilaiB) * 2;
//     alert(total);

//     return total;
// }
// var a = parseInt(prompt("Masukkan nilai A : "));
// var b = parseInt(prompt("Masukkan nilai B : "));


// var hasil = mencobaFunction(a, b);


// Belajar rekursif

// function looping(n) {

//     if (n === 0) {

//         return; // Base Case
//     }
//     alert(n);
//     looping(n - 1);
// }

// looping(10);

// function faktorial(n) {

//     if (n === 0) {
//         return 1;
//     }

//     var perhitungan = n * fakrtorial(n - 1);
//     return faktorial;
//     alert(perhitungan)

// }

// faktorial(5)

// Belajar Array

// var arr = ["Faiq", "Azmi", "Nur", "Faizi"]

// for (i = 0; i < 4; i++) {
//     alert(arr[i]);
// }

//Method pada array

// 1. join()
//menggabungkan isi array dan merubahnya menjadi 'String'

// alert(arr.join('-'));

// 2. lenght
// mengetahui panjang array

// alert(arr.length);

// 3. push() dan pop()
// push = menambahkan elemen di indeks terakhir dalam array
// pop  = menghapus elemen terakhir dari sebuah indeks

// arr.push("hai", "ily");
// arr.pop();

// 4.unshift() dan shift()
// unshift = menambahkan elemen di indeks awal dalam array
// shift  = menghapus elemen di indeks awal dari sebuah indeks

// arr.unshift("hai", "ily");
// arr.shift();

// 5. splice() dan slice()
// splice dapat menambahkan dan juga menghapus sesuai indeks yang diinginkan
// splice = splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2);

// slice dapat memindahkan sebuah array menjadi array yang baru dari suatu indeks secara berurut dan 
// slice  =  slice (indeks awal, indeks akhir) ; 
// arr.splice(1, 0, 'hai');
// arr.slice(0,2);

// 6. foreach()
// Dapat melakukan perulangan tanpa mengembalikan nilainya
// arr.forEach(function (e) {
//     alert(e);
// })

// 7. map()
// Dapat melakukan perulangan tetapi dengan mengembalikan nilainya
// var angka = [1,2,3,4,5,6,7,8];
// var jumlah = angka.map(function (e) {
//     return e;
// })
// alert(jumlah);

// 8. sort()
// Mengurutkan sebuah isi array
// var ang = [3, 2, 1, 6, 5, 10, 90, 20];
// ang.sort()
// alert(ang.sort(function (a, b) {
//     return a - b;
// }));

// 9. flter()
// Dapat mencari elemen pada array dengan mengembalikan banyak nilai
// var ang = [3, 2, 1, 6, 5, 10, 90, 20];
// var flt = ang.filter(function (x) {
//     return x >= 5;
// });
// alert(flt);

// 9. find()
// Dapat mencari elemen pada array dengan hanya mengembalikan satu nilai saja
// var ang = [3, 2, 1, 6, 5, 10, 90, 20];
// var flt = ang.find(function (x) {
//     return x >= 5;
// });
// alert(flt);