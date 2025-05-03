import { useNavigate } from "react-router-dom";
import { SignInContext } from "../contexts/contexts"
import SignInTemplate from "../templates/SignIn.template";
import ROUTES from "../../utils/constants/routes.contants";

const SignIn = () => {
  // ==================== || HOOKS || ==================== //
  const navigate = useNavigate();

  // ==================== || FUNCTIONS || ==================== //
  const navigateToSignUp = () => {
    navigate(ROUTES.SIGN_UP);
  }

  // ==================== || CONTEXTS || ==================== //
  const sigInContextValue = { navigateToSignUp };
  return (
    <SignInContext.Provider value={sigInContextValue}>
      <SignInTemplate />
    </SignInContext.Provider>
  )
}

export default SignIn