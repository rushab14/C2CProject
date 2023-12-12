import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GatePassesComponent } from './gate-passes.component';

describe('GatePassesComponent', () => {
  let component: GatePassesComponent;
  let fixture: ComponentFixture<GatePassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GatePassesComponent]
    });
    fixture = TestBed.createComponent(GatePassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
