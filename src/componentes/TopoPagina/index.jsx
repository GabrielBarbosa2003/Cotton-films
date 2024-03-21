import banner from '../../assets/img/img_1.png'
import frame from '../../assets/img/Frame1.png'
import Menu from '../Menu/index.jsx'
import styles from './topoPagina.module.css'
import cotonFilms from '../../assets/img/cotonFilms.png'
import videos from '../../assets/img/videos.png'

import { gsap } from "gsap";

import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";


gsap.registerPlugin(ScrollToPlugin, TextPlugin);


export default function TopoPagina() {
  //replaces yourElement's text with "This is the new text" 
  // gsap.to(yourElement, {
  //   duration: 2,
  //   text: "This is the new text",
  //   ease: "none",
  // });



  return (
    <>

      <header className={styles.home}>
        <Menu />
        <img className={styles.imagem_banner} src={banner} alt='imagem banner' />

        <div className={styles.img_films}>
          <img src={cotonFilms} alt='' />
        </div>

        <div className={styles.video}>
          <img src={videos} alt='imagem banner' />
        </div>

      </header>

      <div className={styles.texto_lorem}>

        <div className={styles.texto_grid}>
          <h1><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint eum </span> rerum dolore. Consequatur, quisquam? Repudiandae libero consequatur
            praesentium reprehenderit enim sed facere velit, id, eligendi numquam delectus maiores porro cumque?</h1>
        </div>


        <div className={styles.imagem_grid}>
          <img src={frame} alt='' />
        </div>

      </div>


    </>



  )
}
