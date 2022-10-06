import { faker } from "@faker-js/faker/locale/ru";

export interface IOrder {
  id: string,
  date: Date,
  number: string,
  status: string,
  comment: string
}

export const Order: IOrder = {
  id: faker.datatype.uuid(),
  date: faker.date.past(),
  number: faker.random.numeric(5),
  status: faker.helpers.arrayElement(['Выполнен', 'Отменен', 'Создан']),
  comment: faker.random.words(10)
}