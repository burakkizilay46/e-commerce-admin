import { Layout, Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { Content, Header } from "antd/es/layout/layout";
import { useNavigate } from "react-router-dom";
import { sidebarDatas } from "../utils/data/sidebarData";

const DefaultLayout = ({ children }: any) => {
  const navigate = useNavigate();
  return (
    <Layout>
      <Header>
        <div className="text-white flex flex-row justify-between">
          <a href="/">Logo</a>
          <div className="flex flex-row gap-2">
            <div>Notification</div>
            <div>Burak Kızılay </div>
          </div>
        </div>
      </Header>
      <Layout>
        <Sider
          width={250}
          style={{
            borderRight: "1px solid #E4E6EA",
            overflowY: "auto",
          }}
          theme="light"
          trigger={null}
          defaultCollapsed
          collapsible
          collapsed={false}
          collapsedWidth={117}
        >
          <Menu
            className="h-full"
            defaultSelectedKeys={["1"]}
            defaultOpenKeys={["sub1"]}
          >
            {sidebarDatas.map((item) => (
              <Menu.Item
                className="bg-white text-base"
                key={item.key}
                onClick={() => navigate(item.path)}
              >
                {item.title}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Content className=" p-10">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default DefaultLayout;
