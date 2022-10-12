// // nomor 1

// var arr = ["orange", "mango", "banana", "sugar", "tea"];         
// var removed = arr.splice(4, 0, "water");
// console.log("After adding 1: " + arr );
// console.log("removed is: " + removed);

// removed = arr.splice(4, 1); 
// console.log("After adding 1: " + arr );
// console.log("removed is: " + removed);
// // SPLICE, Untuk menambahkan atau mengurangi array. (x,y,z) x merupakan index, y merupakan berapa yang akan diubah, z merupakan yang ditambahkan 

// var arr = new Array("orange", "mango", "banana", "sugar");         
// var sorted = arr.sort();
// console.log("Returned string is : " + sorted );
// // mengurutkan berdasarkan abjad

// var str = new String( "This is string" );
// console.log("str.charAt(0) is:" + str.charAt(0)); 
// console.log("str.charAt(1) is:" + str.charAt(1)); 
// console.log("str.charAt(2) is:" + str.charAt(2)); 
// console.log("str.charAt(3) is:" + str.charAt(3)); 
// console.log("str.charAt(4) is:" + str.charAt(4)); 
// console.log("str.charAt(5) is:" + str.charAt(5)); 
// // menunjukkan character pada index tertentu

// var str1 = new String( "This is string one and again string" );
// var index = str1.lastIndexOf( "This" );
// // console.log("lastIndexOf found String :" + index ); 

// var index = str1.lastIndexOf( "g" );
// console.log("lastIndexOf found String :" + index ); 
// // menunjukkan index awal dari kata yang dicari

// var re = "Are"; 
// var re = /Are/gi;
// var str = "Apples are round, and apples Are juicy.";
// var newstr = str.replace(re, "is");        
// console.log(newstr); 
// // mengganti kata dengan kata2 yang diinginkan

// var re = /jeruk/gi;
// var str = "Apples are round, and apples are juicy.";

// if ( str.search(re) == -1 ) {
//    console.log("Does not contain Apples" );
// } else {
//     console.log("Contains Apples" );
// }
// // mencari kata2 yang dierlukan, -1 sama dengan keadaan ketika berhasil maka akan memberikan perintah sesuai dengan di else

// const age = [3, 10, 18, 20];
// function checkAdults(age){
//     return age>21;
// }
// console.log(age.some (checkAdults))
// // melakukan pengecekan pada setiap array yang ada

// let text = "steak21"
// const myArr = Array.from(text);
// console.log(myArr)
// // mengubah string menjadi data dalam array dengan memisahkan dari setiap karakter

// const agess = [32, 33, 16, 40];
// function checkAdult(agess) {
//   return agess >= 24;
// }
// console.log(agess.filter(checkAdult))
// // menampilkan data dengan flter tertentu

// const d = new Date();
// console.log(d.getFullYear());
// // mendapatkan tahun saat ini

// const ages = [3, 10, 18, 20];
// function checkAge(ages) {
//     return ages < 19;
//   }
// console.log(ages.findIndex(checkAge))
// // mencari nilai dari data pertama yang sesuai dengan ketentuan

// // nomor 2

// function searchName (ktcari,u1,callback) {
//     var jeneng = ["Abigail", "Alexandra", "Alison",
//     "Amanda", "Angela", "Bella",
//     "Carol", "Caroline", "Carolyn",
//     "Deirdre", "Diana", "Elizabeth",
//     "Ella", "Faith", "Olivia", "Penelope"];
//     var result1 = jeneng.filter((hasil => hasil.toLowerCase().includes(ktcari)))
//     callback(result1,u1)
// } 
// function callback(result1,u1) {
//     for (a = 0; a <= u1-1;a++) {
//         console.log(result1[a])
//     }
// }
// searchName( "ol",2, callback)

// // nomor 3

function SeleksiNilai (nilaiAwal,nilaiAkhir,dataArray,) {
    z = dataArray.length
    nilaiAwal>nilaiAkhir ? console.log("nilai akhir harus lebih besar dari nilai awal") :
    z<5 ? console.log("Jumlah angka dalam dataArray harus lebih dari 5") : perhitungan()
    function perhitungan() {
        data = dataArray.filter((angka => nilaiAwal < angka && angka < nilaiAkhir));
        data.length !== 0 ? console.log(data) : console.log("Nilai tidak ditemukan")
}
}
SeleksiNilai(2,20,[2, 25, 4, 14, 17, 3, 15])
