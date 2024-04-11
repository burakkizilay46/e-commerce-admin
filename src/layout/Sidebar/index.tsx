import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import { useNavigate } from "react-router-dom";
import { sidebarDatas } from "../../utils/data/sidebarData";

const Sidebar = () => {
  const navigate = useNavigate();

  const convertSidebarDataToMenuItems = (data: any) => {
    return data.map((item: any) => ({
      key: item.key,
      label: item.title,
      onClick: () => item.path && navigate(item.path),

      children: item.children
        ? convertSidebarDataToMenuItems(item.children)
        : undefined,
    }));
  };

  const items = convertSidebarDataToMenuItems(sidebarDatas);

  return (
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
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        items={items}
        style={{
          height: "100%",
          borderRight: 0,
        }}
      />
    </Sider>
  );
};

export default Sidebar;
