import { Button, Spin } from "antd";
import { useState } from "react";
import { login } from "../../network";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await login();
      console.log(response); // Başarılı giriş durumunu işleyin
      // Giriş işlemleri burada
    } catch (error) {
      console.error(error); // Hata işleme
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex flex-col w-1/4 gap-4">
      <Spin spinning={isLoading} />
      <Button onClick={handleSubmit}>Login request</Button>
    </div>
  );
};

export default Home;
