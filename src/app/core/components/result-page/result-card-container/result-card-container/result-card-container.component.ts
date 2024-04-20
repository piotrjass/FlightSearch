import { Component } from '@angular/core';
import { ResultCardComponent } from '../../result-card/result-card/result-card.component';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';
@Component({
  selector: 'app-result-card-container',
  standalone: true,
  imports: [ResultCardComponent],
  templateUrl: './result-card-container.component.html',
  styleUrl: './result-card-container.component.css',
})
export class ResultCardContainerComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
}
