// 2
function* newFontGenerator(size) {
    let changes = yield;
    while (true) {
        if (changes === 'up') {
            size += 2;
        } else if (changes === 'down') {
            size -= 2;
        }
    
        changes = yield size;
    };
};
export const fontGenerator = newFontGenerator(14);
// fontGenerator.next();


const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');
const text = document.querySelector('#text');

increase.addEventListener('click', () => {
    text.style.fontSize = `${fontGenerator.next('up').value}px`
});

decrease.addEventListener('click', () => {
    text.style.fontSize = `${fontGenerator.next('down').value}px`
});