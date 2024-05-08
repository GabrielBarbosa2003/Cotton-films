import banner from '../../assets/img/img_1.png'
import cotonFilms from '../../assets/img/cotonFilms.png'
import videos from '../../assets/img/videos.png'
import frame from '../../assets/img/Frame1.png'
import Menu from '../Menu/index.jsx'
import './topoPagina.css'
import '../../grid.css'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'





gsap.registerPlugin(ScrollTrigger)


export default function TopoPagina() {
  const lenis = new Lenis()

  lenis.on('scroll', (e) => {
    console.log(e)
  })

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  requestAnimationFrame(raf)
  //replaces yourElement's text with "This is the new text" 
  // gsap.to(yourElement, {
  //   duration: 2,
  //   text: "This is the new text",
  //   ease: "none",
  // });

  // pra adicionar o menu, só chamar o componente <Menu/>



  return (
    <>
      <header className="home">
        <Menu />
        <img className="imagem_banner" src={banner} alt='imagem banner' />

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
            <p><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eum </span> rerum dolore. Consequatur, quisquam? Repudiandae libero consequatur
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
