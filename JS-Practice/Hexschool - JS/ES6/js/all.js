// let, const 用來宣告區塊裡的變數
// 區塊 = {}
if (3 > 2) {
    a = 1;
}
// 此a = 全域變數 

if (3 > 2) {
    let a = 1;
}
// 此a != 全域變數


// 下面做法不會影響到全域變數
var a = 0;
function changeA(){
    let a = 0;
    a = 1;
    console.log(a);
}
changeA();
console.log(a);
// ---------------------------


