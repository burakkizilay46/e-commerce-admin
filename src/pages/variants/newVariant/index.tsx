import { Button, Form, Input, Select } from "antd";
import PageTitle from "../../../components/PageTitle/PageTitle";

const NewVariant = () => {
  return (
    <div>
      <PageTitle title="Varyant Oluştur" />
      <div className="rounded-md border-2 mt-8 p-12">
        <Form
          className="grid grid-cols-2 gap-4"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
        >
          <Form.Item
            label="Varyant Adı"
            name="name"
            rules={[{ required: true, message: "Lüfen Varyant Adı Giriniz!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Kategori"
            name="categoryId"
            rules={[{ required: true, message: "Lütfen Kategori Seçiniz!" }]}
          >
            <Select />
          </Form.Item>
          <Form.Item
            label="Durum"
            name="status"
            rules={[{ required: true, message: "Lütfen Durum Seçiniz!" }]}
          >
            <Select />
          </Form.Item>
          <Form.Item wrapperCol={{ offset: 20, span: 16 }}>
            <Button type="default" htmlType="submit" className="w-[120px]">
              Ekle
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default NewVariant;
