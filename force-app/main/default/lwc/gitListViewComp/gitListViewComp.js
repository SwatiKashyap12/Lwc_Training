import { LightningElement,api } from 'lwc';

export default class GitListViewComp extends LightningElement {
    @api 
    retrivedUser;

    handleButtonClick(){
        const selectedEvent = new CustomEvent('selected', { detail: this.retrivedUser.login });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}