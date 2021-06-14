import Home from './Components/Home'
import Department from './Components/Department'
import Employee from './Components/Employee'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavbarMenu from './Components/NavbarMenu';
function App() {
  return (
    <Router>
      <NavbarMenu />
      <div className='container'>
        <h3 className='m-3 d-flex justify-content-center'>Employee Management Portal</h3>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/department' component={Department} />
          <Route path='/employee' component={Employee} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
