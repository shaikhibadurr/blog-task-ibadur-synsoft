import { Box, Stack, Typography } from '@mui/material'

import style from './style'

const HomeSlider = () => {
  return (
    <Box sx={style.homeSliderBg}>
      <Box sx={style.homeContentBox}>
        <Box sx={style.homeContentWidth}>
          <Typography component={'span'} sx={style.homeContentTag}>ADVENTURE</Typography>
          <Typography variant="h3" sx={style.homeContentTitle}>Richird Norton photorealistic rendering as real photos</Typography>
          <Stack mt={4} direction={'row'} gap={1}>
            <Typography variant="body2" sx={style.homeContentDate}>1 Jan 2023 </Typography>
            <Box sx={style.line}></Box>
            <Typography variant="body2" sx={style.whiteColor}>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</Typography>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}

export default HomeSlider