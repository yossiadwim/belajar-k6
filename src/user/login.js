import { check } from "k6";
import { loginUser } from "../helper/user.js";

export const options = {
  stages: [
    { duration: "10s", target: 20 },
    { duration: "10s", target: 10 },
    { duration: "10s", target: 0 },
  ],
};

export default function () {
  const loginRequest = {
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
  };

  const loginResponse = loginUser(loginRequest);

  check(loginResponse, {
    "is status login response 200": (response) => response.status === 200,
    "is response not empty": (response) => response.body.length > 0,
    "is response have property username": (response) =>
      response.json().hasOwnProperty("username"),
  });
}
