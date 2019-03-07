// -----帶參數-----
// function count(oneNum, TwoNum){
//     var total = (oneNum + TwoNum) * 10;
//     document.getElementById("greetId").textContent = "三瓶水的價錢是" + total + "元";
// }
// count(1,2);


// -----全域變數/區域變數-----
// 區域變數 - total

function count(oneNum, TwoNum){
    var total = (oneNum + TwoNum) * 10;
    document.getElementById("greetId").textContent = "三瓶水的價錢是" + total + "元";
}
count(1,2);
console.log(total); 
// total => undefined

// 全域變數 - total
var total
function count(oneNum, TwoNum){
    total = (oneNum + TwoNum) * 10;
    document.getElementById("greetId").textContent = "三瓶水的價錢是" + total + "元";
}
count(1,2);
console.log(total);