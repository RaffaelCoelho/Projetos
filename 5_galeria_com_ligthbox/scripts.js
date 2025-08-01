const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox-image");
const lightboxClose = document.querySelector(".lightbox-close");

galleryItems.forEach((Item) => {
    Item.addEventListener("click", () => {
        const imageUrl = Item
        .querySelector(".gallery-image")
        .getAttribute("data-src");
        lightboxImage.setAttribute("src", imageUrl);
        lightbox.style.display = "flex";
    });
});

lightboxClose.addEventListener("click",() =>{
    lightbox.style.display = "none";
})