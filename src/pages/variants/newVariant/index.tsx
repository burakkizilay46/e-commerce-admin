import PageTitle from "../../../components/PageTitle/PageTitle";
import VariantForm from "../variantForm";

const NewVariant = () => {
  return (
    <div>
      <PageTitle title="Varyant Oluştur" />
      <div className="rounded-md border-2 mt-8 p-12">
        <VariantForm />
      </div>
    </div>
  );
};

export default NewVariant;
