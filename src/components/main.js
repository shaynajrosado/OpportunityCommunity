import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import About from './about';
import Classes from './classes';
import Events from './events';
import SuggestionBox from './suggestionBox';
import Resources from './resources';



const Main = () => {
    return (
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route path='/about' component={About} />
        <Route path='/classes' component={Classes} />
        <Route path='/events' component={Events} />
        <Route path='/suggest' component={SuggestionBox} />
        <Route path='/resources' component={Resources} />
      </Switch>
    );
}

export default Main;