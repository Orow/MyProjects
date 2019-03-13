// ----XMLHttpRequest跨瀏覽器撈資料----
// var xhr =new XMLHttpRequest();

// // readtState 
// // 0 - 已經產生一個XMLHttpRequest,但還沒有連結要撈的資料
// // 1 - 用了open()，但還沒有把資料傳送過去
// // 2 - 偵側到用了send
// // 3 - loading
// // 4 - 撈到資料,數據完全接收到了

// // 格式,要讀取的網址,同步與非同步
// // 格式: get(讀取), post(傳送資料到伺服器)
// xhr.open('get','https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json',true);
//     // 空值
// xhr.send(null);


// ----AJAX非同步的概念----
// var xhr =new XMLHttpRequest();

// xhr.open('get','https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json',true);

// // true - 非同步,不會等資料傳回來就讓程式繼續往下跑,等到資料跑完才自動回傳
// // false - 同步,會等資料跑完回傳回來,程式再繼續往下跑

// xhr.send(null);

// console.log(xhr.responseText);



// ----AJAX非同步的概念,非同步也可以處裡,取值後處理----
// var xhr =new XMLHttpRequest();

// xhr.open('get','https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json',true);

// xhr.send(null);

// xhr.onload = function (){
//     console.log(xhr.responseText);
//     var str = JSON.parse(xhr.responseText);
//     for (var i = 0 ; i < str.length; i++){
//         var kind = str[i].Kind;
//         if ( kind == "公共充電站"){
//             document.querySelector('.list').innerHTML += '<li>'+ str[i].Location + '</li>';
//         }
//     }
// }

// 1. 建立XMLHttpRequest
// 2. 傳送到對方伺服器並要資料
// 3. 回傳到自己的瀏覽器
// 4. 拿到資料後再看要怎麼處理


// ----HTTP狀態碼----
// chrome -> insepect -> network
// status = 200 資料有正確回傳,有撈到
// status = 404 資料讀取錯誤,沒有撈到

//  ----Post寫法----
var xhr = new XMLHttpRequest();

// post(傳送資料到後端伺服器)
// Hexschool AJAX practice: https://github.com/hexschool/nodejs_ajax_tutorial
xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);

// request type to backend-sever
xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
xhr.send('email=abcde1111@gmail.com&password=12345');

// post寫法,資料用json格式
// var account ={
//     email: 'qweasdqq@gamil.com',
//     password: '555'
// }
// var xhr = new XMLHttpRequest();
// xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
// xhr.setRequestHeader('Content-type','application/json');

// // send()中需要用字串傳進去
// var data = JSON.stringify(account);
// xhr.send(data);

// ----AJAX sample registration----
var send = document.querySelector('.send');
send.addEventListener('click', signup, false);

function signup() {
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;

    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true)
    xhr.setRequestHeader('Content-type', 'application/json')
    var data = JSON.stringify(account);
    xhr.send(data);
    // 因為var xhr寫在function中是區域變數,所以function執行完後,單獨執行xhr會變成not defined  
    xhr.onload = function () {
        var callBackData = JSON.parse(xhr.responseText);
        console.log(callBackData);
        var verifyStr = callBackData.message;
        if (verifyStr == '帳號註冊成功') {
            alert('帳號註冊成功!!');
        } else if (verifyStr == '此帳號已被使用') {
            alert('此帳號已被使用!!\n請更換帳號名稱並重新註冊');
        } else {
            alert('帳號註冊失敗!!');
        }
    }
}

// ----AJAX sample login----
var signIn = document.querySelector('.signIn');
signIn.addEventListener('click', signin, false);

function signin() {
    var emailStr = document.querySelector('.accountLogin').value;
    var passwordStr = document.querySelector('.passwordLogin').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;

    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true)
    xhr.setRequestHeader('Content-type', 'application/json')
    var data = JSON.stringify(account);
    xhr.send(data);
    // 因為var xhr寫在function中是區域變數,所以function執行完後,單獨執行xhr會變成not defined  
    xhr.onload = function () {
        var callBackData = JSON.parse(xhr.responseText);
        console.log(callBackData);
        var verifyStr = callBackData.message;
        if (verifyStr == '登入成功') {
            alert('帳號登入成功!!');
        } else {
            alert('此帳號不存或帳號密碼錯誤!!');
        }
    }
}