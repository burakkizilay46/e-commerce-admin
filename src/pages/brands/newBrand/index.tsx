import PageTitle from "../../../components/PageTitle/PageTitle";
import BrandForm from "../brandForm";

const NewBrand = () => {
  return (
    <div>
      <PageTitle title="Marka Oluştur" />
      <div className="rounded-md border-2 mt-8 p-12">
        <BrandForm />
      </div>
    </div>
  );
};

export default NewBrand;
