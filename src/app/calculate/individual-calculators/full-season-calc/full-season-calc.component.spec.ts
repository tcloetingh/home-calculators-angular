import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullSeasonCalcComponent } from './full-season-calc.component';

describe('FullSeasonCalcComponent', () => {
  let component: FullSeasonCalcComponent;
  let fixture: ComponentFixture<FullSeasonCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FullSeasonCalcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FullSeasonCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
