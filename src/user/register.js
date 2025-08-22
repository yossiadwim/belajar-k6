import { check, sleep } from "k6";
import { registerUser } from "../helper/user";

export const options = {
  stages: [
    { duration: "10s", target: 20 }, // Ramp-up to 10 VUs over 10 seconds
    { duration: "10s", target: 10 }, // Stay at 10 V
    { duration: "10s", target: 0 }, // Ramp-down to 0 VUs over 10 seconds
  ],
};

export default function () {

  const registerRequest = {
    firstName: "Muhammad",
    lastName: "Ovi",
    age: 250,
  };

  const registerResponse = registerUser(registerRequest);

  check(registerResponse, {
    "is status 201": (response) => response.status === 201,
    "is response not empty": (response) => response.body.length > 0,
  });
}
