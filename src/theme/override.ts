import { Theme } from "@mui/material"
import colors from "../assets/scss/theme-vars.module.scss"

const componentsOverrides = () => {
  return ({
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontSize: '1.125rem',
          lineHeight: 1.33,
          padding: '8px 12px',
          borderRadius: '56px'
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        input: {
          '::placeholder': {
            color: colors.lightTextPrimary,
            fontSize: '14px',
            fontWeight: 400,
          },
          padding: '10px 12px'
        },
      },
    },
  } as Theme['components'])
}


export default componentsOverrides