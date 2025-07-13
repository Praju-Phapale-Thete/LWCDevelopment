import { LightningElement} from 'lwc';

export default class ConditionalRendering extends LightningElement {
displayDiv = false;
displaybutton = false;

    checkHandler(event){
      
        console.log(event.target.checked);

           this.displayDiv = event.target.checked;

}
clickHandler(){

    this.displaybutton = true;
}

 status = 'Afternoon';
changeHandler(event){
    console.log(event.target.value);
    this.status = event.target.value;
}
get isMorning(){
    return this.status == 'Morning';
}

get isAfternoon(){
    return this.status == 'Afternoon';
}

}