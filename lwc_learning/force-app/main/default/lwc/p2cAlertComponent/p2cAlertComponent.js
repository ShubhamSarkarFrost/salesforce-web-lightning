import {  LightningElement, api } from 'lwc';

export default class P2cAlertComponent extends LightningElement {
     @api message;
     @api cardHeading;

     connectedCallback(){
        console.log("Message Received:", this.message);
        console.log("Card Heading Received:", this.cardHeading);
     }
}