import { Navigate } from "react-router-dom";
import PublicLayout from "../layout/PublicLayout";
import SignIn from "../UI/pages/SignIn.page";
import SignUp from "../UI/pages/SignUp.page";
import ROUTES from "../utils/constants/routes.contants";

const publicRoutes = [{
  path:ROUTES.BASE,
  Component: PublicLayout,
  children:[
    {
      path: ROUTES.SIGN_IN,
      Component: SignIn
    },
    {
      path: ROUTES.SIGN_UP,
      Component: SignUp
    },
    {
      path: ROUTES.NO_MATCH,
      element: <Navigate to={ROUTES.SIGN_IN}/>
    }
  ]
  }]

export default publicRoutes;