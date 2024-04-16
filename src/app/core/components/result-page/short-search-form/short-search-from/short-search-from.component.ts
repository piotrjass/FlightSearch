import { Component } from '@angular/core';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';
import { RouterModule, RouterLink } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-short-search-from',
  standalone: true,
  imports: [RouterModule, RouterLink, CalendarModule, FormsModule],
  templateUrl: './short-search-from.component.html',
  styleUrl: './short-search-from.component.css',
})
export class ShortSearchFromComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
}
