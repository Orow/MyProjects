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


// Function 計算機案例
document.getElementById("countId").onclick = function (){
    // alert('被點擊了')
    var hamNum = document.getElementById("hamNumId").value;
    var cokeNum = document.getElementById("cokeNumId").value;
    alert(hamNum);
    alert(cokeNum);
}