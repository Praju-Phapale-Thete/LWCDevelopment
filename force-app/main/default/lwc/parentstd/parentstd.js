import { LightningElement, track } from 'lwc';

export default class Parentstd extends LightningElement {
    @track studentsInfoParent = []; 
    @track newStudent = {
        name: '',
        age: '',
        rollNumber: ''
    };

    handleNameChange(event) {
        this.newStudent.name = event.target.value;
    }

    handleAgeChange(event) {
        this.newStudent.age = event.target.value;
    }

    handleRollChange(event) {
        this.newStudent.rollNumber = event.target.value;
    }

    addStudent() {
        const { name, age, rollNumber } = this.newStudent;
        if (name && age && rollNumber) {
            const student = {
                name,
                age: parseInt(age, 10),
                rollNumber: parseInt(rollNumber, 10)
            };
            this.studentsInfoParent = [...this.studentsInfoParent, student];

            this.newStudent = { name: '', age: '', rollNumber: '' };
        }
    }

    tileselectHandler(event) {
       
        console.log('Selected Student:', event.detail);
    }
}
