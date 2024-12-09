let menu = document.querySelector(".fixed-menu")

function onLinkClick(event){
    const clickTarget = event.target 
    const activeBtn = document.querySelector(".active")
    if(clickTarget.classList.contains("nav-link") && !clickTarget.classList.contains("active")){
        clickTarget.classList.add("active")
        activeBtn.classList.remove("active")
    }
}

let classLink = ".main-link"


window.onscroll = function(){
    const h = document.documentElement.clientHeight;
    
    if (window.scrollY >= h*4){
        classLink = ".comments-link"
    }
    else if (window.scrollY >= h*3){
        classLink = ".works-link"
    }
    else if (window.scrollY >= h*2){
        classLink = ".skills-link"
    }
    else if (window.scrollY >= h*1){
        classLink = ".about-link"
    }
    else {
        classLink = ".main-link"
    }
    const activeBtn = document.querySelector(".active")
    const newActiveBtn = document.querySelector(classLink)
    if(!newActiveBtn.classList.contains("active") ){
        newActiveBtn.classList.add("active")
        activeBtn.classList.remove("active")
    }
}



menu.addEventListener("click",onLinkClick)

