import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import { FiPlus } from "react-icons/fi";
import { LuSearch } from "react-icons/lu";
import style from './style'

const BlogHeader = () => {
  return (
    <Stack mt={3.75} mb={3} gap={3} direction={{ xs: 'column', sm: 'row' }} justifyContent={'space-between'} >
      <Stack direction={'row'} gap={2} alignItems={'center'}>
        <Typography variant="h4">Blogs</Typography>
        <Box sx={style.line2}></Box>
      </Stack>
      <Stack direction={'row'} alignItems={'center'} gap={1.5}>
        <TextField placeholder="Search..." variant="outlined" sx={style.searchInput}
          slotProps={{
            input: {
              startAdornment: (<InputAdornment position="start"> <LuSearch /></InputAdornment>),
            },
          }}
        />
        <Button variant="contained" size="small" startIcon={<FiPlus />} sx={style.addButton}>Add</Button>
      </Stack>
    </Stack>
  )
}

export default BlogHeader