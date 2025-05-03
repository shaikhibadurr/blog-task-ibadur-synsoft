import { Theme } from "@mui/material";

const componentsOverrides = (theme:Theme)=>{
  return ({
    MuiButton:{
      defaultProps:{
        disableElevation:true,
      },
      styleOverrides:{
        root:{
          textTransform:'capitalize',
          fontSize: '1.125rem',
          fontWeight: 600,
          lineHeight: 1.33,
          padding: '8px 12px',
          borderRadius: '56px'
        }
      }
    }
  } as Theme['components'])
}


export default componentsOverrides;