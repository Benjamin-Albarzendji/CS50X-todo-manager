addRemoveListeners();

function createForm() {
  const formDiv = document.createElement("div");
  document.body.appendChild(formDiv);
  formDiv.className = "popupContact";
  formDiv.id = "formAdd";
  formDiv.style.position = "absolute";
  formDiv.style.top = "0%";
  formDiv.innerHTML = ` <form action="/add" id="formadd" name="form" class="form" method="post">
  <h4>Add To-do</h4>
  <select form="formadd" name="category" required>
      <option value="" disabled selected hidden>Category...</option>
      <option value="Studies">Studies</option>
      <option value="Academic">Academic</option>
      <option value="Training">Training</option>
      <option value="Professional">Professional</option>
      <option value="Social">Social</option>
      <option value="Shopping">Shopping</option>
      <option value="Other">Other</option>
  </select>
  <input type="text" id="description" placeholder="Description" name="description" required />
  <input id="project" name="project" placeholder="List" type="text" />
  <input type="date" name="date" required />
  <button type="submit">Add</button>
</form>`;
}

function showForm() {
  createForm();
  const formContainer = document.getElementById("formAdd");
  formContainer.classList.add("show");
  formContainer.style.zIndex = 1;
  window.addEventListener("click", windowOnClick);
}

function windowOnClick(e) {
  if (e.target === document.getElementById("formAdd")) {
    const formContainer = document.getElementById("formAdd");
    formContainer.remove();
    formContainer.classList.remove("show");
    formContainer.style.zIndex = 0;
  }
}

//Function for the buttons in the cards
function addRemoveListeners() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    if (button.id === "fin" || button.id === "del") {
      button.addEventListener("click", (e) => {
        //JSON-serialization
        addRemoveJSON(e);

        //Delete the card
        deleteCard(e);
      });
    }
  });
}

//Functionality for the Add or Remove JSON
function addRemoveJSON(e) {
  //Data to be JSON-serialized
  let data = {
    description: e.target.value,
  };

  //If Finish Button is clicked
  if (e.target.id === "fin") {
    fetch("/finished", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    //Delete Button is clicked
  } else {
    fetch("/delete", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  }
}

function deleteCard(e) {
  e.target.parentNode.parentNode.remove();
}
