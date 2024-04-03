import { Routes } from '@angular/router';
import { MainPageComponent } from './components/pages/main-page/main-page.component';

export const routes: Routes = [

  { path: '', redirectTo: 'input', pathMatch: 'full' },

  {
    path: 'input',
    component: MainPageComponent,
    pathMatch: 'full',
  },


];
