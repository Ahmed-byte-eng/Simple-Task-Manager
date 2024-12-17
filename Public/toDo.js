function addTask() {
    let inputValue = document.getElementById("input").value;
    if (inputValue == "") {
        alert("Error, No Task Provided!");
    }
    else {
        /* Create List Item */
        let newTask = document.createElement("li");
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", "listDiv");
        newTask.innerHTML = "<p>• " + inputValue + "</p>";
        newDiv.append(newTask);
        document.getElementById("tasks").append(newDiv);
        /* Create Delete Button */
        let deleteButton = document.createElement("button");
        deleteButton.setAttribute("id", "deleteButton");
        deleteButton.setAttribute("onclick", "deleteTask.call(this)");
        newDiv.append(deleteButton);
        /* Create Delete Button Image */
        let deleteButtonImg = document.createElement("img");
        deleteButtonImg.setAttribute("src", "../Images/removeTask.png");
        newDiv.append(deleteButton);
        deleteButton.append(deleteButtonImg);
    }
}
function deleteTask() {
    let itemDiv = this.parentElement;
    itemDiv.remove();
}