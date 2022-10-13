function* createIdGenerator() {
    let start = 0;
    while (true) {
        yield start++;
    }
}
const idGenerator = createIdGenerator();

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);



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
const fontGenerator = newFontGenerator(14);
fontGenerator.next();


const increase = document.getElementById('increase');
const decrease = document.getElementById('decrease');
const text = document.getElementById('text');

increase.addEventListener('click', () => {
    text.style.fontSize = `${fontGenerator.next('up').value}px`
});

decrease.addEventListener('click', () => {
    text.style.fontSize = `${fontGenerator.next('down').value}px`
});