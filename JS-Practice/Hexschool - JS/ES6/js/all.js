// ----------ES6----------
// ----let - if,function的用法----
// let, const 用來宣告區塊裡的變數
// 區塊 = {}
// if (3 > 2) {
//     a = 1;
// }
// 此a = 全域變數 

// if (3 > 2) {
//     let a = 1;
// }
// 此a != 全域變數


// 下面做法不會影響到全域變數
// var a = 0;
// function changeA(){
//     let a = 0;
//     a = 1;
//     console.log(a);
// }
// changeA();
// console.log(a);



// ----let - for 用法----
// 不會污染到全域變數(global)
// for (let i = 0 ; i < 3 ; i++){
//     console.log(i);
// }

// 點擊list就alert的list編號
// 污染到i,結果i都是=3
// const listLen = document.querySelectorAll('.list li').length;
// for (var i = 0 ; i < listLen ; i++){
//     document.querySelectorAll('.list li')[i].addEventListener('click',function(){
//         alert(i+1);
//     }) 
// }

// 改用let即可
// const listLen = document.querySelectorAll('.list li').length;
// for (let i = 0; i < listLen; i++) {
//     document.querySelectorAll('.list li')[i].addEventListener('click', function () {
//         alert(i + 1);
//     })
// }

// ----const 唯獨變數----
// 不能被修改, ex. url網址
// object, array還是可以, 下面範例obj = {'x'}
// const obj ={
//     url:'http://www.x.com'
// };
// obj.url = 'x'
// console.log(obj);

// 如果想要object, array都不能被修改
// const obj ={
//     url:'http://www.x.com'
// };
// // 用freeze來凍結
// Object.freeze(obj);
// obj.url = 'x'
// console.log(obj);


// ----let, const注意事項與使用時機----
// // 特性一 - var會移動到最上面執行
// // 1st a = undefined(不是找不到), 2nd a = 3
// console.log(a);
// var a = 3;
// console.log(a);

// // // 改用let(const一樣)
// // // 1st a = 找不到, 2nd a = 3
// console.log(a);
// let a = 3;
// console.log(a);

// // 特性二 - 同區塊上不能二次命名
// var a = 1;
// var a = 2;

// // let, const 這樣寫會顯示b已經被宣告 
// let b = 5;
// let b = 6;

// // 特性三 - b = 5 也不會進入到window裡面


// ----ES6 - 字串----
const list =document.querySelector('.list');
const photoUrl =  'https://source.unsplash.com/random/800x600';
// 原本做法如下
// list.innerHTML = '<li><img src=' + photoUrl + '></li>'
// ES6
// 最外面用``包起來,裡面""中需要用${}來包住
list.innerHTML = `<li><img src="${photoUrl}"></li>`

