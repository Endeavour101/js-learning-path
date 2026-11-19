const group = document.getElementById("toppings-group");

group.addEventListener("change", (event) => {
  // Make sure the event came from a checkbox
  if (event.target.type === "checkbox") {
    console.log("Option:", event.target.value);
    console.log("Is checked:", event.target.checked);
  }
});
