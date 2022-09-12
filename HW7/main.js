const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const lithuania = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1
function getMyTaxes(salary) {
    return this.tax * salary;
}
console.log(getMyTaxes.call(ukraine, 1500));


// 2
function getMiddleTaxes() {
    return this.tax * this.middleSalary;
}
console.log(getMiddleTaxes.call(latvia));


// 3
function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
}
console.log(getTotalTaxes.call(lithuania));


// 4
function getMySalary() {
    const salary = Math.floor(Math.random() * (2000 - 1500 + 1)) + 1500;
    const taxes = Math.round(salary * this.tax);
    const profit = salary - taxes;
    
    let res = {
        salary,
        taxes,
        profit,
    };

    console.log(res);
}

let setInt = setInterval(() =>
        getMySalary.call(ukraine)
    , 10000);