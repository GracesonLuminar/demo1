let text = document.getElementById("text");
let chair = document.getElementById("chair");

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * -1 + 'px';
    chair.style.top = value * 1.5 + 'px';


})


 