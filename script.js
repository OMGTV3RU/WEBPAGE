let menu = document.querySelector(".fixed-menu")
let hamburgerMenu = document.querySelector(".mobile-button")
let mobileNavLinks = document.querySelector(".mobile-nav-links")

function onLinkClick(event) {
    const clickTarget = event.target
    const activeBtn = document.querySelector(".active")
    if (clickTarget.classList.contains("nav-link") && !clickTarget.classList.contains("active")) {
        clickTarget.classList.add("active")
        activeBtn.classList.remove("active")
    }
}

function onMenuClick(event) {
    document.querySelector(".mobile-menu").classList.toggle("hide")
}

function onMobileNavLinksClick(event) {
    if (event.target.classList.contains("nav-link")) {
        document.querySelector(".mobile-menu").classList.toggle("hide")
    }
}

let classLink = ".main-link"


window.onscroll = function () {
    const h = document.documentElement.clientHeight;

    if (window.scrollY >= h * 4) {
        classLink = ".comments-link"
    }
    else if (window.scrollY >= h * 3) {
        classLink = ".works-link"
    }
    else if (window.scrollY >= h * 2) {
        classLink = ".skills-link"
    }
    else if (window.scrollY >= h * 1) {
        classLink = ".about-link"
    }
    else {
        classLink = ".main-link"
    }
    const activeBtn = document.querySelector(".active")
    const newActiveBtn = document.querySelector(classLink)
    if (!newActiveBtn.classList.contains("active")) {
        newActiveBtn.classList.add("active")
        activeBtn.classList.remove("active")
    }
}


hamburgerMenu.addEventListener("click", onMenuClick)
menu.addEventListener("click", onLinkClick)
mobileNavLinks.addEventListener("click",onMobileNavLinksClick)

