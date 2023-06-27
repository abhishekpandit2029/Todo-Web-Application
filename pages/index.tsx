import styles from "./index.module.css";
import Link from "next/link";
import { useSession, signIn } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.homecontainer}>
      <div className={styles.blockone}>
        <p className={styles.p1}>Elevate Your <br /> Efficiency <br /> with Acheivo</p>
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
        
        {session && (
          <div>
            <p className={styles.p3}>Welcome back! Access granted, enjoy.</p>
            <Link href="/blog">
              <button className={styles.button}>Proceed</button>
            </Link>
          </div>
        )}

        {!session && (
          <div>
            <p className={styles.p3}>Sign In to continue</p>
            <Link href="/api/auth/signin">
              <button
                className={styles.button}
                onClick={(e) => {
                  e.preventDefault();
                  signIn();
                }}
              >
                Sign In
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
