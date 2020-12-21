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

  // Window Payback Calculator

  windowPayback(formValues) {
    const energyInfo = {
      degreeDays: null,
      newWindows: formValues.newWindowType.value,
      BTUyears: null,
      BTUandEquity: null,
      heatingInfo: null
    };

    console.log(formValues);

    let averageWindowSize = formValues.sqftWindows / formValues.numberWindows;
    let averageVinylCost = 0;
    let premiumVinylCost = 0;
    let triplePaneCost = 0;

    if (averageWindowSize < 11) {
      averageVinylCost = 550;
      premiumVinylCost = 700;
      triplePaneCost = 900;
    } else {
      averageVinylCost = 650;
      premiumVinylCost = 800;
      triplePaneCost = 1000;
    }

    let totalNewWindowCost = 0;

    if (formValues.newWindowType === 'vinyl') {
      totalNewWindowCost = formValues.numberWindows * averageVinylCost;
    }
    if (formValues.newWindowType === 'premium') {
      totalNewWindowCost = formValues.numberWindows * premiumVinylCost;
    }
    if (formValues.newWindowType === 'triple') {
      totalNewWindowCost = formValues.numberWindows * triplePaneCost;
    }

    let heatingStats = this.fullSeasonCalc(formValues);

    energyInfo.heatingInfo = heatingStats;

    // Payback Period

    let years = 0;
    let btuCostPerYear = heatingStats.moneySpent;

    while (btuCostPerYear < totalNewWindowCost) {
      btuCostPerYear++;
      years++;
      console.log(years);
    }

    return energyInfo;
  }
}
