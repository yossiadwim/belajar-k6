import http from "k6/http";

export function registerUser(body) {
  const registerResponse = http.post(
    "https://dummyjson.com/users/add",
    JSON.stringify(body),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  
  return registerResponse
}

export function loginUser(body) {
  const loginResponse = http.post(
    "https://dummyjson.com/user/login",
    JSON.stringify(body),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return loginResponse;
}
