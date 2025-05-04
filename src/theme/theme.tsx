import { ThemeProvider } from "@mui/material"
import { createTheme, CssBaseline, StyledEngineProvider } from "@mui/material"
import { ReactNode } from "react"
import themePalette from "./palette"
import colors from '../assets/scss/theme-vars.module.scss'
import componentsOverrides from "./override"
import themeTypography from "./typography"

type ThemeCustomisationProps = {
  children: ReactNode
}

const ThemeCustomisation: React.FC<ThemeCustomisationProps> = ({ children }) => {
  let theme = createTheme({
    breakpoints: {
      values: {
        xs:0,
        sm: 768,
        md: 900,
        lg: 1200,
        xl:1536
      },
    },
    palette: themePalette(colors),
    typography: themeTypography(),
    components: componentsOverrides()
  })

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeCustomisation