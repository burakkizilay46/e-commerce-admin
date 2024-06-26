import { Button, Form, Input } from "antd";

const MemberForm = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <Form
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item
          label="Adı"
          name="name"
          rules={[{ required: true, message: "Lütfen İsminizi giriniz!" }]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="Soyadı"
          name="surname"
          rules={[{ required: true, message: "Lütfen soyisminizi giriniz!" }]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="Şirket İsmi"
          name="company"
          rules={[{ required: true, message: "Lütfen şirket ismini giriniz!" }]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>
        <Form.Item
          label="E-Posta"
          name="email"
          rules={[
            { required: true, message: "Lütfen e-postanızı giriniz!" },
            {
              type: "email",
              message: "Geçerli bir e-posta adresi giriniz!",
            },
          ]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>

        <Form.Item
          label="Telefon"
          name="phone"
          rules={[
            { required: true, message: "Lütfen telefon numaranızı giriniz!" },
            {
              pattern: /^[0-9]{10}$/,
              message:
                "Geçerli bir telefon numarası giriniz! (örn: 5551234567)",
            },
          ]}
        >
          <Input className="rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500" />
        </Form.Item>

        <Form.Item
          label="Şehir"
          name="city"
          rules={[{ required: true, message: "Lütfen şehrinizi giriniz!" }]}
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

export default MemberForm;
