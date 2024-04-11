import PageTitle from "../../../components/PageTitle/PageTitle";
import CommentForm from "../commentForm";

const NewComment = () => {
  return (
    <div>
      <PageTitle title="Yorum Oluştur" />
      <div className="rounded-md border-2 mt-8 p-12">
        <CommentForm />
      </div>
    </div>
  );
};

export default NewComment;
