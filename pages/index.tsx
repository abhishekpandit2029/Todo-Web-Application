import styles from "./index.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.homecontainer}>
      <div className={styles.blockone}>
        <p className={styles.p1}>
          Elevate Your <br /> Efficiency <br /> with <span style={{color:'teal'}}>Acheivo</span> 
        </p>
        <p className={styles.p2}>
          Empowering You to Master Your Tasks Efficiently.
        </p>
        <p className={styles.p3}>
          Acheivo: Master your tasks, achieve greatness. Seamlessly plan, track,
          and celebrate your achievements with our empowering task management
          app.
        </p>
        <hr className={styles.hr} />
      </div>

      <div className={styles.blocktwo}>
        <div>
          <p className={styles.p3}>Let's proceed with Achievo.</p>
          <Link href="/comments">
            <button className={styles.button}>Continue...</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
