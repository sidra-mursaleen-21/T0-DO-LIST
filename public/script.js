// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCDD_nFcyfrX0hA69bCj7ki0tZ282illlc",
  authDomain: "to-do-list-f7fa6.firebaseapp.com",
  databaseURL: "https://to-do-list-f7fa6-default-rtdb.firebaseio.com",
  projectId: "to-do-list-f7fa6",
  storageBucket: "to-do-list-f7fa6.appspot.com",
  messagingSenderId: "363204005803",
  appId: "1:363204005803:web:9924efd8265f1cbdff4cee",
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);

var list = document.getElementById("list");
var item = document.getElementById("input");

var obj = {
  userwork: [],
};

function addItems() {
  var listElement = document.createElement("li");
  var listText = document.createTextNode(item.value);
  listElement.appendChild(listText);
  listElement.setAttribute("class", "listitem");
  listElement.setAttribute("id", "useritem");
  list.appendChild(listElement);

  var box3 = document.createElement("div");

  var buttonElement = document.createElement("button");
  var buttonText = document.createTextNode("Delete");
  buttonElement.appendChild(buttonText);
  buttonElement.setAttribute("onClick", "deleteElement(this)");
  buttonElement.setAttribute("class", "button");

  box3.appendChild(buttonElement);
  box3.setAttribute("class", "box4");

  var editElement = document.createElement("button");
  var editText = document.createTextNode("Edit");
  editElement.appendChild(editText);
  editElement.setAttribute("onClick", "editElement(this)");
  editElement.setAttribute("class", "button");

  box3.appendChild(editElement);

  listElement.appendChild(box3);

  // for adding items in database

  obj.userwork.push(item.value);

  firebase.database().ref("work").remove();

  firebase.database().ref("work").push(obj);

  item.value = "";
}

function deleteAll() {
  list.innerHTML = "";

  // for deleteAll from database

  obj.userwork = [];
  firebase.database().ref("work").remove();
}

function deleteElement(b) {
  b.parentNode.parentNode.remove();

  // for deleting item from database

  for (var i = 0; i < obj.userwork.length; i++) {
    if (b.parentNode.parentNode.firstChild.nodeValue === obj.userwork[i]) {
      var flag = obj.userwork.indexOf(obj.userwork[i]);
      obj.userwork.splice(flag, flag + 1);
      firebase.database().ref("work").set(obj);
    }
  }

}

function editElement(e) {
  var newItem = prompt("Enter you new Item .");

// for updating object in database

  for (var i = 0; i < obj.userwork.length; i++) {
    if (e.parentNode.parentNode.firstChild.nodeValue == obj.userwork[i]) {
      obj.userwork[i] = newItem;
      firebase.database().ref("work").set(obj);
    }
  }

  e.parentNode.parentNode.firstChild.nodeValue = newItem;
}
