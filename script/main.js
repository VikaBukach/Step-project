const carousel = document.querySelector('.carousel__team');

let isDrragging = false;

const dragStart = () => {
    isDrragging = true;
}
const dragging  = (e) => {
    if(!isDrragging) return;
    carousel.scrollLeft = e.pageX;
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);