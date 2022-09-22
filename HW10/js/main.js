const audio = new Audio ();

function getAudio(e) {
    if (e.code === 'KeyD' || e.target.classList.contains('keyD')) {
        audio.src = 'sounds/dog.wav';
    }
    if (e.code === 'KeyB' || e.target.classList.contains('keyB')) {
        audio.src = 'sounds/birds.wav';
    }
    if (e.code === 'KeyL' || e.target.classList.contains('keyL')) {
        audio.src = 'sounds/lion.wav';
    }
    if (e.code === 'KeyG' || e.target.classList.contains('keyG')) {
        audio.src = 'sounds/geese.wav';
    }
};

function removeActiveClass() {
    document.querySelectorAll('.key').forEach(el => {
        el.classList.remove('active');
   }); 
}

document.body.addEventListener('keydown', function (e) {
    let addActiveClass = "key" + e.code.substr(-1);

    removeActiveClass();

    if (document.querySelector(`.${addActiveClass}`)) {
        document.querySelector(`.${addActiveClass}`).classList.add('active'); 
        getAudio(e);
        audio.play();
    }; 
});

document.querySelector('.wrapper').addEventListener('click', selectKey);

function selectKey(e) {
    removeActiveClass();

    if (e.target.classList.contains('key')) {
        e.target.classList.add('active'); 
        getAudio(e);
        audio.play();
    }; 
};