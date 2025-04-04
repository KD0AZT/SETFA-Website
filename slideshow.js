let slideIndex = 0;
let slides = [];
slides[0] = "url(images/working.jpeg)";
slides[1] = "url(images/engine.jpeg)";
let i = 3;
showSlides();

function showSlides() {
    if (i > slides.length - 1) {
        i = 0;
    }
    let slide = slides[i];
    document.getElementById("logo_slideshow").style.backgroundImage = slide;
    i++;
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}