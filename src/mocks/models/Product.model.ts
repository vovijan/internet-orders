import { faker } from "@faker-js/faker/locale/ru";
import {primaryKey} from "@mswjs/data";
import {PrimaryKey} from "@mswjs/data/lib/primaryKey";

export interface IProduct {
  id: PrimaryKey,
  avatar: string,
  date: string,
  name: string,
  product: string,
  price: string
}

export const ProductModel: IProduct = {
  id: primaryKey(() => faker.datatype.uuid()),
  avatar: () => faker.image.abstract(),
  name: () => faker.name.fullName(),
  date: () => faker.date.weekday(),
  product: () => faker.commerce.product(),
  price: () => faker.commerce.price()
}