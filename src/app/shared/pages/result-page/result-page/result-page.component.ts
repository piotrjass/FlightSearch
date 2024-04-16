import { Component } from '@angular/core';
import { ResultCardComponent } from '../../../../core/components/result-page/result-card/result-card/result-card.component';
import { ResultParametersComponent } from '../../../../core/components/result-page/result-parameters/result-parameters/result-parameters.component';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [ResultCardComponent, ResultParametersComponent],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css',
})
export class ResultPageComponent {}
