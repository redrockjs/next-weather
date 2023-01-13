import s from "./styles.module.scss"
import {useSelector} from "react-redux";
import {RootState} from "../../store/store";
import {FavoriteCitiesType} from "../../store/rootSlice";

export function Favorites() {

  const favoriteCities = useSelector<RootState>(state => state.root.rootReducer.favoriteCities) as FavoriteCitiesType[]

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