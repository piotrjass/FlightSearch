import { Component } from '@angular/core';
import { ResultCardComponent } from '../../../../core/components/result-page/result-card/result-card/result-card.component';
import { ResultParametersComponent } from '../../../../core/components/result-page/result-parameters/result-parameters/result-parameters.component';
import { ShortSearchFromComponent } from '../../../../core/components/result-page/short-search-form/short-search-from/short-search-from.component';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [
    ResultCardComponent,
    ResultParametersComponent,
    ShortSearchFromComponent,
  ],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css',
})
export class ResultPageComponent {}
