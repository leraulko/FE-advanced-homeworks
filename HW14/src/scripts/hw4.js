const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];

const marks = [4, 5, 5, 3, 4, 5];


// pairs
function getPairs(students){
    const girls = [];
    const guys = [];
    
    for (let i = 0; i < students.length; i++) {
        if ('а' === students[i].at(-1)) {
            girls.push(students[i]);
        } else {
            guys.push(students[i]);
        };
    };
    // console.log(girls, guys);


    const studentPairs = [];

    for (let i = 0; i < girls.length; i++) {
        studentPairs.push([girls[i], guys[i]]);
    }; return studentPairs
}
export const pairs = getPairs(students);
// console.log(pairs);