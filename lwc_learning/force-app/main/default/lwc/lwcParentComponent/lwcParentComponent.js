import { LightningElement } from 'lwc';
import salesforcePexelsTwo  from '@salesforce/resourceUrl/salesforcePexelsTwo';
import salesforcePexelsThree  from '@salesforce/resourceUrl/salesforcePexelsThree';

export default class LwcParentComponent extends LightningElement {
    parentMessage = 'Hello from Parent!';
    parentRecordId = '0031234567890ABC';

    carouselData =[
        {       
                id : 1,
                src : salesforcePexelsTwo,
                header : "Carnival Carousal Card One",
                description : "First image of Carnival Carousal",   
        },
        {       
                id: 2,
                src : salesforcePexelsTwo,
                header : "Carnival Carousal Card Two",
                description : "Second image of Carnival Carousal",   
        },
        {       
                id: 3,
                src : salesforcePexelsThree,
                header : "Carnival Carousal Card Three",
                description : "Third image of Carnival Carousal",   
        }

    ]

    percentage = 0;
    
    changeHandler(event){
       this.percentage = event.target.value;
    }
}