import { Button, Modal, Table } from "antd";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { SupplierTableHeaders } from "../../utils/data/supplier";
import { SupplierData } from "../../utils/mock/supplier";

function Supplier() {
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

  const renderActivity = (isActive: boolean) => {
    return isActive ? "Aktif" : "Aktif Değil";
  };

  return (
    <div>
      <PageTitle title="Tedarikçiler Tablosu" />
      <div className="flex justify-end">
        <Button onClick={() => navigate("new")}>Tedarikçi Ekle</Button>
      </div>
      <Table
        columns={[
          ...SupplierTableHeaders,
          {
            title: "Aktiflik",
            dataIndex: "isActive",
            key: "isActive",
            render: (isActive: boolean) => renderActivity(isActive),
          },
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
        dataSource={SupplierData}
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
}

export default Supplier;
