import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import octicons from '@ng-icons/octicons';
import { octPaperAirplane } from '@ng-icons/octicons';
//
@Component({
  selector: 'app-set-dest-form',
  standalone: true,
  imports: [RouterModule, RouterLink, FormsModule, NgIconComponent],
  templateUrl: './set-dest-form.component.html',
  styleUrl: './set-dest-form.component.css',
  viewProviders: [provideIcons({ octPaperAirplane })],
})
export class SetDestFormComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
}
