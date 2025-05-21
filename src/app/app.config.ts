import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

/**
 * Application configuration
 * Sets up global providers for routing and animations
 */
export const appConfig: ApplicationConfig = {
  providers: [
    // Enable Angular Router with defined routes
    provideRouter(routes),
    // Enable Angular animations
    provideAnimations()
  ]
};
