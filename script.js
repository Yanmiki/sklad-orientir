document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slider img"); // Берём все картинки внутри .slider
    const mainPhoto = document.querySelector(".photo-placeholder"); // Меняем главный блок

    slides.forEach(slide => {
        slide.addEventListener("click", function () {
            mainPhoto.src = this.src;
        });
    });
});
