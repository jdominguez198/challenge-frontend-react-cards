import { Switch, Route } from 'react-router-dom';
import Header from '../layout/Header/Header';
import Home from '../../pages/Home/Home';
import Cards from '../../pages/Cards/Cards';
import Card from '../../pages/Card/Card';

import './App.scss';

function App() {
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
