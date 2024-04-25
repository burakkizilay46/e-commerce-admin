import PageTitle from "../../../components/PageTitle/PageTitle";
import SubproductgroupForm from "../subproductgroupsForm";

const NewSubproductgroup = () => {
  return (
    <div>
      <PageTitle title="Alt Ürün Grup Oluştur" />
      <div className="rounded-md border-2 mt-8 p-12">
        <SubproductgroupForm />
      </div>
    </div>
  );
};

export default NewSubproductgroup;
