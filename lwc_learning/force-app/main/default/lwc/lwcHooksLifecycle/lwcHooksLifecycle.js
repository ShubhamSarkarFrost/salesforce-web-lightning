import { LightningElement } from 'lwc';

export default class LwcHooksLifecycle extends LightningElement {
    constructor(){
        super();
        console.log(`parent constructor called`)
    }
}