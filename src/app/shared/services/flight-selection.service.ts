import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class FlightSelectionService {
  // env variables
  amadeusAPIKey = environment.APIKEY;
  // variables
  startingCity: string = 'Warsaw';
  selectedEndingCity: string = 'Paris';
  startingDate: Date = new Date();
  endingDate: Date = this.startingDate;
  currentDate: Date = new Date();
  adultsNumber: number = 0;
  childrenNumber: number = 0;
  // functions
  validatePassengers(): boolean {
    const totalPassengers = this.adultsNumber + this.childrenNumber;
    return totalPassengers > 0;
  }

  validateDates(): boolean {
    console.log(this.startingDate + ' ' + this.startingDate.getTime());
    console.log(this.currentDate + ' ' + this.currentDate.getTime());
    console.log(this.startingDate.getTime() === this.currentDate.getTime());

    const isStartingDateValid =
      this.startingDate.getTime() >= this.currentDate.getTime();
    const isEndingDateValid = this.endingDate > this.startingDate;
    const areDatesDifferent =
      this.startingDate.getTime() !== this.endingDate.getTime();

    return isStartingDateValid && isEndingDateValid && areDatesDifferent;
  }
  constructor() {}
}
