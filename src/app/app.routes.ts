import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';

/**
 * Application routes configuration
 * Defines all routes and their associated components
 */
export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'post/:id',
    loadComponent: () => import('./components/post-detail/post-detail.component').then(m => m.PostDetailComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin-dashboard/admin-dashboard.component').then(m => m.AdminDashboardComponent),
    canActivate: [authGuard]
  },
  {
    path: '**',
    redirectTo: ''
  }
];
