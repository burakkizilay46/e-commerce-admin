import PageTitle from "../../../components/PageTitle/PageTitle";
import MemberForm from "../memberForm";

const EditMember = () => {
  return (
    <div>
      <PageTitle title="Üye Düzenle" />
      <div className="rounded-md border-2 mt-8 p-12">
        <MemberForm />
      </div>
    </div>
  );
};

export default EditMember;
