var list = document.getElementById("todo-list");
list.addEventListener("click", function (e) {
  if (e.target.nodeName == "LI") {
    e.target.classList.toggle("checked");
  }
});

let i;
let todoList = document.getElementsByTagName("li");
for(i = 0; i < todoList.length; i++) {
  let span = document.createElement("span");
  let x = document.createTextNode("x");
  span.className = "close";
  span.appendChild(x);
  todoList[i].appendChild(span);
}

let close = document.getElementsByClassName("close");
for(i = 0; i < close.length; i++) {
  close[i].addEventListener("click", function (e) {
    let div = this.parentElement;
    div.style.display = "none";
  });
}

let inputDiv = document.getElementById("todo-input");

function addTodo() {
  if (inputValue == "") {
    alert("請輸入待辦事項");
  } else {
    var li = document.createElement("li");
    var inputValue = inputDiv.value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("todo-list").appendChild(li);
    inputDiv.value = "";
    let span = document.createElement("span");
    let x = document.createTextNode("x");
    span.className = "close";
    span.appendChild(x);
    span.addEventListener("click", function (e) {
      let div = this.parentElement;
      div.style.display = "none";
    });
    li.appendChild(span);
  }
}
