import { Modal } from "antd";

interface MyModalProps {
  title: string;
  open: boolean;
  cancel: () => void;
  okey: () => void;
  content?: string[];
}

const MyModal = (props: MyModalProps) => {
  return (
    <Modal
      title={props.title}
      open={props.open}
      onOk={props.okey}
      onCancel={props.cancel}
    >
      {props.content?.map((item) => (
        <p>{item}</p>
      ))}
    </Modal>
  );
};

export default MyModal;
