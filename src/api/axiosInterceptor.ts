import axios from "axios";
import { useEffect } from "react";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

export default function useAxisosInterceptor() {
  useEffect(() => {
    axiosInstance.interceptors.request.use(async (config) => {
      config.headers["Authorization"] = "Bearer ${accessToken}";
      return config;
    });
  });
  return;
}
