import { CartItemUpdateManyWithoutProductsInput } from "./CartItemUpdateManyWithoutProductsInput";
import { CategoryWhereUniqueInput } from "../category/CategoryWhereUniqueInput";
import { OrderItemUpdateManyWithoutProductsInput } from "./OrderItemUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  cartItems?: CartItemUpdateManyWithoutProductsInput;
  category?: CategoryWhereUniqueInput | null;
  description?: string | null;
  name?: string | null;
  orderItems?: OrderItemUpdateManyWithoutProductsInput;
  price?: number | null;
  stock?: number | null;
};
