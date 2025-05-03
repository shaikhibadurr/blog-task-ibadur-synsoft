import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import style from './style'

const PublicLayout = () => {
  return (
    <Stack direction={{ xl: 'column', md: 'row' }} sx={style.fullMinHeight}>
      <Box flex={1} order= {{ xs: 2, md: 1 }}>
        <Outlet />
      </Box>
      <Stack flex={1} p={2} sx={{ order: { xs: 1, md: 2 } }}>
        <Box sx={style.signInBgImg}>
        </Box>
      </Stack>
    </Stack>
  )
}

export default PublicLayout