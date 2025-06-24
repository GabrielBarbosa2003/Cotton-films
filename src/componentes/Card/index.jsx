import ver_case from '../../assets/img/ver_case.svg'

import './card.css'

import { useState } from "react";
import { motion } from "framer-motion"


export default function Card({ img }) {
    const [hover, setHover] = useState(false);

    return (

        <div className="quadrados"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
                <div className='project-galery'>
                    <div className='galery-left'>
                        <p>NAME OF PROJECT</p>
                        <p><span>(2023.02)</span></p>
                    </div>
                    <div className='galery-right'>
                    <p>DIRECT BY</p>
                    <p>ARTHUR MEDEIROS</p>
                    </div>
                </div>

            <motion.img
                src={img} alt=''
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.5 }} />

            <div className={hover ? 'case element' : ' case element hidden'}>
                <img src={ver_case} alt='' />
            </div>
        </div>
    )
}
