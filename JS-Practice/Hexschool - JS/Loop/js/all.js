// ----for if 迴圈----
var farms = [
    {
        farmer : '威廉',
        field : 15,
        chick : 120
    },
    {
        farmer : '約翰',
        field : 12,
        chick : 100
    },
    {
        farmer : '哈維',
        field : 20,
        chick : 200
    }
]

var farmsTotal = farms.length;
for (var i = 0 ; i < farmsTotal ; i ++){
    // console.log(farms[i].farmer + '的農場有養了' + farms[i].chick + '的雞');
    if (farms[i].chick >= 100 ){
    document.getElementById('chickId').textContent = farms[i].farmer + '的農場有養了' + farms[i].chick + '的雞';
    }
}