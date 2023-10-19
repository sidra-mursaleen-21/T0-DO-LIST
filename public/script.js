var list = document.getElementById("list");
function addItems() {
  var item = document.getElementById("input");
  var listElement = document.createElement("li");
  var listText = document.createTextNode(item.value);
  listElement.appendChild(listText);
  listElement.setAttribute("class","listitem")
  list.appendChild(listElement);

  var buttonElement = document.createElement("button");
  var buttonText = document.createTextNode("Delete");
  buttonElement.appendChild(buttonText);
  buttonElement.setAttribute("onClick", "deleteElement(this)");
  buttonElement.setAttribute("class","button");

  listElement.appendChild(buttonElement);

  var editElement = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editElement.appendChild(editText);
  editElement.setAttribute("onClick", "editElement(this)");
  editElement.setAttribute("class","button");

  listElement.appendChild(editElement);

  item.value = "";
}

function deleteAll() {
  list.innerHTML = "";
}

function deleteElement(b) {
  console.log(b.parentNode.remove());
}

function editElement(e) {
  var newItem = prompt("Enter you new Item .");
  e.parentNode.firstChild.nodeValue = newItem;
}
