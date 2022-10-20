import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from './store/user/user.action';

import { Home } from './routes/home/home.component';
import { Navigation } from './routes/navigation/navigation.component';
import { Authentication } from './routes/authentication/authentication.component';
import { Shop } from './routes/shop/shop.component';
import { Checkout } from './routes/ceckout/checkout.component';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, []);
  // ESLint gives mistake, because it see dispatch function inside.
  // 'dispatch' may be put inside to hide error. But it may cause missunderstanding.
  // It seems it will rerun every time dispatch fires, but redux logic is that it woul fire once.

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
