import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { BlogService } from '../../services/blog.service';
import { BlogPost } from '../../models/blog-post.interface';
import { PostRatingComponent } from '../post-rating/post-rating.component';

@Component({
  selector: 'app-post-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, PostRatingComponent],
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post?: BlogPost;

  constructor(
    private route: ActivatedRoute,
    private blogService: BlogService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.blogService.getPostById(id).subscribe(post => {
        this.post = post;
        if (post) {
          this.blogService.saveLastViewedPost(post);
        }
      });
    });
  }

  onRatingChange(rating: number): void {
    if (this.post) {
      // Initialize ratings array if it doesn't exist
      const ratings = this.post.ratings || [];
      // Add the new rating
      ratings.push(rating);
      
      const updatedPost = { 
        ...this.post, 
        rating, // Current user's rating
        ratings // All ratings array
      };
      
      this.blogService.editPost(updatedPost).subscribe(posts => {
        this.post = updatedPost;
      });
    }
  }
}
