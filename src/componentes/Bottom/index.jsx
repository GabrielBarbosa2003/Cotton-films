import './bottom.css'
import letstalk from '../../assets/img/letstalk.svg'
import logo_arthur from '../../assets/img/logo_arthur.svg'
import cttn from '../../assets/img/cttn.svg'
import contact from '../../assets/img/contact.svg'
import instagram from '../../assets/img/insta2.png'
import save from '../../assets/img/save2.png'
import dri from '../../assets/img/dri2.png'

import { motion } from "framer-motion"

import { gsap } from "gsap";
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Times from '../Times'
import { useRef } from 'react'






export default function Bottom() {


  return (
    <>
      <section className='image_bottom'>
        <div className='grid-global'>


          <div className='container-bottom'>
            <div className='talk'>
              <img src={letstalk} alt='' />
            </div>

          </div>
          <div className='bottom_grid'>
            <div className='grid_esquerda'>
              <h1>HELLO@COTTONFILMS.COM</h1>
              <img src={logo_arthur} alt='' />
            </div>

            <div className='grid_direita'>

              <div className='grid_contatos'>
                <div className='cttn'>
                  <img src={cttn} alt='' />
                </div>

                <div className='contatos_flex'>
                  <img src={contact} alt='' />
                  <ul className='lista_flex'>

                    <li>
                      <motion.img
                        src={instagram}
                        alt=''
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </li>
                    <li>
                      <motion.img
                        src={save}
                        alt=''
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </li>
                    <li>
                      <motion.img
                        src={dri}
                        alt=''
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.2 }}
                      />
                    </li>
                  </ul>

                </div>

              </div>



            </div>

          </div>
        </div>
      </section>
    </>


  )
}
