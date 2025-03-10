
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { CartContextProvider } from './context/cartContext';
import Login from './components/Login';
import HomePage from './components/HomePage';
import CartPage from './components/CartPage';
import CancelPage from './components/Cancel';
import Success from './components/Success';
import RegisterScreen from './components/Register';

const App = () => {
  const [cookies,setCookies,removeCookies] = useCookies(['authToken']);
  const authToken = cookies.authToken
 
  return (
    <BrowserRouter>
      <CartContextProvider>
        <Routes>
          <Route path="/cart" element={<CartPage cookies={cookies} /> } />
          <Route exact path="/" element={ <Navigate to="/home" /> } />
          <Route
            path="/home"
            element={<HomePage cookies={cookies} removeCookies={removeCookies} />}
          />
          {/* <Route path="/home" element={<HomePage removeCookies={removeCookies}/>} /> */}
          <Route path='/success' element={<Success />} />
          <Route path='/cancel' element={<CancelPage />} />
          <Route path='/register' element={<RegisterScreen setCookies={setCookies} />} />
          <Route path="/login" element={!authToken? <Login /> : <Navigate to="/home" />} />
          
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
};

export default App;
