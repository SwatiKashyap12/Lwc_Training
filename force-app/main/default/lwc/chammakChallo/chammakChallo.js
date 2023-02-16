import { LightningElement,wire} from 'lwc'; 
import { publish, MessageContext } from 'lightning/messageService'; 
import searchMessage from '@salesforce/messageChannel/MyChannel__c'; 
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class ChammakChallo extends LightningElement { 
@wire(MessageContext) 
messageContext;
message; 

handleClick(event){ 
let inputvalue=this.template.querySelectorAll("lightning-input")[0].value; 
const payload = { isTermvalid:true, searchTerm:inputvalue }; 
   publish(this.messageContext, searchMessage, payload); 
   
} 

    
}

/*import { LightningElement,track,wire } from 'lwc';
import { publish,MessageContext } from 'lightning/messageService';
import MyChannel from '@salesforce/messageChannel/MyChannel__c';
const GITHUB_URL = 'https://api.github.com/users?q=';


export default class ChammakChallo extends LightningElement {

@wire(MessageContext)
messageContext;
message;


handleChange(event){
    this.message = event.detail.value;
}

handleClick() {
    let message = {message: this.message};
    publish(this.messageContext, MyChannel, message);
}


} */


/*export default class ChammakChallo extends LightningElement {
connectedCallback() {
    console.log('Connected callBack');
}
renderedCallback(){
    console.log('rendered callBack');
}
@wire(MessageContext)
searchmessage;
handleClick(event){
    
    const payload = { searchTerm:'Search'};

    publish(this.searchmessage, searchMessage, payload)
}
}*/