var jeneng = ["Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth",
"Ella", "Faith", "Olivia", "Penelope"];
z = jeneng.length
var g = /an./i
for (y=0;y<=z-1;y++){
    if (g.test(jeneng[y])===true){
    console.log(jeneng[y])
    }
}
// function SeleksiNilai (nilaiAwal,nilaiAkhir,dataArray) {
//     z = dataArray.length
//     if (nilaiAwal>nilaiAkhir){
//         console.log("nilai akhir harus lebih besar dari nilai awal")
//     } else if(z<5){console.log("Jumlah angka dalam dataArray harus lebih dari 5")
// } else {}
//     ns(nilaiAwal,nilaiAkhir,dataArray,z)
// }
// function ns (nilaiAwal,nilaiAkhir,dataArray,z){
//     let str = ""
//     for (y = 0; y<=z-1;y++){
//         if (dataArray[y]<nilaiAwal) {
//         } else if (dataArray[y]>nilaiAkhir) {
//         } else {str += dataArray[y] +" " }
//     }
//     l = str.length
//     if (l === 0){console.log("Nilai tidak ditemukan")}
//     else {console.log(str)}
// }
// SeleksiNilai(5,20,[2, 25, 4, 14, 17, 30, 8],ns)

// var arr = ["orange", "mango", "banana", "sugar", "tea"];         
// var removed = arr.splice(4, 0, "water");|
// console.log("After adding 1: " + arr );
// console.log("removed is: " + removed);

// removed = arr.splice(4, 1); 
// console.log("After adding 1: " + arr );
// console.log("removed is: " + removed);
// SPLICE, Untuk menambahkan atau mengurangi array. (x,y,z) x merupakan index, y merupakan berapa yang akan diubah, z merupakan yang ditambahkan 

// var arr = new Array("orange", "mango", "banana", "sugar");         
// var sorted = arr.sort();
// ("Returned string is : " + sorted );
// mengurutkan berdasarkan abjad

// var str = new String( "This is string" );
// console.log("str.charAt(0) is:" + str.charAt(0)); 
// console.log("str.charAt(1) is:" + str.charAt(1)); 
// console.log("str.charAt(2) is:" + str.charAt(2)); 
// console.log("str.charAt(3) is:" + str.charAt(3)); 
// console.log("str.charAt(4) is:" + str.charAt(4)); 
// console.log("str.charAt(5) is:" + str.charAt(5)); 
// menunjukkan character pada index tertentu

// var str1 = new String( "This is string one and again string" );
// var index = str1.lastIndexOf( "This" );
// console.log("lastIndexOf found String :" + index ); 

// var index = str1.lastIndexOf( "g" );
// console.log("lastIndexOf found String :" + index ); 
// menunjukkan index awal dari kata yang dicari

// var re = "Are"; 
// var re = /Are/gi;
// var str = "Apples are round, and apples Are juicy.";
// var newstr = str.replace(re, "is");        
// console.log(newstr); 
// mengganti kata dengan kata2 yang diinginkan

// var re = /apples/gi;
// var str = "Apples are round, and apples are juicy.";

// if ( str.search(re) == -1 ) {
//    console.log("Does not contain Apples" );
// } else {
//     console.log("Contains Apples" );
// }
// mencari kata2 yang dierlukan, -1 sama dengan keadaan ketika berhasil maka akan memberikan perintah sesuai dengan di else

// const ages = [3, 10, 18, 20];
// function checkAdults(ages){
//     return ages<21;
// }
// console.log(ages.some (checkAdults))
// melakukan pengecekan pada setiap array yang ada

// let text = "steak21"
// const myArr = Array.from(text);
// console.log(myArr)
// mengubah string menjadi data dalam array dengan memisahkan dari setiap karakter

// const ages = [32, 33, 16, 40];
// function checkAdult(age) {
//   return age >= 4;
// }
// console.log(ages.filter(checkAdult))
// menampilkan data dengan flter tertentu

// const d = new Date();
// console.log(d.getFullYear());
// mendapatkan tahun saat ini

// const ages = [3, 10, 18, 20];
// function checkAge(ages) {
//     return ages < 19;
//   }
// console.log(ages.findIndex(checkAge))
// mencari nilai dari data pertama yang sesuai dengan ketentuan

// const name1 = ("Abigail", "Alexandra", "Alison",
// "Amanda", "Angela", "Bella",
// "Carol", "Caroline", "Carolyn",
// "Deirdre", "Diana", "Elizabeth",
// "Ella", "Faith", "Olivia", "Penelope");
    
// j = name1.length
//     console.log(j)

// searchName(“an”, 3, callback)
// var jeneng = ["Abigail", "Alexandra", "Alison",
// "Amanda", "Angela", "Bella",
// "Carol", "Caroline", "Carolyn",
// "Deirdre", "Diana", "Elizabeth",
// "Ella", "Faith", "Olivia", "Penelope"];
// for ()
// function check ("Am"){

// }
// console.log(jeneng.length)
// var gg = "Revan, putri"
// // var gg = ["Rev","put"]
// console.log(gg.match(/R/))

// var dd = "Rev"
// function check(dd){
//     return gg == dd
// }
// console.log(gg.some(check))

// const alligator = ["thick scales", 80, "4 foot tail", "rounded snout"];

// var s = alligator.find(el => el.length < 12); // returns '4 foot tail'
// var j = alligator.find((el, idx) => typeof el === "string" && el === "foot"); // returns '4 foot tall'

// console.log(j)
