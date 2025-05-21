import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

/**
 * Navigation component that handles the main navigation bar
 * Includes links to different sections and authentication status
 */
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  // Flag to track if user is logged in
  isLoggedIn = false;

  constructor(private authService: AuthService) {
    // Subscribe to authentication state changes
    this.authService.isLoggedIn.subscribe(
      (loggedIn: boolean) => this.isLoggedIn = loggedIn
    );
  }

  /**
   * Handle user logout
   * Calls the auth service to log out and redirects to home
   */
  logout() {
    this.authService.logout();
  }
}
