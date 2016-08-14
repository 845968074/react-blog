import React, {Component} from 'react';
import request from 'superagent';

export default class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'tt',
      content: 'cc'
    }
  }

  render() {
    return <form onSubmit={this._onSubmit.bind(this)}>
      <div>
        <input type="text" placeholder="Title"
               value={this.state.title}
               onChange={this._onTitleChange.bind(this)}/>
      </div>
      <div><textarea placeholder="content"
                     value={this.state.content}
                     onChange={this._onContentChange.bind(this)}/>
      </div>
      <div>
        <button>提交</button>
      </div>
    </form>;
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
    request.post('/api/article')
      .send({title: this.state.title, content: this.state.content})
      .end((err, res) => {
        if (err) return alert(err);
        alert('提交成功');
      })
  }

}