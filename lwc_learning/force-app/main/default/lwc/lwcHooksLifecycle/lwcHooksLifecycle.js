import { LightningElement } from 'lwc';

export default class LwcHooksLifecycle extends LightningElement {
    isChildVisible = true;
    constructor(){
        super();
        console.log(`parent constructor called`)
    }
    connectedCallback(){
        console.log(`parent connectedCallback called`);
    }
    renderedCallback(){
        console.log(`parent renderedCallback called`);
    }

    handleClick(){
           this.isChildVisible = !this.isChildVisible;
    }
    // errorCallback(error, stack){
    //     console.log(error.message);
    //     console.log(stack);
    // }
}