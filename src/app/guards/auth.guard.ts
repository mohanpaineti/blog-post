import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guard to protect routes that require authentication
 * Redirects to login page if user is not authenticated
 */
export const authGuard = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.checkLoginStatus()) {
    return true;
  }

  return router.parseUrl('/login');
}; 