// const ReverseWord = (x) => {
//     y = x.split(" ")
//     t =  y.reverse()
//     console.log(t)
// }
// ReverseWord("Superman Spiderman Batman")



// const Palindrom = (x) => {
//     x = x.toLowerCase()
//     l = x.length
//     if (l%2==0){
//         s = l/2
//         b = s
//     } else {
//         s = (l-1)/2
//         b = s+1
//     }
//     e = ""
//     k = ""
//     for (a = l-1;a>=b;a--){
//         e += x[a]
//     }
//     for (c = 0;c<=s-1;c++) {
//         k += x[c]
//     }
//     j = (k.includes(e))
//     if (j) {
//         console.log("Palindrom")
//     } else {console.log("Tidak")}
// }
// Palindrom("revan")

const divideandsort = (angka) => {
    b = ""
    let hasil = [] 
    let output = ""
    c = b += angka
    a = c.split("0")
    d = a.length
    for (r = 0;r<d;r++) {
        w = a[r].split("")
        v = w.sort(function(a,b){return a-b})
        hasil = [...hasil,v.join('')]
    }
    output = hasil.join('')
    console.log(output)
}
divideandsort(5956560159466056)

// const PijarFood = (harga,Code,Jarak,Pajak) => {
//     a1 = harga<25000
//     a2 = harga>=25000
//     a3 = harga>=50000
//     b1 = Code === "PIJARFOOD5"
//     b2 = Code === "DITRAKTIRPIJAR"
//     c = Jarak > 2
//     if (a1) {
//         harga = harga
//         console.log("Harga = "+harga)
//         console.log("Potongan = " + 0)
//     } else if (a3) {
//         if (b1&&harga<=100000) {
//             potongan = harga*(50/100)
//             harga = harga-potongan
//             console.log("Harga = "+harga)
//             console.log("Potongan = " + potongan)
//         } else if (b1){
//             potongan = 50000
//             harga = harga-potongan
//             console.log("Harga = "+harga)
//             console.log("Potongan = " + potongan)
//         } else if (b2) {
//             potongan = 30000
//             harga = harga-potongan
//             console.log("Harga = "+harga)
//             console.log("Potongan = " + potongan)
//         } else{
//             harga = harga
//             console.log("Harga = "+harga)
//             console.log("Potongan = " + 0)}
//     }else {
//         if (b2&&harga<=50000) {
//             potongan = harga*(60/100)
//             harga = harga-potongan
//             console.log("Harga = "+harga)
//             console.log("Potongan = " + potongan)
//         } else if (b2) {
//             potongan = 30000
//             harga = harga - potongan 
//             console.log("Harga = " + harga)
//             console.log("Potongan = " + potongan)
//         } else {
//             harga = harga
//             console.log("harga normal "+harga)
//             console.log("Potongan = " + 0)}
//     }TotalOngkir(Jarak,c,Pajak,harga);}
//     const TotalOngkir = (Jarak,c,Pajak,harga) => {
//         if (c) {
//             Ongkir = 5000+ (Jarak-2)*3000
//             console.log("Biaya Antar " + Ongkir)
//         } else {
//             Ongkir = 5000
//             console.log("Biaya Antar 5000")}
//         if (Pajak === true) {
//             HargaTotal = harga+Ongkir+(harga+Ongkir)*(5/100)
//             console.log("Pajak = "+(harga+Ongkir)*(5/100))
//             console.log("Total Order = " + HargaTotal)
//         } else {console.log("Pajak = "+0)
//             console.log("Total Order = "+(harga+Ongkir))}}
// PijarFood (30000,"DITRAKTIRPIJAR",3,true)

