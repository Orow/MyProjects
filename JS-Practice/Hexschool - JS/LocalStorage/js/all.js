// 設定名字進localStorage
// var str = "Orow";
// localStorage.setItem("myName",str);

// console.log(localStorage.getItem("myName"));

// var btn = document.querySelector('.btnClass');
// function saveName(e){
//     var str = document.querySelector('.textClass').value;
//     localStorage.setItem("myName",str);
// }
// btn.addEventListener('click',saveName);

// var call =document.querySelector('.btnCall');
// function callName(e){
//     var str = localStorage.getItem('myName');
//     alert(str);
// }
// call.addEventListener('click',callName);





// ---- array to string / string to array ----
// 因為localstorage只會保存string資料
// var county = [
//     {farmer : '哈維'}
// ];

// var countyString = JSON.stringify(county)
// console.log(countyString);
// localStorage.setItem('countyItem',countyString);

// var getData = localStorage.getItem('countyItem');
// console.log(getData);

// var getDataArray = JSON.parse(getData);
// console.log(getDataArray[0].farmer);




// ----data-set 抓取資料----
// var dataSet = document.querySelector('.listli').dataset;
// console.log(dataSet);

// var dataSetDetail1 = document.querySelector('.listli').dataset.num;
// console.log(dataSetDetail1);

// var dataSetDetail2 = document.querySelector('.listli').dataset.dog;
// console.log(dataSetDetail2);

// var listLi = document.querySelector('.listli');
// // 確認點擊的人名以及相關資訊

// function checkList(e){
//     var num = e.target.dataset.num;
//     var dog = e.target.dataset.dog;
//     console.log('第' + num + '個人');
//     console.log('有'+ dog +'隻狗');
// }

// listLi.addEventListener('click',checkList,false);





// ----dataset, array 運用----
var county = [
    {
      farmer:'卡斯伯'
    }
    ,{
      farmer:'查理'
    }
  ]
  var list = document.querySelector('.list');
  
  //更新農場資料
  function updateList(){
    var str = '';
    var len = county.length;
    for(var i = 0;len>i;i++){
      str+='<li data-num="'+i+'">'+county[i].farmer+'</li>'
    }
    list.innerHTML = str;
  }
  updateList();
  
  //確認點擊的農夫是誰
  function checkList(e){
     var num = e.target.nodeName;
     if (num !== "LI"){return}
     var str = e.target.dataset.num;
     alert('現在所選擇的農夫是'+ county[str].farmer);
  }

  list.addEventListener('click',checkList,false);
