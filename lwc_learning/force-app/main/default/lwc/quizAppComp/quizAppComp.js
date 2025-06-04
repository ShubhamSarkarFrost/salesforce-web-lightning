import { LightningElement } from 'lwc';

export default class QuizAppComp extends LightningElement {
   selected ={}
   correctAnswers =0
   isSubmitted = false // use to show the no of correct answers
   myQuestions = [
    {
        id: "Question1",
        question: "Which one of the following is not a template loop?",
        answers: {
            a: "for:each",
            b: "iterator:each",
            c: "for:item"
        },
         correctAnswer :"b"
    },
    {
        id: "Question2",
        question: "Which LWC lifecycle hook is called when the component is inserted into the DOM?",
        answers: {
            a: "renderedCallback",
            b: "connectedCallback",
            c: "createdCallback"
        },
         correctAnswer :"b"
    },
    {
        id: "Question3",
        question: "Which file is required to define metadata for an LWC component?",
        answers: {
            a: ".html",
            b: ".js",
            c: ".js-meta.xml"
        },
         correctAnswer :"c"
    },
    {
        id: "Question4",
        question: "Which directive is used for conditional rendering in LWC?",
        answers: {
            a: "if:render",
            b: "if:true",
            c: "show-if"
        },
         correctAnswer :"b"
    },
    {
        id: "Question5",
        question: "Which decorator is used to make a property reactive in LWC?",
        answers: {
            a: "@track",
            b: "@api",
            c: "@wire"
        },
         correctAnswer :"a"
    },
    {
        id: "Question6",
        question: "Which directive in LWC supports looping with index and key access?",
        answers: {
            a: "for:each",
            b: "repeat",
            c: "iterator"
        },
         correctAnswer :"c"
    },
    {
        id: "Question7",
        question: "Which annotation is used in Apex to expose a method to LWC?",
        answers: {
            a: "@AuraEnabled",
            b: "@PublicMethod",
            c: "@Expose"
        },
         correctAnswer :"a"
    },
    {
        id: "Question8",
        question: "What is the base class from which all LWC components extend?",
        answers: {
            a: "BaseComponent",
            b: "LightningElement",
            c: "LWCElement"
        },
         correctAnswer :"b"
    },
    {
        id: "Question9",
        question: "Which directive is used to bind a value to an input field in LWC?",
        answers: {
            a: "value",
            b: "bind:value",
            c: "value={property}"
        },
         correctAnswer :"c"
    },
    {
        id: "Question10",
        question: "Which CLI command is used to deploy source to a Salesforce org?",
        answers: {
            a: "sfdx force:source:deploy",
            b: "sfdx lwc:push",
            c: "sfdx deploy:lwc"
        },
        correctAnswer :"a"
    }
];

get allNotSelected(){
    return !(Object.keys(this.selected).length === this.myQuestions.length)
}

get isScoredFull(){
    return `slds-text-heading_large ${this.myQuestions.length === this.correctAnswers ? 'slds-text-color_success': 'slds-text-color_error'}`
}

changeHandler(event){
    console.log("name",event.target.name)
    console.log("value",event.target.value)
    const {name, value} = event.target;
    this.selected = {...this.selected, [name]: value}
}

submitHandler(event){
   event.preventDefault();
   let correct = this.myQuestions.filter(item => this.selected[item.id] === item.correctAnswer)
   this.correctAnswers = correct.length
   console.log("the correct answer" , this.correctAnswers)
   this.isSubmitted = true
}

resetHandler(){
   this.selected = {}
   this.correctAnswers = 0
}

}