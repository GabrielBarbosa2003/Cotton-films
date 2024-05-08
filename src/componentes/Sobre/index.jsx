import './sobre.css'
import '../../grid.css'
import about from '../../assets/img/about.png'
import about_logo from '../../assets/img/about_logo.png'
import insta from '../../assets/img/insta.png'
import save from '../../assets/img/save.png'
import dri from '../../assets/img/dri.png'

import { motion } from "framer-motion"


export default function Sobre() {
  return (
    <div className='container'>

      <div className='section'>
        <div className='about'>
          <img src={about_logo} alt='' />
        </div>

        <div className='sobre'>

          <div className='sobre_img'>
            <img src={about} alt='' />
          </div>

          <div className='sobre_texto'>
            <div className='texto_sobre'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a luctus
                metus. Morbi fermentum nulla vel nunc vulputate fringilla. Etiam
                suscipit porttitor neque, in fringilla libero. In fringilla orci ante, at
                condimentum sapien pretium ut. Fusce dictum mauris nec nunc
                pellentesque, a aliquet diam fermentum. Ut vel lacus ac eros facilisis
                pretium ac non arcu. Vivamus eleifend tellus quis lacus volutpat
                aliquet. Aliquam porta mauris a ante consequat convallis. Sed vitae
                turpis dignissim, tincidunt odio quis, tincidunt libero. </p>
              <br></br>

              <p>Cras porttitor ipsum non ligula porttitor dictum. Nam tristique enim
                turpis. Morbi enim velit, vehicula non pulvinar in, lacinia eu libero.
                Quisque eros est, cursus ut ex ac, blandit viverra diam. Donec
                posuere tincidunt orci, ac viverra mauris iaculis sed.</p>
            </div>

            <div className='redes'>
              <motion.img
                src={insta} 
                alt=''
                whileHover={{scale:1.1}}
                transition={{duration:0.2}}
              />

              <motion.img 
                src={save} 
                alt='' 
                whileHover={{scale:1.1}}
                transition={{duration:0.2}}
              />
              <motion.img 
                src={dri} 
                alt='' 
                whileHover={{scale:1.1}}
                transition={{duration:0.2}}
              />
            </div>


          </div>


        </div>

      </div>

    </div>
  )
}
