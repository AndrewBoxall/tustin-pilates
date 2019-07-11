import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  email = {
    name: '', 
    address: '', 
    phone: '', 
    message: ''
  };

  submitted = false;

  onSubmit(){
    this.submitToServer(this.email);
    this.email = {
      name: '', 
      address: '', 
      phone: '', 
      message: ''
    };
    this.submitted = true;
  }

  submitToServer(emailData){
      let returnData;
      returnData = fetch('http://andrewjamesboxall.co.nz/tustinpilates/email', {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          senderName: emailData.name,
          emailAddress: emailData.address,
          emailBody: 'PH: ' + emailData.phone + 'Message: ' + emailData.message})
      })
      .then((response) => {
        if (response.status !== 200 && response.status !== 201){
          throw new Error('Failed to submit data to server');
        }
        return response.json();
      })
      .then((jsonResponse) => {
        return(jsonResponse)
      })
      .catch((error) => {
        console.log(error);
      })
      return returnData;
  };
}