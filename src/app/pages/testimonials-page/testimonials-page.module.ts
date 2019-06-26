import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TestimonialsPageComponent } from './testimonials-page.component';
import { TestimonialComponent } from '../../components/body/testimonial/testimonial.component';
import { TestimonialsSectionComponent } from '../../components/body/testimonials-section/testimonials-section.component';
import { AddTestimonialComponent } from '../../components/body/add-testimonial/add-testimonial.component';

@NgModule({
  declarations: [
    TestimonialsPageComponent,
    TestimonialComponent,
    TestimonialsSectionComponent,
    AddTestimonialComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [TestimonialsPageComponent]
})
export class TestimonialsPageModule { }
