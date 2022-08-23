let minValue = Number(prompt ("Enter a number"));

while (!Number.isInteger(minValue) || minValue == '' || minValue == null) {
    alert ("This number isn't valid. Enter an integer!");
    minValue = Number(prompt ("Enter an integer"));
} 
console.log(minValue);

let maxValue = Number(prompt ("Enter a second number"));

while (!Number.isInteger(maxValue) || maxValue == '' || maxValue == null) {
    alert ("This number isn't valid. Enter an integer!");
    maxValue = Number(prompt ("Enter second integer"));
}
while (maxValue <= minValue) {
    alert ('Enter the greater number than the first one');
    maxValue = Number(prompt ("Enter second number"));
}
console.log(maxValue);

let result = 0;
let skipEven = confirm('Skip even numbers?');

for (let i = minValue; i <= maxValue; i++) {
   if (skipEven) {
       !(i % 2) ? result : result += i;
   } else {
        result += i;
   }
}
console.log(result);

document.writeln (`Result: ${result} `);