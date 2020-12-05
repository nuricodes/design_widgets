//move active in html between panels for js functionality to work
const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        //active will be attached to clicked
        //and its class
        panel.classList.add('active')
    })
})