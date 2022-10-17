export async function getRandomChinese(length) {
    let result = '';

    while (length) {
        const sign = new Promise ((resolve) => {
            setTimeout(() => resolve(String.fromCharCode(Date.now().toString().slice(-5))), 50);
        });

        result += await sign;
        length--;
    };

    return result;
};

// getRandomChinese(4).then(res => console.log(res));