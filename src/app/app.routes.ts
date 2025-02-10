import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'example', pathMatch: 'full' },

  { path: 'example', loadChildren: () => import('./example/routes') },

  { path: 'profile', loadChildren: () => import('./profile/routes') },
];
