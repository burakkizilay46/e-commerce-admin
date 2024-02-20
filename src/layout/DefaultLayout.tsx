import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";

const DefaultLayout = ({ children }: any) => {
  return (
    <Layout>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content className="p-12">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
