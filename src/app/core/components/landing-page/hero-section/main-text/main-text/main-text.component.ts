import { Component, ViewChild, ElementRef } from '@angular/core';
import { animate, spring } from 'motion';
@Component({
  selector: 'app-main-text',
  standalone: true,
  imports: [],
  templateUrl: './main-text.component.html',
  styleUrl: './main-text.component.css',
})
export class MainTextComponent {
  @ViewChild('myElement') myElement: ElementRef;

  animateMyElement(): void {
    animate(
      this.myElement.nativeElement,
      { rotate: 180 },
      { duration: 0.5, easing: spring() },
    )
      .finished.then(() => {})
      .catch(() => {});
  }
}
