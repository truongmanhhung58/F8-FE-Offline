var newTaskInput = document.querySelector(".new-task");
var addTaskButton = document.querySelector(".add-task");
var taskList = document.querySelector(".tasks");

// Hàm để thêm một task mới
function addTask() {
  // rỗng thi k cho add
  var taskText = newTaskInput.value.trim();
  if (taskText === "") {
    return;
  }

  var taskItem = document.createElement("li");
  taskItem.innerHTML = `
        <span class="taskText">${taskText}</span>
        <div class="actions">
          <button class="edit"><i class="fas fa-edit"></i></button>
          <button class="delete"><i class="fas fa-trash"></i></button>
          <button class="save" hidden>Add Task</button>
        </div>
      `;


  var editButton = taskItem.querySelector(".edit");
  editButton.addEventListener("click", function () {
    editTask(taskItem);
    taskItem.style.justifyContent = "center";
    taskItem.style.background = "none";
    taskItem.style.padding = "0";
  });


  var deleteButton = taskItem.querySelector(".delete");
  deleteButton.addEventListener("click", function() {
    taskList.removeChild(taskItem);
  });

  taskList.appendChild(taskItem);

  newTaskInput.value = "";
}

addTaskButton.addEventListener("click", addTask);



// Hàm để sửa task
function editTask(taskItem) {
  var taskTextElement = taskItem.querySelector(".taskText");
  var editButton = taskItem.querySelector(".edit");
  var deleteButton = taskItem.querySelector(".delete");
  var saveButton = taskItem.querySelector(".save");

  var originalText = taskTextElement.innerText;

  editButton.style.display = "none";
  deleteButton.style.display = "none";
  saveButton.style.display = "inline-block";


  var inputElement = document.createElement("input");

  inputElement.classList.add("text-edit");
  inputElement.type = "text";
  inputElement.placeholder = "Update Task";
  inputElement.value = originalText;
  
  taskItem.replaceChild(inputElement, taskTextElement);

  inputElement.focus();

  function saveButtonFuc () {
    // Lấy nội dung mới sau khi chỉnh sửa
    saveButton.removeEventListener("click", saveButtonFuc);
    taskItem.style.background = "#8758ff";
    taskItem.style.padding = "5px 16px";

    var updatedText = inputElement.value.trim();

    if (updatedText === "") {
      alert("Please enter a task!");
      return;
    }


    taskTextElement.innerText = updatedText;


    editButton.style.display = "inline-block";
    deleteButton.style.display = "inline-block";
    saveButton.style.display = "none";

    
    taskItem.replaceChild(taskTextElement, inputElement);
    
  }

  
  saveButton.addEventListener("click", saveButtonFuc);

  console.log([taskItem]);
}


newTaskInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask();
  }
});


