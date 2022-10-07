import { rest } from 'msw'
import {db} from "./db";

export const handlers = [
  /**
   * Example of a request handler—function that captures a request
   * and declares which mocked response to return upon match.
   * @see https://mswjs.io/docs/basics/request-handler
   */
  rest.get('/orders', (req, res, ctx) => {
    let orders: any[] = [];

    for (let i = 0; i < 5; i++) {
      orders.push(db.orders.create());
    }

    orders.forEach((item: any) => {
      for (let i = 0; i < 5; i++) {
        item.products.push(db.product.create());
      }

      return item;
    })

    return res(
      ctx.delay(500),
      ctx.json({
        ...orders,
      }),
    )
  }),
]
