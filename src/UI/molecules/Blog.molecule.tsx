import { Box, Stack, Typography } from '@mui/material'
import OpenLink from "../../assets/images/open-link.png"
import React from 'react'
import style from './style'
import { ColorType } from '../../types/common'

type BlogProps = {
  color: ColorType
}

const Blog: React.FC<BlogProps> = ({ color }) => {
  return (
    <Box sx={style.blogContainer}>
      <Box sx={style.blogImg}></Box>
      <Stack mt={4} gap={1.5}>
        <Typography variant="caption">Natali Craig • 1 Jan 2023</Typography>
        <Stack direction={'row'} gap={2}>
          <Typography variant="h5">How collaboration makes us better designers</Typography>
          <Stack justifyContent={'center'} alignItems={'center'} sx={style.blogLinkIcon}>
            <img src={OpenLink} alt={"open link icon"} />
          </Stack>
        </Stack>
        <Typography sx={style.blogDesc}>Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?</Typography>
      </Stack>
      <Box mt={3}>
        <Typography color={color} variant="body1" component={"span"} sx={style.blogTag(color)}>
          Leadership
        </Typography>
      </Box>
    </Box>
  )
}

export default Blog