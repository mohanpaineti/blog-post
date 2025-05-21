import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

/**
 * Login component for admin authentication
 * Handles user login and redirects to admin dashboard on success
 */
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // Username input field value
  username = '';
  // Password input field value
  password = '';
  // Error message to display on failed login
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  /**
   * Handle login form submission
   * Attempts to authenticate user and redirects to admin dashboard on success
   */
  login() {
    if (this.authService.login(this.username, this.password)) {
      this.errorMessage = '';
      this.router.navigate(['/admin']);
    } else {
      this.errorMessage = 'Invalid username or password.';
    }
  }
} 