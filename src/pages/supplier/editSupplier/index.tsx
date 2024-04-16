import PageTitle from "../../../components/PageTitle/PageTitle";
import SupplierForm from "../supplierForm";

const EditSupplier = () => {
  return (
    <div>
      <PageTitle title="Tedarikçi Düzenle" />
      <div className="rounded-md border-2 mt-8 p-12">
        <SupplierForm />
      </div>
    </div>
  );
};

export default EditSupplier;
