import { Button, Form, Input } from "antd";

const MemberForm = () => {
  return (
    <div>
      <Form
        className="grid grid-cols-2 gap-4"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <Form.Item
          label="Adı"
          name="name"
          rules={[{ required: true, message: "Lütfen İsminizi giriniz!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Soyadı"
          name="surname"
          rules={[{ required: true, message: "Lütfen soyisminizi giriniz!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Şirket İsmi"
          name="company"
          rules={[{ required: true, message: "Lütfen şirket ismini giriniz!" }]}
        >
          <Input />
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
          <Input />
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
          <Input />
        </Form.Item>

        <Form.Item
          label="Şehir"
          name="city"
          rules={[{ required: true, message: "Lütfen şehrinizi giriniz!" }]}
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

export default MemberForm;
