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
import { CartScreen } from './components/CartScreen/CartScreen';
import { CartProvider } from './context/CartContext'
import { UiProvider } from './context/UiContext';
import { Form } from './components/Form/Form';


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

              <Route exact path="/products/:categoryId">
                <ItemListContainer/>
              </Route>

              <Route exact path="/detail/:productId">
                <ItemDetailContainer />
              </Route>

              <Route exact path="/contact">
                <Form/>
              </Route>

              <Route exact path="/cart">
                <CartScreen/>
              </Route>

              <Route>
                <Redirect to="/" />
              </Route>
              {/* <Route path="*">
                <h1>404... No encontrado</h1>
                <button>Volver al inicio</button>
              </Route> */}

            </Switch>

          </BrowserRouter>


        </CartProvider>
      

      </UiProvider>

    </>
  );
}

export default App;
