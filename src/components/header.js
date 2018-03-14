import React, { Component } from 'react';
import SearchBar from './searchBar';
import '../styles/header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header_title">Tech Search</div>
        <SearchBar />
      </div>
    );
  }
}
