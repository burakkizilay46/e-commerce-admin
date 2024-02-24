import { Button, Modal, Table } from "antd";

import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle/PageTitle";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";
import { productsTableHeaders } from "../../utils/data/products";
import { FiPlus } from "react-icons/fi";

const Products = () => {
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
      <PageTitle title="Ürünler Tablosu" />
      <div className="flex justify-end">
        <Button
          onClick={() => navigate("new")}
          className="flex items-center gap-2"
        >
          <FiPlus />
          Ürün Ekle
        </Button>
      </div>
      <Table
        columns={[
          ...productsTableHeaders,
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
        className="pt-12"
      />
      <Modal
        title="Basic Modal"
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

export default Products;
