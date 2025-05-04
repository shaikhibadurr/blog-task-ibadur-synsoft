import { Theme } from "@mui/material"
import HomeBg from "../../assets/images/home-bg.jpg"
import { ColorType } from "../../types/common"
import { API_BASE } from "../../utils/constants/envVar.constants"

const style = {
  textLink: { cursor: 'pointer', fontWeight: 500, color: (theme: Theme) => theme.palette.text.primary },
  homeSliderBg: { backgroundImage: `url(${HomeBg})`, backgroundPosition: 'center', backgroundSize: 'cover', height: '600px' },
  homeContentBox: { pt: 29.5, width: '100%', maxWidth: '1224px', px: 3, margin: 'auto' },
  homeContentWidth: { maxWidth: '500px' },
  homeContentTag: { fontSize: '10px', fontWeight: 600, padding: '5px 10px', borderRadius: 8, background: '#FFFFFF26', color: 'white' },
  homeContentTitle: { mt: 2, color: (theme: Theme) => theme.palette.common.white },
  homeContentDate: { flexShrink: 0, color: (theme: Theme) => theme.palette.common.white },
  line: { flexShrink: 0, mt: 1.2, width: '30px', height: '1px', background: (theme: Theme) => theme.palette.common.white },
  whiteColor: { color: (theme: Theme) => theme.palette.common.white },
  whiteCircle: { width: '8px', height: '8px', borderRadius: '50%', background: (theme: Theme) => theme.palette.common.white },
  greyCircle: { width: '8px', height: '8px', borderRadius: '50%', background: '#FFFFFF33' },
  line2: { width: '30px', height: '2px', background: (theme: Theme) => theme.palette.common.black },
  searchInput: {
    '& .MuiOutlinedInput-input': {
      paddingTop: '6px',
      paddingBottom: '6px',
      paddingLeft: 0,
    },
    "& .MuiInputBase-input::placeholder": {
      color: "#6F6F6F",
      opacity: 1,
    },
    "& .MuiInputAdornment-root svg": {
      color: "#6F6F6F", 
    },
  },
  addButton: { padding: '7px 16px', fontSize: '14px' },
  blogContainer: { cursor: 'pointer', minWidth: { xs: '280px', sm: '350px' } },
  blogImg: (url: string) => ({ height: '240px', backgroundImage: `url(${API_BASE}${url})`, backgroundPosition: 'center', backgroundSize: 'cover' }),
  blogLinkIcon: { width: '24px', height: '24px' },
  blogDesc: { fontSize: '1rem', fontWeight: 400, color: '#667085' },
  blogTag: (color: ColorType) => {
    return { borderRadius: '16px', padding: '2px 10px', background: (theme: Theme) => theme.palette[color].light }
  }
}

export default style