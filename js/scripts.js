// Can also be included with a regular script tag

/* typed effect */
var options = {
    strings: ["Web development", "Web design", "Ecommerce ^1000", "Hand crafted websites made in the Isle of Man"],
    typeSpeed: 100,
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