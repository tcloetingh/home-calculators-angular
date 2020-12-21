import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculationsService } from 'src/app/shared/services/calculations.service';

@Component({
  selector: 'app-window-payback-calc',
  templateUrl: './window-payback-calc.component.html',
  styleUrls: ['./window-payback-calc.component.css']
})
export class WindowPaybackCalcComponent implements OnInit {
  windowPayback: FormGroup;
  isLoading = false;
  showForm = true;
  energyResults;

  constructor(
    private formBuilder: FormBuilder,
    public calcService: CalculationsService
  ) {}

  ngOnInit(): void {
    this.windowPayback = this.formBuilder.group({
      numberWindows: [null, Validators.required],
      sqftWindows: [null, Validators.required],
      windowType: [null, Validators.required],
      newWindowType: [null, Validators.required],
      heatSource: [null, Validators.required],
      kwh: [null, Validators.required],
      heatingDD: [null, Validators.required]
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.showForm = false;
    if (!this.windowPayback.valid) {
      console.log('not working');
      return;
    }

    setTimeout(() => {
      this.energyResults = this.calcService.windowPayback(
        this.windowPayback.value
      );
      this.isLoading = false;
    }, 3000);
  }

  recalculate() {
    this.isLoading = false;
    this.showForm = true;
    this.energyResults = null;
    this.windowPayback.reset();
  }
}
