import React, {Component} from 'react';
import request from 'superagent';

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
    return <div>
      {
        this.state.articles.map(article =>
          <div key={article.title}>
            <div>{article.title}</div>
            <div>{article.content}</div>
          </div>
        )
      }
    </div>;
  }
}