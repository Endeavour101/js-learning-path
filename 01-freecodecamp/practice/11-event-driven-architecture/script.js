/* const text = "Racecar!";
const clean = text.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
console.log(clean);
const isPalindrome = clean === clean.split("").reverse().join("");
console.log(isPalindrome); */

// ==========================================
// 1. THE MODEL (Data & Pure Logic)
// ==========================================
const PalindromeModel = {
  // Pure business logic: strictly evaluates strings
  isPalindrome(rawText) {
    const sanitized = rawText.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversed = sanitized.split("").reverse().join("");

    // Returns data, doesn't touch the DOM
    return {
      isValid: sanitized === reversed,
      originalText: rawText,
    };
  },
};

// ==========================================
// 2. THE VIEW (DOM Manipulation & UI)
// ==========================================
const PalindromeView = {
  // Grab DOM elements
  button: document.getElementById("check-btn"),
  input: document.getElementById("text-input"),
  resultDiv: document.getElementById("result"),

  // Read data from the screen
  getInputValue() {
    return this.input.value;
  },

  // Write data to the screen
  renderResult(result) {
    if (result.isValid) {
      this.resultDiv.textContent = `${result.originalText} is a palindrome`;
    } else {
      this.resultDiv.textContent = `${result.originalText} is not a palindrome`;
    }
  },

  renderAlert(message) {
    alert(message);
  },
};

// ==========================================
// 3. THE CONTROLLER (The Orchestrator)
// ==========================================
const PalindromeController = {
  // Initializes the application and sets up listeners
  init() {
    PalindromeView.button.addEventListener("click", () => this.handleCheck());
  },

  // Directs traffic when a click happens
  handleCheck() {
    const userInput = PalindromeView.getInputValue();

    // Validation check
    if (userInput.trim() === "") {
      PalindromeView.renderAlert("Please input a value");
      return;
    }

    // 1. Ask Model to process the data
    const evaluation = PalindromeModel.isPalindrome(userInput);

    // 2. Ask View to display the processed data
    PalindromeView.renderResult(evaluation);
  },
};

// KICKSTART THE APPLICATION
PalindromeController.init();
