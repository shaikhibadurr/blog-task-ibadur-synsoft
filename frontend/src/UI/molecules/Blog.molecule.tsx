import { Box, Stack, Typography } from '@mui/material'
import OpenLink from "../../assets/images/open-link.png"
import React from 'react'
import style from './style'
import { BlogProps, ColorType } from '../../types/common'

type BlogPropsType = {
  getCategoryStatus: (category: string) => ColorType
} & BlogProps

const Blog: React.FC<BlogPropsType> = (props) => {
  const { image, title, author, date, desc, tag, getCategoryStatus } = props
  const color = getCategoryStatus(tag)
  return (
    <Box sx={style.blogContainer}>
      <Box sx={style.blogImg(image)}></Box>
      <Stack mt={4} gap={1.5}>
        <Typography variant="caption">{author} • {date}</Typography>
        <Stack direction={'row'} gap={2} justifyContent={'space-between'}>
          <Typography variant="h5">{title}</Typography>
          <Stack justifyContent={'center'} alignItems={'center'} sx={style.blogLinkIcon}>
            <img src={OpenLink} alt={"open link icon"} />
          </Stack>
        </Stack>
        <Typography sx={style.blogDesc}>{desc}</Typography>
      </Stack>
      <Box mt={3}>
        <Typography color={color} variant="body1" component={"span"} sx={style.blogTag(color)}>
          {tag}
        </Typography>
      </Box>
    </Box>
  )
}

export default Blog