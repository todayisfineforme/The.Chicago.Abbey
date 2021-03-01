import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Toolbar from "./components/toolbar.js";
import Homepage from "./components/homepage.js";
import Menu from "./components/menu.js";
import Reservations from "./components/reservations.js";
import Music from "./components/music";
import Tickets from "./components/tickets.js";
import About from "./components/about.js";

function App() {
    return (
        <Router>
            <Container fluid className="vh-100 main-screen">
                <Toolbar/>
                    <Switch>
                        <Route exact path="/menu">
                            <Menu/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route exact path="/reservations">
                            <Reservations/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route exact path="/music">
                            <Music/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route exact path="/tickets">
                            <Tickets/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route exact path="/about">
                            <About/>
                        </Route>
                    </Switch>
                    <Switch>
                        <Route exact path="/">
                            <Homepage/>
                        </Route>
                    </Switch>
            </Container>
        </Router>
    );
}

export default App;
