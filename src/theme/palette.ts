
const themePalette = (colors: ThemeColors) => {
  return {
    primary: {
      main:colors.primaryMain,
      light: colors.primaryLight
    },
    secondary: {
      main:colors.secondaryMain,
      light: colors.secondaryLight
    },
    success: {
      main:colors.successMain,
      light: colors.successLight
    },
    text:{
      primary: colors.heading,
    }
  }
}

export default themePalette;