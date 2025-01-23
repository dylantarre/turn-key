export interface Business {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  category: string;
  metrics: {
    monthlyTraffic?: string;
    revenue?: string;
    growthRate?: string;
  };
  changelog: {
    date: string;
    changes: string[];
  }[];
  price: number;
  complexity: 'Beginner' | 'Intermediate' | 'Advanced';
}

export type SortOption = 'price' | 'complexity' | 'category';