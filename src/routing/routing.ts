import { useRoutes } from "react-router-dom";
import privateRoutes from "./privateRoutes";
import publicRoutes from "./publicRoutes";

const Routing = () => {
  const token = false;
  return useRoutes(token?privateRoutes:publicRoutes);
}

export default Routing;