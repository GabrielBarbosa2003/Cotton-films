import React from 'react'
import ReactPlayer from 'react-player'

import cotonFilms from '../../assets/img/cotonFilms.png'
import frame from '../../assets/img/Frame1.png'
import video1 from '../../assets/videos/video1.mp4'
import video2 from '../../assets/videos/video2.mp4'
import video3 from '../../assets/videos/video3.mp4'
import video4 from '../../assets/videos/video4.mp4'

import Menu from '../Menu/index.jsx'
import './topoPagina.css'
import '../../grid.css'

import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import SplitType from 'split-type'
import { useEffect, useRef, useState } from 'react'
import { Progress } from "@nextui-org/react";
import { commonColors, semanticColors } from "@nextui-org/theme";











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
    },
    {
      video: video3,
      id: 3
    },
    {
      video: video4,
      id: 4
    }
  ]

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [duracao, setDuracao] = useState(0)
  const playerRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(true)
  const [duration, setDuration] = useState(0);




  function handleEnded() {
    setCurrentVideoIndex((prevIndex) =>
      (prevIndex + 1) % videos.length
    );
  }


  function handleOnProgress(progress) {
    setDuracao(progress.playedSeconds)



  }
  const handleReady = () => {
    const videoDuration = playerRef.current.getDuration();
    setDuration(videoDuration);
  };
  

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
        <ReactPlayer className="imagem_banner"
          url={videos[currentVideoIndex].video}
          alt=''
          ref={playerRef}
          playing
          width='100%'
          height='auto'
          controls={true}
          muted={true}
          onReady={handleReady}
          onProgress={handleOnProgress}
          onEnded={handleEnded}
        />

        <div className='container'>

          <div className="img_films">
            <img src={cotonFilms} alt='' />
          </div>

          <div className="video">
            <div className={currentVideoIndex === 0 ? 'video_border_white' : 'video_border'}>
              <h3>Video 1</h3>
              <h3>[2024]</h3>

            </div>
            <div className='flex flex-col gap-6 w-full max-w-full h-1'>
              {currentVideoIndex === 0 ?
                <Progress classNames={{
                  indicator: 'bg-white',
                  base: 'h-[0.2rem]'

                }}
                  aria-label="Loading..." color='default' value={duracao} radius='none' minValue={0} maxValue={duration} valueLabel={duracao} data-indeterminate />

                : <Progress classNames={{
                  indicator: 'bg-white',
                  base: 'h-[0.2rem]'

                }}
                  aria-label="Loading..." color='default' value={0} radius='none' minValue={0} maxValue={100} valueLabel={0} />}

            </div>

          </div>
          <div className="video">
            <div className={currentVideoIndex === 1 ? 'video_border_white' : 'video_border'}>
              <h3>Video 2</h3>
              <h3>[2023]</h3>
            </div>
            <div className='flex flex-col gap-6 w-full max-w-full h-1'>
              {currentVideoIndex === 1 ?
                <Progress classNames={{
                  indicator: 'bg-white',
                  base: 'h-[0.2rem]'

                }}
                  aria-label="Loading..." color='default' value={duracao} radius='none' minValue={0} maxValue={duration} valueLabel={duracao} id={videos.id} />
                : <Progress classNames={{
                  indicator: 'bg-white',
                  base: 'h-[0.2rem]'

                }}
                  aria-label="Loading..." color='default' value={0} radius='none' minValue={0} maxValue={100} valueLabel={0} />}
            </div>

          </div>
          <div className="video">
            <div className={currentVideoIndex === 2 ? 'video_border_white' : 'video_border'}>
              <h3>Video 3</h3>
              <h3>[2023]</h3>
            </div>
            <div className='flex flex-col gap-6 w-full max-w-full h-1'>
              {currentVideoIndex === 2 ?
                <Progress classNames={{
                  indicator: 'bg-white',
                  base: 'h-[0.2rem]'

                }}
                  aria-label="Loading..." color='default' value={duracao} radius='none' minValue={0} maxValue={duration} valueLabel={duracao} />

                : <Progress classNames={{
                  indicator: 'bg-white',
                  base: 'h-[0.2rem]'

                }}
                  aria-label="Loading..." color='default' value={0} radius='none' minValue={0} maxValue={100} valueLabel={0} />}

            </div>

          </div>
          <div className="video">
            <div className={currentVideoIndex === 3 ? 'video_border_white' : 'video_border'}>
              <h3>Video 4</h3>
              <h3>[2022]</h3>
            </div>
            <div className='flex flex-col gap-6 w-full max-w-full h-1'>
              {currentVideoIndex === 3 ?
                <Progress classNames={{
                  indicator: 'bg-white',
                  base: 'h-[0.2rem]'

                }}
                  aria-label="Loading..." color='default' value={duracao} radius='none' minValue={0} maxValue={duration} valueLabel={duracao} />

                : <Progress classNames={{
                  indicator: 'bg-white',
                  base: 'h-[0.2rem]'

                }}
                  aria-label="Loading..." color='default' value={0} radius='none' minValue={0} maxValue={100} valueLabel={0} />}

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
