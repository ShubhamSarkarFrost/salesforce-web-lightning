import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(){
        const myCustomEvent = new CustomEvent('close', {
            detail: {
                message: "Modal Closed Successfully"
            }
        });
        this.dispatchEvent(myCustomEvent);
    }
}