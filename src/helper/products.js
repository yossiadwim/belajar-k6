import http from "k6/http";

export function products(){
    const response = http.get("https://dummyjson.com/products", {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
}

export function productById(id) {
    const response = http.get(`https://dummyjson.com/products/${id}`, {
        headers: {
            "Content-Type": "application/json",
        },
    });

    return response;
}