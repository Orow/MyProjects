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
const listLen = document.querySelectorAll('.list li').length;
for (let i = 0; i < listLen; i++) {
    document.querySelectorAll('.list li')[i].addEventListener('click', function () {
        alert(i + 1);
    })
}