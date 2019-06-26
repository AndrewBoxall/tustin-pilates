import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HomePageComponent } from './home-page.component';
import { ClassTypesComponent } from '../../components/body/class-types/class-types.component';
import { WelcomeSectionComponent } from '../../components/body/welcome-section/welcome-section.component';
import { QuickInfoSectionComponent } from '../../components/body/quick-info-section/quick-info-section.component';
import { HeaderLandingComponent } from '../../components/header/header-landing/header-landing.component';
import { QuickContactComponent } from '../../components/body/quick-info-section/quick-contact.component';
import { QuickParkingComponent } from '../../components/body/quick-info-section/quick-parking.component';
import { QuickHoursComponent } from '../../components/body/quick-info-section/quick-hours.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ClassTypesComponent,
    HeaderLandingComponent,
    QuickInfoSectionComponent,
    WelcomeSectionComponent,
    QuickContactComponent,
    QuickParkingComponent,
    QuickHoursComponent
  ],
  imports: [
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class HomePageModule { }
