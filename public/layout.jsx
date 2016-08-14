import React, {Component} from 'react';
import {Link} from 'react-router';
import {
  Grid, Row, Col,
  Breadcrumb
} from 'react-bootstrap';

const menu = <Grid>
  <Row>
    <Breadcrumb>
      <Breadcrumb.Item>
        <Link to="/">Index</Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to="/article">New Article</Link>
      </Breadcrumb.Item>
    </Breadcrumb>
  </Row>
</Grid>;

export default class Layout extends Component {
  render() {
    return <div>
      <div>{menu}</div>
      <div>{this.props.children}</div>
    </div>
  }
}