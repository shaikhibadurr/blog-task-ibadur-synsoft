
const themePalette = (colors: ThemeColors) => {
  return {
    primary: {
      main:colors.primaryMain
    },
    text:{
      primary: colors.heading,
    }
  }
}

export default themePalette;