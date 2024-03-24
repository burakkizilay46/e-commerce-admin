import { Button, Input, message, Spin } from "antd";
import React, { useState } from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { login } from "../../../network";
import { useNavigate } from "react-router-dom";

const LoginView = () => {
  const [email, setEmail] = useState("furkanguzelgorur@gmail.com");
  const [password, setPassword] = useState("123456789");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await login({ email: email, password: password });
      if (
        response.access_token !== null ||
        response.access_token !== undefined
      ) {
        localStorage.setItem("acessToken", response.access_token);
        navigate("/home");
      } else {
        message.error(
          "Kullanıcı adı veya şifre yanlış! Lütfen tekrar deneyiniz!"
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-row h-screen w-full">
      <div className="w-1/2 h-full text-5xl flex justify-center items-center">
        <div className="flex flex-col">
          <p>Welcome</p>
          <p className="text-3xl">to</p>
          <p>forthback.com</p>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-end gap-4 w-1/2 h-full bg-blue-400 p-32">
        <p className="flex w-full items-center text-3xl font-bold pb-8 gap-4">
          Login Panel
          <Spin
            size="large"
            indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
            spinning={isLoading}
          />
        </p>
        <div className="w-full flex flex-col gap-1">
          <label>E Mail</label>
          <Input
            placeholder="E Mail"
            onChange={(e) => setEmail(e.target.value)}
            defaultValue={email}
          />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Password</label>
          <Input.Password
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={password}
          />
        </div>
        <Button className="w-[156px] bg-white" onClick={handleSubmit}>
          Login
        </Button>
      </div>
    </div>
  );
};

export default LoginView;
