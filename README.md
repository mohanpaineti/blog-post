# Modern Blog Application

A beautiful, modern blog application built with Angular, featuring a dark theme with glassmorphism effects, admin dashboard, and image upload capabilities.

## Features

- 🎨 Modern UI with glassmorphism effects and neon accents
- 📱 Responsive design for all devices
- 🔒 Secure admin dashboard with authentication
- 📝 Blog post management (Create, Read, Update, Delete)
- 🖼️ Image upload with preview
- 🌙 Dark theme optimized for reading

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm (v6 or higher)
- Angular CLI (v15 or higher)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd blog-app
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

1. Start the development server:
```bash
ng serve
```

2. Open your browser and navigate to:
```
http://localhost:4200
```

## Admin Dashboard Access

1. Navigate to the login page:
```
http://localhost:4200/login
```

2. Use the following credentials:
- Username: `admin`
- Password: `admin`

3. After successful login, you'll be redirected to the admin dashboard at:
```
http://localhost:4200/admin
```

## Admin Dashboard Features

- Add new blog posts with title, content, and images
- Edit existing blog posts
- Delete blog posts
- Preview images before publishing
- View all posts in a table format

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── admin-dashboard/
│   │   ├── blog-post/
│   │   ├── blog-list/
│   │   ├── header/
│   │   └── login/
│   ├── services/
│   │   ├── auth.service.ts
│   │   └── blog.service.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   └── models/
│       └── blog-post.model.ts
```

## Development

### Building for Production

```bash
ng build --prod
```

### Running Tests

```bash
ng test
```

### Code Linting

```bash
ng lint
```

## Technologies Used

- Angular 15
- TypeScript
- SCSS
- RxJS
- Angular Material (for some components)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support, please open an issue in the GitHub repository or contact the maintainers.
