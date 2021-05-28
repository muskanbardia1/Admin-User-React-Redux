import './App.css';
import Register from './components/Register';
import SignIn from './components/SignIn';
import { useSelector } from "react-redux";
import { Route, Switch, Redirect } from "react-router";
import UserDashboard from './components/UserDashboard';
import AdminDashboard from './components/AdminDashboard';



function App() {
  const { isLogged } = useSelector((state) => state.isLogged);
  return (
    <div className="App">
      {/* <SignIn /> */}
     <Switch>
        <Route exact path="/" component={Register} />
        <Route exact path="/login" component={SignIn} />
        <Route exact path="/userDashboard" component={UserDashboard} />
        <Route exact path="/adminDashboard" component={AdminDashboard} />
        {/* <PrivateRoute path="/userDashboard" Component={UserDashboard} isLogged={isLogged} />
        <PrivateRoute path="/adminDashboard" Component={AdminDashboard} isLogged={isLogged} /> */}
        
        {/* <PrivateRoute
          path="/welcome"
          component={WelcomSong}
          isLogged={isLogged}
        />
        <PrivateRoute
          path="/dashboard"
          component={dashboard}
          isLogged={isLogged}
        />*/} 
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
              pathname: "/login",
            }}
          />
        )
      }
    />
  </>
);

export default App;
