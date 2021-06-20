import React from 'react';
import {
    BrowserRouter as Router, 
    Redirect, 
    Route, 
    Switch
} from "react-router-dom";
import { StateProvider } from './context/store';

import { Home, CreateRoom, JoinRoom, Game } from './screens';
import { History } from './screens/History';


import './styles/index.css';


export const App = () => {
    return (
        <StateProvider>
            <Router>
                
                <Switch>
                    <Route path='/home' exact component={Home} />
                    <Route path='/create' exact component={CreateRoom} />
                    <Route path='/join' exact component={JoinRoom} />
                    <Route path='/game'  exact component={Game} />
                    <Route path='/history' exact component={History} />
                    <Redirect to='/home' />
                </Switch>
            </Router>
        </StateProvider>
    );
};
