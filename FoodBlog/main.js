var closeNavBtn = document.getElementById("close-nav-btn");
var openNavBtn = document.getElementById("open-nav-btn");
var nav = document.querySelector(".nav");

console.log(closeNavBtn, openNavBtn,nav)

openNavBtn.addEventListener("click",function(){
    nav.classList.add("on");
    nav.classList.remove("off");
})

closeNavBtn.addEventListener("click",function(){
    nav.classList.remove("on");
    nav.classList.add("off");
})