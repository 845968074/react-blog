import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Layout extends Component {
  render() {
    return <div>
      <div>
        <ul>
          <li><Link to="/">Index</Link></li>
          <li><Link to="/article">New Article</Link></li>
        </ul>
      </div>
      <div>{this.props.children}</div>
    </div>
  }
}