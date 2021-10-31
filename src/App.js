import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch , Route } from 'react-router-dom';
import './App.css';
import 'animate.css';
import Home from './Components/Home/Home';
import Header from './Shared/Header';
import Login from './Components/Register/Login';
import NotFound from './Components/NotFound/NotFound';
import AddPackage from './Components/AddPackage/AddPackage';
import Footer from './Shared/Footer';
import Package from './Components/Package.js/Package';
import SignUp from './Components/Register/SignUp';
import ManageAllOrder from './Components/ManageAllOrder/ManageAllOrder';
import AllOrder from './Components/AllOrder/AllOrder';
import AllPackages from './Components/Package.js/AllPackages';
import PrivateRoute from './Shared/PrivateRoute';
import AboutUs from './Components/AboutUs/AboutUs';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="App">
  
     <AuthProvider>
     <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route exact path="/">
         <Home></Home>
        </Route>
        <Route exact path="/home">
         <Home></Home>
        </Route>
        <PrivateRoute path="/packages/:packageId">
         <Package></Package>
        </PrivateRoute>
        <Route exact path="/packages">
         <AllPackages></AllPackages>
        </Route>
        <Route exact path="/all_order">
         <AllOrder></AllOrder>
        </Route>
        <Route exact path="/manage_all_order">
         <ManageAllOrder></ManageAllOrder>
        </Route>
        <Route exact path="/add_package">
         <AddPackage></AddPackage>
        </Route>
        <Route exact path="/about_us">
         <AboutUs></AboutUs>
        </Route>
        <Route exact path="/login">
         <Login></Login>
        </Route>
        <Route exact path="/signUp">
         <SignUp></SignUp>
        </Route>
        <Route path="*">
         <NotFound></NotFound>
        </Route>
      </Switch>
      <Footer></Footer>
    </BrowserRouter>
     </AuthProvider>
   </div>
  );
}

export default App;
