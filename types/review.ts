export type Review = {
  id: number;
  productId: number;

  name: string;
  rating: number;

  title: string;
  comment: string;

  verified: boolean;

  date: string;

  images?: string[];
};