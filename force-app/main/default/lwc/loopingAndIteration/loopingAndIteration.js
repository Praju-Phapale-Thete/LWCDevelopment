import { LightningElement ,track} from 'lwc';
export default class LoopingAndIteration extends LightningElement {
@track cityList=['Mumbai','Pune','Kolakatta','Chennai','Banglore','delhi'];

addcity='';



changeHandler(evt){
    this.addcity = evt.target.value;
}
clickhandler(){
if (this.addcity) {
            this.cityList = [...this.cityList, this.addcity];
            this.addcity = '';
        }
}

}
     


