// function pertambahan (number1, number2){
//     let total = number1 +number2
//     return total
// }

// const pengurangan  = function(number1, number2){
//     let total = number1 - number2
//     return total
// }

// perkalian = (number1,number2) => {
//     let total = number1*number2
//     return total
// }

// pembagian = (number1,number2) => number1/number2

// console.log(`pertambahan = ${pertambahan(3,5)}, pengurangan = ${pengurangan(10,3)}, pembagian = ${pembagian(15,5)}, perkalian ${perkalian(3,4)}`)

// penambahanString = (string) => {
//     let total = string.string1 + string.string2
//     return total
// }

// let data = {
//     string1 : 'Hello ',
//     string2 : 'world'
// }

// console.log(penambahanString(data))

// method

// const Aljabar = {
//     perkalian: function(number1,number2){
//         let total = number1 * number2
//         return total
//     },
//     pembagian: function(number1,number2){
//         let total = number1 / number2
//         return total
//     }
// }

// let perkalian2 = Aljabar.perkalian(40,20)
// console.log(perkalian2)

// let {perkalian,pembagian} = Aljabar;

// console.log(pembagian(50,5))

// function array

// let data = [8,6,11,35,75,90,32]
// console.log(data.sort(function(a,b){return a - b}))

// let mapping = data.map(function(num){return num})
// console.log(mapping)

// let dataString = "Hallo ini adalah javascript"
// console.log(dataString.split(""))

// let joinString = ["ayo","pasti","bisa"]
// console.log(joinString.join(" "))

// function SayHello(name, callback){
//     let greeting = `Hello ${name}`
//     callback(greeting)
// }

// function showGreeting(quote){
//     console.log(quote)
// }

// SayHello("pijar",showGreeting)

// const umur = (name,number,Showumur) => {
//     let output = `Umur ${name} adalah ${number}`
//     Showumur(output,number)
// }

// const Showumur = (output) =>console.log(output)
// // const Showumurlengkap = (output,number) => console.log(output+` kelahiran ${2022-number}`)

// umur("Revan",23,Showumur)

const Hitung = (u1,u2,x) => {
    if (u1<u2){
        console.log("sudah benar")
    } else {console.log("masih salah"+x)
}
}
// const jalan = 
// cosnt x = ()
// function pengolahan0 (u1,u2,x) {
//     z = x.length
//     pengolahan1(u1,u2,x,z)
// }
function SeleksiNilai (nilaiAwal,nilaiAkhir,dataArray) {
    z = dataArray.length
    if (nilaiAwal>nilaiAkhir){
        console.log("nilai akhir harus lebih besar dari nilai awal")
    } else if(z<5){console.log("Jumlah angka dalam dataArray harus lebih dari 5")
} else {}
    ns(nilaiAwal,nilaiAkhir,dataArray,z)
}
function ns (nilaiAwal,nilaiAkhir,dataArray,z){
    let str = ""
    for (y = 0; y<=z-1;y++){
        if (dataArray[y]<nilaiAwal) {
        } else if (dataArray[y]>nilaiAkhir) {
        } else {str += dataArray[y] +" " }
    }
    l = str.length
    if (l === 0){console.log("Nilai tidak ditemukan")}
    else {console.log(str)}
}
SeleksiNilai(5,20,[2, 25, 4, 14, 17, 30, 8],ns)
