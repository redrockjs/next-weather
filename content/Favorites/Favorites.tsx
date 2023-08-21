import s from "./styles.module.scss"
import {useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {FavoriteCitiesType} from "../../store/rootSlice";

export function Favorites() {

  const favoriteCities = useSelector<RootStateType>(state => state.root.rootReducer.favoriteCities) as FavoriteCitiesType[]

  const FavoritesList = favoriteCities.map(item => {
    return (
      <>
        <p>
          {item.city}
        </p>
      </>
    )
  })

  console.log(FavoritesList)

  return <>
    <main className={s.favorites}>
      <div>
        {favoriteCities.length === 0 && <>Favorites</>}
      </div>
    </main>
  </>
}