const submitBtn = document.getElementById("submit-btn");
const formFrm = document.getElementById("form");
const fullNameInput = document.getElementById("full-name");
const emailInput = document.getElementById("email");
const orderNoInput = document.getElementById("order-no");
const productCodeInput = document.getElementById("product-code");
const quantityInput = document.getElementById("quantity");
const complaintsGroupInput = document.getElementById("complaints-group");
const complaintDescription = document.getElementById("complaint-description");
const solutionsGroupInput = document.getElementById("solutions-group");
const solutionDescription = document.getElementById("solution-description");
const otherComplaint = document.getElementById("other-complaint");
const otherSolution = document.getElementById("other-solution");

function validateForm() {
  const result = {};
  result["full-name"] = fullNameInput.value.trim() !== "";
  result["email"] = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
  result["order-no"] = /^2024\d{6}$/.test(orderNoInput.value);
  result["product-code"] =
    /^[a-zA-Z]{2}\d{2}-[a-zA-Z]\d{3}-[a-zA-Z]{2}\d$/.test(
      productCodeInput.value,
    );
  result["quantity"] =
    Number.isInteger(Number(quantityInput.value)) &&
    Number(quantityInput.value) > 0;

  const complaintReasons = complaintsGroupInput.querySelectorAll(
    'input[type="checkbox"]',
  );
  const isSomeCheckBoxChecked = Array.from(complaintReasons).some(
    (cb) => cb.checked,
  );
  result["complaints-group"] = isSomeCheckBoxChecked;

  result["complaint-description"] =
    !otherComplaint.checked || complaintDescription.value.trim().length >= 20;

  const solutionOptions = solutionsGroupInput.querySelectorAll(
    'input[type="radio"]',
  );
  const isSomeRadioChecked = Array.from(solutionOptions).some(
    (rb) => rb.checked,
  );
  result["solutions-group"] = isSomeRadioChecked;

  result["solution-description"] =
    !otherSolution.checked || solutionDescription.value.trim().length >= 20;

  return result;
}

function isValid(validationObj) {
  return Object.values(validationObj).every((value) => value === true);
}

fullNameInput.addEventListener("change", () => {
  const result = validateForm();
  fullNameInput.style.borderColor = result["full-name"] ? "green" : "red";
});

emailInput.addEventListener("change", () => {
  const result = validateForm();
  emailInput.style.borderColor = result["email"] ? "green" : "red";
});

orderNoInput.addEventListener("change", () => {
  const result = validateForm();
  orderNoInput.style.borderColor = result["order-no"] ? "green" : "red";
});

productCodeInput.addEventListener("change", () => {
  const result = validateForm();
  productCodeInput.style.borderColor = result["product-code"] ? "green" : "red";
});

quantityInput.addEventListener("change", () => {
  const result = validateForm();
  quantityInput.style.borderColor = result["quantity"] ? "green" : "red";
});

complaintDescription.addEventListener("change", () => {
  const result = validateForm();
  complaintDescription.style.borderColor = result["complaint-description"]
    ? "green"
    : "red";
});

solutionDescription.addEventListener("change", () => {
  const result = validateForm();
  solutionDescription.style.borderColor = result["solution-description"]
    ? "green"
    : "red";
});

complaintsGroupInput.addEventListener("change", () => {
  const result = validateForm();
  complaintsGroupInput.style.borderColor = result["complaints-group"]
    ? "green"
    : "red";
  complaintDescription.style.borderColor = result["complaint-description"]
    ? "green"
    : "red";
});

solutionsGroupInput.addEventListener("change", () => {
  const result = validateForm();
  solutionsGroupInput.style.borderColor = result["solutions-group"]
    ? "green"
    : "red";
  solutionDescription.style.borderColor = result["solution-description"]
    ? "green"
    : "red";
});

formFrm.addEventListener("submit", (e) => {
  e.preventDefault();
  const result = validateForm();
  if (isValid(result)) {
    console.log("The form is valid!");
  } else {
    for (const key in result) {
      if (!result[key]) {
        document.getElementById(key).style.borderColor = "red";
      }
    }
  }
});
