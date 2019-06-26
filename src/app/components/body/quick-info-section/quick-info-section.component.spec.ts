import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickInfoSectionComponent } from './quick-info-section.component';

describe('QuickInfoSectionComponent', () => {
  let component: QuickInfoSectionComponent;
  let fixture: ComponentFixture<QuickInfoSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuickInfoSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuickInfoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
