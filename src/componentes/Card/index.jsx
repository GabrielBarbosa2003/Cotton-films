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
            <motion.img
                src={img} alt=''
                whileHover={{ scale: 1.2}}
                transition={{ duration: 0.5 }}
            />
            <div className={hover ? 'case element' : ' case element hidden'}>
                <img src={ver_case} alt='' />
            </div>
        </div>
    )
}
