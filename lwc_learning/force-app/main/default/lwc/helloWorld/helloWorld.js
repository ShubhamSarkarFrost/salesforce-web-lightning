import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    /*** Data Binding Example */
    fullName="Shubham Sarkar"
    title = "Salesforce"
    changeHandler(event){
        this.title = event.target.value;
    }
    
    /*** @track binding example */
    address = {
        city: "Hyderabad",
        state: "Telangana",
        country: "India"
    }
    trackHandler(event){
        this.address = {...this.address, "city": event.target.value}
    }

    /*** Getters */
     users = ["nick", "jhon", "smith", "jane", "doe", "joe", "jones", "jamie", "oliver", "jhonas"];

    // Getter to return the list (optional, but shows how getters work)
    get userList() {
        return this.users;
    }


}

