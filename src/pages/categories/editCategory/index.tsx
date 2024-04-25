import PageTitle from "../../../components/PageTitle/PageTitle";
import CategoryForm from "../categoryForm";

const EditCategory = () => {
  return (
    <div>
      <PageTitle title="Kategori Oluştur" />
      <div className="rounded-md border-2 mt-8 p-12">
        <CategoryForm />
      </div>
    </div>
  );
};

export default EditCategory;
