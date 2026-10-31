const textArea = document.getElementById("text-input");
const counter = document.getElementById("char-count");

textArea.addEventListener("input", () => {
  if (textArea.value.length > 50)
    textArea.value = textArea.value.substring(0, 50);

  counter.textContent = `Character Count: ${textArea.value.length}/50`;

  counter.classList.toggle("over-the-limit", textArea.value.length === 50);
});

/* const textArea = document.getElementById("text-input");
const counter = document.getElementById("char-count");

textArea.addEventListener("input", () => {
  if (textArea.value.length > 50)
    textArea.value = textArea.value.substring(0, 50);

  counter.classList.toggle("over-the-limit", textArea.value.length === 50);

  renderLength(textArea.value.length);
});

function renderLength(currentLength) {
  counter.innerHTML = `Character Count: ${currentLength}/50`;
}
 */
