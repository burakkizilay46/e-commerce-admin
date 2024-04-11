import { Button, Modal, Table } from "antd";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { BrandsTableHeaders } from "../../utils/data/brands";
import { BrandsData } from "../../utils/mock/brands";

const Brands = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <PageTitle title="Markalar Tablosu" />
      <div className="flex justify-end">
        <Button onClick={() => navigate("new")}>Marka Ekle</Button>
      </div>
      <Table
        columns={[
          ...BrandsTableHeaders,
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
                <DeleteOutlined
                  className="hover:text-blue-500"
                  onClick={showModal}
                />
              </div>
            ),
          },
        ]}
        dataSource={BrandsData}
        className="pt-12"
      />
      <Modal
        title="Silmek istediğinizden emin misiniz?"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Silmek istediğinizden emin misiniz?...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Brands;
