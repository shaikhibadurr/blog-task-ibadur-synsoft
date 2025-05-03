import { Typography } from "@mui/material";
import PrivateLayout from "../layout/PrivateLayout";
import ROUTES from "../utils/constants/routes.contants";

const privateRoutes = [{
  path:ROUTES.BASE,
  Component: PrivateLayout,
  children:[
    {
      path: ROUTES.BASE,
      element: <></>
    }
  ]
  }]

export default privateRoutes;