import './timescard.css'
import ver_case from '../../assets/img/ver_case.svg'
import { useState } from 'react'
import { motion } from "framer-motion"
import time1 from '../../assets/img/time1.png'





export default function TimesCard({id,img}) {
    const [hover, setHover] = useState(false)
    return (
        
        <>
            <div className='card'>
                <div className='card_top_times'
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}

                >
                    <motion.img
                        src={img}
                        alt=''
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                    />
                    <div className={hover ? 'bio element' : 'bio element hidden'}>
                        <img src={ver_case} alt='' />
                    </div>
                </div>


                <div className='card_bottom'>
                    <div className='projeto_nome'>
                        <p>NAME OF PROJECT</p>
                        <p>(2023 '.02)</p>
                    </div>

                    <div className='direct'>
                        <p><span>DIRECT BY</span><br />ARTHUR MEDEIROS</p>

                    </div>

                </div>
            </div>
        </>
    )
}
