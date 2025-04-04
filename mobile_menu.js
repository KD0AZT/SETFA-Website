function mobileMenu() {
    let navbar = document.getElementById("navbar_links_mobile");
    if (navbar.style.display === "flex") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
}