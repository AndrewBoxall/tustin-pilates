import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  name: string;
  email: string;
  phone: string;
  message: string;

  constructor() { }

  ngOnInit() {
  }
  onSubmit(){
    
  }
  submitToServer(fetchUrl){
      let returnData;
      returnData = fetch(fetchUrl, {
        method: "POST",
        mode: "cors",
        headers: {
          'Content-type': 'application/json'
        }
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