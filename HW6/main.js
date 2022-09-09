const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4]
    }
  }, {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5]
    }
  }, {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5]
    }
  }];


// 1
const getSubjects = (students) => {
    let result = [];
    let studentSubj = Object.keys(students.subjects);
    
    studentSubj.forEach((subj) => {
        subj = subj.charAt(0).toUpperCase() + subj.slice(1).replaceAll('_' , ' ');
        result.push(subj);
    });

    return result
};
console.log(getSubjects(students[0]));


// 2
const getAverageMark = (students) => {
    let marks = Object.values(students.subjects).flat();
    studentMark = marks.reduce((accumulator, element) => 
        accumulator + element, 0) / marks.length;

    return +studentMark.toFixed(2)
};
console.log(getAverageMark(students[0]));


// 3
const getStudentInfo = (students) => {
    return {
        name: students.name,
        course: students.course,
        'avarage mark': getAverageMark(students),
    }
};
console.log(getStudentInfo(students[0]));


// 4
const getStudentsNames = (students) => {
    const result = [];

    students.map((student) => {
        result.push(student.name)
    });

    return result.sort()
};
console.log(getStudentsNames(students));


// 5
const getBestStudent = (students) => {
    let marks = [];

    students.map((students) => {
        marks.push(getAverageMark(students))
    });

    const maxMark = Math.max(...marks);

    const bestStudent = students.map((students) => 
        getStudentInfo(students)).find((student) => student['avarage mark'] === maxMark);

    return bestStudent.name
}
console.log(getBestStudent(students));


// 6
const calculateWordLetters = (word) => {
    const object = {};
    
    word.split('').forEach((el) => {
        object[el] = (object[el] || 0) + 1;
    });

    return object;
};
console.log(calculateWordLetters('тест'));