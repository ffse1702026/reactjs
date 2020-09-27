import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create';
import Edit from './components/edit';
import Index from './components/index';
import Interactivity from './components/interactivity';
import PureComponent from './components/purecomponent';
import PromiseComponent from './components/promise';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to={'/'} className="nav-link">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/create'} className="nav-link">Create</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/index'} className="nav-link">Index</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/interactivity'} className="nav-link">Interactivity</Link>
                                </li>

                                <li className="nav-item">
                                    <Link to={'/purecomponents'} className="nav-link">Pure Components</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/promises'} className="nav-link">Promise</Link>
                                </li>
                            </ul>
                        </div>
                    </nav> <br/>
                    {/* <h2>Create app CRUD with ReactJs, Java</h2> <br/> */}
                    <Switch>
                        <Route exact path='/create' component={ Create } />
                        <Route path='/edit/:id' component={ Edit } />
                        <Route path='/index' component={ Index } />
                        <Route path='/interactivity' component={ Interactivity } />
                        <Route path='/purecomponents' component={ PureComponent } />
                        <Route path='/promises' component={ PromiseComponent } />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;