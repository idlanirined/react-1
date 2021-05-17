import logo from './logo.svg';
import './App.css';
import Table from './Table';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import WelcomeScreen from './WelcomeScreen';

function App() {
  return (
    <BrowserRouter basename={"/test"}>
      <Switch>
        <Route exact path='/' component={WelcomeScreen} />
        <Route path="*">
          <Redirect
            to={{
              pathname: "/",
              state: window.location.href
            }}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
