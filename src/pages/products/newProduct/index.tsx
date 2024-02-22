import PageTitle from "../../../components/PageTitle/PageTitle";
import ProductForm from "../productForm";

const NewProduct = () => {
  return (
    <div>
      <PageTitle title="Ürün Oluştur" />
      <div className="rounded-md border-2 mt-8 p-12">
        <ProductForm />
      </div>
    </div>
  );
};

export default NewProduct;
