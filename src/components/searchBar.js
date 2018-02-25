import React, { Component } from 'react';
import '../styles/header.css';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="search_bar">
        <input type="text" placeholder="Search..." />

        <button id="search_button" type="button">
          Search
        </button>
      </form>
    );
  }
}

export default SearchBar;
