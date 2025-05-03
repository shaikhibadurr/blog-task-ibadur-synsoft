import PublicLayout from "../layout/PublicLayout";
import ROUTES from "../utils/constants/routes.contants";

const publicRoutes = [{
  path:ROUTES.BASE,
  Component: PublicLayout,
  children:[
    {
      path: ROUTES.BASE,
      element: <></>
    }
  ]
  }]

export default publicRoutes;