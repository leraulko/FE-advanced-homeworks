class Student {
    constructor(university, course, fullName, marks) {
        this.university = university;
        this.course = course;
        this.fullName = fullName;
        this.marks = marks;
        this.dismiss = false;
    }

    getInfo() {
        return `${this.course} year student at ${this.university}, ${this.fullName}`;
    }

    get grades() {
        if (this.dismiss === false) {
            return this.marks;
        } else {
            return null;   
        };
    }

    set grades(val) {
        if (this.dismiss === false) {
            return this.marks.push(val);;
        } 
    }

    getAverageMark() {
        return this.marks.reduce((accumulator, element) => 
            accumulator + element, 0) / this.marks.length;
    }

    dismissStudent() {
        this.dismiss = true;
    }

    recoverStudent() {
        this.dismiss = false;
    }
}

const student1 = new Student('Massachussetts Institute of Technology', '2nd', 'Alicia Clark', [5, 4, 4, 5]);
//2
console.log('Info:', student1.getInfo());
//3
console.log('Marks:', student1.grades);
//4
student1.grades = 5;
console.log('Set new mark:', student1.grades);
//5
console.log('Avarage mark:', student1.getAverageMark());
//6
student1.dismissStudent();
student1.grades = 5;
console.log(student1.grades);
//7
student1.recoverStudent();
console.log(`Recovered student's marks:`, student1.grades);



// Advanced
class BudgetStudent extends Student {
    constructor(university, course, fullName, marks) {
        super(university, course, fullName, marks)

        setInterval(() => {
            this.getScholarship()
        }, 30000);
    }

    getScholarship() {
        const studentAvarageMark = this.getAverageMark();

        if (studentAvarageMark >= 4.0 && this.dismiss === false) {
            console.log('You recieved a scholarship in the amount of 1400 UAH!');
        } else {
            console.log(`Sorry, you won't get the scholarship.`);
        }
    }
}

const student2 = new BudgetStudent('Massachussetts Institute of Technology', '1st', 'Clarke Griffin', [5, 4, 4, 5])
console.log('Info of budget student:', student2.getInfo());
student2.getScholarship();