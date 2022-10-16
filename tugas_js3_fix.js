// tugas 1
const cekHariKerja = (day) => {
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            const dataDay = ['senin','selasa','rabu','kamis','jumat']
            let cek = dataDay.find((item) =>{
                return item === day
            })
            if (cek){
                resolve(cek)
            } else{
                reject(new Error('Hari ini bukan hari kerja'))
            }
        },3000)
    })
}
// try catch
const cekHariLibur = async(day) => {
    try {
        const response = await cekHariKerja(day) 
        console.log(response + " merupakan hari kerja")
    } catch 
        (error) {console.log(error.message)}
}
cekHariLibur("rabu")
// then catch
cekHariKerja('selasa')
    .then(response => console.log(response + " merupakan hari kerja"))
    .catch(response => console.log(response.message))
// then adalah perintah yang akan mengambil hasil dari resolve, sedangkan catch akan mengambil hasil dari reject. untuk try sendiri akan melakukan suatu fungsi kemudia akan menghasil sebuah hasil

// tugas 2

const getMonth = (callback) => {
    setTimeout(() => {
        let error = true
        let month = ["January","February","Maret","April","Mei","Juni","Juli","Agustu","September","Oktober","November","Desember"]
        if (!error) {
            callback(null,month)
        } else {
            callback(new Error("Sorry Data Not Found"),[])
        }
    },1000);
}
getMonth((callback,month) => month.length>0 ? console.log(month) : console.log(callback.message))

//tugas 3
const cekdarah = (x) => new Promise((resolve, reject) => {
    setTimeout(() => {
        let darah = ["a","b","o","ab"]
        let cek = darah.find((cekdarah) => {
            return cekdarah === x
        })
        if (cek) {
            resolve('ini darah')
        }  else {reject('ini bukan darah')}
    },1000)
})
cekdarah("biru")
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


// tugas 4
var fetch = require(`cross-fetch`);
fetch('https://jsonplaceholder.typicode.com/users')
.then (result => result.json())
.then (result => console.log(result.map(item => item.name)))

