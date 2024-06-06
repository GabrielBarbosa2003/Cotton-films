import './services.css'
import '../../grid.css'
import image from '../../assets/img/service.png'
import img1 from '../../assets/img/img1_services.png'
import img2 from '../../assets/img/carrosel1.png'
import img3 from '../../assets/img/carrosel2.png'
import img4 from '../../assets/img/carrosel3.png'
import logo_service from '../../assets/img/logo_service.svg'
import seta from '../../assets/img/seta.svg'
import { useState } from 'react'

export default function Services() {
  const [hover, setHover] = useState()

    function mudaImagem() {

      if (hover == 1) {
        return img1
      }
      if (hover == 2) {
        return img2
      }
      if (hover == 3) {
        return img3
      }
  
      if (hover == 4) {
        return img4
      }
  
  
    }


  return (
    <>
      <div className='image_service'>
        <img src={image} alt='' />
      </div>

      <div className='container'>
        <div className='service_logo'>
          <img src={logo_service} alt='' />
        </div>





        <div className='images_services'>

          <div className='images'>
            <img src={mudaImagem(hover)} alt='' />
          </div>

          <div className='lista_images'
            onMouseEnter={() => {
              setHover(1)
            }}
          >
            <p>// NAME OF SERVICE</p>
            <p>01</p>
            <img src={seta} alt='' />
          </div>


          <div className='lista_images'
            onMouseEnter={() => {
              setHover(2)
            }}
           

          >
            <p>// NAME OF SERVICE</p>
            <p>02</p>
            <img src={seta} alt='' />
          </div>
          <div className='lista_images'
            onMouseEnter={() => setHover(3)}
          >
            <p>// NAME OF SERVICE</p>
            <p>03</p>
            <img src={seta} alt='' />
          </div>
          <div className='lista_images'
            onMouseEnter={() => setHover(4)}
          >
            <p>// NAME OF SERVICE</p>
            <p>04</p>
            <img src={seta} alt='' />
          </div>

        </div>



      </div>
    </>

  )
}
