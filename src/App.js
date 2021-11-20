import { ItemListContainer } from './components/itemListContainer/ItemListContainer';
import { NavBar } from './components/navBar/NavBar'
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import { CartScreen } from './components/CartScreen/CartScreen'
import { CartProvider } from './context/CartContext'
import { UiProvider } from './context/UiContext';
import { Checkout } from './components/Checkout/Checkout';


function App() {

  return (
    <>
      <UiProvider>


        <CartProvider>


          <BrowserRouter>

            <NavBar/>

            <Switch>

              <Route exact path="/">
                <ItemListContainer/>
              </Route>

              <Route exact path="/:categoryId">
                <ItemListContainer/>
              </Route>

              <Route exact path="/detail/:productId">
                <ItemDetailContainer />
              </Route>

              <Route exact path="/products/cart">
                <CartScreen/>
              </Route>

              <Route exact path="/products/checkout">
                <Checkout/>
              </Route>

              <Route>
                <Redirect to="/" />
              </Route>
              
              <Route path="*">
                <Redirect to="/products"/>
              </Route>

            </Switch>

          </BrowserRouter>


        </CartProvider>
      

      </UiProvider>

    </>
  );
}

export default App;
