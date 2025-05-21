/**
 * Interface representing a blog post in the application
 * Defines the structure and properties of a blog post
 */
export interface BlogPost {
  // Unique identifier for the post
  id: number;
  // Title of the blog post
  title: string;
  // Short summary of the post content
  summary: string;
  // Full content of the blog post
  content: string;
  // URL of the post's featured image
  imageUrl: string;
  // Publication date of the post
  date: Date;
  // Optional number of views for the post
  views?: number;
  // Array of ratings for the post
  ratings?: number[];
  // Current user's rating
  rating?: number;
} 