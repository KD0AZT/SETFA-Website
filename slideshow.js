let slideIndex = 0;
let slides = [];
slides[0] = "url(/images/working.jpeg)";
slides[1] = "url(/images/engine.jpeg)";
slides[2] = "url(/images/firefighters-women-2.jpg)";
slides[3] = "url(/images/firefighters-window2-2.jpg)";
slides[4] = "url(/images/firefighters-frontdoor-2.jpg)";
slides[5] = "url(/images/firefighter-window-2.jpg)";
slides[6] = "url(/images/fire-truck-2.jpg)";
slides[7] = "url(/images/cpr-2.jpg)";
slides[8] = "url(/images/burnt-remains-2.jpg)";
slides[9] = "url(/images/burninghouse-side-2.jpg)";
slides[10] = "url(/images/burning-house-2.jpg)";
slides[11] = "url(/images/burning-door-2.jpg)";
let i = 12;
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