import { faker } from "@faker-js/faker/locale/ru";

export interface IProduct {
  id: string,
  avatar: string,
  date: string,
  name: string,
  product: string,
  price: string
}

export const ProductModel: IProduct = {
  id: faker.datatype.uuid(),
  avatar: faker.image.abstract(),
  name: faker.name.fullName(),
  date: faker.date.weekday(),
  product: faker.commerce.product(),
  price: faker.commerce.price()
}