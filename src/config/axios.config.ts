import axios, { AxiosRequestConfig } from "axios";

const _BASE_CONFIG: AxiosRequestConfig = {
  baseURL: "http://localhost:1337",
  headers: {
    "Content-Type": "application/json",
  },
};

export const authProtectedApi = () =>
  axios.create({
    ..._BASE_CONFIG,
    headers: {
      ..._BASE_CONFIG.headers,
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });

export const publicApi = axios.create({ ..._BASE_CONFIG });
