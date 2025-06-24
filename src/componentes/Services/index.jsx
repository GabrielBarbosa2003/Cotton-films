import './services.css'
import '../../grid.css'
import imageBanner from '../../assets/img/service.png'
import img1 from '../../assets/img/img1_services.png'
import img2 from '../../assets/img/carrosel1.png'
import img3 from '../../assets/img/carrosel2.png'
import img4 from '../../assets/img/carrosel3.png'
import logo_service from '../../assets/img/logo_service.svg'
import seta from '../../assets/img/seta.svg'
import { useEffect, useRef, useState } from 'react'

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react'

export default function Services() {
  gsap.registerPlugin(useGSAP, ScrollTrigger)
  const [hover, setHover] = useState(null)
  const imageHero = useRef(null)
  const containerHero = useRef(null)
  const imagesContainerRef = useRef(null)
  const currentImageRef = useRef([])
  const images = [img1, img2, img3, img4]
  const mediasUrl = []


  const lines = [{
    name: "// NAME OF SERVICE",
    number: "01"
  }, {
    name: "// NAME OF SERVICE",
    number: "02"
  }, {
    name: "// NAME OF SERVICE",
    number: "03"
  }, {
    name: "// NAME OF SERVICE",
    number: "04"
  }]

  function parallaxImage() {

    const tlHero = gsap.timeline({
      scrollTrigger: {
        trigger: '.image_service',
        scrub: true
      }
    })


    tlHero.fromTo(imageHero.current, {
      yPercent: -20,
      ease: "none"
    }, {
      yPercent: 20,
      ease: "none"
    })

  }
  useEffect(() => {
    if (containerHero.current) {
      parallaxImage()
    }
  })

  let div = document.createElement("div")
  let image = document.createElement("img")
  console.log(currentImageRef.current)

  gsap.set(currentImageRef.current, {
    opacity: 0
  })


  function createMedia(index) {



    image.src = currentImageRef.current[index].getAttribute('src')
    div.appendChild(image)

    imagesContainerRef.current.appendChild(div)


    gsap.set([div, image], {
      scale: 0.9,
    });
    gsap.to([div, image], { opacity: 1, scale: 1 });

    if (imagesContainerRef.current.children.length > 5) {
      imagesContainerRef.current.children[0].remove()
    }

  }

  function mouseLeave() {
      gsap.to([div, image], {
      opacity: 0,
      scale: 0.2,
    });

    setTimeout(() => {
      Array.from(imagesContainerRef.current.children).forEach(el => {
      el.remove()
    })
    },20000)





  }


  return (
    <>
      <div className='image_service' ref={containerHero}>
        <img src={imageBanner} alt='image hero' ref={imageHero} />
      </div>

      <section className='container-services'>
        <div className='grid-global'>


          <div className='service_logo'>
            <img src={logo_service} alt='' />
          </div>





          <div className='images_services'>

            <div className='images' aria-hidden="true">
              {images.map((image, index) => (
                <img key={index} src={image} alt='' ref={(el) => (currentImageRef.current[index] = el)} />
              ))}
            </div>

            <div className='images-container' ref={imagesContainerRef}></div>

            {lines.map((line, index) => (
              <div className='lista_images'
                key={index}
                onMouseEnter={() => createMedia(index)}
                onMouseLeave={() => mouseLeave()}
              >
                <p>{line.name}</p>
                <p>{line.number}</p>
                <img src={seta} alt='' />
              </div>

            ))}




            {/* <div className='lista_images'
              onMouseEnter={() => {
                setHover(2)
              }}


            >
              <p>// NAME OF SERVICE</p>
              <p>02</p>
              <img src={seta} alt='' />
            </div> */}

            {/* <div className='lista_images'
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
            </div> */}

          </div>

        </div>

      </section>
    </>

  )
}
