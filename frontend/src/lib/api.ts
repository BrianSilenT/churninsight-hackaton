import axios from "axios";

const baseURL = import.meta.env.VITE_API_URL ?? "";

if (!baseURL) {
  throw new Error("VITE_API_URL no está definida");
}

export const api = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

//Interceptor de RESPONSE
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const message = error?.response?.data?.message || error.message || "Unknown error";
    if (error?.response?.status === 401) {
      console.warn("No autorizado error: 401");
    }
    return Promise.reject(new Error(message));
  }
);

