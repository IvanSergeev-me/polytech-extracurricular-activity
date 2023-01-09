import React, { FC } from 'react';
import Header from './Components/Header/Header';
import AppRouter from './Components/Common/Router/Router';
import { useTypedSelector } from './Hooks/useTypedSelector';
import { privateRoutes, publicRoutes } from './Routes/routes';
import { selectIsAuth } from './Selectors';

const App: FC = () => {

  const isAuth = useTypedSelector(selectIsAuth);
  const routes = isAuth?privateRoutes:publicRoutes;

  return (
    <main className="app">
      {isAuth && <Header />}
      <AppRouter routes={routes}/>
    </main>
  );
}

export default App;
