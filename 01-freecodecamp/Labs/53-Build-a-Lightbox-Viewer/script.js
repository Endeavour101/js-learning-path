const lightboxEl = document.querySelector(".lightbox");
const galleryEl = document.querySelectorAll(".gallery-item");
const closeBtn = document.getElementById("close-btn");
const lightboxImg = document.getElementById("lightbox-image");

galleryEl.forEach((item) => {
  item.addEventListener("click", () => {
    //console.log(item.src);
    lightboxEl.classList.add("shown");

    const highResUrl = item.src.replace("-thumbnail", "");

    lightboxImg.src = highResUrl;
  });
});

/* galleryEl.forEach((item) => {
  item.addEventListener("click", (event) => {
    const clickedImage = event.target;
    console.log(clickedImage.src);
  });
}); */

closeBtn.addEventListener("click", () => {
  lightboxEl.classList.remove("shown");
});

lightboxEl.addEventListener("click", (event) => {
  if (event.target === lightboxEl) lightboxEl.classList.remove("shown");
});
