const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTask");
const taskList = document.getElementById("taskList");

function createListItem(taskText){
    const listItem = document.createElement("ul");

    listItem.textContent = taskText;

    return listItem;
}
console.log(createListItem("Study TOGAF"))

function addTask(){
    const addedItem = taskInput.value;

    if (addedItem != ""){
        const newListItem = createListItem(addedItem);

        taskList.append(newListItem);

        taskInput.value = ""; //.value for reset
    }

}

addTaskButton.addEventListener("click", addTask)