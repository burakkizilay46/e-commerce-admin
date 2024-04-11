import PageTitle from "../../../components/PageTitle/PageTitle";
import CampaignForm from "../campaignForm";

const EditCampaign = () => {
  return (
    <div>
      <PageTitle title="Kampanya Düzenle" />
      <div className="rounded-md border-2 mt-8 p-12">
        <CampaignForm />
      </div>
    </div>
  );
};

export default EditCampaign;
