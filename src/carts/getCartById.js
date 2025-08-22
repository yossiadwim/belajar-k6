import { check } from "k6";
import { cartById } from "../helper/cart.js";

export const options = {
  stages: [
    { duration: "10s", target: 20 }, // Ramp-up to 20
    { duration: "10s", target: 20 }, // Hold at 20
    { duration: "10s", target: 0 }, // Ramp-down to
  ],
};

export default function () {
  for (let i = 1; i <= 10; i++) {
    const response = cartById(i);
    check(response, {
      "is status 200": (response) => response.status === 200,
      "is response not empty": (response) => response.body.length > 0,
    });
  }
}
