import galeria_img from '../../assets/img/galeria.png'
import styles from './galeria.module.css'
import img1 from '../../assets/img/carrosel1.png'
import img2 from '../../assets/img/carrosel2.png'
import img3 from '../../assets/img/carrosel3.png'

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
    <section className={styles.container}>
      <div className={styles.logo_galeria}>
        <img src={galeria_img} alt='' />
      </div>
      
      <div className={styles.galeria}>
        <Swiper
          navigation={true}
          modules={[Navigation, Grid]}
          slidesPerView={3}
          className={styles.image}>

          <SwiperSlide>
            <div className={styles.quadrados}>
              <img src={img1} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.quadrados}>
              <img src={img2} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.quadrados}>
              <img src={img3} alt='' />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className={styles.quadrados}>
              <img src={img3} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.quadrados}>
              <img src={img3} alt='' />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.quadrados}>
              <img src={img3} alt='' />
            </div>
          </SwiperSlide>


        </Swiper>


      </div>
    </section>

  )
}
