function loadElements() {
    placeHeader();
    placeNavbar();
    placeSidebar();
    placeFooter();
}

function placeHeader() {
    var header = document.getElementById("main_header");
    var newHeader = document.createElement("div");
    newHeader.setAttribute("id", "main_header");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./header.html", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        newHeader.innerHTML = xmlhttp.responseText;
        header.replaceWith(newHeader);
    }
    return;
}

function placeNavbar() {
    var navbar = document.getElementById("navbar");
    var newNavbar = document.createElement("div");
    newNavbar.setAttribute("id", "navbar");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./navbar.html", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        newNavbar.innerHTML = xmlhttp.responseText;
        navbar.replaceWith(newNavbar);
    }
    return;
}

function placeSidebar() {
    var sidebar = document.getElementById("sidebar");
    var newSidebar = document.createElement("div");
    newSidebar.setAttribute("id", "sidebar");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./sidebar.html", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        newSidebar.innerHTML = xmlhttp.responseText;
        sidebar.replaceWith(newSidebar);
    }
    return;
}

function placeFooter() {
    var footer = document.getElementById("footer");
    var newFooter = document.createElement("footer");
    newFooter.setAttribute("id", "footer");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "./footer.html", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        newFooter.innerHTML = xmlhttp.responseText;
        footer.replaceWith(newFooter);
    }
    return;
}