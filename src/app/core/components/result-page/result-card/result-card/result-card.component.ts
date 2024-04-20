import { Component, Input } from '@angular/core';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';

import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css',
})
export class ResultCardComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
  @Input() price: string = '';
  @Input() code: string = '';
  @Input() seats: number = 0;
}
