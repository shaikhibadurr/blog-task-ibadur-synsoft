import { Theme } from "@mui/material";
import { ThemeOptions } from "@mui/material/styles";
import colors from "../assets/scss/theme-vars.module.scss"

const themeTypography = (theme: Theme): ThemeOptions['typography'] => {
  return ({
    fontFamily: 'Inter',
    h3: {
      fontFamily: 'Lora',
      fontSize: '2.25rem',
      fontWeight: 700,
      color: colors.heading,
      lineHeight: 1,
    },
    h4: {
      fontFamily: 'Lora',
      fontSize: '1.5rem',
      fontWeight: 700,
      color: colors.black
    },
    h6:{
      fontSize: '1.5rem',
      fontWeight: 600,
      color: colors.heading,
      lineHeight: 1.33,
    },
    body1:{
      fontSize: '0.875rem',
      fontWeight: 500,
      color: colors.heading,
      lineHeight: 1.25
    },
    body2: {
      fontSize: '0.75rem',
      fontWeight: 400,
      color: colors.lightTextSecondary,
      lineHeight: 1.6,
    },
    caption: {
      fontSize: '0.875rem',
      fontWeight: 600,
      color: colors.lightTextPrimary,
      lineHeight: 1.43
    }
  })
}

export default themeTypography;