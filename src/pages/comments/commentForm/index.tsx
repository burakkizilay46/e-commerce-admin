import { Button, Form, Input, Rate, Switch } from "antd";

const CommentForm = () => {
  return (
    <div>
      <Form
        className="grid grid-cols-3 gap-4"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
      >
        <div className="rounded-md border-2 p-4 col-span-2">
          <p className="font-medium text-lg">Yorum Bilgileri</p>

          <Form.Item
            label="Kullanıcı Adı"
            name="username"
            rules={[
              { required: true, message: "Lütfen kullanıcı adını giriniz!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Başlık"
            name="title"
            rules={[
              { required: true, message: "Lütfen yorum başlığını giriniz!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Yorum"
            name="message"
            rules={[
              { required: true, message: "Lütfen yorum içeriğini giriniz!" },
            ]}
          >
            <Input.TextArea />
          </Form.Item>
          <Form.Item
            label="Beğeni Sayısı"
            name="star"
            rules={[
              { required: true, message: "Lütfen beğeni sayısını giriniz!" },
            ]}
          >
            <Rate count={5} />
          </Form.Item>
          <Form.Item
            label="Ürün"
            name="productName"
            rules={[{ required: true, message: "Lütfen ürün adını giriniz!" }]}
          >
            <Input />
          </Form.Item>
        </div>
        <div className="rounded-md border-2 p-4 flex flex-col gap-4">
          <p className="font-medium text-lg">Yorum Durumu</p>
          <p className="font-medium text-lg">Test Durumu</p>
          <Form.Item
            label="Yorum Onaylı"
            name="approved"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "Lütfen yorumun onay durumunu belirtiniz!",
              },
            ]}
          >
            <Switch className=" bg-orange-500" />
          </Form.Item>
          <Form.Item
            label="Yayın Durumu"
            name="published"
            valuePropName="checked"
            rules={[
              {
                required: true,
                message: "Lütfen yorumun yayın durumunu belirtiniz!",
              },
            ]}
          >
            <Switch className=" bg-orange-500" />
          </Form.Item>
        </div>
        <Button className="w-[200px] h-10 rounded-full bg-orange-500 text-white hover:bg-orange-600 focus:bg-orange-700">
          Kaydet
        </Button>
      </Form>
    </div>
  );
};

export default CommentForm;
