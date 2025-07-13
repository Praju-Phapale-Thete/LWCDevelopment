import { LightningElement, api } from 'lwc';

export default class Childstd extends LightningElement {
    @api studInfo;

    tileclickHandler() {
        if (this.studInfo) {
            const selectEvent = new CustomEvent('tileclick', {
                detail: this.studInfo
            });
            this.dispatchEvent(selectEvent);
        }
    }
}
