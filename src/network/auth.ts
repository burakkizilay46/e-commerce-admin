import { message } from "antd";
import useAxisosInterceptor, { axiosInstance } from "../api/axiosInterceptor";

const login = async () => {
  return await axiosInstance
    .post("/api/admin/auth/login", {
      email: "furkanguzelgorur@gmail.com",
      password: "123456789",
    })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response.status === 404) return Promise.reject(err);
      message.error(err?.response?.data?.message || err?.message);
      return err?.response?.data?.message || err?.message;
    });
};

export { login };
