import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AboutPageModule } from './pages/about-page/about-page.module';
import { BookingsPageModule } from './pages/bookings-page/bookings-page.module';
import { ClassesPageModule } from './pages/classes-page/classes-page.module';
import { ContactPageModule } from './pages/contact-page/contact-page.module';
import { HomePageModule } from './pages/home-page/home-page.module';
import { SchedulePageModule } from './pages/schedule-page/schedule-page.module';
import { TestimonialsPageModule } from './pages/testimonials-page/testimonials-page.module';

import { AppComponent } from './app.component';
import { MainNavigationComponent } from './components/header/main-navigation/main-navigation.component';
import { FooterSectionComponent } from './components/footer/footer-section/footer-section.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavigationComponent,
    FooterSectionComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AboutPageModule,
    BookingsPageModule,
    ClassesPageModule,
    ContactPageModule,
    HomePageModule,
    SchedulePageModule,
    TestimonialsPageModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }