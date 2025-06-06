import React from "react"
import { Box, Grid, Stack, Typography } from "@mui/material"
import HomeSlider from "../molecules/HomeSlider.molecule"
import BlogHeader from "../molecules/BlogHeader.molecule"
import Blog from "../molecules/Blog.molecule"
import { BlogProps, ColorType } from "../../types/common"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'


type HomeTemplateProps = {
  blogs: BlogProps[],
  getCategoryStatus: (category: string) => ColorType
}

const HomeTemplate: React.FC<HomeTemplateProps> = ({ blogs, getCategoryStatus }) => {
  return (
    <>
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        pagination={true} 
        modules={[Pagination,Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <HomeSlider />
        </SwiperSlide>
        <SwiperSlide><HomeSlider /></SwiperSlide>
        <SwiperSlide><HomeSlider /></SwiperSlide>
      </Swiper>
      <Stack>

        <Box sx={{ width: '100%', maxWidth: '1224px', px: 3, margin: 'auto' }}>
          <BlogHeader />
          <Grid container rowSpacing={7.5} columnSpacing={4} >
            {blogs?.length ?
              blogs.map((blog: BlogProps, ind) => {
                const { image, title, author, desc, date, tag } = blog
                return (
                  <Grid key={ind} size={{ xs: 12, sm: 6, lg: 4 }}>
                    <Blog
                      {...{ image, title, author, date, desc, tag, getCategoryStatus }}
                    />
                  </Grid>
                )
              })
              :
              <Typography variant="h6" sx={{ textAlign: 'center', opacity: 0.6 }}>No Blogs Available...</Typography>
            }
          </Grid>
        </Box>
      </Stack>
    </>
  )
}

export default HomeTemplate