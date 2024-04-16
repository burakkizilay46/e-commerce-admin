import { Button, Form, Input, DatePicker, InputNumber, Switch } from "antd";

const CampaignForm = () => {
  return (
    <div>
      <Form
        className="grid grid-cols-3 gap-4"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <div className="rounded-md border-2 p-4 col-span-2">
          <p className="font-medium text-lg">Kampanya Bilgileri</p>

          <Form.Item
            label="Başlık"
            name="title"
            rules={[
              { required: true, message: "Lütfen kampanya başlığını giriniz!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Başlangıç Tarihi"
            name="startDate"
            rules={[
              { required: true, message: "Lütfen başlangıç tarihini giriniz!" },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Bitiş Tarihi"
            name="endDate"
            rules={[
              { required: true, message: "Lütfen bitiş tarihini giriniz!" },
            ]}
          >
            <DatePicker />
          </Form.Item>
          <Form.Item
            label="Kullanım Adedi"
            name="usageCount"
            rules={[
              { required: true, message: "Lütfen kullanım adedini giriniz!" },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            label="Max Kullanım Sayısı"
            name="maxUsage"
            rules={[
              {
                required: true,
                message: "Lütfen maksimum kullanım sayısını giriniz!",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
        </div>
        <div className="rounded-md border-2 p-4 flex flex-col gap-4">
          <p className="font-medium text-lg">Kampanya Durumu</p>
          <Form.Item
            label="Site Aktiflik"
            name="siteActivity"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "Lütfen site aktivitesini belirtiniz!",
              },
            ]}
          >
            <Switch className="rounded-lg px-4 py-2 focus:outline-none bg-orange-500" />
          </Form.Item>
          <Form.Item
            label="Mobil Aktiflik"
            name="mobileActivity"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "Lütfen mobil aktivitesini belirtiniz!",
              },
            ]}
          >
            <Switch className="rounded-lg px-4 py-2 focus:outline-none bg-orange-500" />
          </Form.Item>
        </div>
        <Button className="w-[200px] h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-700">
          Kaydet
        </Button>
      </Form>
    </div>
  );
};

export default CampaignForm;
