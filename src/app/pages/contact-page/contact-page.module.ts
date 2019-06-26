import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ContactPageComponent } from './contact-page.component';
import { ContactFormComponent } from '../../components/body/contact-form/contact-form.component';
import { ContactMapComponent } from '../../components/body/contact-map/contact-map.component';
import { ContactDetailsComponent } from '../../components/body/contact-details/contact-details.component';

@NgModule({
  declarations: [
    ContactPageComponent,
    ContactFormComponent,
    ContactMapComponent,
    ContactDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [ContactPageComponent]
})
export class ContactPageModule { }
