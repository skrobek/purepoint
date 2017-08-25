import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Well } from 'react-bootstrap';

import { search } from './../../actions/recipe';

import Navbar from './../../components/Navbar'
import SearchInput from './../../components/SearchInput'
import List from './../../components/List'

import './App.css';


class App extends Component {
  static PropsTypes = {
    search: PropTypes.func.isRequired,
    isSearching: PropTypes.bool.isRequired
  }

  constructor() {
    super();

    this.state = {
      query: ''
    };
  }

  handleChange = (query) => {
    this.setState({ query }, () => {
      this.props.search(query);
    })
  }

  render() {
    const { query } = this.state;
    const { list, isSearching } = this.props;

    return (
      <div>
        <Navbar />
        <div className="container">
          <SearchInput
            onChange={this.handleChange}
            value={query}
          />
          {list.length > 0 && <List list={list} />}
          {isSearching && <div className="spinner" />}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.recipe.list,
  isSearching: state.recipe.isSearching
});

export default connect(
  mapStateToProps,
  { search }
)(App);