import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Cart from './components/Cart';
import Payment from './components/Payment';
import TabsPage from './components/Tabs';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  const handleLogout = () => {
    setUser(null);
    alert('Logged out successfully.');
  };

  return (
    <Router>
      <div>
        <nav>
          <h1>E-Learning</h1>
          <ul>
            <li>
              <Link to="/" id="home-tab">Home</Link>
            </li>
            {!user ? (
              <li>
                <Link to="/login" id="link-login">Login</Link>
              </li>
            ) : (
              <>
                <li id="user-welcome">Welcome, {user.username}</li>
                <li>
                  <button id="button-logout" onClick={handleLogout}>Logout</button>
                </li>
              </>
            )}
            <li>
              <Link to="/cart" id="cart-tab">Cart</Link>
            </li>
            <li>
              <Link to="/payment" id="pay-tab">Payment</Link>
            </li>
            <li>
              <Link to="/tabs" id="tabs-tab">Tabs</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/payment" element={<Payment cartItems={cartItems} />} />
          <Route path="/tabs" element={<TabsPage addToCart={addToCart} />} />
        </Routes>

        <footer>
          <p>© 2025 E-Learning Platform. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
