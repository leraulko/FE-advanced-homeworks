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

export const student1 = new Student('Massachussetts Institute of Technology', '2nd', 'Alicia Clark', [5, 4, 4, 5]);