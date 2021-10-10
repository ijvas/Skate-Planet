import { ItemListContainer } from './components/container/ItemListContainer';
import { NavBar } from './components/navBar/NavBar'


function App() {



  return (
    <>
      <NavBar/>
      <ItemListContainer greeting={"Hi! This is my greeting message for React JS third homework"}/>
    </>
  );
}

export default App;
