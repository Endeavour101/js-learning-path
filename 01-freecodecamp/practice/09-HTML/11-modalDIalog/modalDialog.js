const dialog = document.getElementById("modal");
const openButton = document.getElementById("open-modal-btn");
const closeButton = document.getElementById("close-modal-btn");

openButton.addEventListener("click", () => {
  dialog.showModal(); //modal dialog
  //dialog.show(); // non-modal dialog
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
