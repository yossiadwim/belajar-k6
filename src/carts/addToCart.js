import { check } from "k6";
import { addCart, carts } from "../helper/cart.js";

export const options = {
  stages: [
    { duration: "10s", target: 20 }, // Ramp-up to 20
    { duration: "10s", target: 20 }, // Hold at 20
    { duration: "10s", target: 0 }, // Ramp-down to
  ],
};

export default function () {
  const bodyRequest = {
    userId: 1,
    products: [
      {
        id: 144,
        quantity: 4,
      },
      {
        id: 98,
        quantity: 1,
      },
    ],
  };

  for (let i = 1; i <= 10; i++) {

    const response = addCart(bodyRequest);

    check(response, {
      "is status 201": (response) => response.status === 201,
      "is response not empty": (response) => response.body.length > 0,
    });
  }
}
