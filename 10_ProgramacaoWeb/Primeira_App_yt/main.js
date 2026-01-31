function addNewTask() {
    var list = document.getElementById("list");
    var text = document.getElementById("task_name").value;
    if (text.length === 0){
        alert("Tarefa precisa ter mais de um caracter.");
        return;
    }
    var listitem = document.createElement("li");
    listitem.className = "list-item";

    const textElement = document.createTextNode(text);
    listitem.appendChild(textElement);
    list.appendChild(listitem);
}