import { Component, OnInit } from '@angular/core';
import { CalculationsService } from '../shared/services/calculations.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-calculator',
  templateUrl: './sample-calculator.component.html',
  styleUrls: ['./sample-calculator.component.css']
})
export class SampleCalculatorComponent implements OnInit {
  sampleForm: FormGroup;
  energyResults: Object;
  isLoading = false;
  showForm = true;

  constructor(
    public calcService: CalculationsService,
    private formBuilder: FormBuilder
  ) {}

  onSampleCalculation() {
    this.isLoading = true;
    this.showForm = false;
    setTimeout(() => {
      this.energyResults = this.calcService.sampleCalculation(
        this.sampleForm.value
      );

      this.isLoading = false;
    }, 3000);
  }

  ngOnInit(): void {
    this.sampleForm = this.formBuilder.group({
      numberOfWindows: [null, [Validators.required]],
      sqftOfWindows: [null, [Validators.required]],
      typeOfWindows: [null, [Validators.required]],
      outdoorTemp: [null, [Validators.required]],
      indoorTemp: [null, [Validators.required]],
      kwh: [null, [Validators.required]]
    });
  }
}
