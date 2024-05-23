import banner from '../../assets/img/img_1.png'
import cotonFilms from '../../assets/img/cotonFilms.png'
import videos from '../../assets/img/videos.png'
import frame from '../../assets/img/Frame1.png'
import video1 from '../../assets/videos/video1.mp4'
import Menu from '../Menu/index.jsx'
import './topoPagina.css'
import '../../grid.css'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { useEffect } from 'react'






export default function TopoPagina() {


  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log()
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)





  useEffect(() => {
    let mm = gsap.matchMedia();
    gsap.registerPlugin(ScrollTrigger)
    const splitTypes = document.querySelectorAll('.texto_grid')

    splitTypes.forEach((char, i) => {
      const text = new SplitType(char, { types: 'chars' })

      mm.add({
        isMobile: "(max-width:480px)",
        isDesktop: "(min-width:481px)"
      }, (context) => {
        let {isMobile, isDesktop} = context.conditions;


        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: isMobile ? "top 250px" :'top 80%',
            end: isMobile ?  "bottom 100px" : 'top 20%',
            scrub: true,
            //markers: true
          },
          opacity: 0.2,
          stagger: 0.1
        })
      })

    })

  }, [])







  return (
    <>
      <header className="home">
        <Menu />
        <video className="imagem_banner" src={video1} autoPlay loop muted alt='' />

        <div className='container'>
          <div className="img_films">
            <img src={cotonFilms} alt='' />
          </div>

          <div className="video">
            <img src={videos} alt='imagem banner' />
          </div>

        </div>

      </header>

      <div className="texto_lorem">
        <div className="container">

          <div className="texto_grid">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eum rerum dolore. Consequatur, quisquam? Repudiandae libero consequatur
              praesentium reprehenderit enim sed facere velit, id, eligendi numquam delectus maiores porro cumque?</p>
          </div>

          <div className="imagem_grid">
            <img src={frame} alt='' />
          </div>

        </div>

      </div>




    </>



  )
}
