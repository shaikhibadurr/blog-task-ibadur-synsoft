import { useNavigate } from "react-router-dom"
import ROUTES from "../../utils/constants/routes.contants"
import SignUpTemplate from "../templates/SignUp.template"
import { Control, FieldErrors, useForm } from "react-hook-form"
import { SignUpFormValues } from "../../types/common"
import { createContext, useState } from "react"
import { signupApi } from "../../api/auth"
import toast from "react-hot-toast"
import { AxiosError } from "axios"

type SignUpContextType = {
  navigateToSignIn: () => void,
  handleSignUp: () => Promise<void>,
  control: Control<SignUpFormValues>,
  errors: FieldErrors<SignUpFormValues>,
  loading: boolean,
  passwordValue: string
}

export const SignUpContext = createContext<SignUpContextType | undefined>(undefined)

const SignUp = () => {
  // ==================== || HOOKS || ==================== //
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const { handleSubmit, control, formState: { errors }, getValues } = useForm<SignUpFormValues>(
    { defaultValues: { name: '', phone: '', email: '', password: '', confirmPassword: '' } }
  )
  const passwordValue = getValues('password')

  // ==================== || FUNCTIONS || ==================== //
  const navigateToSignIn = () => {
    navigate(ROUTES.SIGN_IN)
  }
  const handleSignUp = async (data: SignUpFormValues) => {
    try {
      setLoading(true)
      await signupApi(data)
      toast.success("Signup successfull")
      navigate(ROUTES.SIGN_IN)
    } catch (err) {
      const axiosError = err as AxiosError<{ msg: string }>;
      toast.error(axiosError.response?.data?.msg || "Signup failed")
    } finally {
      setLoading(false)
    }
  }

  // ==================== || CONTEXTS || ==================== //
  const sigInContextValue = { loading, navigateToSignIn, handleSignUp: handleSubmit(handleSignUp), control, errors, passwordValue }
  return (
    <SignUpContext.Provider value={sigInContextValue}>
      <SignUpTemplate />
    </SignUpContext.Provider>
  )
}

export default SignUp