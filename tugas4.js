// const Palindrom = (x) => {
//     y = x.split("")
//     y2 = y.reverse()
//     z = y.length
    // if (z%2==0){
    //     s = z/2
    //     b = s
    // } else {
    //     s = (z-1)/2
    //     b = s+1
    // }
// //     // r = y[1].includes(y[3])
// //     // console.log(s)
// //     // console.log(b)
//     for (a=0;a<=s-1;a++) {
//         for (c=z-1;c>=b;c--){
//             if (y[a].includes(y[c])){
//                 console.log("benar")
//                 console.log(y[a] + " dan " + y[c])
//             } else {console.log("salah"+y[a]+y[c])}
//         }}
//         // for (c=z-1;c>=b;c--){
//         //     console.log(y[c])}
//             // if (y[a].includes(y[c])) {
//             //     console.log("angka palindrom")
//             // } else {console.log("bukan palindrom")}
//     //     }
//     // }
// }
// Palindrom("malam")

// x = "malam"
// panjang = x.length
// s = 3 
// e = ""
// for (a = 3;a<=4; a++) {
//     e +=  x[a]
// }
// console.log(x.includes(e))
// console.log(e)

// const Palindrom = (x) => {
//     // l = x.length ? b = s  s = l/2 : b = s+1
//     // l%2==0 ? 
//     if (l%2==0){
//         s = l/2
//         b = s
//     } else {
//         s = (l-1)/2
//         b = s+1
//     }
//     e = ""
//     k = ""
//     for (a = l-1;a>b-1;a--){
//         e += x[a]
//     }
//     for (c = 0;c<=s-1;c++) {
//         k += x[c]
//     }
//     k.includes(e) ? console.log("Palindrom") : console.log("Tidak")
// }
// Palindrom("qwerty")
// let a = 20
// let c = 10
// for (b=a;b>=c;b--){
//     console.log(b)
// }


// const divideandsort = (angka) => {
//     b = ""
//     c = b += angka
//     a = c.split("0")
//     d = a.length
//     for (r = 0;r<d;r++) {
//         w = a[r].split("")
//         v = w.sort(function(a,b){return a-b})
//         console.log(v)
//     }
// }
// divideandsort(5956560159466056)
// const ss = (nilai3) => {
//     console.log(nilai3)
// }

// const gg = (utang,nilai2) => {
//     utang>5000 ? test('punya utang') : test('tidak punya utang')
//     nilai2 = ss('ini nilai 2')
// }
// function test(value) {
//     value = value+'iya'
//     console.log(value)
// }
// const value = gg
// const nilai3 = gg

// gg(2000,5000)

const PijarFood = (harga,Code,Jarak,Pajak) => {
    a1 = harga<25000
    a2 = harga>=25000
    a3 = harga>=50000
    b1 = Code === "PIJARFOOD5"
    b2 = Code === "DITRAKTIRPIJAR"
    c = Jarak > 2
    d = Pajak === true 
    if (a1) {
        harga = harga
        // Pajak(harga)
        console.log("harga normal "+harga)
    } else if (a3) {
        if (b1&&harga<=100000) {
            harga = harga-(harga*(50/100))
            // Pajak(harga)
            console.log("harga diatas 50k < 100000 dan pakai kupan b1 "+harga)
        } else if (b1){
            harga = harga-50000
            // Pajak(harga)
            console.log("harga diatas 100k dan pakai kupan b1 "+harga)
        } else if (b2) {
            harga = harga-30000
            // Pajak(harga)
            console.log("harga diatas 50k kupon b2 "+harga)
        } else{
            harga = harga
            // Pajak(harga)
            console.log("harga normal "+harga)}
    }else {
        if (b2&&harga<=50000) {
            harga = harga-(harga*(60/100))
            // Pajak(harga)
            console.log("harga diatas 25k<50 kupon b2 "+harga)
        } else if (b2) {
            harga = harga - 30000 
            // Pajak(harga)
            console.log("harga diatas 25k lebih dari 50 kupon b2 " + harga)
        } else {
            harga = harga
            // Pajak(harga)
            console.log("harga normal "+harga)}
    }
    // Pajak(harga)
    // harga1 = TotalOngkir(harga)
    // console.log(harga)
    TotalOngkir(Jarak,c,Pajak,harga);
    //  Pajak(harga);
    }

// console.log(PijarFood.harga)
// PijarFood(harga => console.log(harga))
const TotalOngkir = (Jarak,c,Pajak,harga) => {
    if (c) {
        Ongkir = 5000+ (Jarak-2)*3000
        // Pajak(Ongkir)
        console.log("ongkos " + Ongkir)
    } else {
        // Pajak(Ongkir)
        Ongkir = 5000
        console.log("ongkos 5000")}
    if (Pajak === true) {
        HargaTotal = harga+Ongkir+(harga+Ongkir)*(5/100)
        console.log("Total Order = " + HargaTotal)
    } else {console.log("Total Orde = "+(harga+Ongkir))}
    // Pajak(Ongkir)
    console.log(harga)
    console.log(Pajak)
    // varongkir = ll(Ongkir)
}
// const ll = (hargabaru,ongkrbaru) => {
//     console.log(hargabaru)
//     console.log(ongkrbaru)
// }
// const d = PijarFood
// const harga1 = PijarFood
// const Ongkir = TotalOngkir

// const Pajak = (harga1,Ongkir1,d) => {
//    console.log("ongkir"+Ongkir+"pajak"+d+"hargamakan"+harga1)
// } 
    // }(a2){console.log("harga diantara 25k dan 50k")}
    // if (b1) {
    //     console.log("code 1")
    // } else if (b2) {
    //     console.log("code 2")
    // } else {console.log("tidak")}
    // if (c) {
    //     console.log("ongkos " +(5000+ (Jarak-2)*3000))
    // } else {console.log("ongkos 50000")}
    // if (d) {
    //     console.log(harga + (harga*(5/100)))
    // } else{console.log("harga normal")}


PijarFood (180000,"PIJARFOOD5",7,true)