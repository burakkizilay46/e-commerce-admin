import PageTitle from "../../../components/PageTitle/PageTitle";
import OrderForm from "../orderForm";

const NewOrder = () => {
  return (
    <div>
      <PageTitle title="Sipariş Oluştur" />
      <div className="rounded-md border-2 mt-8 p-12">
        <OrderForm />
      </div>
    </div>
  );
};

export default NewOrder;
