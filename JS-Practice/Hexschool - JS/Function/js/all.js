// -----帶參數-----
// function count(oneNum, TwoNum){
//     var total = (oneNum + TwoNum) * 10;
//     document.getElementById("greetId").textContent = "三瓶水的價錢是" + total + "元";
// }
// count(1,2);
// -----------------




// -----全域變數(global)/區域變數(local)-----
// 區域變數 - total
// function count(oneNum, TwoNum){
//     // 區域
//     var total = (oneNum + TwoNum) * 10;
//     document.getElementById("greetId").textContent = "三瓶水的價錢是" + total + "元";
// }
// count(1,2);
// console.log(total); 
// total => undefined

// 全域變數 - total
// 全域
// var total
// function count(oneNum, TwoNum){
//     // 區域
//     total = (oneNum + TwoNum) * 10;
//     document.getElementById("greetId").textContent = "三瓶水的價錢是" + total + "元";
// }
// count(1,2);
// console.log(total);

// ------------------------------------------


// --------Function 計算機案例----------
document.getElementById("countId").onclick = function (){
    // alert('被點擊了')
    var hamPrice = 70;
    var cokePrice = 30;
    var hamNum = (parseInt(document.getElementById("hamNumId").value)) * hamPrice;
    var cokeNum = (parseInt(document.getElementById("cokeNumId").value)) * cokePrice;
    // parseInt => string convert to number
    console.log(hamNum + cokeNum);
    document.getElementById("totalId").textContent =hamNum + cokeNum;
}

// -------------------------------------

// ----------function + return 用法-----------
function getHamPrice(num){
    var hamPrice = 70;
    var total = hamPrice * num;
    return total;
}

var wade = getHamPrice(15);
var peter = getHamPrice(38);
console.log(wade, peter);