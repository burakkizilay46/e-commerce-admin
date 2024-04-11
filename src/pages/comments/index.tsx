import { Button, Modal, Table } from "antd";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { CommentData } from "../../utils/mock/comments";
import { CommentTableHeaders } from "../../utils/data/comments";

const Campaigns = () => {
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
    return isActive ? "Yayında" : "Yayında Değil";
  };

  return (
    <div>
      <PageTitle title="Yorumlar Tablosu" />
      <div className="flex justify-end">
        <Button onClick={() => navigate("new")}>Yorum Ekle</Button>
      </div>
      <Table
        columns={[
          ...CommentTableHeaders,
          {
            title: "Yayında mı?",
            dataIndex: "published",
            key: "published",
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
        dataSource={CommentData}
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

export default Campaigns;
