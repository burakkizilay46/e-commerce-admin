import PageTitle from "../../../components/PageTitle/PageTitle";
import BrandForm from "../brandForm";

const EditBrand = () => {
  return (
    <div>
      <PageTitle title="Marka Düzenle" />
      <div className="rounded-md border-2 mt-8 p-12">
        <BrandForm />
      </div>
    </div>
  );
};

export default EditBrand;
