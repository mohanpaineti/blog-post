import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { BlogPost } from '../models/blog-post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private readonly POSTS_STORAGE_KEY = 'blog_posts';
  private readonly LAST_VIEWED_KEY = 'lastViewedPosts';
  
  // Initialize posts from localStorage or use default posts
  private posts: BlogPost[] = this.loadPostsFromStorage();
  private postsSubject = new BehaviorSubject<BlogPost[]>(this.posts);

  constructor() {
    // Initialize posts if localStorage is empty
    if (!localStorage.getItem(this.POSTS_STORAGE_KEY)) {
      this.initializeDefaultPosts();
    }
  }

  private loadPostsFromStorage(): BlogPost[] {
    const storedPosts = localStorage.getItem(this.POSTS_STORAGE_KEY);
    if (storedPosts) {
      const posts = JSON.parse(storedPosts);
      // Convert date strings back to Date objects
      return posts.map((post: any) => ({
        ...post,
        date: new Date(post.date),
        ratings: post.ratings || []
      }));
    }
    return [];
  }

  private savePostsToStorage(posts: BlogPost[]): void {
    localStorage.setItem(this.POSTS_STORAGE_KEY, JSON.stringify(posts));
  }

  private initializeDefaultPosts(): void {
    const defaultPosts: BlogPost[] = [
      {
        id: 1,
        title: 'Getting Started with Angular',
        summary: 'Learn the basics of Angular framework and how to create your first application.',
        content: `Angular is a platform and framework for building single-page client applications using HTML and TypeScript. This comprehensive guide will walk you through setting up your development environment, understanding the core concepts, and building your first Angular application.

Angular provides a robust set of tools and libraries for building modern web applications. It uses TypeScript, a superset of JavaScript, which allows for strong typing and object-oriented programming. The Angular CLI (Command Line Interface) makes it easy to scaffold, build, and maintain your projects.

To get started, you need to install Node.js and npm (Node Package Manager). Once installed, you can use npm to install the Angular CLI globally on your system. With the CLI, you can generate a new Angular project, serve it locally, and start developing immediately.

Angular applications are built using components, which are the fundamental building blocks of the UI. Each component consists of an HTML template, a TypeScript class, and optional CSS styles. Components can be nested, reused, and organized into modules for better maintainability.

Data binding is a powerful feature in Angular that allows you to synchronize data between the component class and the template. There are several types of data binding, including interpolation, property binding, event binding, and two-way binding. These mechanisms make it easy to create dynamic and interactive user interfaces.

Angular also provides a powerful dependency injection system, which makes it easy to manage services and share data or logic across components. Services are classes that encapsulate business logic, data access, or other reusable functionality. By injecting services into components, you can keep your code modular and testable.

Routing is another essential feature in Angular. The Angular Router enables navigation between different views or pages in your application. You can define routes, pass parameters, and protect routes using guards. Lazy loading allows you to load feature modules on demand, improving the performance of your application.

Forms in Angular can be built using either template-driven or reactive approaches. Template-driven forms are simple and suitable for basic use cases, while reactive forms provide more control and scalability for complex scenarios. Angular's form validation features help ensure data integrity and provide feedback to users.

Testing is a first-class citizen in Angular. The framework includes tools for unit testing components, services, and other parts of your application. You can use Jasmine and Karma for unit tests, and Protractor for end-to-end testing.

In summary, Angular is a comprehensive framework that provides everything you need to build modern, scalable, and maintainable web applications. By following best practices and leveraging Angular's features, you can create high-quality applications that deliver great user experiences.`,
        imageUrl: 'https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=800&auto=format&fit=crop&q=80',
        date: new Date('2024-03-15'),
        ratings: []
      },
      {
        id: 2,
        title: 'Understanding TypeScript',
        summary: 'Deep dive into TypeScript features and best practices.',
        content: `TypeScript is a strongly typed programming language that builds on JavaScript. Learn about interfaces, types, decorators, and how TypeScript enhances your development experience with better tooling and error detection.

TypeScript was developed by Microsoft to address the challenges of large-scale JavaScript development. It introduces static typing, which helps catch errors at compile time rather than at runtime. This leads to more robust and maintainable code, especially in large projects.

One of the key features of TypeScript is its type system. You can define types for variables, function parameters, and return values. Interfaces and type aliases allow you to describe the shape of objects and ensure that your code adheres to specific contracts. This makes it easier to reason about your code and catch mistakes early.

TypeScript supports modern JavaScript features, such as async/await, destructuring, and template literals. It also adds its own features, like enums, generics, and access modifiers. These features enable you to write cleaner and more expressive code.

Decorators are a powerful feature in TypeScript, especially when used with frameworks like Angular. Decorators allow you to add metadata to classes, methods, or properties, enabling advanced patterns like dependency injection and aspect-oriented programming.

TypeScript integrates seamlessly with popular editors like Visual Studio Code, providing features like autocompletion, type checking, and refactoring tools. This improves developer productivity and reduces the likelihood of bugs.

Migrating from JavaScript to TypeScript is straightforward. You can gradually add type annotations to your existing codebase and take advantage of TypeScript's features incrementally. Many popular libraries and frameworks, including Angular, React, and Vue, have excellent TypeScript support.

In conclusion, TypeScript is a valuable tool for modern web development. Its static typing, advanced features, and strong tooling make it an excellent choice for building scalable and maintainable applications. By adopting TypeScript, you can improve code quality, catch errors early, and enhance your overall development workflow.`,
        imageUrl: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=800&auto=format&fit=crop&q=80',
        date: new Date('2024-03-14'),
        ratings: []
      },
      {
        id: 3,
        title: 'Mastering Angular Components',
        summary: 'Everything you need to know about Angular components and their lifecycle.',
        content: `Components are the fundamental building blocks of Angular applications. This post covers component creation, lifecycle hooks, input/output properties, and best practices for component architecture.

In Angular, a component is a self-contained unit of the user interface. Each component consists of a template, a class, and optional styles. The template defines the view, the class contains the logic, and the styles control the appearance.

Component communication is essential in Angular applications. You can use input properties to pass data from parent to child components, and output properties to emit events from child to parent. This enables you to build complex UIs from simple, reusable components.

Lifecycle hooks are special methods that allow you to tap into key moments in a component's life, such as creation, updates, and destruction. Common hooks include ngOnInit, ngOnChanges, and ngOnDestroy. Using these hooks, you can perform initialization, cleanup, or respond to changes in data.

Angular encourages the use of modular architecture. You can organize components into feature modules, which makes your application more maintainable and scalable. Shared modules allow you to reuse common components, directives, and pipes across your application.

Testing is an important aspect of component development. Angular provides tools for unit testing components, including TestBed and Jasmine. By writing tests for your components, you can ensure they behave as expected and catch regressions early.

In summary, mastering Angular components is key to building robust and maintainable applications. By understanding component communication, lifecycle hooks, and best practices, you can create high-quality UIs that are easy to test and extend.`,
        imageUrl: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?w=800&auto=format&fit=crop&q=80',
        date: new Date('2024-03-13'),
        ratings: []
      },
      {
        id: 4,
        title: 'Angular Services and Dependency Injection',
        summary: 'Learn how to create and use services effectively in Angular.',
        content: `Services in Angular provide a way to organize and share business logic, data, and functions across components. Understand dependency injection and how it makes your application more maintainable and testable.

A service is a class that encapsulates reusable logic, such as data retrieval, business rules, or utility functions. By creating services, you can keep your components focused on the user interface and delegate non-UI logic to services.

Dependency injection (DI) is a design pattern that allows you to inject dependencies into a class rather than creating them directly. Angular's DI system makes it easy to provide services to components and other services. This promotes loose coupling and makes your code more testable.

To create a service in Angular, you use the @Injectable decorator. You can then inject the service into a component's constructor. Angular's injector takes care of creating and managing the service instance.

Services can be provided at different levels, such as root, module, or component. Providing a service at the root level makes it a singleton, shared across the entire application. Module-level providers limit the service's scope to a specific feature module.

Testing services is straightforward in Angular. You can use the TestBed utility to create a testing module and inject the service. By writing unit tests for your services, you can ensure they work correctly and handle edge cases.

In conclusion, services and dependency injection are core concepts in Angular. By leveraging these features, you can build modular, maintainable, and testable applications.`,
        imageUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80',
        date: new Date('2024-03-12'),
        ratings: []
      },
      {
        id: 5,
        title: 'Responsive Design with Bootstrap',
        summary: 'Create beautiful responsive layouts using Bootstrap with Angular.',
        content: `Bootstrap is a powerful CSS framework that makes responsive design easy. Learn how to integrate Bootstrap with Angular and create mobile-friendly layouts that look great on any device.

Bootstrap provides a grid system, prebuilt components, and utility classes that help you build responsive layouts quickly. The grid system uses rows and columns to arrange content, making it easy to create flexible and adaptive designs.

To use Bootstrap with Angular, you can install it via npm and import the CSS in your styles. You can then use Bootstrap classes in your templates to style buttons, forms, navigation bars, and more.

Responsive design is about making your application look good on all devices, from phones to desktops. Bootstrap's breakpoints and utility classes allow you to show, hide, or rearrange content based on screen size. This ensures a consistent user experience across devices.

Customizing Bootstrap is easy. You can override default styles using your own CSS or use Bootstrap's Sass variables to change colors, spacing, and more. This allows you to create a unique look and feel for your application.

Accessibility is an important aspect of responsive design. Bootstrap includes features that help make your application accessible to all users, including those with disabilities. By following best practices, you can ensure your application is usable by everyone.

In summary, Bootstrap and Angular are a powerful combination for building responsive, accessible, and visually appealing web applications. By leveraging Bootstrap's features, you can create layouts that adapt to any device and provide a great user experience.`,
        imageUrl: 'https://images.unsplash.com/photo-1517292987719-0369a794ec0f?w=800&auto=format&fit=crop&q=80',
        date: new Date('2024-03-11'),
        ratings: []
      },
      {
        id: 6,
        title: 'Angular Routing in Depth',
        summary: 'Master Angular routing for better navigation in your applications.',
        content: `Routing is essential for creating multi-page applications with Angular. This guide covers route configuration, parameters, guards, and advanced routing techniques.

The Angular Router enables navigation between different views or pages in your application. You can define routes in your app's routing module, specifying the path and component for each route. Route parameters allow you to pass data between routes, such as IDs or query strings.

Guards are functions that control access to routes. You can use guards to protect routes from unauthorized access, prompt users before leaving a page, or preload data before navigation. Angular provides several types of guards, including CanActivate, CanDeactivate, and Resolve.

Lazy loading is a technique that loads feature modules only when needed. This improves the performance of your application by reducing the initial bundle size. You can configure lazy loading in your routing module using the loadChildren property.

The router also supports nested routes, redirects, and custom route matching. You can use router outlets to display different components based on the current route. Navigation events allow you to track route changes and perform actions in response.

In conclusion, mastering Angular routing is key to building scalable and maintainable applications. By understanding route configuration, guards, and lazy loading, you can create powerful navigation experiences for your users.`,
        imageUrl: 'https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?w=800&auto=format&fit=crop&q=80',
        date: new Date('2024-03-10'),
        ratings: []
      }
    ];
    this.posts = defaultPosts;
    this.savePostsToStorage(this.posts);
    this.postsSubject.next(this.posts);
  }

  getAllPosts(): Observable<BlogPost[]> {
    return this.postsSubject.asObservable();
  }

  getPostById(id: number): Observable<BlogPost | undefined> {
    return of(this.posts.find(post => post.id === id));
  }

  saveLastViewedPost(post: BlogPost): void {
    const lastViewed = JSON.parse(localStorage.getItem(this.LAST_VIEWED_KEY) || '[]');
    const updatedLastViewed = [post, ...lastViewed.filter((p: BlogPost) => p.id !== post.id)].slice(0, 3);
    localStorage.setItem(this.LAST_VIEWED_KEY, JSON.stringify(updatedLastViewed));
  }

  getLastViewedPosts(): BlogPost[] {
    const posts = JSON.parse(localStorage.getItem(this.LAST_VIEWED_KEY) || '[]');
    return posts.map((post: any) => ({
      ...post,
      date: new Date(post.date),
      ratings: post.ratings || []
    }));
  }

  addPost(post: BlogPost): Observable<BlogPost[]> {
    const newId = Math.max(...this.posts.map(p => p.id), 0) + 1;
    const newPost = { 
      ...post, 
      id: newId,
      ratings: [],
      date: new Date(post.date)
    };
    this.posts.push(newPost);
    this.savePostsToStorage(this.posts);
    this.postsSubject.next(this.posts);
    return of(this.posts);
  }

  editPost(post: BlogPost): Observable<BlogPost[]> {
    const index = this.posts.findIndex(p => p.id === post.id);
    if (index !== -1) {
      // Preserve existing ratings if not provided in the update
      const existingPost = this.posts[index];
      const updatedPost = {
        ...post,
        ratings: post.ratings || existingPost.ratings || [],
        date: new Date(post.date)
      };
      this.posts[index] = updatedPost;
      this.savePostsToStorage(this.posts);
      this.postsSubject.next(this.posts);
    }
    return of(this.posts);
  }

  deletePost(id: number): Observable<BlogPost[]> {
    this.posts = this.posts.filter(post => post.id !== id);
    this.savePostsToStorage(this.posts);
    this.postsSubject.next(this.posts);
    return of(this.posts);
  }
}
