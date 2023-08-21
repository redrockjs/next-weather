import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux";
import {AppDispatch, RootStateType} from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootStateType> = useSelector
