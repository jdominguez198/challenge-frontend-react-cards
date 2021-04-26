import { Switch, Route } from 'react-router-dom';
import { useEffect } from 'react';
import loadExternalScript from "../../utils/loadExternalScript";

import Header from '../layout/Header/Header';
import Home from '../../pages/Home/Home';
import Cards from '../../pages/Cards/Cards';
import Card from '../../pages/Card/Card';

import './App.scss';

function captureAndSendAnalytics() {
  const elem = document.getElementById('root');
  elem && elem.addEventListener('button:click', (event) => {
    // @ts-ignore
    window.hasOwnProperty('$analytics1') && window.$analytics1.sendEvent('buttonClick', event.detail);
    // @ts-ignore
    window.hasOwnProperty('$analytics2') && window.$analytics2.sendEvent('buttonClick', event.detail);
  });
}

function App() {
  useEffect(() => {
    loadExternalScript('/external-analytics/analytics1.js');
    loadExternalScript('/external-analytics/analytics2.js');
    captureAndSendAnalytics();
  }, []);

  return (
    <div className="app">
      <Header/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/cards">
          <Cards/>
        </Route>
        <Route path="/cards/:id">
          <Card/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
