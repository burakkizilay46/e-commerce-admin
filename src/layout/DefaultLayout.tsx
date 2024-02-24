import { Layout } from "antd";
import Sidebar from "./Sidebar";
import { Navbar } from "./Navbar";

const { Content } = Layout;

const DefaultLayout = ({ children }: any) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Navbar />
      <Layout>
        <Sidebar />
        <Content style={{ padding: "24px", backgroundColor: "white" }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
