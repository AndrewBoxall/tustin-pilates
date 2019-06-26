import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickHoursComponent } from './quick-hours.component';

describe('QuickInfoSectionComponent', () => {
  let component: QuickHoursComponent;
  let fixture: ComponentFixture<QuickHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
