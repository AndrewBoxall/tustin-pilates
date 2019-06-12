import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header/header.component';
import { MainNavigationComponent } from './components/header/main-navigation/main-navigation.component';
import { HeaderLandingComponent } from './components/header/header-landing/header-landing.component';
import { ClassTypesComponent } from './components/body/class-types/class-types.component';
import { ClassScheduleComponent } from './components/body/class-schedule/class-schedule.component';
import { TestimonalsSectionComponent } from './components/body/testimonals-section/testimonals-section.component';
import { FooterSectionComponent } from './components/footer/footer-section/footer-section.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainNavigationComponent,
    HeaderLandingComponent,
    ClassTypesComponent,
    ClassScheduleComponent,
    TestimonalsSectionComponent,
    FooterSectionComponent,
    ContactPageComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
