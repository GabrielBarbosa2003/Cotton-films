import galeria_img from '../../assets/img/galeria.png'
import './galeria.css'
import '../../grid.css'

import img1 from '../../assets/img/carrosel1.png'
import img2 from '../../assets/img/carrosel2.png'
import img3 from '../../assets/img/carrosel3.png'

import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Navigation, Grid } from 'swiper/modules'
import Card from '../Card'


export default function Galeria() {
  const imagens = [

    { id: '1', image: img1 },
    { id: '2', image: img2 },
    { id: '3', image: img3 },
    { id: '4', image: img1 },
    { id: '5', image: img2 },
    { id: '6', image: img3 }
  ]


  return (
    <section className="sec-galeria">
      <div className='grid-global'>


        <div className="container-galeria">
          <div className="logo_galeria">
            <img src={galeria_img} alt='' />
          </div>

          <div className="galeria">


            <Swiper
              navigation={false}
              modules={[Navigation, Grid]}
              slidesPerView={3}
              className="image"
              loop={true}
              spaceBetween={10}
              breakpoints={{
                1440: {
                  slidesPerView: 4
                }
              }}

            >
              {

                imagens.map((imagem) => (
                  <SwiperSlide key={imagem.id}>
                    <Card img={imagem.image} />
                  </SwiperSlide>
                ))

              }


            </Swiper>

          </div>

        </div>
      </div>

    </section >

  )
}
