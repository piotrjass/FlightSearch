import { Routes } from '@angular/router';
// components
import { LandingPageComponent } from './shared/pages/landing-page/landing-page/landing-page.component';
import { SearchEngineComponent } from './shared/pages/search-engine/search-engine/search-engine.component';
import { SetDestFormComponent } from './core/components/search-engine/set-dest/set-dest-form/set-dest-form.component';
import { SetDateComponent } from './core/components/search-engine/set-date/set-date/set-date.component';
import { ResultPageComponent } from './shared/pages/result-page/result-page/result-page.component';
import { SetPassengersComponent } from './core/components/search-engine/set-passengers/set-passengers/set-passengers.component';

//
export const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    title: 'Home',
  },
  {
    path: 'find-a-flight',
    component: SearchEngineComponent,
    title: 'Search',
    children: [
      {
        path: 'place',
        component: SetDestFormComponent,
        title: 'Find your place',
      },
      {
        path: 'date',
        component: SetDateComponent,
        title: 'Set the date',
      },
      {
        path: 'passengers',
        component: SetPassengersComponent,
        title: 'Who is flying',
      },
    ],
  },
  {
    path: 'results',
    component: ResultPageComponent,
    title: 'Check results',
  },
];
