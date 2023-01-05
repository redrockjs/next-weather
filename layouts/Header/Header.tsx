import s from "./header.module.scss"
import {Icon} from "@iconify/react";

export function Header() {
    return <>
        <header className={s.headerWrapper}>
            <div className={s.header}>
                <div className={s.headerLogo}>
                    <span>
                        <Icon icon="ic:sharp-cloud-queue" color="white" width="42"/>
                    </span>
                    <p>
                        isCloudly?!
                    </p>
                </div>
                <div className={s.headerAccount}>
                    <ul>
                        <li>
                            <span>Favorites</span>
                            <Icon icon="mdi:cards-heart-outline" color="white" width="26" />
                        </li>
                        <li>
                            <span>SignIn</span>
                            <span>
                                <Icon icon="material-symbols:vpn-key-outline" color="white" width="28"/>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    </>
}