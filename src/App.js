import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/** Components */
import Header from "./components/global-header/GlobalHeader";
import GlobalNavBar from "./components/global-navbar/GlobalNavBar.js";

/** Pages */
import Home from "./pages/home/Home.js";

/** CSS Dependencies */
import "./App.css";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <GlobalNavBar />
                <div className="container">
                    <Router>
                        <Switch>
                            <div className="Router">
                                <Route exact={true} path="/" component={Home}/>
                                <Route exact={true} path="/home" component={Home}/>
                            </div>
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

export default App;