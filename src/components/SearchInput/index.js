import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormGroup, InputGroup, Button } from 'react-bootstrap';

import './SearchInput.css';


class SearchInput extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string
  }

  handleChange= (e) => {
    this.props.onChange(e.target.value);
  }

  render() {
    return (
      <div className="search-input">
        <FormGroup>
          <InputGroup>
            <FormControl
              type="text"
              placeholder="Search for..."
              value={this.props.value}
              onChange={this.handleChange}
            />
            <InputGroup.Button>
              <Button>Search</Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </div>
    );
  }
}

export default SearchInput;