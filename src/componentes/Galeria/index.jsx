import galeria_img from '../../assets/img/galeria.png'
import styles from './galeria.module.css'
export default function Galeria() {
  return (
    <div className={styles.logo_galeria}>
      <img src={galeria_img} alt='' />
    </div>
  )
}
