import { useNavigate } from "react-router-dom";
import { SignInContext } from "../contexts/contexts"
import SignInTemplate from "../templates/SignIn.template";
import ROUTES from "../../utils/constants/routes.contants";
import { useForm } from "react-hook-form";

const SignIn = () => {
  // ==================== || HOOKS || ==================== //
  const navigate = useNavigate();
  const { handleSubmit, control, formState: { errors } } = useForm(
    { defaultValues: { email: '', password: '' } }
  );

  // ==================== || FUNCTIONS || ==================== //
  const navigateToSignUp = () => {
    navigate(ROUTES.SIGN_UP);
  }
  const handleSignIn = (data: any) => {
    console.log(data);
  }

  // ==================== || CONTEXTS || ==================== //
  const sigInContextValue = { navigateToSignUp, handleSignIn: handleSubmit(handleSignIn), control, errors };
  return (
    <SignInContext.Provider value={sigInContextValue}>
      <SignInTemplate />
    </SignInContext.Provider>
  )
}

export default SignIn