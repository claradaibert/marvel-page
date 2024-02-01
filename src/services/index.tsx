import axios from "axios";

// Create marvel api connection variable
const api = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/",
});

api.interceptors.response.use(
  (successResponse) => successResponse,
  (errorResponse) => Promise.reject(errorResponse)
);

export { api };
