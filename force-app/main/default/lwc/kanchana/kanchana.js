import { api, LightningElement,wire } from 'lwc'; 
import { subscribe, unsubscribe, APPLICATION_SCOPE, MessageContext } from 'lightning/messageService'; 
import searchMessage from '@salesforce/messageChannel/MyChannel__c'; 
import insertContact from '@salesforce/apex/gitComponentContriller.insertContact';
import insertContact1 from '@salesforce/apex/gitComponentContriller.insertContact1';
import { getRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Account from '@salesforce/schema/Account.Name';
const QUERY_USER_ENDPOINT_URL='https://api.github.com/search/users?q=';

export default class GitListViewComponent extends LightningElement {

@api personName;
selecteduser ='';
selecteduserArray=[];
retrivedusers=[];
subscription = null;

retriveduserName='';

@wire(getRecord, { recordId: '0015g000017jnFPAAY', fields: 'Account.Name' })
wiredRecord({ error, data }) {
if(error){
    console.log(error) ;
}else if(data){
    console.log(data);
    this.retriveduserName=data.fields.Name.value;
}
}
@wire(MessageContext)
messageContext;

connectedCallback() {
    this.subscribeToMessageChannel();
}

disconnectedCallback() {
    this.unsubscribeToMessageChannel();
}

// Encapsulate logic for Lightning message service subscribe and unsubsubscribe
subscribeToMessageChannel() {
    if (!this.subscription) {
        this.subscription = subscribe(
            this.messageContext,
            searchMessage,
            (message) => this.handleMessage(message),
            { scope: APPLICATION_SCOPE }
        );
    }
}
async handleMessage(message) {
    console.log('handleMessage:', message);
    this.personName=message.searchTerm;
    let queryEndPoint=QUERY_USER_ENDPOINT_URL+this.personName;
    try{
    const RESPONSE=await fetch(queryEndPoint);
    const USER_LIST=await RESPONSE.json();
    console.log(USER_LIST.items);
    this.retrivedusers=USER_LIST.items;
    if(this.retrivedusers.length === 0) {
        throw new Error('No user found');
    }
} catch(error) {
    console.log(error);
    const toastEvent = new ShowToastEvent({
        title: 'Please enter any value',
        message: error.message,
        variant: 'error',
    });
    this.dispatchEvent(toastEvent);
    }
}
unsubscribeToMessageChannel() {
    unsubscribe(this.subscription);
    this.subscription = null;
}

handleonuserclicked(event){
    
    console.log(event.detail); 
    
this.selecteduser=event.detail;
this.selecteduserArray.push(event.detail);
    //alert(this.selecteduser);
}
get showuser(){
    return this.selecteduser.length != 0 ? true: false;
}


async handleSaveUserClick(){
    console.log('save user in SF');

            try{
    const issuccess=await insertContact1({accNameList:this.selecteduserArray});

    const evt = new ShowToastEvent({
        title: 'Records Saved',
        message: 'Record Saved',
        variant: 'info',
    });
    this.dispatchEvent(evt);
    
    console.log('created creation'+issuccess);
    }catch(error){
    console.log(error);
    }
    }
        

    
}


/*export default class Kanchana extends LightningElement { 
@api personName; 
retrivedusers=[]; 
selectedUser='';
subscription = null; 
@wire(MessageContext) 
messageContext; 

connectedCallback() { 
    this.subscribeToMessageChannel(); 
} 
disconnectedCallback() { 
    this.unsubscribeToMessageChannel(); 
} 
// Encapsulate logic for Lightning message service subscribe and unsubsubscribe 
subscribeToMessageChannel() { 
    if (!this.subscription) { 
        this.subscription = subscribe( 
            this.messageContext, 
            searchMessage, 
            (message) => this.handleMessage(message), 
            { scope: APPLICATION_SCOPE } 
        ); 
    } 
} 
async handleMessage(message) { 
    console.log('handleMessage:', message); 
    this.personName=message.searchTerm; 
    let queryEndPoint=QUERY_USER_ENDPOINT_URL+this.personName; 
    try{ 
    const RESPONSE=await fetch(queryEndPoint); 
    const USER_LIST=await RESPONSE.json(); 
    console.log(USER_LIST.items); 
    this.retrivedusers=USER_LIST.items; 
    }catch(error){ 
        console.log(error);  
    } 
} 
unsubscribeToMessageChannel() { 
    unsubscribe(this.subscription); 
    this.subscription = null; 
} 
    
handleOnUserClicked(event){
    console.log(event.detail);
    this.selectedUser=event.detail;
    alert(this.selectedUser);
}
}*/

/*import { LightningElement,wire } from 'lwc';
import {subscribe,MessageContext} from 'lightning/messageService';
import MyChannel from '@salesforce/messageChannel/MyChannel__c';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Kanchana extends LightningElement {
publisherMessage = '';
subscription = null;

@wire(MessageContext)
messageContext;

connectedCallback() {
    this.handleSubscribe();
}

handleSubscribe() {
    if (this.subscription) {
        return;
    }
    this.subscription = subscribe(this.messageContext, MyChannel, (message) => {
        console.log(message.message);
        this.publisherMessage = message.message;
        this.ShowToast('Success', message.message, 'success', 'dismissable');
    });
}

ShowToast(title, message, variant, mode){
    const evt = new ShowToastEvent({
        title: title,
        message:message,
        variant: variant,
        mode: mode
    });
    this.dispatchEvent(evt);
}
    
}*/


/*export default class Kanchana extends LightningElement {
textValue;
subscription = null;

@wire(MessageContext)
messageContext;

connectedCallback() {
    this.subscribeToMessageChannel();
}

disconnectedCallback() {
    this.unsubscribeToMessageChannel();
}

subscribeToMessageChannel() {
    if (!this.subscription) {
        this.subscription = subscribe(
            this.messageContext,
            searchMessage,
            (message) => this.handleMessage(message),
            
        );
    }
}
handleMessage(message) {
    console.log('handleMessage',message);
}

unsubscribeToMessageChannel() {
    unsubscribe(this.subscription);
    this.subscription = null;
}
}*/