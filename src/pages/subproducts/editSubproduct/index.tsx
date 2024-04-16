import PageTitle from "../../../components/PageTitle/PageTitle";
import SubproductForm from "../subproductForm";

const EditSubproduct = () => {
  return (
    <div>
      <PageTitle title="Alt Ürün Düzenle" />
      <div className="rounded-md border-2 mt-8 p-12">
        <SubproductForm />
      </div>
    </div>
  );
};

export default EditSubproduct;
