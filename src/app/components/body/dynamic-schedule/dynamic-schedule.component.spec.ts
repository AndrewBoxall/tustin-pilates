import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicScheduleComponent } from './dynamic-schedule.component';

describe('ClassTypesComponent', () => {
  let component: DynamicScheduleComponent;
  let fixture: ComponentFixture<DynamicScheduleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicScheduleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
