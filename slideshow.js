let slides = [
"slideshow_slide_1",
"slideshow_slide_2",
"slideshow_slide_3",
"slideshow_slide_4",
"slideshow_slide_5",
"slideshow_slide_6",
"slideshow_slide_7",
"slideshow_slide_8",
"slideshow_slide_9",
"slideshow_slide_10",
"slideshow_slide_11",
"slideshow_slide_12"];
let i = 0;
let delay;
showSlides();

function showSlides() {
    let slide = slides[i];
    let prevSlide;
    if (i == 0) {
       prevSlide = slides[slides.length - 1];
    } else {
        prevSlide = slides[i - 1];
    }
    document.getElementById(prevSlide).style.display = "none";
    document.getElementById(slide).style.display = "initial";
    i++;
    if (i > slides.length - 1) {
        i = 0;
    }
    setTimeout(showSlides, 7000); //Change slide every 5 seconds
}