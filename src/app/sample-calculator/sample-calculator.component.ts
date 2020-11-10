import { Component, OnInit } from '@angular/core';
import { CalculationsService } from '../shared/services/calculations.service';

@Component({
  selector: 'app-sample-calculator',
  templateUrl: './sample-calculator.component.html',
  styleUrls: ['./sample-calculator.component.css']
})
export class SampleCalculatorComponent implements OnInit {
  btuLoss: number;
  wattage: number;
  price: number;

  constructor(public calcService: CalculationsService) {}

  onSampleCalculation(
    numberOfWindows,
    sqftOfWindows,
    typeOfWindows,
    outdoorTemp,
    indoorTemp,
    kwh
  ) {
    const energyResults = this.calcService.sampleCalculation(
      numberOfWindows,
      sqftOfWindows,
      typeOfWindows,
      outdoorTemp,
      indoorTemp,
      kwh
    );

    console.log(energyResults);
  }

  ngOnInit(): void {}
}
