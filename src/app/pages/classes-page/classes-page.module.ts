import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClassesPageComponent } from './classes-page.component';

@NgModule({
  declarations: [
    ClassesPageComponent
  ],
  imports: [
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [ClassesPageComponent]
})
export class ClassesPageModule { }
