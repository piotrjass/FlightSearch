import { Component } from '@angular/core';
import { TopNavbarItemComponent } from '../../top-navbar-item/top-navbar-item/top-navbar-item.component';

@Component({
  selector: 'app-top-navbar',
  standalone: true,
  imports: [TopNavbarItemComponent],
  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  sections: any[] = [
    {
      name: 'Destinations',
      scrollToID: 'Destinations',
    },
    {
      name: 'Calendar',
      scrollToID: 'air',
    },
    {
      name: 'Planes',
      scrollToID: 'code',
    },
  ];
}
