import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';

/**
 * Root component of the application
 * Handles the main layout and background effects
 */
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavigationComponent, CommonModule],
  template: `
    <!-- Animated background gradient -->
    <div class="animated-background"></div>
    <!-- Particle effect overlay -->
    <div class="particles">
      <div class="particle" *ngFor="let particle of particles"></div>
    </div>
    <!-- Main navigation -->
    <app-navigation></app-navigation>
    <!-- Router outlet for child components -->
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // Application title
  title = 'blog-app';
  // Array to store particle elements for background effect
  particles: number[] = [];

  ngOnInit() {
    // Initialize particles array with 50 elements
    this.particles = Array(50).fill(0);
  }
}
