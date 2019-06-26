import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SchedulePageComponent } from './schedule-page.component';
import { DynamicScheduleComponent } from '../../components/body/dynamic-schedule/dynamic-schedule.component';


@NgModule({
  declarations: [
    SchedulePageComponent,
    DynamicScheduleComponent
  ],
  imports: [
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [SchedulePageComponent]
})
export class SchedulePageModule { }
