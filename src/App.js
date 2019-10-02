import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import Food from './components/Food';
import AddressPage from './components/AddressPage';
import OrdersPage from './components/Orders/OrdersPage';
import SettingsPage from './components/Settings/SettingsPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact render={(props) => <Home />} />
        <Route path='/cart/' render={(props) => <Cart />} />
        <Route path='/food/:id' render={(props) => <Food /> } />
        <Route path='/address/' render={(props) => <AddressPage />} />
        <Route path='/orders/' render={(props) => <OrdersPage />} />
        <Route path='/settings/' render={(props) => <SettingsPage />} />
      </Router>
    </div>
  );
}

export default App;
