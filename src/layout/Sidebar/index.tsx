import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";

import { sidebarDatas } from "../../utils/data/sidebarData";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <>
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
    </>
  );
};

export default Sidebar;
