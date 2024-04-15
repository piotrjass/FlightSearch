import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-top-navbar-item',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './top-navbar-item.component.html',
  styleUrl: './top-navbar-item.component.css',
})
export class TopNavbarItemComponent {
  @Input() title: string = '';
  @Input() link: string = '';
}
