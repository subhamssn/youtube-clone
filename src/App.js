import React from 'react';
import Header from './Header/Header';

import Videos from './components/VideoClips';
import { useSelector } from 'react-redux/es/exports';
import Watch from './components/Play';
import './App.css';
import { Route, Switch } from 'react-router-dom';



function App() {

  const themeState = useSelector(state => state.lightTheme)
  const theme = themeState?'light':'dark'
  return (
    <div className="App" id={theme}>
      <Header />
      
      
      <Switch>
        <Route path="/" exact>
          <Videos />
        </Route>
        <Route path="/:id" exact>
          <Watch/>
        </Route>
        
      </Switch>
      
    </div>
  );
}

export default App;
