import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';

// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import octicons from '@ng-icons/octicons';
import { octPaperAirplane } from '@ng-icons/octicons';
//
@Component({
  selector: 'app-set-passengers',
  standalone: true,
  imports: [RouterModule, RouterLink, FormsModule, NgIconComponent],
  templateUrl: './set-passengers.component.html',
  styleUrl: './set-passengers.component.css',
  viewProviders: [provideIcons({ octPaperAirplane })],
})
export class SetPassengersComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
}
