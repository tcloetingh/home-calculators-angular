import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculationsService {
  constructor() {}

  sampleCalculation(
    numberOfWindows,
    sqftOfWindows,
    typeOfWindows,
    outdoorTemp,
    indoorTemp,
    kwh
  ) {
    const energyInfo = {
      tempDelta: null,
      wattsUsed: null,
      electricConsumption: null,
      btuLoss: null
    };

    energyInfo.tempDelta = indoorTemp - outdoorTemp;
    energyInfo.btuLoss = (
      energyInfo.tempDelta *
      typeOfWindows *
      sqftOfWindows
    ).toFixed(0);
    energyInfo.wattsUsed = (energyInfo.btuLoss / 3.412).toFixed(0);
    energyInfo.electricConsumption = (
      (energyInfo.btuLoss / 3412) *
      kwh
    ).toFixed(2);

    return energyInfo;
  }
}
