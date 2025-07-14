import { LightningElement, api } from 'lwc';

export default class StudInfo extends LightningElement {
    @api studInfo;

    tileclickHandler() {
        alert('tileclickHandler was called');
        if (this.studInfo) {
            const selectEvent = new CustomEvent('tileclick', {
                detail: this.studInfo
            });
            this.dispatchEvent(selectEvent);
        }
    }
}
