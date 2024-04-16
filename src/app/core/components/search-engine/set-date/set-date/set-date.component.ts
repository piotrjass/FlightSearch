import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';

@Component({
  selector: 'app-set-date',
  standalone: true,
  imports: [RouterModule, RouterLink, CalendarModule, FormsModule],
  templateUrl: './set-date.component.html',
  styleUrl: './set-date.component.css',
})
export class SetDateComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
}
