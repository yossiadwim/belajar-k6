import { check } from "k6";
import { cartByUser } from "../helper/cart.js";

export const options = {
  stages: [
    { duration: "10s", target: 20 }, // Ramp-up to 20
    { duration: "10s", target: 20 }, // Hold at 20
    { duration: "10s", target: 0 }, // Ramp-down to
  ],
};

export default function () {
  for (let i = 1; i <= 20; i++) {
    const response = cartByUser(i);
    const carts = response.json().carts || [];
    if (carts.length === 0) {
      check(response, {
        "no carts returned": () => carts.length === 0,
      });
      if (response.status !== 200) {
        check(response, {
          "status is 429": () => response.status === 429,
        });
      }
    } else {
      check(response, {
        "status is 200": () => response.status === 200,
        "carts are returned": () => carts.length > 0,
        "carts have userId": () => carts.every((cart) => cart.userId === i),
      });
    }
  }
}
