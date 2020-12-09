import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WindowPaybackCalcComponent } from './window-payback-calc.component';

describe('WindowPaybackCalcComponent', () => {
  let component: WindowPaybackCalcComponent;
  let fixture: ComponentFixture<WindowPaybackCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WindowPaybackCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WindowPaybackCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
