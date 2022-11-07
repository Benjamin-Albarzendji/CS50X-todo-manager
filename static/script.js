const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);

    let data = {
      name: "Flask Room",
      description: "Talk about Flask here.",
    };
    fetch("/add", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
  });
});
