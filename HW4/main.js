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
const pairs = getPairs(students);
console.log(pairs);


// themes
function getPairsThemes(pairs, themes) {
    const getThemes = [];

    for (let i = 0; i < pairs.length; i++) {
        getThemes.push( [pairs[i].join(' та '), themes[i]] );        
    }; return getThemes
}
const pairsThemes =  getPairsThemes(pairs, themes);
console.log(pairsThemes);


// marks
function getStudentMark(students, marks) {
    const getMarks = [];

    for (let i = 0; i < marks.length; i++) {
        getMarks.push( [students[i], marks[i]] );
    }; return getMarks
}
const studentsMarks = getStudentMark(students, marks);
console.log(studentsMarks);


// random marks
function getRandomMark(pairsThemes) {
    const randomMark = [];
    function mark(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    };

    for (let i = 0; i < pairsThemes.length; i++) {
        randomMark.push( [pairsThemes[i] + ' , ' + mark(1, 5)] );
    }; return randomMark
}
const pairsRandomMarks = getRandomMark(pairsThemes);
console.log(pairsRandomMarks);