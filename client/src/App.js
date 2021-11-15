import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import Main from './views/Main';
import './App.css';
import Detail from './components/Detail';

function App() {
  return (
    <BrowserRouter>

    <div className="App">
    <Switch>

      <Route path="/products/:id">
        <Detail/>
      </Route>
      <Route path="/products">
        <Main/>
      </Route>

    
    </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
