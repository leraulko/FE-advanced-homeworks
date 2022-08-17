let iphonePrice = 15.678, macPrice = 123.965, pcPrice = 90.2345;


const maxValue = (Math.max(iphonePrice, macPrice, pcPrice));
console.log(maxValue);


const minValue = (Math.min(iphonePrice, macPrice, pcPrice));
console.log(minValue);


const totalCost = iphonePrice + macPrice + pcPrice;
console.log(totalCost);


const iphoneRounded = (Math.floor(iphonePrice));
console.log(iphoneRounded);

const macRounded = (Math.floor(macPrice));
console.log(macRounded);

const pcRounded = (Math.floor(pcPrice));
console.log(pcRounded);

const roundedTotal = iphoneRounded + macRounded + pcRounded;
console.log(roundedTotal);

const roundedToHundreds = ((Math.round(roundedTotal / 100) * 100));
console.log(roundedToHundreds);

const isEven = number => number % 2 === 0;
console.log(isEven(roundedToHundreds));

const changeAmount = 500 - totalCost;
console.log(changeAmount);

const avarageValue = totalCost / 3;
console.log(Number(avarageValue.toFixed(2)));

const min_val = 10;
const max_val = 20;
let randomDiscount = (max_val - min_val) * Math.random() + min_val;
console.log(randomDiscount);

const totalWithDiscount = totalCost - randomDiscount;
console.log(Number(totalWithDiscount.toFixed(2)));

const costPrice = totalCost / 2;
const netProfit = costPrice - randomDiscount;
console.log(netProfit);


console.log(`Maximum price: ${maxValue}
Minimum price: ${minValue}
Total price: ${totalCost}
iPhone's rounded price: ${iphoneRounded}
Mac's rounded price: ${macRounded}
Pc's rounded price: ${pcRounded}
Total rounded price: ${roundedTotal}
Rounded to hundreds price: ${roundedToHundreds}
Is even: ${isEven(roundedToHundreds)}
Change amount: ${changeAmount}
Avarage value: ${avarageValue.toFixed(2)}
Discount: ${randomDiscount}
Total price with discount: ${totalWithDiscount.toFixed(2)}
Net profit: ${netProfit}
`);