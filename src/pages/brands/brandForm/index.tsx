import { Button, Form, Input } from "antd";

const BrandForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item
          label="Marka Adı"
          name="name"
          rules={[{ required: true, message: "Lütfen marka adını giriniz!" }]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="Marka Grubu"
          name="group"
          rules={[{ required: true, message: "Lütfen marka grubunu giriniz!" }]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="Meta Başlık"
          name="metaTitle"
          rules={[{ required: true, message: "Lütfen meta başlığı giriniz!" }]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="Meta Tanımlamalar"
          name="metaDescription"
          rules={[
            { required: true, message: "Lütfen meta tanımlamaları giriniz!" },
          ]}
        >
          <Input.TextArea className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="Ürün Sayısı"
          name="productCount"
          rules={[
            { required: true, message: "Lütfen ürün sayısını giriniz!" },
            { type: "number", message: "Lütfen geçerli bir sayı giriniz!" },
          ]}
        >
          <Input
            type="number"
            className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </Form.Item>
        <Form.Item
          label="Marka Logosu URL"
          name="logo"
          rules={[
            {
              required: true,
              message: "Lütfen marka logosu URL'sini giriniz!",
            },
          ]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="Marka Web Sitesi URL"
          name="website"
          rules={[
            {
              required: true,
              message: "Lütfen marka web sitesi URL'sini giriniz!",
            },
          ]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item className="col-span-2 flex justify-center">
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

export default BrandForm;
