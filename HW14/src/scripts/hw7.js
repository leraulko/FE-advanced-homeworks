export const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };

const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };

const lithuania = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

// 1
export function getMyTaxes(salary) {
    return this.tax * salary;
}
// console.log(getMyTaxes.call(ukraine, 1500));