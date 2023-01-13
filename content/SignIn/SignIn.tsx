import s from "./styles.module.scss"
import {useSession, signIn, signOut} from "next-auth/react"
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {setIsAuth, unsetIsAuth} from "../../store/rootSlice";
import {RootState} from "../../store/store";

export function SignIn() {

  const {data: session, status} = useSession()

  const rootState = useSelector<RootState>(state => state.root.rootReducer)
  const dispatch = useDispatch()

  useEffect(()=>{
    status === "authenticated" && dispatch(setIsAuth())
    status === "unauthenticated" && dispatch(unsetIsAuth())
    console.log(rootState)
  },[session,dispatch, status])




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
