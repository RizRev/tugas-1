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
//     .then(response => response)
//     .catch(response => console.log(response))

// // tugas 2
// function cekBulan(str) {
//     month = ["January","February","Maret","April","Mei","Juni","Juli","Agustu","September","Oktober","November","Desember"]
//     let cek = month.find((str) => {
//         return str === month
//     })
//     console.log(cek)
// }
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
const cekdarah = (x) => new Promise((resolve, reject) => {
    setTimeout(() => {
        if (x === "a","b","o","ab") {
            resolve('ini darah')
        }  else {reject('ini bukan darah')}
    },10000)
})
cekdarah("b")
.then(response => console.log(response))
.catch(response => console.log(response))

let perut = false
const perlumakan = new Promise((resolve, reject) => {
    if (perut) {
        resolve('Sudah Kenyang')
    } else {
        reject('Masih Lapar')
    }
})

perlumakan
.then(response => console.log(response))
.catch(response => console.log(response))


// // tugas 4
// fetch('https://jsonplaceholder.typicode.com/users')
// .then (response => response.json())
// .then (json => console.log(json))