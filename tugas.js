function printTriangle (num){
    let str = "";
    for (let a = 1; a <= num; a++) {
      for (let b = 1;b <=a;b++) {
        str += a+" "
      }
      str += "\n"
    }
    return console.log(str)
  }
  printTriangle(10)
  function printGanjilGenap (angka){
      for (let a = 1;a<=angka;a++){
          if (a%2==0){
              console.log(a+" merupakan bilangan genap")
          } else {console.log (a+" merupakan bilangan ganjil")}
      }
  }
  printGanjilGenap(10)