import { Button, Form, Input } from "antd";

const SubproductgroupForm = () => {
  return (
    <div>
      <Form
        className="grid grid-cols-3 gap-4"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <div className="col-span-2">
          <Form.Item
            label="Grup Adı"
            name="groupName"
            rules={[{ required: true, message: "Lütfen grup adını giriniz!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Sitede Görünen İsim"
            name="visibleName"
            rules={[
              {
                required: true,
                message: "Lütfen sitede görünen ismi giriniz!",
              },
            ]}
          >
            <Input />
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

export default SubproductgroupForm;
