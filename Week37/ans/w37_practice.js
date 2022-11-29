// var list = document.querySelector("ul");
// list.addEventListener("click", function (e) {
//     if (e.target.tagName === "LI") {
//       e.target.classList.toggle("checked");
//     }
// });

let inputDiv = document.getElementById("todo-input");
function addTodo() {
  var li = document.createElement("li");
  var inputValue = inputDiv.value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue == "") {
    alert("請輸入待辦事項");
  } else {
    document.getElementById("todo-list").appendChild(li);
    inputDiv.value = "";
  }
}
