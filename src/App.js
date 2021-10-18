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


function App() {

  return (
    <>
      <BrowserRouter>

        <NavBar/>

        <Switch>

          <Route exact path="/">
            <h1>Starting Page</h1>
          </Route>

          <Route exact path="/products">
            <ItemListContainer/>
          </Route>

          <Route exact path="/products/:categoryId">
            <ItemListContainer/>
          </Route>

          <Route exact path="/detail/:productId">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/contact">
            <h1>Contact us</h1>
          </Route>

          <Route exact path="/cart">
            {/* TO DO... HACER VISTA DEL CARRITO */}
            <h1>Carrito</h1>
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
    </>
  );
}

export default App;
