import { BaseQueryFn } from "@reduxjs/toolkit/query";

import type { AxiosError, AxiosRequestConfig } from "axios";
import axios from "axios";

// import { getItem, setItem } from "../helper/storage";

export const BASE_URL = import.meta.env.NEXT_PUBLIC_APP_URL;

// axios.defaults.headers.common['Authorization'] = 'Bearer token_expired';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getItem("access_token");

    if (token) {
      const skipEndpoints = ["/register", "/refresh-token"];
      if (!skipEndpoints.some((url) => config?.url?.includes(url))) {
        config.headers["Authorization"] = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    // console.log({responseInterceptor:response})
    if (
      response.status === 201 &&
      response.config.url === "/auth/refresh-token" &&
      response.data.access_token &&
      response.data.refresh_token
    ) {
      setItem("access_token", response.data.access_token);
      setItem("refresh_token", response.data.refresh_token);
    }
    return response.data;
  },
  async (error) => {
    // console.log({error:error})

    // Trường hợp Lỗi mạng
    if (!error.response) {
      return Promise.reject(error);
    }
    const originalRequest = error.config;
    // Trường hợp lỗi token hết hạn
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      error.response.data.message == "Token has expired"
    ) {
      originalRequest._retry = true;
      const refreshToken = getItem("refresh_token") as string;
      console.log("Bắt đầu refresh token");
      try {
        await axiosInstance.post("/auth/refresh-token", {
          refresh_token: refreshToken,
        });
        console.log("Refresh token thành công");
        return await axiosInstance({
          url: originalRequest.url,
          method: originalRequest.method,
          data: originalRequest?.data,
          params: originalRequest?.params,
          headers: originalRequest?.headers,
        });
      } catch (error) {
        console.log("Lỗi refresh token: ", error);
      }
    }

    return Promise.reject(error);
  }
);

const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, data, params, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export default axiosBaseQuery;
