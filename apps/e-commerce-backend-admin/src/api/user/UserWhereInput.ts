import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CartListRelationFilter } from "../cart/CartListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";

export type UserWhereInput = {
  address?: StringNullableFilter;
  carts?: CartListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  username?: StringFilter;
};
