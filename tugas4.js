// // tugas 1
// const cekHariKerja = (day) => {
//     return new Promise ((resolve, reject)=>{
//         setTimeout(()=>{
//             const dataDay = ['senin','selasa','rabu','kamis','jumat']
//             let cek = dataDay.find((item) =>{
//                 return item === day
//             })
//             if (cek){
//                 resolve(cek, console.log('hari ini hari kerja'))
//             } else{
//                 reject(new Error('Hari ini bukan hari kerja'))
//             }
//         },3000)
//     })
// }
// cekHariKerja('senin')
//     .then(response => console.log(response))
//     .catch(response => console.log(response))

// then adalah perintah yang akan mengambil hasil dari resolve, sedangkan catch akan mengambil hasil dari reject. untuk try sendiri akan melakukan suatu fungsi kemudia akan menghasil sebuah hasil

// tugas 2
const cekBulan = (str2) => {
    // str2 = ""
    return new Promise((resolve, reject) => {
        const month = ["January","February","Maret","April","Mei","Juni","Juli","Agustu","September","Oktober","November","Desember"]
    var cek = month.find((str1) => {
        return str1 === str2
    })
    if (cek) {
        console.log("ada bulan")
    } else {console.log("tidak ada bulan")}
    })
    // console.log(str2)
}
cekBulan("Mei")
// const getMonth = (callback) => {
//     setTimeout(() => {
//         let error = false
//         let month = ["January","February","Maret","April","Mei","Juni","Juli","Agustu","September","Oktober","November","Desember"]
//         if (!error) {
//             callback(null, month)
//         } else {
//             callback(new Error("Sorry Data Not Found"),[])
//         }
//     },4000);
// }

// cekBulan("January")


//tugas 3
// const cekdarah = (x) => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         if (x === "a","b","o","ab") {
//             resolve('ini darah')
//         }  else {reject('ini bukan darah')}
//     },10000)
// })
// cekdarah("b")
// .then(response => console.log(response))
// .catch(response => console.log(response))

// let perut = false
// const perlumakan = new Promise((resolve, reject) => {
//     if (perut) {
//         resolve('Sudah Kenyang')
//     } else {
//         reject('Masih Lapar')
//     }
// })

// perlumakan
// .then(response => console.log(response))
// .catch(response => console.log(response))


// // tugas 4
// import fetch from `cross-fetch`;
// fetch('https://jsonplaceholder.typicode.com/users')
// .then (response => response.json())
// .then (json => console.log(json))