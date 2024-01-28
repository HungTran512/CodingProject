export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}
export interface IProductListProps {
  initialLoad: () => void;
  loadMore: () => void;
  hasMore: boolean;
  products: IProduct[];
}

export interface SearchBarProps {
  onSearch: (query: string) => void;
}
