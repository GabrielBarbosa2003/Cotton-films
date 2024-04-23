import './times.css'
import '../../grid.css'
import time1 from '../../assets/img/time1.png'
import time2 from '../../assets/img/time2.png'
import time3 from '../../assets/img/time3.png'
import time4 from '../../assets/img/time4.png'
import our from '../../assets/img/our.png'
import time from '../../assets/img/time.png'



export default function Times() {
  return (
    <div className='container'>
        <div className='cads_flex'>
            <div className='card'>
                <img src={time1} alt='' />

                <div className='card_bottom'>
                    <div className='projeto_nome'>
                        <p>NAME OF PROJECT</p>
                        <p>(2023 '.02)</p>
                    </div>

                    <div className='direct'>
                        <p><span>DIRECT BY</span></p>
                        <p>ARTHUR MEDEIROS</p>
                    </div>

                </div>
            </div>
            <div className='card'>
                <img src={time2} alt='' />

                <div className='card_bottom'>
                    <div className='projeto_nome'>
                        <p>NAME OF PROJECT</p>
                        <p>(2023 '.02)</p>
                    </div>

                    <div className='direct'>
                        <p><span>DIRECT BY</span></p>
                        <p>ARTHUR MEDEIROS</p>
                    </div>

                </div>
            </div>
            <div className='card'>
                <img src={time3} alt='' />

                <div className='card_bottom'>
                    <div className='projeto_nome'>
                        <p>NAME OF PROJECT</p>
                        <p>(2023 '.02)</p>
                    </div>

                    <div className='direct'>
                        <p><span>DIRECT BY</span></p>
                        <p>ARTHUR MEDEIROS</p>
                    </div>

                </div>
            </div>
            <div className='card'>
                <img src={time4} alt='' />

                <div className='card_bottom'>
                    <div className='projeto_nome'>
                        <p>NAME OF PROJECT</p>
                        <p>(2023 '.02)</p>
                    </div>

                    <div className='direct'>
                        <p><span>DIRECT BY</span></p>
                        <p>ARTHUR MEDEIROS</p>
                    </div>

                </div>
            </div>
        </div>
        <div className='ourtime'>
            <img src={our} alt=''/>
            <img src={time} alt=''/>

        </div>
        
        
      
    </div>
  )
}
