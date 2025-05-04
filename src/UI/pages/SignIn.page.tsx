import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/contexts"
import SignInTemplate from "../templates/SignIn.template"
import ROUTES from "../../utils/constants/routes.contants"
import { Control, FieldErrors, useForm } from "react-hook-form"
import { createContext, useState } from "react"
import { loginApi } from "../../api/auth"
import toast from "react-hot-toast"
import { AxiosError } from "axios"

type LoginForm = {
  email: string
  password: string
}

type SignInContextType = { 
  navigateToSignUp: ()=>void,
  handleSignIn: ()=> Promise<void>,
  control: Control<LoginForm>, 
  errors: FieldErrors<LoginForm>, 
  loading: boolean 
}

export const SignInContext = createContext<SignInContextType | undefined>(undefined)

const SignIn = () => {
  // ==================== || HOOKS || ==================== //
  const navigate = useNavigate()
  const { setTokenState } = useAuth()
  const [loading, setLoading] = useState(false)
  const { handleSubmit, control, formState: { errors } } = useForm(
    { defaultValues: { email: '', password: '' } }
  )

  // ==================== || FUNCTIONS || ==================== //
  const navigateToSignUp = () => {
    navigate(ROUTES.SIGN_UP)
  }
  const handleSignIn = async (data: LoginForm) => {
    try {
      setLoading(true)
      const res = await loginApi(data)
      const token = res.data.token
      setTokenState(token)
    } catch (err) {
      const axiosError = err as AxiosError<{ msg: string }>;
      toast.error(axiosError.response?.data?.msg || "Login failed")
    } finally {
      setLoading(false)
    }
  }

  // ==================== || CONTEXTS || ==================== //
  const sigInContextValue: SignInContextType = { navigateToSignUp, handleSignIn: handleSubmit(handleSignIn), control, errors, loading }
  
  return (
    <SignInContext.Provider value={sigInContextValue}>
      <SignInTemplate />
    </SignInContext.Provider>
  )
}

export default SignIn