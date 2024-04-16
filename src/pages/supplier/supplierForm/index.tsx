import { Button, Form, Input, Switch } from "antd";

const SupplierForm = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div className="rounded-md border-2 p-4 col-span-2">
        <p className="font-medium text-lg mb-4">Tedarikçi Bilgileri</p>

        <Form labelCol={{ span: 24 }} wrapperCol={{ span: 24 }}>
          <Form.Item
            label="Adı"
            name="name"
            rules={[
              { required: true, message: "Lütfen tedarikçi adını giriniz!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Kullanıcı Adı"
            name="username"
            rules={[
              { required: true, message: "Lütfen kullanıcı adınızı giriniz!" },
            ]}
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
            label="Adres"
            name="address"
            rules={[{ required: true, message: "Lütfen adresinizi giriniz!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Vergi Numarası"
            name="taxNumber"
            rules={[
              { required: true, message: "Lütfen vergi numaranızı giriniz!" },
              { len: 10, message: "Vergi numarası 10 haneli olmalıdır." },
              { pattern: /^[0-9]+$/, message: "Sadece rakam giriniz." },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>
      </div>
      <div className="rounded-md border-2 p-4 flex flex-col gap-4">
        <p className="font-medium text-lg">Aktiflik Durumu</p>
        <Form.Item
          label="Aktiflik Durumu"
          name="isActive"
          valuePropName="checked"
          rules={[
            { required: true, message: "Lütfen aktiflik durumunu belirtiniz!" },
          ]}
        >
          <Switch className="rounded-lg px-4 py-2 focus:outline-none bg-orange-500" />
        </Form.Item>
      </div>
      <div className="col-span-3 flex justify-center">
        <Button
          className="w-[200px] h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-700"
          htmlType="submit"
        >
          Kaydet
        </Button>
      </div>
    </div>
  );
};

export default SupplierForm;
