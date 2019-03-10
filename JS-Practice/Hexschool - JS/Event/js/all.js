// event物件 - 告知當下元素資訊
// var el = document.querySelector('.btn');
// el.onclick = function(e){
//     console.log(e);  //<= 這個console.log會帶出一個objecta內容是詳細資訊
//     alert('Hello')
// }

// addEventListener - 監聽
var el = document.querySelector('.btn');
                   //'選擇事件','帶入匿名function','false'
el.addEventListener('click',function(e){
    alert("Hello");
},false)