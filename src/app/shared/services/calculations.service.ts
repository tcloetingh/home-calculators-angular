import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {
  constructor() {}

  sampleCalculation(formValues) {
    const energyInfo = {
      tempDelta: null,
      wattsUsed: null,
      electricConsumption: null,
      btuLoss: null
    };

    energyInfo.tempDelta = formValues.indoorTemp - formValues.outdoorTemp;
    energyInfo.btuLoss = (
      energyInfo.tempDelta *
      formValues.typeOfWindows *
      formValues.sqftOfWindows
    ).toFixed(0);
    energyInfo.wattsUsed = (energyInfo.btuLoss / 3.412).toFixed(0);
    energyInfo.electricConsumption = (
      (energyInfo.btuLoss / 3412) *
      formValues.kwh
    ).toFixed(2);

    return energyInfo;
  }
}
