function getMaxDigit(number) {
    let str = String(number);
    let maxDigit = 0;

    for (let i = 0; i < str; i++) {
      if (+str[i] > maxDigit) {
        maxDigit = +str[i];
      }
    }
    return maxDigit;
}
console.log(getMaxDigit(1238.97));

// 2
function toPower(number, power) {
    let result = number;

    for (let i = 1; i < power; i++) {
        result = result * number;
    }
    return result
}
console.log(toPower(11, 2));

// 3
function toUpper(name) {
    const result = name[0].toUpperCase() + name.toLowerCase().slice(1);
    return result
}
console.log(toUpper('alyCIa'));

// 4
function netSalary(salary, tax) {
    const result = salary - (salary * ( tax / 100));
    return result
}
console.log(netSalary(1000, 19.5));

// 5
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log(getRandom(1, 100));

// 6 
function countLetter(letter, string) {
    const count = string.split(letter).length - 1;
    return count
}
console.log(countLetter('o', 'Pneumonoultramicroscopicsilicovolcanokoniosis'));

// 7
function convertCurrency(value) {
    const exchangeRate = 37;
    let result;

    if (value.includes('$')) {
        result = +value.slice(0, value.indexOf('$')) * exchangeRate + ' ' + 'UAH';
    } else if (value.includes('UAH')) {
        result = +value.slice(0, value.indexOf('UAH')) * exchangeRate + ' ' + '$';
    } else {
        return 'You can convert only UAH and USD here!'
    }
    return result
}
console.log(convertCurrency('100$'));

// 9
function getRandomPassword(length = 8) {
    let password = '';

    for (let i = 0; i < length; i++) {
        password += (Math.random() * 10).toFixed().toString();
    } 
    return password
}
console.log(getRandomPassword());

// 11
function deleteLetters(letter, word) {
    word = word.split(letter).join('');
    return word
}
console.log(deleteLetters('o', 'Pneumonoultramicroscopicsilicovolcanokoniosis'));

// 12
function isPalindrom(palindrome) {
    return palindrome.toLowerCase() === palindrome.split('').reverse().join('').toLowerCase();
}
console.log(isPalindrom('SaippuAkivikauPpias'));

// 13
function deleteDuplicateLetter(string) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
      if (string.lastIndexOf(string[i]) == string.indexOf(string[i])) {
        result += string[i];
      }
    }
    return result;
}
console.log(deleteDuplicateLetter('Both your hands in the holes of my sweater'));

document.writeln(
    `Function №1: The greatest digit from the number 1238.97 is ${getMaxDigit(1238.97)} <br/>
    Function №2: 11 in the 2nd power will be ${toPower(11, 2)} <br/>
    Function №3: Uppercase the first letter of the name ${toUpper('alyCIa')} <br/>
    Function №4: Net salary after taxes ${netSalary(1000, 19.5)} <br/>
    Function №5: Random number from 1 to 100 - ${getRandom(1, 100)} <br/>
    Function №6: the letter "o" is repeated ${countLetter('o', 'Pneumonoultramicroscopicsilicovolcanokoniosis')} times in the word Pneumonoultramicroscopicsilicovolcanokoniosis <br/>
    Function №7: 100$ in UAH - ${convertCurrency('100$')} ; 25 UAH in USD - ${convertCurrency('25 UAH')} <br/>
    Function №9: Get random pass - ${getRandomPassword(8)} <br/>
    Function №11: Delete the letter 'o' from the word 'Pneumonoultramicroscopicsilicovolcanokoniosis' - ${deleteLetters('o', 'Pneumonoultramicroscopicsilicovolcanokoniosis')} <br/>
    Function №12: Is the word 'saippuakivikauppias' a palindrome - ${isPalindrom('saippuakivikauppias')} <br/>
    Function №13: Delete duplicate letters from the sentence 'Both your hands in the holes of my sweater' - ${deleteDuplicateLetter('Both your hands in the holes of my sweater')} `
)