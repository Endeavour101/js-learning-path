/* const container = document.getElementById("user-container");
console.log(container);
container.innerHTML = "<p>AAAAAAAAAAAA</p>"; */

/* const userContainer = document.querySelector("#userContainer");
userContainer.innerHTML += "<p>that is the user-container</p>"; */

/* const userContainer = document.querySelector("#userContainer");
const newPara = document.createElement("p");
newPara.textContent = "...added a new Paragraph";
userContainer.appendChild(newPara);

const allDivs = document.querySelectorAll("div");
console.log(allDivs);

console.log(allDivs[0]);
console.log(allDivs[1]); */

/* const container = document.getElementById("container");
const paraItem = container.querySelector("p:last-of-type"); //pseudo-class
container.removeChild(paraItem);
const newParaItem = document.createElement("p");
newParaItem.textContent = "WELCOME TO LEARNING THE DOM!";
container.appendChild(newParaItem);

console.log(navigator.userAgent);
console.log(navigator.language);

console.log(window.innerWidth);
console.log(window.location);
console.log(location);

console.log(document.children);
 */

const btn = document.getElementById("btn");

btn.addEventListener("click", () => alert("You clicked the button"));
const input = document.getElementById("input");

input.addEventListener("input", () => {
  console.log(input.value);
});

const container = document.getElementById("container");
//container.setAttribute("class", "new-wave");
container.className = "new-profile";
container.disabled = false; //pay attention - it's real true/false, not a string
