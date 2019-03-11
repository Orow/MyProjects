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
var xhr =new XMLHttpRequest();

xhr.open('get','https://data.kcg.gov.tw/dataset/a98754a3-3446-4c9a-abfc-58dc49f2158c/resource/48d4dfc4-a4b2-44a5-bdec-70f9558cd25d/download/yopendata1070622opendatajson-1070622.json',true);

// true - 非同步,不會等資料傳回來就讓程式繼續往下跑,等到資料跑完才自動回傳
// false - 同步,會等資料跑完回傳回來,程式再繼續往下跑

xhr.send(null);

console.log(xhr.responseText);