export interface Artwork {
  id: string;
  title: string;
  year: string;
  medium: string;
  dimensions: string;
  description: string;
  imageUrl: string;
  series?: string;
  category?: 'Painting' | 'Sculpture' | 'Drawing' | 'Installation' | 'Photography';
}

export interface Exhibition {
  year: string;
  title: string;
  venue: string;
  location: string;
  type: 'Solo' | 'Group';
}

export interface NewsItem {
  id: string;
  date: string;
  content: string;
}

export type ViewMode = 'grid' | 'list';