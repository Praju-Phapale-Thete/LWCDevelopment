import { LightningElement,track } from 'lwc';

export default class StudentsInfo extends LightningElement {
    @track selectedStudent;
    @track studentsInfoParent = [
        {name: 'Praju',age:'21', rollNumber: '101'},
         {name: 'Vaishu',age:'22', rollNumber: '102'},
          {name: 'Pooja',age:'23', rollNumber: '103'},
           {name: 'Shubh',age:'24', rollNumber: '104'}
    ];

   constructor(){
        super();
        this.template.addEventListener('tileclick',this.tileSelectHandler.bind(this));
    }

tileselectHandler(event){
    console.log('tile Select Handler was called');
    this.selectedStudent = event.detail.name;
}

}

