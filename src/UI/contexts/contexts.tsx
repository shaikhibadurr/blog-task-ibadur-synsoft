import { createContext, useContext, useState, useEffect, Dispatch, SetStateAction } from "react"
import { getToken, removeToken, setToken } from "../../utils/storage"

const AuthContext = createContext<{tokenState: string | null, setTokenState: Dispatch<SetStateAction<string | null>>} | undefined>(undefined)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [tokenState, setTokenState] = useState<string | null>(getToken())

  useEffect(() => {
    if (tokenState) {
      setToken(tokenState)
    } else {
      removeToken()
    }
  }, [tokenState])

  return (
    <AuthContext.Provider value={{ tokenState, setTokenState }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  if (!context) throw new Error('useAuth hook must be used within AuthProvider component.')

  return context
}

