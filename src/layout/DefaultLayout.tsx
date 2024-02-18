import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { UserOutlined, VideoCameraOutlined } from "@ant-design/icons";

const DefaultLayout = ({ children }: any) => {
  return (
    <Layout>
      <Header>
        <div className="text-white flex flex-row justify-between">
          Logo
          <div className="flex flex-row gap-2">
            <div>Notification</div>
            <div>Burak Kızılay </div>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider
          width={290}
          style={{
            backgroundColor: "red",
            borderRight: "1px solid #E4E6EA",
            overflowY: "auto",
          }}
          theme="light"
          trigger={null}
          defaultCollapsed
          collapsible
          collapsed={true}
          collapsedWidth={117}
        >
          <Menu
            className="h-full"
            mode="inline"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%" }}
            items={[
              {
                key: "sub1",
                icon: <UserOutlined />,

                label: "Submenu 1",
              },
              {
                key: "sub2",
                icon: <VideoCameraOutlined />,
                label: "Submenu 2",
              },
            ]}
          />
        </Sider>
        <Content className=" p-10 bg-red-400">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
