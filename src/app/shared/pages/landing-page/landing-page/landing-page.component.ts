import { Component } from '@angular/core';
import { TopNavbarComponent } from '../../../../core/components/landing-page/top-navbar/top-navbar/top-navbar/top-navbar.component';
import { HeroSectionComponent } from '../../../../core/components/landing-page/hero-section/hero-section/hero-section/hero-section.component';
import { FlyingAirplaneComponent } from '../../../../core/components/landing-page/hero-section/flying-airplane/flying-airplane/flying-airplane.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [TopNavbarComponent, HeroSectionComponent, FlyingAirplaneComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})
export class LandingPageComponent {}
