import { IUser } from "../../../Models/User";
import { ActionsEnum, setUserAction , setAuthAction, setLoadingAction, setErrorAction} from "./types";
import { AppDispatch } from "../../redux-store";

export const AuthActionCreators = {
    setUser: (user: IUser): setUserAction =>({type:ActionsEnum.SET_USER, user}),
    setAuth: (isAuth: boolean): setAuthAction => ({type: ActionsEnum.SET_AUTH, isAuth}),
    setIsLoading: (isLoading: boolean): setLoadingAction => ({type: ActionsEnum.SET_LOADING, isLoading}),
    setError: (error_message: string): setErrorAction => ({type: ActionsEnum.SET_ERROR, error_message}),
    login: (username: string, password: string) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            dispatch(AuthActionCreators.setIsLoading(false));
           
        } catch (e) {
            dispatch(AuthActionCreators.setError('Произошла ошибка при логине'))
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setAuth(false))
    }
}