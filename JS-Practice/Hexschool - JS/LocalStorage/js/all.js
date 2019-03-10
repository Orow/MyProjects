// 設定名字進localStorage
// var str = "Orow";
// localStorage.setItem("myName",str);

// console.log(localStorage.getItem("myName"));

var btn = document.querySelector('.btnClass');
function saveName(e){
    var str = document.querySelector('.textClass').value;
    localStorage.setItem("myName",str);
}
btn.addEventListener('click',saveName);

var call =document.querySelector('.btnCall');
function callName(e){
    var str = localStorage.getItem('myName');
    alert(str);
}
call.addEventListener('click',callName);


// ---- array to string / string to array ----
// 因為localstorage只會保存string資料
var county = [
    {farmer : '哈維'}
];

var countyString = JSON.stringify(county)
console.log(countyString);
localStorage.setItem('countyItem',countyString);

var getData = localStorage.getItem('countyItem');
console.log(getData);

var getDataArray = JSON.parse(getData);
console.log(getDataArray[0].farmer);