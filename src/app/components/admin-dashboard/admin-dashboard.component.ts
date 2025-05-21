import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BlogService } from '../../services/blog.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { BlogPost } from '../../models/blog-post.interface';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  // Array to store all blog posts
  posts: BlogPost[] = [];
  // Object to hold new post data
  newPost: Partial<BlogPost> = {
    title: '',
    summary: '',
    content: '',
    imageUrl: '',
    date: new Date()
  };
  // Flag to indicate if the form is in edit mode
  editMode = false;
  // Object to store the currently selected post for editing
  editId: number | null = null;
  // Message to display on successful operation
  successMessage = '';
  // Message to display on error
  errorMessage = '';
  // String to hold the image preview URL
  imagePreview: string | ArrayBuffer | null = null;
  // Object to store analytics data
  analytics = {
    totalPosts: 0,
    totalViews: 0,
    averageRating: 0
  };

  constructor(
    private blogService: BlogService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Load posts and update analytics on component initialization
    this.loadPosts();
    this.updateAnalytics();
  }

  loadPosts() {
    // Fetch all posts from the service and update the posts array
    this.blogService.getAllPosts().subscribe(posts => {
      this.posts = posts;
      this.updateAnalytics();
    });
  }

  updateAnalytics() {
    // Calculate analytics based on the posts data
    this.analytics.totalPosts = this.posts.length;
    this.analytics.totalViews = this.posts.reduce((sum, post) => sum + (post.views || 0), 0);
    this.analytics.averageRating = this.posts.length > 0
      ? this.posts.reduce((sum, post) => sum + (post.rating || 0), 0) / this.posts.length
      : 0;
  }

  addPost() {
    // Validate and add or update a post
    if (
      this.newPost.title &&
      this.newPost.summary &&
      this.newPost.content &&
      this.newPost.imageUrl &&
      this.newPost.date
    ) {
      if (this.editMode && this.editId !== null) {
        // Update existing post
        this.blogService.editPost({ ...(this.newPost as BlogPost), id: this.editId }).subscribe({
          next: () => {
            this.successMessage = 'Blog post updated successfully!';
            this.resetForm();
            this.loadPosts();
          },
          error: (error) => {
            this.errorMessage = 'Error updating post';
            console.error('Error updating post:', error);
          }
        });
      } else {
        // Add new post
        this.blogService.addPost(this.newPost as BlogPost).subscribe({
          next: () => {
            this.successMessage = 'Blog post added successfully!';
            this.resetForm();
            this.loadPosts();
          },
          error: (error) => {
            this.errorMessage = 'Error adding post';
            console.error('Error adding post:', error);
          }
        });
      }
    } else {
      this.errorMessage = 'Please fill in all fields.';
      this.successMessage = '';
    }
  }

  onImageSelected(event: Event) {
    // Handle image file selection and convert to Base64 for preview
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result;
        this.newPost.imageUrl = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  editPost(post: BlogPost) {
    // Set the form to edit mode and populate with post data
    this.newPost = { ...post };
    this.editMode = true;
    this.editId = post.id;
    this.successMessage = '';
    this.errorMessage = '';
    this.imagePreview = post.imageUrl || null;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deletePost(id: number) {
    // Confirm and delete a post
    if (confirm('Are you sure you want to delete this post?')) {
      this.blogService.deletePost(id).subscribe({
        next: () => {
          this.successMessage = 'Blog post deleted.';
          this.errorMessage = '';
          this.resetForm();
          this.loadPosts();
        },
        error: (error) => {
          this.errorMessage = 'Error deleting post';
          console.error('Error deleting post:', error);
        }
      });
    }
  }

  resetForm() {
    // Reset the form to its initial state
    this.newPost = { title: '', summary: '', content: '', imageUrl: '', date: new Date() };
    this.editMode = false;
    this.editId = null;
    this.imagePreview = null;
    this.successMessage = '';
    this.errorMessage = '';
  }

  logout() {
    // Log out the user and redirect to login page
    this.authService.logout();
    this.router.navigate(['/login']);
  }
} 