var todos = document.querySelector(".todos");
var newTask = document.querySelector(".input");
var addTask = document.querySelector(".btn");
var tasks = document.querySelector(".tasks");

addTask.addEventListener("click", function() {
    // tạo 1 task mới 
    var taskText = newTaskInput.value.trim();
    if (taskText === "") {
      return;
    }

    var taskItem = document.creatElement("li");
    taskItem.innerHTML = `
    <span class = "task">${taskText}</span>
    <div class = "action> 
      <input type="text" class="add"/>
      <input type="text" class="edit" />
      <input type="text" class="delete" />
    </div>
    ` 
    

})