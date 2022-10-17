import KeyD from "../assets/sounds/KeyD.mp3"
import KeyB from "../assets/sounds/KeyB.mp3"
import KeyL from "../assets/sounds/KeyL.mp3"
import KeyG from "../assets/sounds/KeyG.mp3"


const audio = new Audio ();

function getAudio(e) {
    if (e.code === 'KeyD' || e.target.classList.contains('keyD')) {
        audio.src = KeyD;
    }
    if (e.code === 'KeyB' || e.target.classList.contains('keyB')) {
        audio.src = KeyB;
    }
    if (e.code === 'KeyL' || e.target.classList.contains('keyL')) {
        audio.src = KeyL;
    }
    if (e.code === 'KeyG' || e.target.classList.contains('keyG')) {
        audio.src = KeyG;
    }
};

function removeActiveClass() {
    document.querySelectorAll('.key').forEach(el => {
        el.classList.remove('active');
   }); 
}

document.querySelector('.content2').addEventListener('keydown', function (e) {
    let addActiveClass = "key" + e.code.substr(-1);

    removeActiveClass();

    if (document.querySelector(`.${addActiveClass}`)) {
        document.querySelector(`.${addActiveClass}`).classList.add('active'); 
        getAudio(e);
        audio.play();
    }; 
});

document.querySelector('.content2').addEventListener('click', selectKey);

function selectKey(e) {
    removeActiveClass();

    if (e.target.classList.contains('key')) {
        e.target.classList.add('active'); 
        getAudio(e);
        audio.play();
    }; 
};