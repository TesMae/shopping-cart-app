import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cart from './components/Cart';
import Catalogue from './components/Catalogue';
import Navbar from './components/Navbar'

function App() {
  return (
    <BrowserRouter>
      <div className="App">        
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Catalogue} />
            <Route path="/cart" component={Cart} />
          </Switch>    
      </div>
    </BrowserRouter>
  );
}

export default App;
