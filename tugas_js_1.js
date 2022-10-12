// function printTriangle (num){
//     let str = "";
//     for (let a = 1; a <= num; a++) {
//       for (let b = 1;b <=a;b++) {
//         str += a+" "
//       }
//       str += "\n"
//     }
//     return console.log(str)
//   }
// printTriangle(10)
// function printGanjilGenap (angka){
//       for (let a = 1;a<=angka;a++){
//           if (a%2==0){
//               console.log(a+" merupakan bilangan genap")
//           } else {console.log (a+" merupakan bilangan ganjil")}
//       }
//   }
function printGanjilGenap (angka){
  for (let a = 1; a<=angka;a++){
    let hasil = a%2==0 ? `${a} adalah bilangan genap` : `${a} adalah bilangan  ganjil`
    console.log(hasil)
  }
}
printGanjilGenap(10)
  // let name = "Achmad Rizky Revanda"
  // var email = "rizkyrevanda@gmail.com"
  // const addres = {
  //   location : "jl samudra 24b kamar no 10",
  //   Province : "east java",
  //   city : "Jember"
  // }
  // let isMerried = false
  // var hobbies = ["traveling","swimming","gaming"]
  // console.log (typeof(name));  
  // console.log(typeof(addres));
  // console.log(typeof(isMerried))