import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    userNames = ["John", "Smith", "Mike", "Jane", "Mark"];
    fetchDetailHandler(){
       // fetch single element
        const elem = this.template.querySelector('h1')
        console.log(elem.innerText)

        // fetch multiple elements
        const userElements = this.template.querySelectorAll('.name')
        Array.from(userElements).foreach(item =>{
            console.log(item.innerText);
        })
    }
}