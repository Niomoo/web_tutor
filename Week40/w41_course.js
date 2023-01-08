window.addEventListener('keydown', function(e) {
    // console.log(e.keyCode);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const dom = document.querySelector(`div[data-key="${e.keyCode}"]`);
    // console.log(audio);
    // console.log(dom);
    if (audio != null){
        audio.currentTime = 0;
        audio.play();
        dom.classList.add('playing');
    }
})

function removeTransition(e){
    if(e.propertyName == 'transform') {
        e.target.classList.remove('playing');
    }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));