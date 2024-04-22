import galeria_img from '../../assets/img/galeria.png'
import img1 from '../../assets/img/carrosel1.png'
import img2 from '../../assets/img/carrosel2.png'
import img3 from '../../assets/img/carrosel3.png'
import './galeria.css'
import '../../grid.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation, Grid } from 'swiper/modules'



export default function Galeria() {

  const imagens = [

    { id: '1', image: img1 },
    { id: '2', image: img2 },
    { id: '3', image: img3 }
  ]
  return (
    <section className="sec-galeria">
      <div className="container">
        <div className="logo_galeria">
          <img src={galeria_img} alt='' />
        </div>

        <div className="galeria">
          <Swiper
            navigation={true}
            modules={[Navigation, Grid]}
            slidesPerView={3}
            className="image"
            loop={true}
            spaceBetween={10}
            >

            <SwiperSlide>
              <div className="quadrados">
                <img src={img1} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quadrados">
                <img src={img2} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quadrados">
                <img src={img3} alt='' />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="quadrados">
                <img src={img1} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quadrados">
                <img src={img2} alt='' />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="quadrados">
                <img src={img3} alt='' />
              </div>
            </SwiperSlide>


          </Swiper>

        </div>

      </div>

    </section>

  )
}
