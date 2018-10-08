// Can also be included with a regular script tag

/* typed effect */
var options = {
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
var typed = new Typed('#typed', options);

var scroll = new SmoothScroll('a[href*="#"]', {
    easing: 'easeInOutQuad',
    updateURL: true,
    popstate: true,
    speed: 1000
});