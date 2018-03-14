import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import '../styles/searchBar.css';

class SearchBar extends React.Component {
  render() {
    return (
      <form className="search_bar">
        <input type="text" placeholder="Search By City..." />
        <Button id="bootstrap_button" bsStyle="primary" bsSize="default">
          Search
        </Button>
      </form>
    );
  }
}

export default SearchBar;
