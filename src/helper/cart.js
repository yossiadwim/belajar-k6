import http from "k6/http";

export function carts(){
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