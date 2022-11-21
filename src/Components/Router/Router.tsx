import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { useTypedSelector } from '../../Hooks/useTypedSelector';
import { publicRoutes, privateRoutes} from '../../Routes/routes';
//import {useTypedSelector} from "../hooks/useTypedSelector";

const AppRouter = () => {
    //const {isAuth} = useTypedSelector(state => state.auth);
    const isAuth = useTypedSelector(state => state.authReducer.isAuth);
    let routes = isAuth?privateRoutes:publicRoutes;
    return(
        <Routes>
                {routes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        key={route.path}
                    />
                )}
                
        </Routes>
    )
};

export default AppRouter;