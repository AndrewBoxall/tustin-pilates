import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BookingsPageComponent } from './bookings-page.component';

@NgModule({
  declarations: [
    BookingsPageComponent
  ],
  imports: [
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [BookingsPageComponent]
})
export class BookingsPageModule { }
