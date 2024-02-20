import { Button, Table } from "antd";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { categoriesData } from "../../utils/mock/category";
import { categoriesTableHeaders } from "../../utils/data/category";

const Categories = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageTitle title="Kategoriler Tablosu" />
      <div className="flex justify-end">
        <Button onClick={() => navigate("new")}>Kategori Ekle</Button>
      </div>
      <Table
        columns={[
          ...categoriesTableHeaders,
          {
            title: "İşlemler",
            dataIndex: "actions",
            key: "actions",
            render: () => (
              <div className="flex gap-4 h-12 text-xl ">
                <EditOutlined
                  className="hover:text-blue-500"
                  onClick={() => navigate(`${3}/edit`)}
                />
                <DeleteOutlined className="hover:text-blue-500" />
              </div>
            ),
          },
        ]}
        dataSource={categoriesData}
        className="pt-12"
      />
    </div>
  );
};

export default Categories;
