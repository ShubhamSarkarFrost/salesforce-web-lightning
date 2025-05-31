import { LightningElement, track } from 'lwc';

export default class CheckTemperature extends LightningElement {
    @track temperature = 0;
    @track isVisible = false;

    handleInputChange(event) {
        this.temperature = parseInt(event.target.value, 10);
    }

    handleButtonClick() {
        // Show message only if temperature is greater than 40
        if (this.temperature > 40) {
            this.isVisible = true;
        } else {
            this.isVisible = false;
        }
    }
}
