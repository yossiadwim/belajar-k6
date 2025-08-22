import { carts } from "./helper/cart.js";
import { login } from "./helper/users.js";

export const options = {
  scenarios: {
    loginUser: {
      exec: "loginUser",
      executor: "shared-iterations",
      vus: 10,
      iterations: 200,
    },
    getAllCart: {
      exec: "getAllCart",
      executor: "constant-vus",
      vus: 10,
      duration: "30s",
    },
  },
};

export function loginUser() {
  const loginRequest = {
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
  };

  login(loginRequest);
}

export function getAllCart() {
  carts();
}
