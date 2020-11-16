import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcModalComponent } from './calc-modal.component';

describe('CalcModalComponent', () => {
  let component: CalcModalComponent;
  let fixture: ComponentFixture<CalcModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalcModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
