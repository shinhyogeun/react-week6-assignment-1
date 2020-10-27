import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';

import RestaurantsPage from './RestaurantsPage';
import RestaurantPage from './RestaurantPage';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <h1><Link to="/">헤더</Link></h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/:restaurantId" component={RestaurantPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
