
const input = document.getElementById("input");
const button = document.getElementById("btn");
const list = document.querySelector(".container .list");
let todos = JSON.parse(localStorage.getItem("todos"));
let isEdit = false;
let editIndex = 0;


function DisplayTask() {

   list.innerHTML = "";
   todos.forEach((todo, index) => {
      const p = document.createElement("p");
      p.textContent = todo;

      const deletbutton = document.createElement("button");
      deletbutton.className = "btn";
      deletbutton.id = "deleteId";
      deletbutton.textContent = "Delete";
      deletbutton.onclick = () => deleteTask(index);

      const Editbutton = document.createElement("button");
      Editbutton.className = "btn";
      Editbutton.id = "editId";
      Editbutton.textContent = "Edit";
      Editbutton.onclick = () => editTask(index);


      const div = document.createElement("div");
      div.className = "row";
      div.appendChild(p);
      div.appendChild(deletbutton);
      div.appendChild(Editbutton);

      list.appendChild(div);
   });
}

function addTask() {
   const value = input.value;
   todos.push(value);
   input.value = "";
   DisplayTask();
}

function deleteTask(index) {
   todos.splice(index, 1); 
   localStorage.setItem("todos",JSON.stringify(todos))
   DisplayTask(); 
}

function editTask(index) {
   input.value = todos[index];
   isEdit = true;
   editIndex = index;
}

button.addEventListener("click", function () {
   if (isEdit) {
      todos[editIndex] = input.value;
      isEdit = false;
   }
   else {
      addTask();
   }
   localStorage.setItem("todos",JSON.stringify(todos));
   input.value = "";
   DisplayTask();
});

DisplayTask();