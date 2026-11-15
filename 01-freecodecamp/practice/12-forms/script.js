const emailInput = document.querySelector("#email-input");
const numberInput = document.querySelector("#number-input");

/* input.addEventListener("input", (e) => {
  console.log(e.target.checkValidity());
}); */

/* input.addEventListener("input", (e) => {
  if (!e.target.checkValidity()) {
    e.target.reportValidity();
  }
}); */

/* emailInput.addEventListener("input", (e) => {
  e.target.setCustomValidity("");

  if (!e.target.checkValidity()) {
    e.target.setCustomValidity(
      "(my message)You must use a company email address that ends in @sampleCompany.com",
    );
  }//
}); */

numberInput.addEventListener("input", (e) => {
  console.log(e.target.checkValidity());
  console.log(e.target.validity);
});
