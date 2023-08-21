import s from "./header.module.scss"
import {Icon} from "@iconify/react";
import Link from "next/link";
import {useSession} from "next-auth/react";

export function Header() {
  const {data: session, status} = useSession()

  return <>
    <header className={s.headerWrapper}>
      <div className={s.header}>
        <div className={s.headerLogo}>
          <span>
            <Link href={'/'}><Icon icon="ic:sharp-cloud-queue" color="white" width="42"/></Link>
          </span>
          <p>
            <Link href={'/'}>isCloudly?!</Link>
          </p>
        </div>
        <div className={s.headerAccount}>

          {status === "unauthenticated" &&
              <ul>
                  <li>
                  <span>
                  <Link href={'/signin'}>SignIn</Link>
                  </span>
                      <Link href={'/signin'}>
                          <Icon icon="material-symbols:vpn-key-outline" color="white" width="28"/>
                      </Link>
                  </li>
              </ul>
          }
          {status === "authenticated" &&
              <ul>
                  <li>
                      <span>
                        <Link href={'/favorites'}>Favorites</Link>
                      </span>
                      <Link href={'/favorites'}>
                          <Icon icon="mdi:cards-heart-outline" color="white" width="26"/>
                      </Link>
                  </li>

                  <li>
                    <span>
                        <Link href={'/signin'}>Profile</Link>
                    </span>
                      <Link href={'/signin'}>
                          <img src={session?.user?.image as string} alt=""
                               style={{width: "32px", borderRadius: "50%"}}/>
                      </Link>
                  </li>
              </ul>
          }

        </div>
      </div>
    </header>
  </>
}