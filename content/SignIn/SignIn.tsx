import s from "./styles.module.scss"
import {useSession, signIn, signOut} from "next-auth/react"
import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch} from "../../hook";
import {useEffect} from "react";
import {setIsAuth, unsetIsAuth, setUid, unsetUid, fetchFavoriteCities} from "../../store/rootSlice";
import {RootStateType} from "../../store/store";

export function SignIn() {

  const {data: session, status} = useSession()

  const rootState = useSelector<RootStateType>(state => state.root.rootReducer)
  const uid = useSelector<RootStateType>(state => state.root.rootReducer.uid)

  const dispatch = useDispatch()
  const appDispatch = useAppDispatch()

  useEffect(() => {
    if (status === "authenticated") {
      dispatch(setIsAuth())
      dispatch(setUid(session?.uid))
      appDispatch(fetchFavoriteCities)
    }
    if (status === "unauthenticated") {
      dispatch(unsetIsAuth())
      dispatch(unsetUid())
    }
  }, [session, dispatch, status])


  return <>
    <main className={s.signIn}>
      {session ? (
        <>
          <p>
            Signed in as {session.user?.name}
          </p>
          <p>
            UID: {session?.uid}
          </p>
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
