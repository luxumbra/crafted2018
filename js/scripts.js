/* typed effect */
const typedOptions = {
    strings: [
        "Web development^1000",
        "Web design^1000",
        "Ecommerce ^1000",
        "Hand crafted websites^700 made in the Isle of Man^400."],
    typeSpeed: 50,
    backDelay: 200,
    fadeOut: false,
    loop: false,
    loopCount: Infinity
}
var typed = new Typed('#typed', typedOptions);

var scroll = new SmoothScroll('a[href*="#"]', {
    easing: 'easeInOutQuad',
    updateURL: true,
    popstate: true,
    speed: 1000
});

feather.replace();

const srRevealSlooooow = {
    delay: 1500,
    duration: 1000,
    reset: true,
    mobile: true
}
const srRevealSlooow = {
    delay: 700,
    duration: 700,
    reset: true,
    mobile: true
}
const srRevealSlow = {
    delay: 400,
    duration: 700,
    reset: true,
    mobile: true
}
const srRevealFast = {
    delay: 400,
    duration: 400,
    reset: true,
    mobile: true
}
ScrollReveal().reveal("#about .intro", srRevealSlow);
ScrollReveal().reveal("#services .intro, #projects .intro", srRevealFast);
ScrollReveal().reveal(".next-section", srRevealSlooow);
ScrollReveal().reveal("section + footer", srRevealSlooooow);

// Navbar bits

window.onscroll = function() {
    navbarSticky();
};

var header = document.getElementById("home");
var navbar = document.getElementById("nav");
var sticky = header.offsetTop;
console.log(sticky);

function navbarSticky() {
    if(window.pageYOffset > sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}