import galeria_img from '../../assets/img/galeria.png'
import img1 from '../../assets/img/carrosel1.png'
import img2 from '../../assets/img/carrosel2.png'
import img3 from '../../assets/img/carrosel3.png'
import ver_case from '../../assets/img/ver_case.svg'
import './galeria.css'
import '../../grid.css'

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation, Grid } from 'swiper/modules'

import { delay, motion } from "framer-motion"

import { useState } from 'react'



export default function Galeria() {

  const [hover, setHover] = useState(false);
  console.log(hover)


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
              <div className="quadrados"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <motion.img
                  src={img1} alt=''
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={hover ? 'case element' : ' case element hidden'}>
                  <img src={ver_case} alt='' />
                </div>
              </div>
            </SwiperSlide>


            <SwiperSlide>
              <div className="quadrados"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <motion.img
                  src={img2} alt=''
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={hover ? 'case element' : ' case element hidden'}>
                  <img src={ver_case} alt='' />
                </div>
              </div>

            </SwiperSlide>

            <SwiperSlide>
              <div className="quadrados"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <motion.img
                  src={img3} alt=''
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={hover ? 'case element' : ' case element hidden'}>
                  <img src={ver_case} alt='' />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="quadrados"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <motion.img
                  src={img1} alt=''
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={hover ? 'case element' : ' case element hidden'}>
                  <img src={ver_case} alt='' />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="quadrados"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <motion.img
                  src={img2} alt=''
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={hover ? 'case element' : ' case element hidden'}>
                  <img src={ver_case} alt='' />
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="quadrados"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <motion.img
                  src={img3} alt=''
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                />
                <div className={hover ? 'case element' : ' case element hidden'}>
                  <img src={ver_case} alt='' />
                </div>
              </div>
            </SwiperSlide>


          </Swiper>

        </div>

      </div>

    </section>

  )
}
