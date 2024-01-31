const navToggle = document.querySelector(".nav-menu_toggle"),
navMenu = document.querySelector(".nav_menu"),
navClose = document.querySelector(".nav-menu_close");


if(navToggle){
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

if(navClipse){
    navClose.addEventListener("click", () => {
        navMenu.classList.add("show-menu")
    })
}

const rightHeader = document.querySelector(".right_header-toggle"),
      headerRightMenu = document.querySelector("header-right"),
      rightClose = document.querySelector(".header-right_Close")
      
if(rightHeader){
    rightHeader.addEventListener("click", () => {
        headerRightMenu.classList.add("show-right_menu")
    })
}

if(rightClose){
    rightClose.addEventListener("click", () => {
        headerRightMenu.classList.add("show-right_menu") 
    })
}

var swiper = new Swiper(".breaking_container", {
    centeredSlides: true,
    cssMode: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        640:{
            slidesPerView: 1,
            spaceBetween: 0,
        },
        768:{
            slidesPerView: 2,
            spaceBetween: 0
        },
        1024:{
            slidesPerView: 3,
            spaceBetween: 0
        },
    }
    
});

const backTopbtn = document.querySelector(".back-top-btn");

const showElemOnScroll = function(){
    if(window.scrolly > 150){
        backTopbtn.classList.add("active")
    }
    else{
        backTopbtn.classList.remove("active")
    }
}

window.addEventListener("scroll", showElemOnScroll);