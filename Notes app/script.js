
const input = document.getElementById("input");
const button = document.getElementById("btn");
const list = document.getElementById("list");
let notes = [];
let isEdit = false;
let editIndex = 0;

function displayNote() {
list.innerHTML = "";
   notes.forEach((note, index) => {
      const p = document.createElement("p");
      p.textContent = note;

      const deletbutton = document.createElement("button");
      deletbutton.className = "btn";
      deletbutton.id = "deleteId";
      deletbutton.textContent = "Delete";
      deletbutton.onclick = () => deleteNote(index);

      const Editbutton = document.createElement("button");
      Editbutton.className = "btn";
      Editbutton.id = "editId";
      Editbutton.textContent = "Edit";
      Editbutton.onclick = () => editNote(index);


      const div = document.createElement("div");
      div.className = "row";
      div.appendChild(p);
      div.appendChild(deletbutton);
      div.appendChild(Editbutton);

      list.appendChild(div);
   });
}

function AddNote() {
   const value = input.value;
   notes.push(value);
   input.value = "";
   displayNote();
}

function deleteNote(index) {
   notes.splice(index, 1); 
   localStorage.setItem("notes",JSON.stringify(notes));
   displayNote(); 
}

function editNote(index) {
   input.value = notes[index];
   isEdit = true;
   editIndex = index;
}

button.addEventListener("click", function () {
   if (isEdit) {
     notes[editIndex] = input.value;
      isEdit = false;
   }
   else {
      AddNote();
   }
   localStorage.setItem("notes",JSON.stringify(notes));
   input.value = "";
   displayNote();
});

displayNote();
// function displayNote() {
//     list.innerHTML = "";
//     notes.forEach((notes) => {
//         const p = document.createElement("p");
//         p.textContent = notes;

//         const deleteButton = document.createElement("button");
//         deleteButton.innerHTML = "delete";
//         deleteButton.className = "btn";
//         deleteButton.id = "deleteId";

//         const editButton = document.createElement("button");
//         editButton.innerHTML = "Edit";
//         editButton.className = "btn";
//         editButton.id = "editId";

//         const div = document.createElement("div");
//         div.className = "row";
//         div.appendChild(p);
//         div.appendChild(deleteButton)
//         div.appendChild(editButton)

//         list.appendChild(div);
//     })
// }

// function AddNote() {
//     const value = input.value;
//     notes.push(value);
//     input.value = "";
//     displayNote();
// }


// button.addEventListener("click", AddNote);
// AddNote();