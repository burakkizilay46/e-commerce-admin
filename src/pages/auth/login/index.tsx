import { Button, Input } from "antd";
import React from "react";

const LoginView = () => {
  return (
    <div className="flex flex-row h-screen w-full">
      <div className="w-1/2 h-full text-5xl flex justify-center items-center">
        <div className="flex flex-col ">
          <p>Welcome</p>
          <p className="text-3xl">to</p>
          <p>forthback.com</p>
        </div>
      </div>

      <div className=" flex flex-col justify-center items-end gap-4 w-1/2 h-full bg-blue-400 p-32">
        <p className="flex w-full items-center text-3xl font-bold pb-8">
          Login Panel
        </p>
        <div className="w-full flex flex-col gap-1">
          <label>E Mail</label>
          <Input placeholder="E Mail" />
        </div>
        <div className="w-full flex flex-col gap-1">
          <label>Password</label>
          <Input placeholder="Password" />
        </div>

        <Button className="w-[156px] bg-white">Login</Button>
      </div>
    </div>
  );
};

export default LoginView;
