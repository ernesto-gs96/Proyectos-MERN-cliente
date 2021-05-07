import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";

function App() {
  return (
    <Router>
      <Switch>
        <Router exact path="/" component={Login}/>
        <Router exact path="/nueva-cuenta" component={NuevaCuenta}/>
        <Router exact path="/proyectos" component={Proyectos}/>
      </Switch>
    </Router>
  );
}

export default App;
