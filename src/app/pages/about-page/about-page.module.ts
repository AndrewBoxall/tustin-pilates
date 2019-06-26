import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AboutPageComponent } from './about-page.component';


@NgModule({
  declarations: [
    AboutPageComponent
  ],
  imports: [
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AboutPageComponent]
})
export class AboutPageModule { }
