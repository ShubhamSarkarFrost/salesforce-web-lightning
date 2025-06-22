import { LightningElement } from 'lwc';

export default class C2pModalComponent extends LightningElement {
    closeHandler(){
        const myCustomEvent = new CustomEvent('close', {
            bubbles: true,
            detail: {
                message: "Modal Closed Successfully"
            }
        });
        this.dispatchEvent(myCustomEvent);
    }

    foorterevent(){
        console.log("Footer Event Bubbled!!");
    }
}