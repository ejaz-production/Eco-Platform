import { test } from "node:test";
import assert from "node:assert/strict";
import { priceOrder, orderSchema } from "../src/validation.js";
test("prices come from catalog; shipping threshold applied", () => {
  assert.equal(
    priceOrder(
      [{ id: "a", quantity: 2 }],
      [{ id: "a", name: "A", price: 2500, stock: 3 }],
    ).total,
    5000,
  );
  assert.equal(
    priceOrder([{ id: "a", quantity: 1 }], [{ id: "a", price: 2500, stock: 3 }])
      .total,
    2750,
  );
});
test("duplicate lines cannot bypass stock", () => {
  assert.throws(() =>
    priceOrder(
      [
        { id: "a", quantity: 2 },
        { id: "a", quantity: 2 },
      ],
      [{ id: "a", price: 1, stock: 3 }],
    ),
  );
});
test("unknown products rejected", () =>
  assert.throws(() => priceOrder([{ id: "x", quantity: 1 }], [])));
test("invalid Pakistan phone and payment rejected", () =>
  assert.equal(
    orderSchema.safeParse({
      items: [{ id: "a", quantity: 1 }],
      customer: {
        name: "Ali",
        email: "ali@example.com",
        phone: "123",
        city: "Karachi",
        address: "123 Sample Road",
      },
      payment: "card",
    }).success,
    false,
  ));
