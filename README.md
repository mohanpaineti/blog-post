# Angular Blog Application

A static blog web application built with Angular, featuring a responsive design and modern user experience.

## Features

- Responsive landing page with blog post listings
- Detailed post view with full content
- Search functionality to filter posts
- Last viewed posts tracking
- Bootstrap styling with animations
- Modular component architecture

## Prerequisites

- Node.js (LTS version recommended)
- Angular CLI (`npm install -g @angular/cli`)

## Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd blog-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Development Server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Project Structure

- `src/app/components/` - Application components
  - `home/` - Landing page component
  - `navigation/` - Navigation bar component
  - `post-detail/` - Post detail view component
- `src/app/models/` - TypeScript interfaces
- `src/app/services/` - Application services
- `src/styles.scss` - Global styles

## Technical Implementation

- Built with Angular 17
- Uses standalone components
- Implements routing for navigation
- Uses services for data management
- Implements localStorage for last viewed posts
- Bootstrap for responsive design
- SCSS for custom styling

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
