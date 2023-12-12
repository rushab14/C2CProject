import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacilityMgtComponent } from './facility-mgt.component';

describe('FacilityMgtComponent', () => {
  let component: FacilityMgtComponent;
  let fixture: ComponentFixture<FacilityMgtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FacilityMgtComponent]
    });
    fixture = TestBed.createComponent(FacilityMgtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
