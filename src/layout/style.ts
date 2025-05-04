import { Theme } from '@mui/material'
import SigInBg from "../assets/images/singin-bg.jpg"

const style = {
  fullMinHeight: { minHeight: '100vh' },
  headerBox: { position: 'absolute', height: '62px', width: '100%', background: '#00000033' },
  headerContent: { width: '100%', maxWidth: '1224px', px: 3, margin: 'auto' },
  headerLogo: { color: '#F8F9FA', fontFamily: 'Spartan', mt:0.75 },
  signInButton: { color: (theme: Theme) => theme.palette.common.black, fontSize: '14px', fontWeight: 600, background: 'white', width: '74px', pt: '6px' },
  footerText: { fontSize: '16px', color: (theme: Theme) => theme.palette.common.white, fontWeight: 400 },
  footerBox: { background: '#000000', height: '64px' },
  signInBgImg: { backgroundImage: `url(${SigInBg})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: { xs: '200px', md: '100%' }, borderRadius: '15px' }
}

export default style