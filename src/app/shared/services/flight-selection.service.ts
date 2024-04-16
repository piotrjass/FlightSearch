import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FlightSelectionService {
  startingCity: string = 'Warsaw';
  selectedEndingCity: string = 'Paris';
  // startingDate: Date | null = null;
  // endingDate: Date | null = null;
  startingDate: Date = new Date();
  endingDate: Date = new Date();

  constructor() {}
}
