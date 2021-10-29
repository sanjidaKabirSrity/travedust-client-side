import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import './App.css';
import 'animate.css';
import Home from './Components/Home/Home';
import Header from './Shared/Header';
import Login from './Components/Register/Login';
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route exact path="/home">
         <Home></Home>
        </Route>
        <Route exact path="/login">
         <Login></Login>
        </Route>
        <Route path="*">
         <NotFound></NotFound>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
