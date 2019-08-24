import React from 'react';
import './css/Main.css';
import Main from './pages'
import { Switch, Route } from 'react-router-dom'
function App() {
  return (
    <div>
        <Switch>
          <Route path="/" component={Main} />
        </Switch>
    </div>
  );
}

export default App;
