import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickParkingComponent } from './quick-parking.component';

describe('QuickParkingComponent', () => {
  let component: QuickParkingComponent;
  let fixture: ComponentFixture<QuickParkingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickParkingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
