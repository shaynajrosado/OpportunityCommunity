import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Content, Drawer} from 'react-mdl';
import {HashRouter as Router, Link} from 'react-router-dom';
import Main from './components/main';
import 'react-mdl/extra/material.js';
import 'react-mdl/extra/material.css';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="demo-big-content">
      <Layout>
          <Header className="header-color" title="Opportunity Community" scroll>
            <Navigation>
              <Link to ="/">Home</Link>
              <Link to ="/about">About</Link>
              <Link to ="/classes">Learn New Things</Link>
              <Link to ="/events">Volunteer</Link>
              <Link to ="/resources">Resources</Link>
              <Link to ="suggest">Suggestion Box</Link>
            </Navigation>
          </Header>
          <Drawer title="Opportunity Community">
              <Navigation>
          <Link to ="/">Home</Link>
              <Link to ="/about">About</Link>
              <Link to ="/classes">Learn New Things</Link>
              <Link to ="/events">Volunteer</Link>
              <Link to ="/resources">Resources</Link>
              <Link to ="suggest">Suggestion Box</Link>
              </Navigation>
          </Drawer>

          <Content>
              <div className="page-content" />
              <Main />
          </Content>
      </Layout>
    </div>
    </Router>
    ); 
  }
}

export default App;