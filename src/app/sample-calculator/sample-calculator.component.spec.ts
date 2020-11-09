import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleCalculatorComponent } from './sample-calculator.component';

describe('SampleCalculatorComponent', () => {
  let component: SampleCalculatorComponent;
  let fixture: ComponentFixture<SampleCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleCalculatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
