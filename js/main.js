
function addTodo(){
    var task=document.getElementById("task").value;
    var ul=document.getElementById("list");
    var li=document.createElement("li");


    li.appendChild(document.createTextNode( task));
    ul.appendChild(li);

    document.getElementById("task").value="";

}

function deleteTodo(){

}