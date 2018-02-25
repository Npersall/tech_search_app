import React, { Component } from 'react';
import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_title">Tech Search</div>
        <img className="header-image" src={require('../images/ram-modules5.jpg')} />
      </div>
    );
  }
}

