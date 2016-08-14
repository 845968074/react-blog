import React, {Component} from 'react';
import request from 'superagent';
import {Grid, Row, Col} from 'react-bootstrap';

export default class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    }
  }

  componentDidMount() {
    request.get('/api/articles')
      .end((err, res) => {
        if (err) return alert("Loading data failed");
        this.setState({
          articles: res.body
        });
      });
  }

  render() {
    return <Grid>
      <Row>
        <Col xs={12}>
          <h1>All Articles</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <div>
            {
              this.state.articles.map(article =>
                <div key={article._id}>
                  <h2>{article.title}</h2>
                  <div>{article.content}</div>
                </div>
              )
            }
          </div>
        </Col>
      </Row>
    </Grid>;
  }
}