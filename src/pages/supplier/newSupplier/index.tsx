import PageTitle from "../../../components/PageTitle/PageTitle";
import SupplierForm from "../supplierForm";

const NewSupplier = () => {
  return (
    <div>
      <PageTitle title="Tedarikçi Oluştur" />
      <div className="rounded-md border-2 mt-8 p-12">
        <SupplierForm />
      </div>
    </div>
  );
};

export default NewSupplier;
