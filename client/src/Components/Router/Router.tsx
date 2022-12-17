import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { IRoute} from '../../Routes/routes';

interface AppRouterProps{
    routes:IRoute[];
}

const AppRouter = ({routes, ...props}:AppRouterProps) => {
    return(
        <Routes>
                {routes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element />}
                        key={route.path}
                    />
                )}
                
        </Routes>
    )
};

export default AppRouter;