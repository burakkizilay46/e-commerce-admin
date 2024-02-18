import { Button, Table } from "antd";

import { variantsTableHeaders } from "../../utils/data/variants";
import { useNavigate } from "react-router-dom";
import PageTitle from "../../components/PageTitle";

const Variants = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageTitle title="Varyant Tablosu" />
      <div className="flex justify-end">
        <Button onClick={() => navigate("new")}>Varyant Ekle</Button>
      </div>
      <Table columns={variantsTableHeaders} className="pt-12" />
    </div>
  );
};

export default Variants;
