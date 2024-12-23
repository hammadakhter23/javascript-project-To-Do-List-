var inputEl = document.getElementById("userinput");
var listEl = document.getElementById("list");

function addSec(){
     if (inputEl.value == "") {
        alert("Please Enter Something");
        return;
     }


    var liTag = document.createElement("li");
    var liText = document.createTextNode(inputEl.value);

    liTag.appendChild(liText);
    listEl.appendChild(liTag);

    var btnTag = document.createElement("button");
    var btnText = document.createTextNode("Delete items");
    btnTag.setAttribute("onclick" , "delbtnfunction(this)" );
    btnTag.className = "btn3"

    btnTag.appendChild(btnText);
    liTag.appendChild(btnTag);

    inputEl.value = "";
}
function delbtnfunction(button){
li = button.parentElement;
listEl.removeChild(li);
}
function clearAll() {
    listEl.innerHTML = "";
}