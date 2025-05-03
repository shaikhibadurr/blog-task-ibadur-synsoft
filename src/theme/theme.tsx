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
  let customisedTheme = createTheme({
    palette: themePalette(colors),
  })

  customisedTheme = createTheme({
    ...customisedTheme,
    typography: themeTypography(customisedTheme),
    components: componentsOverrides(customisedTheme)
  })

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={customisedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeCustomisation