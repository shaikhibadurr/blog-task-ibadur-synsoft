import PublicLayout from "../layout/PublicLayout";
import SignIn from "../UI/pages/SignIn.page";
import ROUTES from "../utils/constants/routes.contants";

const publicRoutes = [{
  path:ROUTES.BASE,
  Component: PublicLayout,
  children:[
    {
      path: ROUTES.SIGN_IN,
      Component: SignIn
    }
  ]
  }]

export default publicRoutes;