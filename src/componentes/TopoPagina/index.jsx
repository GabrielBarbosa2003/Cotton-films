import banner from '../../assets/img/img_1.png'
import Menu from '../Menu/index.jsx'
import styles from './topoPagina.module.css'


export default function TopoPagina() {

  return (
    <>
      <Menu/>
      
      <div className={styles.home}>
        <img src={banner} alt='imagem banner' />

        <div className={styles.texto}>
          <h1>Cotton Fílms</h1>
        </div>

      </div>
    </>


  )
}
