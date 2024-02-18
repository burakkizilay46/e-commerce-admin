import { Header } from "antd/es/layout/layout";

export const Navbar = () => {
  return (
    <>
      <Header>
        <div className="text-white flex flex-row justify-between">
          <a href="/">Logo</a>
          <div className="flex flex-row gap-2">
            <div>Notification</div>
            <div>Burak Kızılay </div>
          </div>
        </div>
      </Header>
    </>
  );
};
