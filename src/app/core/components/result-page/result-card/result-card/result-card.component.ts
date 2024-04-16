import { Component } from '@angular/core';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';

@Component({
  selector: 'app-result-card',
  standalone: true,
  imports: [],
  templateUrl: './result-card.component.html',
  styleUrl: './result-card.component.css',
})
export class ResultCardComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
}
