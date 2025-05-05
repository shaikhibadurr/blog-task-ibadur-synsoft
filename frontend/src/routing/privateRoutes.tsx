import PrivateLayout from "../layout/PrivateLayout"
import ROUTES from "../utils/constants/routes.contants"
import { Navigate } from "react-router-dom"
import Home from "../UI/pages/Home.page"

const privateRoutes = [{
  path: ROUTES.BASE,
  Component: PrivateLayout,
  children: [
    { path: ROUTES.BASE, Component: Home },
    { path: ROUTES.NO_MATCH, element: <Navigate to={ROUTES.BASE} /> }
  ]
}]

export default privateRoutes