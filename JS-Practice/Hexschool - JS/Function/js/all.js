// 帶參數
function count(oneNum, TwoNum){
    var total = (oneNum + TwoNum) * 10;
    document.getElementById("greetId").textContent = "3瓶水的價錢是" + total + "元";
}
count(1,2);