var list = document.querySelector('.list');
var addList = document.querySelector('.addList');
var textArea = document.querySelector('.textClass');
var data = JSON.parse(localStorage.getItem('toDoList')) || [];

addList.addEventListener('click',saveItem,false);
list.addEventListener('click',deleteItem,false);
updateList(data);


function saveItem(e){
    e.preventDefault();
    var str = textArea.value ;
    var todo = {
        content : str
    };
    data.push(todo);
    updateList(data);
    localStorage.setItem('toDoList',JSON.stringify(data));
}

function deleteItem(e){
    e.preventDefault();
    if (e.target.nodeName !== 'A'){return};
    var num = e.target.dataset.index;
    data.splice(num,1);
    localStorage.setItem('toDoList',JSON.stringify(data));
    updateList(data);
}

function updateList(items){
    var str = "";
    for ( var i = 0 ; i < items.length ; i++){
        str += '<li><a href="#" data-index=' + i + '>刪除</a><span>' + items[i].content +'</span</li>';
    }
    list.innerHTML = str;
}

