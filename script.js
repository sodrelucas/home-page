var openMenu = document.querySelector(".openMenu")
var mobileMenu = document.querySelector(".mobileMenu")
var closeButton = document.querySelector(".closeMenu");
var body = document.querySelector("body")


openMenu.addEventListener("click", openMobileMenu)
closeButton.addEventListener("click", closeMobileMenu);

function openMobileMenu(){
    openMenu.classList.toggle("funButtonMobile");
    mobileMenu.classList.toggle("funButtonMobile");
    closeButton.classList.toggle("funButtonMobile");
    body.classList.toggle("bodyColor")
}

function closeMobileMenu(){
    openMenu.classList.toggle("funButtonMobile");
    mobileMenu.classList.toggle("funButtonMobile");
    closeButton.classList.toggle("funButtonMobile");

    body.classList.toggle("bodyColor");
}