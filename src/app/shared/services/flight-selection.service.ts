import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
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
  token = environment.token;
  headers = new HttpHeaders()
    .set('Accept', 'application/vnd.amadeus+json')
    .set('Authorization', `Bearer  ${this.token}`);
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
  objectsToDisplayInCards: any[] = [];
  // functions

  // api requests
  async searchFlight() {
    // url: string = `https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${this.selectedAirportCode}&destinationLocationCode=BKK&departureDate=2024-05-05&adults=1&nonStop=false&max=250`;
    console.log(this.token);
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
      console.log(data);
      const flightOffers = data.data || [];
      const shuffledFlightOffers = this.shuffleArray(flightOffers);
      console.log(flightOffers);
      const firstFiveResults = shuffledFlightOffers.slice(0, 5);
      console.log(firstFiveResults);
      for (const result of firstFiveResults) {
        const {
          numberOfBookableSeats,
          validatingAirlineCodes,
          lastTicketingDate,
          price,
        } = result;
        const { currency, total } = price;
        const formattedPrice = `${total} ${currency}`;
        const displayObject = {
          seats: numberOfBookableSeats,
          price: formattedPrice,
          date: lastTicketingDate,
          code: validatingAirlineCodes,
        };
        this.objectsToDisplayInCards.push(displayObject);
      }
    });
    console.log(this.objectsToDisplayInCards);
  }

  shuffleArray(array: any[]): any[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

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
