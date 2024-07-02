import { CartItem } from "../cartItem/CartItem";
import { Category } from "../category/Category";
import { OrderItem } from "../orderItem/OrderItem";

export type Product = {
  cartItems?: Array<CartItem>;
  category?: Category | null;
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orderItems?: Array<OrderItem>;
  price: number | null;
  stock: number | null;
  updatedAt: Date;
};
