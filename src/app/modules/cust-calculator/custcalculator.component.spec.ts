import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustcalculatorComponent } from './custcalculator.component';

describe('CustcalculatorComponent', () => {
  let component: CustcalculatorComponent;
  let fixture: ComponentFixture<CustcalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustcalculatorComponent]
    });
    fixture = TestBed.createComponent(CustcalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
