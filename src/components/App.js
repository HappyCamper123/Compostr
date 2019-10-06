import React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/App.css';
import CompostData from './CompostData';
import Benefits from './Benefits';
import CompostGraphs from './CompostGraphs';
import GettingStarted from './GettingStarted';

export default () => (
  <div className="app">
    <Header />
    <hr className="separator" />
    <Benefits />
    <hr className="separator" />
    <GettingStarted />
    <hr className="separator" />
    <CompostData />
    <CompostGraphs />
    <div>
      <Footer />
    </div>
  </div>
);
