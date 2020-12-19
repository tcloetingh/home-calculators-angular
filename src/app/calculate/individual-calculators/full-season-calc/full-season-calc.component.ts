import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CalculationsService } from 'src/app/shared/services/calculations.service';

@Component({
  selector: 'app-full-season-calc',
  templateUrl: './full-season-calc.component.html',
  styleUrls: ['./full-season-calc.component.css']
})
export class FullSeasonCalcComponent implements OnInit {
  fullSeasonForm: FormGroup;
  isLoading = false;
  showForm = true;
  energyResults;

  constructor(
    private formBuilder: FormBuilder,
    public calcService: CalculationsService
  ) {}

  ngOnInit(): void {
    this.fullSeasonForm = this.formBuilder.group({
      numberWindows: [null, Validators.required],
      sqftWindows: [null, Validators.required],
      windowType: [null, Validators.required],
      heatSource: [null, Validators.required],
      kwh: [null, Validators.required],
      heatingDD: [null, Validators.required]
    });
  }

  onSubmit() {
    this.isLoading = true;
    this.showForm = false;
    if (!this.fullSeasonForm.valid) {
      console.log('not working');
      return;
    }

    setTimeout(() => {
      this.energyResults = this.calcService.fullSeasonCalc(
        this.fullSeasonForm.value
      );
      this.isLoading = false;
    }, 3000);
  }

  recalculate() {
    this.isLoading = false;
    this.showForm = true;
    this.energyResults = null;
    this.fullSeasonForm.reset();
  }
}
