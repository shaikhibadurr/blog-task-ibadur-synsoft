import { Button, Stack, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'
import style from './style'
import { useAuth } from '../UI/contexts/contexts'

const PrivateLayout = () => {
  const { setTokenState } = useAuth()
  return (
    <Stack sx={style.fullMinHeight}>

      {/* --------- Header --------- */}
      <Stack justifyContent={'center'} sx={style.headerBox}>
        <Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} sx={style.headerContent}>
          <Typography variant="h6" sx={style.headerLogo}>
            LOGO
          </Typography>
          <Button onClick={() => setTokenState(null)} variant="contained" sx={style.signInButton}>Sign Out</Button>
        </Stack>
      </Stack>

      {/* --------- Content --------- */}
      <Stack flex={1}>
        <Outlet />
      </Stack>

      {/* --------- Footer --------- */}
      <Stack mt={10} justifyContent={'center'} alignItems={'center'} sx={style.footerBox}>
        <Typography sx={style.footerText}>
          Copyright © 2025 Synsoft Global
        </Typography>
      </Stack>
    </Stack>
  )
}

export default PrivateLayout