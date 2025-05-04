import { useNavigate } from "react-router-dom";
import { SignUpContext } from "../contexts/contexts"
import ROUTES from "../../utils/constants/routes.contants";
import SignUpTemplate from "../templates/SignUp.template";
import { useForm } from "react-hook-form";
import { SignUpFormValues } from "../../types/common";

const SignUp = () => {
  // ==================== || HOOKS || ==================== //
  const navigate = useNavigate();
  const { handleSubmit, control, formState: { errors }, getValues } = useForm<SignUpFormValues>(
    { defaultValues: { name:'', phone:'', email: '', password: '', confirmPassword:'' } }
  );

  // ==================== || FUNCTIONS || ==================== //
  const navigateToSignIn = () => {
    navigate(ROUTES.SIGN_IN);
  }
  const handleSignUp = (data: any) => {
    console.log(data);
  }

  // ==================== || CONTEXTS || ==================== //
  const sigInContextValue = { navigateToSignIn, handleSignIn: handleSubmit(handleSignUp), control, errors, getValues };
  return (
    <SignUpContext.Provider value={sigInContextValue}>
      <SignUpTemplate />
    </SignUpContext.Provider>
  )
}

export default SignUp