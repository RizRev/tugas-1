// let x = [2,25,4,14,17,30,8];
// var u1 = 5
// var u2 = 20
// panjang = x.length
let result = ""
for (y=0;y<=panjang-1;y++){
    if (x[y]<5){
        console.log("bilangan tidak memenuhi")
        } else if(x[y]>u2){
            console.log("bilangan lebih dari ketentuan")
        } else {
            s = x[y]+" "
            result += s
        }
} 
return result
console.log(result)
// if (x[y]<5){
// console.log("bilangan tidak memenuhi")
// } else if(x[y]>u2){
//     console.log("bilangan lebih dari ketentuan")
// } else {resul + x[y]}
// // var z = x.sort();
// if (panjang>5){
//     if (u1>u2) {
//         console.log("nilai awal harus lebih kecil dari nilai akhir")
//     } else {
//         console.log(x)
//     }
// } else {
//     console.log('Jumlah angka dalam dataArray harus lebih dari 5')
// }
// console.log(z)
// var u1 = 5
// var u2 = 20
// for (y = 0;y<=panjang;y++){
//     x = x-u1
//     if (x[y] < (u2-u1)) {
//         console.log(x[y])
//     } else {
//         console.log("tidak memenuhi")
//     }
// }
const SeleksiNilai = (nilaiAwal,nilaiAkhir,x) => {
    panjang = x.length
    if (panjang>5){
        if (nilaiAwal>nilaiAkhir) {
            console.log("nilai awal harus lebih kecil dari nilai akhir")
        } else { panjang = x.length
            for (y=0;y<=panjang-1;y++){
                if (x[y]<5){
                    console.log("bilangan tidak memenuhi")
                    } else if(x[y]>u2){
                        console.log("bilangan lebih dari ketentuan")
                    } else {
                        s = x[y]+" "
                        result += s
                    }
            } 
            console.log(result)
        }
    } else {
        console.log('Jumlah angka dalam dataArray harus lebih dari 5')
    }
}

SeleksiNilai(5, 20 , [2, 25, 4, 14, 17, 30, 8])