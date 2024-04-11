import { Button, Form, Input } from "antd";

const OrderForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item
          label="Üye Adı"
          name="memberName"
          rules={[{ required: true, message: "Lütfen Üye adını giriniz!" }]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="Şehir"
          name="city"
          rules={[{ required: true, message: "Lütfen şehri giriniz!" }]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="Miktar"
          name="amount"
          rules={[
            { required: true, message: "Lütfen miktarı giriniz!" },
            { type: "number", message: "Lütfen geçerli bir sayı giriniz!" },
          ]}
        >
          <Input
            type="number"
            className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </Form.Item>
        <Form.Item
          label="Ödeme Tipi"
          name="paymentType"
          rules={[{ required: true, message: "Lütfen ödeme tipini giriniz!" }]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="Kargo Şirketi"
          name="shippingCompany"
          rules={[
            { required: true, message: "Lütfen kargo şirketini giriniz!" },
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

export default OrderForm;
