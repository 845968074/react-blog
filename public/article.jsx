import React, {Component} from 'react';
import request from 'superagent';
import {
  Button,
  FormGroup, FormControl,
  Grid, Row, Col
} from 'react-bootstrap';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  render() {
    return <Grid>
      <Row>
        <Col xs={12}>
          <h1>New Article</h1>
        </Col>
      </Row>
      <Row>
        <Col xs={12}>
          <form onSubmit={this._onSubmit.bind(this)}>
            <FormGroup>
              <FormControl type="text" placeholder="Title"
                           value={this.state.title}
                           onChange={this._onTitleChange.bind(this)}/>
            </FormGroup>
            <FormGroup>
              <FormControl componentClass="textarea" placeholder="content"
                           value={this.state.content}
                           onChange={this._onContentChange.bind(this)}/>
            </FormGroup>
            <FormGroup>
              <Button type="submit">提交</Button>
            </FormGroup>
          </form>
        </Col>
      </Row>
    </Grid>;
  }

  _onTitleChange(event) {
    const title = event.target.value;
    this.setState({title: title});
  }

  _onContentChange(event) {
    const content = event.target.value;
    this.setState({content: content});
  }

  _onSubmit() {
    alert("Hello");
    request.post('/api/article')
      .send({title: this.state.title, content: this.state.content})
      .end((err, res) => {
        if (err) return alert(err);
        alert('提交成功');
      })
  }

}