import styles from './index.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.homecontainer}>
      <div className={styles.blockone}>
        <p className={styles.p1}>Elevate Your Efficiency with Acheivo</p>
        <p className={styles.p2}>Empowering You to Master Your Tasks Efficiently.</p>
        <p className={styles.p3}>Acheivo: Master your tasks, achieve greatness. Seamlessly plan, track, and celebrate your achievements with our empowering task management app.</p>
        <hr className={styles.hr}/>
      </div>
      <div className={styles.blocktwo}>
        <div>
          <p className={styles.p3}>SignIn to continue</p>
          <Link href="#"> 
          <button className={styles.button}>Sign In</button>
          </Link>
          
        </div>
        <div>
          <p className={styles.p3}>Welcome back! Access granted, enjoy.</p>
          <Link href="#"> 
          <button className={styles.button}>Proceed</button>
          </Link>
        </div>
      </div>
    </div>
    
  )
}
