import { useRoutes } from "react-router-dom"
import privateRoutes from "./privateRoutes"
import publicRoutes from "./publicRoutes"
import { useAuth } from "../UI/contexts/contexts"

const Routing = () => {
  const { tokenState } = useAuth()
  return useRoutes(tokenState ? privateRoutes : publicRoutes)
}

export default Routing