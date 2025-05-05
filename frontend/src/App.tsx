import ThemeCustomisation from './theme/theme'
// import Routing from './routing/routing'
// import { AuthProvider } from './UI/contexts/contexts'

// function App() {
//   return (
//     <AuthProvider>
//       <ThemeCustomisation>
//         <Routing />
//       </ThemeCustomisation>
//     </AuthProvider>
//   )
// }

// export default App
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};