import './App.css';
import Register from './components/Register';
import SignIn from './components/SignIn';
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router";



function App() {
  // const { isLogged } = useSelector((state) => state.signUpList);
  return (
    <div className="App">
     <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={SignIn} />
        {/* <PrivateRoute path="/adduser" component={AddUser} isLogged={isLogged} />
        <PrivateRoute
          path="/welcome"
          component={WelcomSong}
          isLogged={isLogged}
        />
        <PrivateRoute
          path="/dashboard"
          component={dashboard}
          isLogged={isLogged}
        /> */}
      </Switch>
    </div>
  );
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <>
    {console.log(rest)}
    <Route
      {...rest}
      render={(props) =>
        rest.isLogged ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )
      }
    />
  </>
);

export default App;
