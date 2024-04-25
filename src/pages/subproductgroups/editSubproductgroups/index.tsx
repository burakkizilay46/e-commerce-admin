import PageTitle from "../../../components/PageTitle/PageTitle";
import SubproductgroupForm from "../subproductgroupsForm";
const EditSubproductgroup = () => {
  return (
    <div>
      <PageTitle title="Alt Ürün Düzenle" />
      <div className="rounded-md border-2 mt-8 p-12">
        <SubproductgroupForm />
      </div>
    </div>
  );
};

export default EditSubproductgroup;
