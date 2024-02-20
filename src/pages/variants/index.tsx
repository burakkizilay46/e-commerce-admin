import { Button, Modal, Table } from "antd";

import { variantsTableHeaders } from "../../utils/data/variants";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { variantsData } from "../../utils/mock/variants";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import { useState } from "react";

const Variants = () => {
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
        dataSource={variantsData}
        className="pt-12"
      />
      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  );
};

export default Variants;
