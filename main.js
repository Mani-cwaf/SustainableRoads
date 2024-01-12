let options = {
    root: document.querySelector('.content'),
    rootMargin: "0px -400px 0px -400px",
}

const showobserver = new IntersectionObserver((e => {
    e.forEach((e => {
        e.isIntersecting ? e.target.classList.add("show") : e.target.classList.remove("show")
    }))
}), options);
document.querySelectorAll(".hidden").forEach((e => showobserver.observe(e)));


const scrollbar = document.querySelector(".scrollbar");
const content = document.querySelector('.content');

const car = document.querySelector('.car img');

let framebuffer = 3;
let frame = 0;
let currentcar = 1;
let oldscroll = 0;
function animate() {
    requestAnimationFrame(animate);

    var factor = scrollbar.scrollLeft / (scrollbar.scrollWidth - scrollbar.clientWidth);

    content.scroll((content.scrollWidth - content.clientWidth) * factor, 0, "smooth");

    if (frame < framebuffer) {
        frame++;
    } else if (scrollbar.scrollLeft != oldscroll) {
        oldscroll = scrollbar.scrollLeft;
        frame = 0;
        if (currentcar > 2) {
            currentcar = 1;
            car.src = `car${currentcar}.png`;
        } else {
            currentcar++;
            car.src = `car${currentcar}.png`;
        }
    }
};
animate();