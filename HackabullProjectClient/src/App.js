import './App.css';
import {Home} from './Components/Home/Home';
import {Profile} from './Components/Profile/Profile';
import {Navigation} from './Components/Navigation/Navigation';
import {LoginPage} from './Components/LoginPage/LoginPage';
import {Route, withRouter} from "react-router-dom";

function App() {
  return (
    <div>
      <Navigation />
      <Route path='/home' component={withRouter(Home)}/>

      <Route path='/profile' component={withRouter(Profile)}/>

      <Route exact path='/' component={withRouter(LoginPage)}/>
    </div>
  );
}

export default App;
