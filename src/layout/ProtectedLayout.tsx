import { useOutlet } from "react-router-dom";

const ProtectedLayout = () => {
  const outlet = useOutlet();

  return <>{outlet}</>;
};

export default ProtectedLayout;
