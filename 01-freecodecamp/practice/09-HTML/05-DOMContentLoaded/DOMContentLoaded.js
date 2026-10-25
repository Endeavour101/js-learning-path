function changeImg() {
  const img = document.getElementById("example-img");
  img.src =
    "https://cdn.freecodecamp.org/curriculum/responsive-web-design-principles/FCCStickers-CamperBot200x200.jpg";
  img.alt = "CamperBot sticker";
  console.log("image was just changed");
}

changeImg();

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", changeImg);
} else {
  console.log("DOMContentLoaded has already fired");
  changeImg();
}
