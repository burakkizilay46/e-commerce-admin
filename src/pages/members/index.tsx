import { Button, Table } from "antd";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { MemberData } from "../../utils/mock/members";
import { MemberTableHeaders } from "../../utils/data/members";

const Members = () => {
  const navigate = useNavigate();

  return (
    <div>
      <PageTitle title="Üyeler Tablosu" />
      <div className="flex justify-end">
        <Button onClick={() => navigate("new")}>Üye Ekle</Button>
      </div>
      <Table
        columns={[
          ...MemberTableHeaders,
          {
            title: "İşlemler",
            dataIndex: "actions",
            key: "actions",
            render: () => (
              <div className="flex gap-4 h-12 text-xl">
                <EditOutlined
                  className="hover:text-blue-500"
                  onClick={() => navigate(`${3}/edit`)}
                />
                <DeleteOutlined className="hover:text-blue-500" />
              </div>
            ),
          },
        ]}
        dataSource={MemberData}
        className="pt-12"
      />
    </div>
  );
};

export default Members;
