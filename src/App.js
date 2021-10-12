import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Inventory from './components/Inventory/Inventory';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
import OrderReview from './components/OrderReview/OrderReview';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Registart from './components/Registar/Registart';
import Shipping from './components/Shipping/Shipping';
import Shop from './components/Shop/Shop';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Shop></Shop>
            </Route>
            <Route path="/shop">
              <Shop></Shop>
            </Route>
            <Route path="/review">
              <OrderReview></OrderReview>
            </Route>
            <PrivetRoute path="/inventory">
              <Inventory></Inventory>
            </PrivetRoute>
            <PrivetRoute path="/shipping">
              <Shipping></Shipping>
            </PrivetRoute>
            <PrivetRoute path="/placeorder">
              <PlaceOrder></PlaceOrder>
            </PrivetRoute>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/registar'>
              <Registart></Registart>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
