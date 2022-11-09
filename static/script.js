//Function for the buttons in the cards
function buttonListeners() {
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    if (button.id === "fin" || button.id === "del") {
      button.addEventListener("click", (e) => {
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
        //Delete the card

        deleteCard(e);
      });
    }
  });

  //Delete the cards
}

function deleteCard(e) {
  e.target.parentNode.parentNode.remove();
}

buttonListeners();
