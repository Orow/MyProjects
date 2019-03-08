// ----for if 迴圈----
var farms = [
    {
        farmer : '威廉',
        field : 15,
        chick : 120,
        banana : 6000
    },
    {
        farmer : '約翰',
        field : 12,
        chick : 50,
        banana : 5000
    },
    {
        farmer : '哈維',
        field : 20,
        chick : 200,
        banana : 9000
    }
]
// 超過或剛好養了100隻雞
var farmsTotal = farms.length;
for (var i = 0 ; i < farmsTotal ; i ++){
    // console.log(farms[i].farmer + '的農場有養了' + farms[i].chick + '隻的雞');
    if (farms[i].chick >= 100 ){
        var total = farms[i].farmer + '的農場有養了' + farms[i].chick + '隻的雞' ;
        $('#chickId').append(total);
        // document.getElementById('chickId').textContent = farms[i].farmer + '的農場有養了' + farms[i].chick + '隻的雞';
        // document.getElementById('chickId').innerHTML += farms[i].farmer + '的農場有養了' + farms[i].chick + '隻的雞';
    }
}

// ----for if i+= i-=----
// 買了50隻雞後剩多少隻雞
// var farmsTotal = farms.length;
// for (var i = 0 ; i < farmsTotal ; i++){
//     if (farms[i].chick >= 50){
//         console.log(farms[i].farmer + '的農場養的雞有足夠數量可以賣');
//         farms[i].chick -= 50;
//         console.log(farms[i].farmer + '農場的雞剩下' + farms[i].chick);
//         break;  
//         // 第一家就買到就不買了, 加上break;會停止迴圈
//     }
// }


// 每個農場個買200跟香蕉後,所有農場的香蕉剩多少根
// var farmsTotal = farms.length;
// var bananaTotal = 0;
// for (var i = 0 ; i < farmsTotal ; i++){
//     if (farms[i].banana >= 200){
//         farms[i].banana -= 200;
//         bananaTotal += farms[i].banana;
//     }
// }
// console.log('所有農場的香蕉剩下' + bananaTotal + '根');