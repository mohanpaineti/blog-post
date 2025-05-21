# Angular Blog Application

A modern, responsive blog application built with Angular that allows users to read, create, edit, and manage blog posts with features like ratings, analytics, and user tracking.

## Features

### User Features
- **Blog Post Browsing**
  - View all blog posts in a responsive grid layout
  - Read detailed blog posts with rich content
  - View post creation dates and ratings
  - Recently viewed posts tracking

- **Post Interaction**
  - Rate posts (1-5 stars)
  - View average ratings for each post
  - Responsive design for all devices

### Admin Features
- **Dashboard**
  - View analytics including total posts, views, and ratings
  - Monitor average ratings across all posts
  - Track total number of ratings

- **Post Management**
  - Create new blog posts with title, summary, content, and image
  - Edit existing posts
  - Delete posts
  - View post statistics

### Technical Features
- **Data Persistence**
  - Local storage for blog posts
  - Persistent ratings
  - Recently viewed posts tracking
  - Automatic data saving

- **Responsive Design**
  - Mobile-first approach
  - Bootstrap integration
  - Responsive navigation
  - Adaptive layouts

## Prerequisites

Before running this application, make sure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v15 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blog-post
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Open your browser and navigate to:
```
http://localhost:4200
```

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── admin-dashboard/
│   │   ├── blog-list/
│   │   ├── post-detail/
│   │   ├── post-form/
│   │   └── shared/
│   ├── models/
│   ├── services/
│   └── app-routing.module.ts
├── assets/
└── styles/
```

## Key Components

- **BlogListComponent**: Displays all blog posts in a grid layout
- **PostDetailComponent**: Shows detailed view of a single blog post
- **PostFormComponent**: Handles creation and editing of blog posts
- **AdminDashboardComponent**: Provides analytics and post management
- **BlogService**: Manages blog post data and localStorage persistence

## Technologies Used

- Angular 15
- TypeScript
- Bootstrap 5
- RxJS
- Angular Material Icons
- LocalStorage API

## Development

### Running Tests
```bash
ng test
```

### Building for Production
```bash
ng build --prod
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Angular Team for the amazing framework
- Bootstrap Team for the responsive design framework
- Unsplash for the beautiful images used in the blog posts
