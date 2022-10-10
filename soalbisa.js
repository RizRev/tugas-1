// searchName(“an”, 3, callback)
// var gue = ["revanda","siluman","ular","amanda","bobi"]
// var saya = "belanda kurang ajar aman"
// var jeneng = ["Abigail", "Alexandra", "Alison",
// "Amanda", "Angela", "Bella",
// "Carol", "Caroline", "Carolyn",
// "Deirdre", "Diana", "Elizabeth",
// "Ella", "Faith", "Olivia", "Penelope"];
// z = jeneng.length
// s = "an"
// g = /.an./
// var g = j
// console.log(saya.match(g))
// console.log(g.test(jeneng[1]))
// for (y=0;y<=z-1;y++){
//     if (g.test(jeneng[y])===true){
//     console.log(jeneng[y])
//     }
// }
function searchName (u1,callback) {
    var jeneng = ["Abigail", "Alexandra", "Alison",
"Amanda", "Angela", "Bella",
"Carol", "Caroline", "Carolyn",
"Deirdre", "Diana", "Elizabeth",
"Ella", "Faith", "Olivia", "Penelope"];
z = jeneng.length
g = /an./i
str = ""
for (y=0;y<=z-1;y++){
    if (g.test(jeneng[y])===true){
    str += jeneng[y] + " "
    }
}
str2 = str.split(" ")
callback (u1,str2)
}
function callback (u1,str2){
    for (d = 0;d<=u1-1;d++){
        console.log(str2[d])
    }
    // console.log("ini apa")
}
searchName( 2, callback)