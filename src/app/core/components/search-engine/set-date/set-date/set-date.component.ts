import { Component } from '@angular/core';
import { RouterModule, RouterLink } from '@angular/router';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { FlightSelectionService } from '../../../../../shared/services/flight-selection.service';
// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import octicons from '@ng-icons/octicons';
import { octPaperAirplane } from '@ng-icons/octicons';
//
@Component({
  selector: 'app-set-date',
  standalone: true,
  imports: [
    RouterModule,
    RouterLink,
    CalendarModule,
    FormsModule,
    NgIconComponent,
  ],
  templateUrl: './set-date.component.html',
  styleUrl: './set-date.component.css',
  viewProviders: [provideIcons({ octPaperAirplane })],
})
export class SetDateComponent {
  constructor(public flightSelectionService: FlightSelectionService) {}
}
