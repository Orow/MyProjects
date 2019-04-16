let list = document.querySelector(".lists");
let textArea = document.querySelector(".textClass");
let addList = document.querySelector(".addList");
let data = JSON.parse(localStorage.getItem("toDoLists")) || [];

addList.addEventListener("click", saveItem);
list.addEventListener("click", deleteItem);
updateList(data);

function saveItem(e) {
  e.preventDefault();
  let str = textArea.value;
  let todo = {
    content: str
  };
  data.push(todo);
  updateList(data);
  localStorage.setItem("toDoLists", JSON.stringify(data));
}

function updateList(items) {
    let str = "";
    for (let i = 0; i < items.length; i++) {
      str += "<li><a href='#' data-index=" + i +">刪除</a> <span>" + items[i].content + "</span></li>";
    }
    list.innerHTML = str;
  }

function deleteItem(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'A') {
    return
  };
  let num = e.target.dataset.index;
  console.log(e);
  data.splice(num, 1);
  localStorage.setItem("toDoLists", JSON.stringify(data));
  updateList(data);
}


