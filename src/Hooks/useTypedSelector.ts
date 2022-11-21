import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../Redux/redux-store";

export const useTypedSelector:TypedUseSelectorHook<RootState> = useSelector;