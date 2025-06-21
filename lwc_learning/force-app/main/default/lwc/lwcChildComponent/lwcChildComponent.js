import { LightningElement, api } from 'lwc';

export default class LwcChildComponent extends LightningElement {
    @api message;
    @api recordId;
    
    connectedCallback() {
        console.log('Received message:', this.message);
        console.log('Received recordId:', this.recordId);
    }
}