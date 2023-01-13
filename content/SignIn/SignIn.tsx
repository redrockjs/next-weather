import s from "./styles.module.scss"
import {useSession, signIn, signOut} from "next-auth/react"

export function SignIn() {

  const {data: session, status} = useSession()
  const loading = status === "loading"

  return <>
    <main className={s.signIn}>
      {session ? (
        <>
          Signed in as {session.user?.name} <br/>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          Not signed in <br/>
          <button onClick={() => signIn()}>Sign in</button>
        </>
      )}


    </main>
  </>
}
