import { Button, Form, Input, Select } from "antd";

const CategoryForm = () => {
  return (
    <div>
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
          <Input />
        </Form.Item>
        <Form.Item
          label="Kategori Resmi"
          name="image"
          rules={[{ required: true, message: "Lüfen Kategori Resmi Giriniz!" }]}
        >
          <Input type="file" />
        </Form.Item>
        <Form.Item
          label="Seo Linki"
          name="seo_link"
          rules={[
            { required: true, message: "Lüfen Kategori Seo Link Giriniz!" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Seo Başlığı"
          name="seo_title"
          rules={[
            { required: true, message: "Lüfen Kategori Seo Başlığı Giriniz!" },
          ]}
        >
          <Input />
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
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Seo Açıklaması"
          name="seo_keywords"
          rules={[
            {
              required: true,
              message: "Lüfen Kategori Seo Anahar Kelimeleri Seçiniz!",
            },
          ]}
        >
          <Select />
        </Form.Item>
        <Form.Item
          label="Top Menu"
          name="top_menu"
          rules={[
            {
              required: true,
              message: "Lüfen Kategori Top Menu Seçiniz!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Showcase"
          name="showcase"
          rules={[
            {
              required: true,
              message: "Lüfen Kategori Top Menu Seçiniz!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Row"
          name="row"
          rules={[
            {
              required: true,
              message: "Lüfen Kategori Top Menu Seçiniz!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item className="w-full flex justify-end items-end">
          <Button type="default" htmlType="submit" className="w-[150px] h-9">
            Ekle
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CategoryForm;
