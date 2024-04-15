import { Routes } from '@angular/router';
import { LandingPageComponent } from './shared/pages/landing-page/landing-page/landing-page.component';
import { SearchEngineComponent } from './shared/pages/search-engine/search-engine/search-engine.component';
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
  },
];
