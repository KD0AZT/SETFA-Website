function loadElements() {
    placeHeader();
    placeNavbar();
    placeSidebar();
    placeSidebar_r();
    placeFooter();
}

function placeHeader() {
    var header = document.getElementById("main_header");
    var newHeader = document.createElement("div");
    newHeader.setAttribute("id", "main_header");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/header.html", false);
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
    xmlhttp.open("GET", "/navbar.html", false);
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
    xmlhttp.open("GET", "/sidebar.html", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        newSidebar.innerHTML = xmlhttp.responseText;
        sidebar.replaceWith(newSidebar);
    }
    return;
}

function placeSidebar_r() {
    var sidebar_r = document.getElementById("sidebar_r");
    var newSidebar_r = document.createElement("div");
    newSidebar_r.setAttribute("id", "sidebar_r");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/sidebar_r.html", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        newSidebar_r.innerHTML = xmlhttp.responseText;
        sidebar_r.replaceWith(newSidebar_r);
    }
    return;
}

function placeFooter() {
    var footer = document.getElementById("footer");
    var newFooter = document.createElement("footer");
    newFooter.setAttribute("id", "footer");
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "/footer.html", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        newFooter.innerHTML = xmlhttp.responseText;
        footer.replaceWith(newFooter);
    }
    return;
}