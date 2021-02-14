const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach(sound => {
    // Create button element
    const btn = document.createElement('button')
    //add a class
    btn.classList.add('btn')

    //insert text 
    btn.innerText = sound

    //make button element functional
    btn.addEventListener('click', () => {
        //do this with function below
        stopSongs()
        //when clicked play audio tag in html
        document.getElementById(sound).play()
    })

    //append newly created button to btn div
    document.getElementById('buttons').appendChild(btn)
})

const stopSongs = () => {
    sounds.forEach(sound => {
        const song = document.getElementById(sound)

        song.pause()
        song.currentTime = 0;
    })
}