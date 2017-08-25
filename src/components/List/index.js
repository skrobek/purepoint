import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './List.css';


class List extends Component {
  static propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired
    }),),
  }

  render() {
    const { list } = this.props;

    return (
      <div className="list">
        {list.map((item) => (
          <div className="list-item">
            <a href={item.href} target="_blank">
              {item.title}
            </a>
          </div>
        ))}
      </div>
    );
  }
}

export default List;