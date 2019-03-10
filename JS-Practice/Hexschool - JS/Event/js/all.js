// ----event物件 - 告知當下元素資訊----
// var el = document.querySelector('.btn');
// el.onclick = function(e){
//     console.log(e);  //<= 這個console.log會帶出一個objecta內容是詳細資訊
//     alert('Hello')
// }

// ----addEventListener - 監聽----
// var el = document.querySelector('.btn');
//                    //'選擇事件','帶入匿名function','false'
// el.addEventListener('click',function(e){
//     alert("Hello");
// },false)

// ----onclick & addEventListener事件綁定的差異----
// onclick只會顯示最後一個的事件
// var elOn = document.querySelector('.btnOn');
// elOn.onclick = function(){
//     alert('onclick-1');
// }
// elOn.onclick = function(){
//     alert('onclick-2');
// }

// addEventListener會兩個事件都觸發到
// var elAdd = document.querySelector('.btnAdd');
// elAdd.addEventListener('click',function(){
//     alert('add-1');
// },false)
// elAdd.addEventListener('click',function(){
//     alert('add-2');
// },false)


// ----Event Bubbling & Capturing----
// var elbox = document.querySelector('.box');
// elbox.addEventListener('click',function(){
//     alert('hello box');
//     console.log('box');
// },false);

// var elbody =document.querySelector('.body');
// elbody.addEventListener('click',function(){
//     alert('hello body');
//     console.log('body');
// },true);
//false - 從指定元素往外找 - event bubbling
//true - 從最外面往裡面找指定元素 - event capturing

// ----Stop propagation - 停止傳遞----
// var elbox = document.querySelector('.box');
// elbox.addEventListener('click',function(e){
//     e.stopPropagation();   
//     alert('hello box');
//     console.log('box');
// },false);

// var elbody =document.querySelector('.body');
// elbody.addEventListener('click',function(){
//     alert('hello body');
//     console.log('body');
// },true);

// ----preventDefault取消預設觸發行為----
var el = document.querySelector('.link');
el.addEventListener('click',function(e){
    // 取消默認的行爲
    // 這邊是取消點擊a連結後跳轉到指定頁面

    // 可以用在submit按鈕,送出到後端前先在local端驗證有沒有資料
    e.preventDefault();
},false);