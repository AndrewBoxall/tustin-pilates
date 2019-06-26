import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { BookingsPageComponent } from './pages/bookings-page/bookings-page.component';
import { ClassesPageComponent } from './pages/classes-page/classes-page.component';
import { SchedulePageComponent } from './pages/schedule-page/schedule-page.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';

const routes: Routes = [
  { path: 'about', component: AboutPageComponent },
  { path: 'bookings', component: BookingsPageComponent },
  { path: 'classes', component: ClassesPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'schedule', component: SchedulePageComponent },
  { path: 'testimonials', component: TestimonialsPageComponent },
  { path: '', component: HomePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
