import VariantForm from "../variantForm";
import PageTitle from "../../../components/PageTitle/PageTitle";

const EditVariant = () => {
  return (
    <div>
      <PageTitle title="Varyant Düzenle" />
      <div className="rounded-md border-2 mt-8 p-12">
        <VariantForm />
      </div>
    </div>
  );
};

export default EditVariant;
