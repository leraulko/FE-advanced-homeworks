export function isPalindrom(palindrome) {
    palindrome = palindrome.replaceAll(' ', '');
    return palindrome.toLowerCase() === palindrome.split('').reverse().join('').toLowerCase();
}
// console.log(isPalindrom('SaippuAki vikauPpias'));