

const infoChange_left = document.querySelector('.left');
const infoChange_right = document.querySelector('.right');
const scrollCont = document.querySelector('.scroll-cont');
var x = document.querySelector('.scroll-info').offsetWidth;
infoChange_left.addEventListener('click', (event) => {
    event.preventDefault();
    scrollCont.scrollLeft += x;
});
infoChange_right.addEventListener('click', (event) => {
    // event.preventDefault();
    scrollCont.scrollLeft -= 300;
});
