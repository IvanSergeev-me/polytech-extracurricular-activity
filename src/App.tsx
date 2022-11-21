import React, { FC } from 'react';
import Header from './Components/Header/Header';
import AppRouter from './Components/Router/Router';

const App: FC = () => {
  return (
    <main className="app">
      <Header />
      <AppRouter />
    </main>
  );
}

export default App;
