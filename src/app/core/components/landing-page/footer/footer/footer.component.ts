import { Component } from '@angular/core';
// icons
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { tablerIcons } from '@ng-icons/tabler-icons';
import {
  tablerBrandGithub,
  tablerHeartCode,
  tablerHeartFilled,
  tablerBrandGithubFilled,
} from '@ng-icons/tabler-icons';
//
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgIconComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  viewProviders: [
    provideIcons({
      tablerBrandGithub,
      tablerHeartCode,
      tablerHeartFilled,
      tablerBrandGithubFilled,
    }),
  ],
})
export class FooterComponent {}
