import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import './scss/app.scss';

import Header from './components/Header';
import Home from './pages/Home';
import CartLoader from './components/CartBlock/Skeleton';
import NotFoundLoader from './components/NotFoundBlock/Skeleton';

const Cart = lazy(() => import('./pages/Cart'));

const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Routes>
            <Route path="" element={<Home />} />
            <Route
              path="/cart"
              element={
                <Suspense fallback={<CartLoader />}>
                  <Cart />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<NotFoundLoader />}>
                  <NotFound />
                </Suspense>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
