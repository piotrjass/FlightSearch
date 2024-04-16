import { Component } from '@angular/core';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';
import { DatePipe } from '@angular/common';
// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import remixicon from '@ng-icons/remixicon';
import {
  remixFlightTakeoffFill,
  remixFlightLandFill,
} from '@ng-icons/remixicon';
//
@Component({
  selector: 'app-result-parameters',
  standalone: true,
  imports: [DatePipe, NgIconComponent],
  templateUrl: './result-parameters.component.html',
  styleUrl: './result-parameters.component.css',
  viewProviders: [
    provideIcons({ remixFlightTakeoffFill, remixFlightLandFill }),
  ],
})
export class ResultParametersComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
}
