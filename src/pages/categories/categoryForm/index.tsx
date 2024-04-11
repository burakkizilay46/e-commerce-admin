import { Button, Form, Input, DatePicker } from "antd";

const CategoryForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Form
        className="grid grid-cols-2 gap-4"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 16 }}
      >
        <Form.Item
          label="Kategori Adı"
          name="name"
          rules={[{ required: true, message: "Lüfen Kategori Adı Giriniz!" }]}
        >
          <Input className="border rounded-md px-4 py-2" />
        </Form.Item>
        <Form.Item
          label="Kategori Resmi"
          name="image"
          rules={[{ required: true, message: "Lüfen Kategori Resmi Giriniz!" }]}
        >
          <Input type="file" className="border rounded-md px-4 py-2" />
        </Form.Item>
        <Form.Item
          label="Seo Linki"
          name="seo_link"
          rules={[
            { required: true, message: "Lüfen Kategori Seo Link Giriniz!" },
          ]}
        >
          <Input className="border rounded-md px-4 py-2" />
        </Form.Item>
        <Form.Item
          label="Seo Başlığı"
          name="seo_title"
          rules={[
            { required: true, message: "Lüfen Kategori Seo Başlığı Giriniz!" },
          ]}
        >
          <Input className="border rounded-md px-4 py-2" />
        </Form.Item>
        <Form.Item
          label="Seo Açıklaması"
          name="seo_description"
          rules={[
            {
              required: true,
              message: "Lüfen Kategori Seo Açıklaması Giriniz!",
            },
          ]}
        >
          <Input.TextArea className="border rounded-md px-4 py-2" />
        </Form.Item>
        <Form.Item
          label="Oluşturulma Tarihi"
          name="createdAt"
          rules={[
            {
              required: true,
              message: "Lütfen oluşturulma tarihini giriniz!",
            },
          ]}
        >
          <DatePicker className="border rounded-md px-4 py-2" />
        </Form.Item>
        <Form.Item
          label="Güncelleme Tarihi"
          name="updatedAt"
          rules={[
            {
              required: true,
              message: "Lütfen güncelleme tarihini giriniz!",
            },
          ]}
        >
          <DatePicker className="border rounded-md px-4 py-2" />
        </Form.Item>
        <Form.Item className="w-full flex justify-center">
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

export default CategoryForm;
