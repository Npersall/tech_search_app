import React, { Component } from 'react';
import './styles/App.css';
import Header from './components/header';
import EventList from './components/eventList';

class App extends Component {
  render() {
    return (
      <div className="header">
        <Header />
        <EventList />
      </div>
    );
  }
}

export default App;
