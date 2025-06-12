import { LightningElement } from 'lwc';

export default class NewLWCParentLifecycle extends LightningElement {
     isChildVisible = false;
    constructor(){
        super();
        console.log(`parent constructor called`)
    }
    connectedCallback(){
        console.log(`parent connectedCallback called`);
        
    }
    handleClick(){
           this.isChildVisible = !this.isChildVisible;
    }
}