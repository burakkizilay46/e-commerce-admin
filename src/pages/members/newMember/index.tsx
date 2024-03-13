import PageTitle from "../../../components/PageTitle/PageTitle";
import MemberForm from "../memberForm";

const NewMember = () => {
  return (
    <div>
      <PageTitle title="Üye Oluştur" />
      <div className="rounded-md border-2 mt-8 p-12">
        <MemberForm />
      </div>
    </div>
  );
};

export default NewMember;
