import { ItemListContainer } from './components/container/ItemListContainer';
import { NavBar } from './components/navBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {



  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Hi! This is my greeting message for React JS third homework"}/>
    </>
  );
}

export default App;
