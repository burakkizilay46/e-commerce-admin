import { Button, Form, Input, Select, Switch } from "antd";

const ProductForm = () => {
  return (
    <div>
      <Form
        className="grid grid-cols-3 gap-4"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <div className=" rounded-md border-2 p-4 col-span-2">
          <Form.Item
            label="Ürün Adı"
            name="name"
            rules={[{ required: true, message: "Lüfen Ürün Adı Giriniz!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Arama Kelimeleri"
            name="search_texts"
            rules={[
              { required: true, message: "Lüfen Arama Kelimeleri Giriniz!" },
            ]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="border-2 rounded-md p-4 flex flex-col gap-4">
          <p className="font-medium text-lg"> Ürün Durumu </p>
          <div>
            <Form.Item>
              <div className="flex flex-row items-center justify-between">
                Aktif
                <Switch className="rounded-lg px-4 py-2 focus:outline-none bg-orange-500" />
              </div>
            </Form.Item>
            <Form.Item>
              <div className="flex flex-row items-center justify-between">
                Fırsat Ürünü
                <Switch className="rounded-lg px-4 py-2 focus:outline-none bg-orange-500" />
              </div>
            </Form.Item>
          </div>
        </div>
        <div className=" rounded-md border-2 p-4 col-span-2">
          <p className="font-medium text-lg">Envanter Bilgisi</p>
          <div className="grid grid-cols-2 gap-4">
            <Form.Item label="Webservis Kodu">
              <Input />
            </Form.Item>
            <Form.Item label="Barkod">
              <Input />
            </Form.Item>
            <Form.Item label="Stok Birimi">
              <Input />
            </Form.Item>
            <Form.Item label="Stok">
              <Input />
            </Form.Item>
            <Form.Item label="Tedarikçi">
              <Select />
            </Form.Item>
            <Form.Item label="Tedarikçi Ürün Kodu">
              <Input />
            </Form.Item>
          </div>
        </div>

        <div className=" rounded-md border-2 p-4">
          <p className="font-medium text-lg">Ürün Organizasyonu</p>
          <div className="grid grid-cols-2 gap-2">
            <Form.Item className="col-span-2" label="Kategori">
              <Select />
            </Form.Item>
            <Form.Item label="Marka">
              <Select />
            </Form.Item>
            <Form.Item label="Model">
              <Select />
            </Form.Item>
          </div>
        </div>
        <div className=" rounded-md border-2 p-4 col-span-2">
          <p className="font-medium text-lg">Fiyatlandırma</p>
          <div className="grid grid-cols-2 gap-2">
            <Form.Item label="Satış Fiyatı">
              <Input />
            </Form.Item>
            <Form.Item label="Satış Fiyatı 2">
              <Input />
            </Form.Item>
            <Form.Item label="Alış Fiyatı">
              <Input />
            </Form.Item>
            <Form.Item label="KDV (%)">
              <Input />
            </Form.Item>
            <Form.Item label="P Birimi">
              <Select />
            </Form.Item>
            <Form.Item label="Havale İndirimi">
              <Input />
            </Form.Item>
          </div>
        </div>
        <Button className="bg-orange-500 text-white">Kaydet</Button>
      </Form>
    </div>
  );
};

export default ProductForm;
