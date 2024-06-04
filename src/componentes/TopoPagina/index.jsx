import React from 'react'
import ReactPlayer from 'react-player'

import cotonFilms from '../../assets/img/cotonFilms.png'
import frame from '../../assets/img/Frame1.png'
import video1 from '../../../public/videos/video1.mp4'
import video2 from '../../../public/videos/video2.mp4'
import video3 from '../../assets/videos/video3.mp4'
import Menu from '../Menu/index.jsx'
import './topoPagina.css'
import '../../grid.css'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { useEffect, useRef, useState } from 'react'
import { Progress } from "@nextui-org/react";











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
        let { isMobile, isDesktop } = context.conditions;


        gsap.from(text.chars, {
          scrollTrigger: {
            trigger: char,
            start: isMobile ? "top 250px" : 'top 80%',
            end: isMobile ? "bottom 100px" : 'top 20%',
            scrub: true,
            //markers: true
          },
          opacity: 0.2,
          stagger: 0.1
        })
      })

    })

  }, [])


  const videos = [
    {
      video: video1,
      id: 1
    },
    {
      video: video2,
      id: 2
    }
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [duracao, setDuracao] = useState(0)

  const [isPlaying, setIsPlaying] = useState(true)




  function handleEnded() {
    setCurrentVideoIndex((prevIndex) =>
      (prevIndex + 1) % videos.length
    );
  }


  function handleOnProgress(progress) {
    setDuracao(progress.playedSeconds)
    console.log(duracao)


  }
  function handleError(e) {
    console.error('Error playing video:', e);
  }

  // function handlePlay () {
  //   console.log('onPlay')
  //   setIsPlaying(true)
  // }
  //   function handleSeekChange (e){
  //   setDuracao(parseFloat(e.target.value))
  // }









  return (
    <>
      <header className="home">
        <Menu />
        <ReactPlayer className="imagem_banner"
          url={videos[currentVideoIndex].video}
          alt=''
          playing
          width='1920px'
          height='1080px'
          controls={true}
          muted={true}
          onProgress={handleOnProgress}
          onEnded={handleEnded}
        />

        <div className='container'>
          <div className="img_films">
            <img src={cotonFilms} alt='' />
          </div>

          <div className="video">
            <div className='video_border'>
              <h3>Video 1</h3>
              <h3>[2024]</h3>
            </div>
            <div className='video_time'>
              <Progress aria-label="Loading..." value={10} />
            </div>





          </div>
          <div className="video">
            <div className='video_border'>
              <h3>Video 2</h3>
              <h3>[2023]</h3>
            </div>
          </div>
          <div className="video">
            <div className='video_border'>
              <h3>Video 3</h3>
              <h3>[2022]</h3>
            </div>
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
