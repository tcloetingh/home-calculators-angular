import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-full-season-calc',
  templateUrl: './full-season-calc.component.html',
  styleUrls: ['./full-season-calc.component.css']
})
export class FullSeasonCalcComponent implements OnInit {
  fullSeasonForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.fullSeasonForm = this.formBuilder.group({
      squareFootage: [null, Validators.required],
      rValue: [null, Validators.required],
      doors: [null, Validators.required],
      numberWindows: [null, Validators.required],
      sqftWindows: [null, Validators.required],
      windowType: [null, Validators.required],
      heatSource: [null, Validators.required],
      kwh: [null, Validators.required],
      heatingDD: [null, Validators.required],
      coolingDD: [null, Validators.required]
    });
  }

  onSubmit() {
    if (!this.fullSeasonForm.valid) {
      console.log('not working');
      return;
    }
    console.log('working');
    const houseData = this.fullSeasonForm.value;
  }
}
