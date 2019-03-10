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