import React from 'react';
import './App.css';
import BurgerBuilder from './Components/BurgerBuilder/BurgerBuilder';
import Layout from './Components/Layout/Layout';
import Checkout from './Components/Checkout/Checkout';
import { Switch, Route, Redirect } from 'react-router-dom';
import Orders from './Components/Orders/Orders';
import Auth from './Components/Auth/auth';
import { checkIfAuthorised } from './Store/Actions/actions';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const authorized = useSelector(state => state.auth.authorized);
  const dispatch = useDispatch();

  if (!authorized) {
    dispatch(checkIfAuthorised());
    // authorizeView = (authData.loading) ? <Spinner /> : <Auth></Auth>
  }

  const authorisedView = (authorized) ? (
      <Layout>
        <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
        {/* <BurgerBuilder /> */}
        {/* <Checkout /> */}
      </Layout> 
    ) : <Auth></Auth>
  return (
    <div>
      {authorisedView}
    </div>
  );
}

export default App;
