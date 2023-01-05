import s from "./main.module.scss"
import {Button, Input} from "@mui/material";
import Image from "next/image";

export function Main() {

    return <>
        <main className={s.main}>
            <p>Ваши координаты определены, как 45.73 широты 40.33 долготы.</p>
            <div className={s.mainCard}>
                <div>
                <Image
                    src="/salzburg.6327137c.jpg"
                    fill
                    alt="Salzburg"/>
                </div>
                <Input
                    color="primary"
                    placeholder="Enter city name"
                    size="medium"
                    sx={{width:'90%'}}
                />
                <Button variant="contained" color="primary" size="small" sx={{margin:'10px'}}> Get </Button>
                <p>Город - Чегем Второй</p>
                <div className={s.mainCardInformation}>
                    <div>
                        <p>Температура воздуха 2.81°,</p>
                        <p>ощущается как 0.82 °</p>
                        <p>Мин-Макс,t° : 2.81°-2.81°</p>
                        <p>Относительная влажность воздуха 100 %</p>
                        <p>Давление 762.00 мм. рт. ст.</p>
                    </div>
                    <div>
                        <p>Облачность 100%</p>
                        <p>Видимость 2500 метров</p>
                        <p>Сила ветра 2 м/с</p>
                        <p>Направление 70°</p>
                    </div>
                </div>
            </div>
        </main>
    </>
}