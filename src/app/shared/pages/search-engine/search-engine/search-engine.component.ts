import { Component } from '@angular/core';
import { SetDestFormComponent } from '../../../../core/components/search-engine/set-dest/set-dest-form/set-dest-form.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-search-engine',
  standalone: true,
  imports: [SetDestFormComponent, RouterOutlet],
  templateUrl: './search-engine.component.html',
  styleUrl: './search-engine.component.css',
})
export class SearchEngineComponent {}
