import { Box, Stack } from '@mui/material'
import { Outlet } from 'react-router-dom'
import style from './style'

const PublicLayout = () => {
  return (
    <Stack direction={'row'} sx={style.fullMinHeight}>
      <Box flex={1}>
        <Outlet />
      </Box>
      <Stack flex={1} p={2}>
        <Box sx={style.signInBgImg}>
        </Box>
      </Stack>
    </Stack>
  )
}

export default PublicLayout