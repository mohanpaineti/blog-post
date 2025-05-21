import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

/**
 * Main entry point of the application
 * Bootstraps the root AppComponent with the application configuration
 */
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));
