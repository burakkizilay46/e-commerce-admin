import { Button, Table } from "antd";

import { variantsTableHeaders } from "../../utils/data/variants";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";
import { variantsData } from "../../utils/mock/variants";

import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const Variants = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageTitle title="Varyant Tablosu" />
      <div className="flex justify-end">
        <Button onClick={() => navigate("new")}>Varyant Ekle</Button>
      </div>
      <Table
        columns={[
          ...variantsTableHeaders,
          {
            title: "İşlemler",
            dataIndex: "actions",
            key: "actions",
            render: () => (
              <div className="flex gap-4 h-12 text-xl ">
                <EditOutlined
                  className="hover:text-blue-500"
                  onClick={() => alert("Düzenle Tıkladın")}
                />
                <DeleteOutlined
                  className="hover:text-blue-500"
                  onClick={() => alert("Sil Tıkladın")}
                />
              </div>
            ),
          },
        ]}
        dataSource={variantsData}
        className="pt-12"
      />
    </div>
  );
};

export default Variants;
