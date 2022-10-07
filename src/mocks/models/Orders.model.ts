import { faker } from "@faker-js/faker/locale/ru";
import {primaryKey} from "@mswjs/data";
import {PrimaryKey} from "@mswjs/data/lib/primaryKey";
import {IProduct} from "./Product.model";

export interface IOrder {
  id: PrimaryKey,
  date: Date,
  number: string,
  status: string,
  comment: string,
  products: Array<IProduct>
}

export const OrderModel: IOrder = {
  id: primaryKey(() => faker.datatype.uuid()),
  date: () => faker.date.past(),
  number: () => faker.random.numeric(5),
  status: () => faker.helpers.arrayElement(['Выполнен', 'Отменен', 'Создан']),
  comment: () => faker.random.words(10),
  products: () => []
}