function generateBlocks() {
    const container = document.getElementById('container');
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style = 'background-color:' + "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
        container.append(div);
    }   
}
generateBlocks()


function generateBlocksInterval() {
    const container = document.getElementById('adv-container');
    for (let i = 0; i < 25; i++) {
        const div = document.createElement('div');
        div.classList.add('square');
        div.style = 'background-color:' + "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
        container.append(div);

        setInterval(() => {
            div.style = 'background-color:' + "#" + ("00000" + Math.floor(Math.random() * Math.pow(16, 6)).toString(16)).slice(-6);
        }, 1000);
    }   
}
generateBlocksInterval()