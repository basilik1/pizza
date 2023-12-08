import { Routes, Route } from 'react-router-dom';
import './scss/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';
import { useState } from 'react';
import { AppContext } from './components/Context/';

function App() {
  const [searchValue, setSearchValue] = useState('');

  return (
    <>
      <div className="wrapper">
        <Header />
        <AppContext.Provider value={{ searchValue, setSearchValue }}>
          <div className="content">
            <Routes>
              <Route path="" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
