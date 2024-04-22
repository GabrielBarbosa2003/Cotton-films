import './services.css'
import '../../grid.css'
import image from '../../assets/img/service.png'
import img1 from '../../assets/img/img1_services.png'
import logo_service from '../../assets/img/logo_service.svg'
import seta from '../../assets/img/seta.svg'

export default function Services() {
  return (
    <>
      <div className='image_service'>
        <img src={image} alt='' />
      </div>

      <div className='container'>
          <div className='service_logo'>
            <img src={logo_service} alt='' />
          </div>
          <div className='images'>
            <img src={img1} alt='' />
          </div>
          <div className='images_services'>
            <div className='lista_images'>
              <p>// NAME OF SERVICE</p>
              <p>01</p>
              <img src={seta} alt='' />
            </div>
            <div className='lista_images'>
              <p>// NAME OF SERVICE</p>
              <p>02</p>
              <img src={seta} alt='' />
            </div>
            <div className='lista_images'>
              <p>// NAME OF SERVICE</p>
              <p>03</p>
              <img src={seta} alt='' />
            </div>
            <div className='lista_images'>
              <p>// NAME OF SERVICE</p>
              <p>04</p>
              <img src={seta} alt='' />
            </div>

          </div>

       

      </div>
    </>

  )
}
