import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * Service for handling authentication-related functionality
 * Manages user login state and authentication operations
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // BehaviorSubject to track login state
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  // Observable for login state that components can subscribe to
  isLoggedIn: Observable<boolean> = this.isLoggedInSubject.asObservable();

  constructor(private router: Router) {
    // Initialize login state from localStorage
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    this.isLoggedInSubject.next(isLoggedIn);
  }

  /**
   * Authenticate user with provided credentials
   * @param username - User's username
   * @param password - User's password
   * @returns boolean indicating if login was successful
   */
  login(username: string, password: string): boolean {
    // For demo purposes, using hardcoded credentials
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('isLoggedIn', 'true');
      this.isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  /**
   * Log out the current user
   * Clears authentication state and redirects to login
   */
  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedInSubject.next(false);
    this.router.navigate(['/login']);
  }

  /**
   * Check if user is currently logged in
   * @returns boolean indicating if user is logged in
   */
  checkLoginStatus(): boolean {
    return this.isLoggedInSubject.value;
  }
} 