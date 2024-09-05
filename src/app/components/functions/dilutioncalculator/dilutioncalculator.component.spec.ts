import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DilutioncalculatorComponent } from './dilutioncalculator.component';

describe('DilutioncalculatorComponent', () => {
  let component: DilutioncalculatorComponent;
  let fixture: ComponentFixture<DilutioncalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DilutioncalculatorComponent]
    });
    fixture = TestBed.createComponent(DilutioncalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
