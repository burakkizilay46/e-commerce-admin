import { Button, Form, Input, InputNumber, Switch } from "antd";

const SubproductForm = () => {
  return (
    <div>
      <Form
        className="grid grid-cols-3 gap-4"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <div className="rounded-md border-2 p-4 col-span-2">
          <p className="font-medium text-lg">Ürün Bilgileri</p>

          <Form.Item
            label="Ürün Adı"
            name="name"
            rules={[{ required: true, message: "Lütfen ürün adını giriniz!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nitelik 1"
            name="attribute1"
            rules={[{ required: true, message: "Lütfen nitelik 1'i giriniz!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Nitelik 2"
            name="attribute2"
            rules={[
              { required: true, message: "Lütfen nitelik 2'yi giriniz!" },
            ]}
          >
            <Input />
          </Form.Item>
          <div className="flex gap-4">
            <div className="w-1/2">
              <Form.Item
                label="Stok"
                name="stock"
                rules={[
                  { required: true, message: "Lütfen stok miktarını giriniz!" },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </div>
            <div className="w-1/2">
              <Form.Item
                label="Desi"
                name="weight"
                rules={[
                  { required: true, message: "Lütfen desi değerini giriniz!" },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <Form.Item
                label="Alış Fiyatı"
                name="purchasePrice"
                rules={[
                  { required: true, message: "Lütfen alış fiyatını giriniz!" },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </div>
            <div className="w-1/2">
              <Form.Item
                label="Satış Fiyatı"
                name="sellingPrice"
                rules={[
                  { required: true, message: "Lütfen satış fiyatını giriniz!" },
                ]}
              >
                <InputNumber />
              </Form.Item>
            </div>
          </div>
          <Form.Item
            label="Servis Kodu"
            name="webServiceCode"
            rules={[
              {
                required: true,
                message: "Lütfen web servis kodunu giriniz!",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </div>

        <div className="border-2 rounded-md p-4 flex flex-col gap-4">
          <p className="font-medium text-lg">Aktiflik Durumu</p>
          <Form.Item label="Aktiflik" name="isActive" valuePropName="checked">
            <Switch className="bg-orange-500" />
          </Form.Item>
        </div>
      </Form>
      <div className="flex justify-center mt-4">
        <Button
          className="w-48 h-12 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-700"
          htmlType="submit"
        >
          Kaydet
        </Button>
      </div>
    </div>
  );
};

export default SubproductForm;
