export interface CartItem {
  productId: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
  rating: number;
}

export interface Cart {
  items: CartItem[];
}
