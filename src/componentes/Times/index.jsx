import './times.css'
import '../../grid.css'
import time1 from '../../assets/img/time1.png'
import time2 from '../../assets/img/time2.png'
import time3 from '../../assets/img/time3.png'
import time4 from '../../assets/img/time4.png'
import our from '../../assets/img/our.png'
import time from '../../assets/img/time.png'
import TimesCard from '../TimesCard'







export default function Times() {


    const images=[
        {id:'1',img:time1},
        {id:'2',img:time2},
        {id:'3',img:time3},
        {id:'4',img:time4}
    ]

    return (
        <div className='container'>
            <div className='cads_flex'>
                {
                    images.map((image)=> (
                        <div>

                        <TimesCard id={image.id} img={image.img}/>
                        </div>
                    ))

                }
            </div>
            <div className='ourtime'>
                <img src={our} alt='' />
                <img src={time} alt='' />

            </div>



        </div>
    )
}
