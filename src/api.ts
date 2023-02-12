import axios, { AxiosInstance } from "axios";

export const API: AxiosInstance = axios.create({
  baseURL: "https://husqr.up.railway.app",
});
