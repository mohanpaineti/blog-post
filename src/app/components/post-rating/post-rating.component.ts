import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="rating-container">
      <div class="stars">
        <span 
          *ngFor="let star of [1,2,3,4,5]" 
          class="star" 
          [class.active]="star <= currentRating"
          (click)="onStarClick(star)"
          (mouseenter)="hoverRating = star"
          (mouseleave)="hoverRating = 0">
          ★
        </span>
      </div>
      <div class="rating-info">
        <div class="rating-text" *ngIf="currentRating > 0">
          Your rating: {{ currentRating }} out of 5
        </div>
        <div class="average-rating" *ngIf="averageRating > 0">
          Average rating: {{ averageRating | number:'1.1-1' }} ({{ totalRatings }} ratings)
        </div>
      </div>
    </div>
  `,
  styles: [`
    .rating-container {
      margin: 1rem 0;
    }
    .stars {
      display: flex;
      gap: 0.5rem;
    }
    .star {
      font-size: 2rem;
      cursor: pointer;
      color: #ccc;
      transition: color 0.2s;
    }
    .star:hover, .star.active {
      color: #ffd700;
    }
    .rating-info {
      margin-top: 0.5rem;
    }
    .rating-text {
      color: #666;
      margin-bottom: 0.25rem;
    }
    .average-rating {
      color: #888;
      font-size: 0.9rem;
    }
  `]
})
export class PostRatingComponent {
  @Input() currentRating: number = 0;
  @Input() ratings: number[] = [];
  @Output() ratingChange = new EventEmitter<number>();
  
  hoverRating: number = 0;

  get averageRating(): number {
    if (!this.ratings || this.ratings.length === 0) return 0;
    const sum = this.ratings.reduce((acc, curr) => acc + curr, 0);
    return sum / this.ratings.length;
  }

  get totalRatings(): number {
    return this.ratings?.length || 0;
  }

  onStarClick(rating: number): void {
    this.currentRating = rating;
    this.ratingChange.emit(rating);
  }
} 