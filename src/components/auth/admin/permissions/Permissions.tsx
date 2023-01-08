import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../../../app/hooks";

const Permissions = () => {
  const appState = useAppSelector((state) => state.app);

  if (!appState.config.auth.authenticated) {
    return (<Navigate to="/" />);
  }

  return <></>;
};

export default Permissions;
