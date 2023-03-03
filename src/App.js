import LoginPage from './pages/loginPage/LoginPage'
import SignUp from './pages/signup/SignUp';
import ForgotPassword from './pages/forgotpassword/ForgotPassword'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route exact path="/">
        <LoginPage/>
      </Route>

      <Route path="/SignUp">
        <SignUp/>
      </Route>

      <Route path='/ForgotPAssword'>
        <ForgotPassword/>
      </Route>
      </Switch>
      
    
    </BrowserRouter>
  );
}

export default App;
