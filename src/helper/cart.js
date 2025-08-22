import http from "k6/http";

export function carts() {
  const response = http.get("https://dummyjson.com/carts", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export function cartById(id) {
  const response = http.get(`https://dummyjson.com/carts/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export function addCart(body) {
  const response = http.post(
    "https://dummyjson.com/carts/add",
    JSON.stringify(body),
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
}

export function cartByUser(userId) {
  const response = http.get(`https://dummyjson.com/carts/user/${userId}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export function categoryList() {
  const response = http.get("https://dummyjson.com/products/category-list", {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response;
}

export function productByCategory(category) {
  const response = http.get(
    `https://dummyjson.com/products/category/${category}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response;
}
