import { message } from "antd";
import useAxisosInterceptor, { axiosInstance } from "../api/axiosInterceptor";

const login = async (form: LoginType) => {
  return await axiosInstance
    .post("/api/admin/auth/login", {
      email: form.email,
      password: form.password,
    })
    .then((res) => res.data)
    .catch((err) => {
      if (err.response.status === 404) return Promise.reject(err);
      message.error(err?.response?.data?.message || err?.message);
      return err?.response?.data?.message || err?.message;
    });
  return;
};

export { login };
