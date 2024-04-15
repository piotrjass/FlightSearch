import { Component } from '@angular/core';
import { AnimatedTextComponent } from '../../animated-text/animated-text/animated-text.component';
import { MainTextComponent } from '../../main-text/main-text/main-text.component';
import { AirplaneButtonComponent } from '../../airplane-button/airplane-button/airplane-button.component';
import { FlyingAirplaneComponent } from '../../flying-airplane/flying-airplane/flying-airplane.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    AnimatedTextComponent,
    MainTextComponent,
    AirplaneButtonComponent,
    FlyingAirplaneComponent,
  ],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.css',
})
export class HeroSectionComponent {}
