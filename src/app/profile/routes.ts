import { Routes } from '@angular/router';
import { ProfileFormPageComponent } from './pages/profile-form-page/profile-form-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfileViewPageComponent } from './pages/profile-view-page/profile-view-page.component';

export default [
  {
    path: '',
    component: ProfilePageComponent,
    children: [
      { path: '', redirectTo: 'view', pathMatch: 'full' },

      { path: 'view', component: ProfileViewPageComponent },

      { path: 'form', component: ProfileFormPageComponent },
    ],
  },
] as Routes;
