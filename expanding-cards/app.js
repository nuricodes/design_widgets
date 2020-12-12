// SELECT ELEMENT
const panels = document.querySelectorAll('.panel');

// LOOP THROUGH EACH PANEL & ADD EVENT LISTENER
panels.forEach(e => {
    e.addEventListener('click', () => {
        removeClassList()
        e.classList.add('active')
    })
});

// ADD FUNCTION TO REMOVE CLASS LIST
function removeClassList() {
    panels.forEach(p => p.classList.remove('active'))
}
