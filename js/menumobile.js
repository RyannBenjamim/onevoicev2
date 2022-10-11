var menu = document.querySelector('nav ul');
var mobileBtn = document.querySelector('.menu-mobile');
var mobileBtnImg = document.querySelector('.menu-mobile i');

mobileBtn.addEventListener('click', function() {
    
    if (mobileBtnImg.getAttribute("class") == "fa-solid fa-bars") {
        mobileBtnImg.setAttribute("class", "fa-solid fa-circle-xmark");
    } else {
        mobileBtnImg.setAttribute("class", "fa-solid fa-bars")
    }
    
    menu.classList.toggle('active');
});