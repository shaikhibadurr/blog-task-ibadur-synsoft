import { useNavigate } from "react-router-dom";
import { HomeContext } from "../contexts/contexts"
import ROUTES from "../../utils/constants/routes.contants";
import HomeTemplate from "../templates/Home.template";

const Home = () => {
  // ==================== || HOOKS || ==================== //
  const navigate = useNavigate();

  // ==================== || FUNCTIONS || ==================== //
  const navigateToSignUp = () => {
    navigate(ROUTES.SIGN_UP);
  }

  // ==================== || CONTEXTS || ==================== //
  const sigInContextValue = { navigateToSignUp };
  return (
    <HomeContext.Provider value={sigInContextValue}>
      <HomeTemplate />
    </HomeContext.Provider>
  )
}

export default Home