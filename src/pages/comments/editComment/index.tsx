import PageTitle from "../../../components/PageTitle/PageTitle";
import CommentForm from "../commentForm";

const EditComment = () => {
  return (
    <div>
      <PageTitle title="Yorum Düzenle" />
      <div className="rounded-md border-2 mt-8 p-12">
        <CommentForm />
      </div>
    </div>
  );
};

export default EditComment;
