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

  // Full Season Window Heat Loss Function
  fullSeasonCalc(formValues) {
    const energyInfo = {
      heatingDD: formValues.heatingDD,
      wattsUsed: null,
      moneySpent: null,
      btuLoss: null
    };

    let rValue = 1 / formValues.windowType;

    let heatLoss =
      (formValues.sqftWindows / rValue) * 24 * formValues.heatingDD;
    console.log(heatLoss);
    console.log(rValue);

    energyInfo.btuLoss = heatLoss;
    energyInfo.wattsUsed = (energyInfo.btuLoss / 3.412).toFixed(0);
    energyInfo.moneySpent = (
      (energyInfo.btuLoss / 3412) *
      formValues.kwh
    ).toFixed(2);

    return energyInfo;
  }

  windowPayback(formValues) {
    const energyInfo = {
      degreeDays: null,
      newWindows: formValues.newWindowType.value,
      BTUyears: null,
      BTUandEquity: null
    };

    let windowCost;

    if (formValues.newWindowType.value === 'vinyl') {
      windowCost =
        formValues.sqftWindows.value / formValues.numberWindows.value;
    }
  }
}
