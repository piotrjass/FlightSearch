import { Injectable } from '@angular/core';
import { environment } from '../../../enviroments/environment.development';
import { all_capitals_airports } from '../data/airports_iata_codes';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class FlightSelectionService {
  // constructor
  constructor(private http: HttpClient) {}
  // env variables
  amadeusAPIKey = environment.APIKEY;
  headers = new HttpHeaders()
    .set('Accept', 'application/vnd.amadeus+json')
    .set('Authorization', `Bearer  ${this.amadeusAPIKey}`);
  // rxjs varibales
  responseData$: Observable<any> | undefined;
  loadData: boolean = false;

  // variables
  citiesToSelect: any[] = all_capitals_airports;
  startingCity: string = '';
  selectedEndingCity: string = '';
  startingDate: Date = new Date();
  endingDate: Date = this.startingDate;
  adultsNumber: number = 0;
  childrenNumber: number = 0;
  // functions

  // api requests
  async searchFlight() {
    // url: string = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${this.selectedAirportCode}&destinationLocationCode=BKK&departureDate=2024-05-05&adults=1&nonStop=false&max=250`;
    let url: string = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${
      this.startingCity
    }&destinationLocationCode=${
      this.selectedEndingCity
    }&departureDate=${this.formatDate(this.startingDate)}&adults=${
      this.adultsNumber
    }&nonStop=false&max=250`;
    //
    this.http.get(url, { headers: this.headers }).subscribe((data: any) => {
      this.responseData$ = data;
      console.log(data.data);
    });

    //
    // this.responseData$ = this.http.get(url);
    // console.log(this.responseData$);
    // this.loadData = true;
    // console.log(url);
  }
  // format data

  formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  // data validations
  validatePassengers(): boolean {
    const totalPassengers = this.adultsNumber + this.childrenNumber;
    return totalPassengers > 0;
  }

  validateDates(): boolean {
    const isEndingDateValid =
      this.endingDate.getTime() > this.startingDate.getTime();
    const areDatesDifferent =
      this.startingDate.getTime() !== this.endingDate.getTime();
    // console.log('isEndingDateValid:', isEndingDateValid);
    // console.log('areDatesDifferent:', areDatesDifferent);
    return isEndingDateValid && areDatesDifferent;
  }
}
