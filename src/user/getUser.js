import http from "k6/http";
import { check } from "k6";
import { loginUser } from "../helper/users.js";

export const options = {
  stages: [
    { duration: "10s", target: 20 }, // Ramp-up to 20
    { duration: "10s", target: 10 }, // Stay at 10 VUs
    { duration: "10s", target: 0 }, // Ramp-down to 0 VUs
  ],
};
export default function () {
  const loginRequest = {
    username: "emilys",
    password: "emilyspass",
    expiresInMins: 30,
  };

  const loginResponse = loginUser(loginRequest);

  const currentUser = http.get("https://dummyjson.com/user/me", {
    headers: {
      Authorization: `Bearer ${loginResponse.json().accessToken}`,
    },
    credential: "include",
  });

  check(currentUser, {
    "is status current user 200": (response) => response.status === 200,
    "is response not empty": (response) => response.body.length > 0,
    "is response have property firstName": (response) =>
      response.json().hasOwnProperty("firstName"),
    "is response have property lastName": (response) =>
      response.json().hasOwnProperty("lastName"),

  });
}
