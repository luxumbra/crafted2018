// Can also be included with a regular script tag

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

feather.replace()

const srRevealSlooooow = {
    delay: 1500,
    duration: 1000,
    reset: true
}
const srRevealSlooow = {
    delay: 700,
    duration: 700,
    reset: true
}
const srRevealSlow = {
    delay: 400,
    duration: 700,
    reset: true
}
const srRevealFast = {
    delay: 400,
    duration: 400,
    reset: true
}
ScrollReveal().reveal("#about .intro", srRevealSlow);
ScrollReveal().reveal("#services .intro", srRevealFast);
ScrollReveal().reveal(".next-section", srRevealSlooow);
ScrollReveal().reveal("section + footer", srRevealSlooooow);