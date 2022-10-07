import {factory} from "@mswjs/data";
import {OrderModel} from "./models/Orders.model";
import {ProductModel} from "./models/Product.model";

export const db = factory({
  orders: OrderModel as any,
  product: ProductModel as any,
})