import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Provide Components
import Home from '../Pages/Home';

const Router = () => {
    return (
        <div className="wrapper">
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </div>
    )
}

export default Router;