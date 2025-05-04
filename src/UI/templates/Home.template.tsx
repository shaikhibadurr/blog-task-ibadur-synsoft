import { Box, Grid, Stack } from "@mui/material"
import HomeSlider from "../molecules/HomeSlider.molecule"
import BlogHeader from "../molecules/BlogHeader.molecule"
import Blog from "../molecules/Blog.molecule"

const HomeTemplate = () => {
  return (
    <Stack>
      <HomeSlider />
      <Box sx={{ width: '100%', maxWidth: '1224px', px: 3, margin: 'auto' }}>
        <BlogHeader />
        <Grid container rowSpacing={7.5} columnSpacing={4} >
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Blog color="primary"/>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Blog color="secondary"/>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Blog color="success"/>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Blog color="success" />
          </Grid>
          <Grid size={{ xs: 12, sm: 6, lg: 4 }}>
            <Blog color="success"/>
          </Grid>
        </Grid>
      </Box>
    </Stack>
  )
}

export default HomeTemplate