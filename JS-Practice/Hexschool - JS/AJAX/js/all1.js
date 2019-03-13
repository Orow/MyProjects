// signup
var send = document.querySelector('.send');
send.addEventListener('click', signup, false);

function signup(){
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;
    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signup',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    
    xhr.onload = function (){
        var callBack = JSON.parse(xhr.responseText);
        console.log(xhr);
        console.log(callBack);
        var verifyStr = callBack.message;
        if (verifyStr == '帳號註冊成功'){
            alert('帳號註冊成功')
        } else if ( verifyStr == '此帳號已被使用'){
            alert ('此帳號已被使用!!\n請更換帳號名稱並重新註冊')
        } else {
            alert('帳號格式錯誤,註冊失敗')
        }
    }
}

// signin
var signIn = document.querySelector('.signIn');
signIn.addEventListener('click', signin, false);

function signin(){
    var emailStr = document.querySelector('.accountLogin').value;
    var passwordStr = document.querySelector('.passwordLogin').value;
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;
    var xhr = new XMLHttpRequest();
    xhr.open('post','https://hexschool-tutorial.herokuapp.com/api/signin',true);
    xhr.setRequestHeader('Content-type','application/json');
    var data = JSON.stringify(account);
    xhr.send(data);
    
    xhr.onload = function (){
        var callBack = JSON.parse(xhr.responseText);
        console.log(xhr);
        console.log(callBack);
        var verifyStr = callBack.message;
        if (verifyStr == '登入成功'){
            alert('帳號登入成功')
        } else {
            alert('此帳號不存或帳號密碼錯誤!!')
        }
    }
}
