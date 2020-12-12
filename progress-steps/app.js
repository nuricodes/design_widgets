// SELECT ELEMENTS
const progress = document.querySelector('.progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle')

// keep track of progress
let tracker = 0;

// increment for next
next.addEventListener('click', () => {
    tracker++
    tracker > circles.length ? tracker = circles.length : tracker;
    update()
})

// decrement for prev
prev.addEventListener('click', () => {
    tracker--
    if (tracker < 1) {
        tracker = 1
    }

    update();
})

// if index is less than tracker mark as active
function update() {
    circles.forEach((circle, idx) => {
        idx < tracker ? circle.classList.add('active') : circle.classList.remove('active')

    })


    const actives = document.querySelectorAll('.active') //circles that are active

    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%'

    if (tracker === 1) {
        prev.disabled = true;
    } else if (tracker === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}