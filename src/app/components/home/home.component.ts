import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.interface';

/**
 * Home component that displays the main blog listing page
 * Includes search functionality and last viewed posts
 */
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Array to store all blog posts
  posts: BlogPost[] = [];
  // Array to store recently viewed posts
  lastViewedPosts: BlogPost[] = [];
  // Search term for filtering posts
  searchTerm: string = '';

  constructor(private blogService: BlogService) {}

  ngOnInit(): void {
    // Load all posts from the service
    this.blogService.getAllPosts().subscribe(posts => {
      this.posts = posts;
    });
    // Get last viewed posts from localStorage
    this.lastViewedPosts = this.blogService.getLastViewedPosts();
  }

  /**
   * Getter that filters posts based on the search term
   * Matches against post title and summary
   */
  get filteredPosts(): BlogPost[] {
    return this.posts.filter(post =>
      post.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
      post.summary.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
