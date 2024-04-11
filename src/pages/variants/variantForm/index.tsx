import { Button, Form, Input, Select } from "antd";

const VariantForm = () => {
  return (
    <div>
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
        <Form.Item className="w-full flex justify-end items-end">
          <Button
            type="default"
            htmlType="submit"
            className="w-[200px] h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-700"
          >
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default VariantForm;
