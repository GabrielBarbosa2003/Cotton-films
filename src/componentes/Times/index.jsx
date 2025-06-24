import './times.css'
import '../../grid.css'
import time1 from '../../assets/img/time1.png'
import time2 from '../../assets/img/time2.png'
import time3 from '../../assets/img/time3.png'
import time4 from '../../assets/img/time4.png'
import our from '../../assets/img/our.png'
import time from '../../assets/img/time.png'
import TimesCard from '../TimesCard'

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'




export default function Times() {
    gsap.registerPlugin(ScrollTrigger, useGSAP)

    const containerPinRef = useRef(null)
    const pinContainerRef = useRef(null)

    function createPinning() {
        ScrollTrigger.create({
            trigger: containerPinRef.current,
            start: 'top top',
            end: 'bottom top',
            pin: pinContainerRef.current,
            pinSpacing: false,
            scrub: true,
            markers: false

        })



    }
    useGSAP(() => {
        if(containerPinRef.current){
            createPinning()
        }
        
    })



    const images = [
        { id: '1', img: time1 },
        { id: '2', img: time2 },
        { id: '3', img: time3 },
        { id: '4', img: time4 }
    ]

    return (
        <section className='times-container' ref={containerPinRef}>
            <div className='grid-global'>
                <div className='pin-container' ref={pinContainerRef}>

                    <div className='cads_flex'>
                        {
                            images.map((image) => (
                                <div key={image.id}>
                                    <TimesCard id={image.id} img={image.img} />
                                </div>
                            ))

                        }
                    </div>
                    <div className='ourtime'>
                        <img src={our} alt='' />
                        <img src={time} alt='' />

                    </div>
                </div>
            </div>


        </section>





    )
}
