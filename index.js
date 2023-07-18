
let circle = document.querySelector('#circle');
const btn = document.querySelector('#btn');
const svgelem = document.querySelector('svg');

var tl = gsap.timeline();



window.addEventListener('mousemove', function(details){
    let xValue = details.clientX;
    let yValue = details.clientY;

    setTimeout(function(){
        circle.style.top = `${yValue}px`;
        circle.style.left = `${xValue}px`;
    }, 50);
});


btn.addEventListener('click', function(){
    tl.reverse();
    setTimeout(function(){
        svgelem.classList.add('animate');
    }, 3500)
});







tl
.from('#wrapper', {
    duration: 4,
    scale: .7,
    ease: 'Expo.easeInOut',
    opacity: 0
})
.from('#whitestrip', {
    duration: 2,
    width: 0,
    ease: 'Expo.easeInOut',
}, '-=2.5')
.from('#blackcard', {
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=1')
.from('#linelem', {
    duration: 1.5,
    x: 50,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=1')
.from('#linelem .line', {
    duration: 2,
    width: 0,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=1')
.from('#blackcard p', {
    duration: 1.2,
    y: 30,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=2')
.from('#sideelem', {
    duration: 2,
    x: 30,
    opacity: 0,
    ease: 'Expo.easeInOut',
}, '-=2')