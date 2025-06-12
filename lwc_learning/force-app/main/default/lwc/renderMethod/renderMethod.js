import { LightningElement } from 'lwc';
import signInTemplate from './signInTemplate.html';
import signUpTemplate from './signUpTemplate.html';
import renderMethod from './renderMethod.html';

export default class RenderMethod extends LightningElement {
selectedBtn = ""
    render(){
        return  this.selectedBtn === 'SignUp' ? signUpTemplate: this.selectedBtn === 'SignIn'? signInTemplate : renderMethod;
    }

    chooseSignUp(event){
       this.selectedBtn = event.target.label;
    }
}