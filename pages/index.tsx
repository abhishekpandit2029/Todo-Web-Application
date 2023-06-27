import styles from "./index.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className={styles.homecontainer}>
      <div className={styles.blockone}>
        <p className={styles.p1}>Elevate Your Efficiency with Acheivo</p>
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
            <Link href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=474164272201-1mg7jdd1nh07ut0nsrt6vcap3d41dfhl.apps.googleusercontent.com&scope=openid%20email%20profile&response_type=code&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fapi%2Fauth%2Fcallback%2Fgoogle&state=EPmTkC83XFdCINpaSA5GCjS8uTN4ReEvFvrQYsTAUUk&code_challenge=fqPDfZPYCBncPbCWIMWLgpHfjR777zvjdOSnrjH-4DY&code_challenge_method=S256&service=lso&o2v=2&flowName=GeneralOAuthFlow">
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
