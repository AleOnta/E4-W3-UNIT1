const checkTheTask = (event) => {
  const clickedTask = event.target;
  clickedTask.classList.toggle("clicked");
};

const deleteTheTask = (event) => {
  const toDelete = event.path[1];
  toDelete.remove();
};

const addTaskOnClick = (event) => {
  if (event.isTrusted === true) {
    let inputArgument = document.getElementById("inputText").value;
    if (inputArgument === "") {
      alert("Please, insert a task");
    } else {
      const newTask = `
        <div class="justOneTask"  onclick="checkTheTask(event)">
            <p>${inputArgument}</p>
            <i class="fas fa-trash-alt" onclick="deleteTheTask(event)"></i>
        </div>`;
      newTask.onclick = checkTheTask;
      document.getElementById("taskContainer").innerHTML += newTask;
      document.getElementById("inputText").value = "";
    }
  }
};
