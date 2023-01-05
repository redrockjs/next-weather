import s from "./header.module.scss"
import {Icon} from "@iconify/react";
import Link from "next/link";

export function Header() {
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
                  <Link href={'/signin'}>SignIn</Link>
                </span>
              <Link href={'/signin'}>
                <Icon icon="material-symbols:vpn-key-outline" color="white" width="28"/>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  </>
}