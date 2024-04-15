import { Component, NgModule } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';
import { FormsModule, NgForm } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-set-dest-form',
  standalone: true,
  imports: [RouterModule, RouterLink, FormsModule],
  templateUrl: './set-dest-form.component.html',
  styleUrl: './set-dest-form.component.css',
})
export class SetDestFormComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
}
