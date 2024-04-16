import { Component } from '@angular/core';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-result-parameters',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './result-parameters.component.html',
  styleUrl: './result-parameters.component.css',
})
export class ResultParametersComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
}
