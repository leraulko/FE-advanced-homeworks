const getRandomArray = (length, min, max) => {
   return Array(length).fill().map(() => 
        Math.floor(Math.random() * (max - min)) + min)
};
console.log(getRandomArray(15, 1, 100));


// 2
const getModa = (arr) => {
    let object = {};
    let count = 0;
    let mode;
    
    arr.forEach(function findMode(number) {
        if(!Number.isInteger(number)){
            object[number] = 1;
        } else {
            object[number] += 1;
        };


        object[number] = (object[number] || 0) + 1;
        if (count < object[number]) {
            count = object[number];
            mode = number;
        }
    });
    return mode;
};
console.log(getModa([3.5, 1, 4, 1, 5, 9, 2, 6, 5, 3.5, 5, 8, 9, 7, 9, 3.5, 2, 3.5, 8, 4, 6]));


// 3
const getAverage = (...numbers) => {
    const arr = numbers.filter(num => Number.isInteger(num));
    return arr.reduce((accumulator, element) => accumulator + element, 0) / arr.length;
};
console.log(getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


// 4
const getMedian = (...numbers) => {
        const integers = numbers.filter(num => Number.isInteger(num));
        integers.sort((a, b) => a - b);

        if (integers.length % 2) {
            return integers[Math.floor(integers.length / 2)];
        } else {
            return (integers[integers.length / 2] + integers[integers.length / 2 - 1]) / 2;
        }
};
console.log(getMedian(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


// 5
const filterEvenNumbers = (...numbers) => {
    return numbers.filter(num => num % 2)
};
console.log(filterEvenNumbers(1, 2, 3, 4, 5, 6));


// 6
const countPositiveNumbers = (...numbers) => {
    const arr = numbers.filter(num => num > 0);
    return arr.length
};
console.log(countPositiveNumbers(1, -2, 3, -4, -5, 6));


// 7
const getDividedByFive = (...numbers) => {
    return numbers.filter(num => num % 5 === 0)
}
console.log(getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


// 8
const replaceBadWords = (string) => {
    const arr = string.split(" ");
    const badWords = ['fuck' , 'shit'];

    badWords.forEach((item) => {
        arr.forEach((current, i) => {
            arr[i] = current.replace(item, "****")
        });
    });
    const res = arr.join(" ");

    return res
};
console.log(replaceBadWords("Are you fucking kidding?"));