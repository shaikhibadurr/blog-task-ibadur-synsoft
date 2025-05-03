import { useNavigate } from "react-router-dom";
import {SignUpContext} from "../contexts/contexts"
import ROUTES from "../../utils/constants/routes.contants";
import SignUpTemplate from "../templates/SignUp.template";

const SignUp = () => {
  // ==================== || HOOKS || ==================== //
  const navigate = useNavigate();

  // ==================== || FUNCTIONS || ==================== //
  const navigateToSignIn = () => {
    navigate(ROUTES.SIGN_IN);
  }

  // ==================== || CONTEXTS || ==================== //
  const sigInContextValue = {navigateToSignIn};
  return (
    <SignUpContext.Provider value={sigInContextValue}>
      <SignUpTemplate/>
    </SignUpContext.Provider>
  )
}

export default SignUp