import React from 'react';
import { render } from 'react-dom';
import { Button } from 'amazeui-react';
import marked from 'marked';
import Editor from 'react-md-editor';

import image from './static/images/20161023223233.png';
import './static/scss/index.scss';
// import Button from './component/Button/Button';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code: '# React Markdown Editor\n\n* A list\n\nSome **bold** and _italic_ text\n\n> A quote...\n\n![aaa](http://localhost/favicon.ico) \n\nBy [Jed Watson](https://github.com/JedWatson) and [Joss Mackison](https://github.com/jossmac)',
    };
    this.updateCode = this.updateCode.bind(this);
  }
  componentDidMount() {
    // fetch('http://10.73.36.59:5000/v1/test')
    //   .then((response) => {
    //   return response.json();
    // }).then((rtn) => {
    //   console.dir(rtn);
    // });
  }
  updateCode(newCode) {
    this.setState({
      code: newCode,
    });
    console.log({ a: newCode });
  }
  render() {
    const preview = marked(this.state.code);
    return (
      <div>
        <div className="example">
          <div className="hint">The editor is below, with default options. This example also
            uses marked to generate the preview on the right as you type.</div>
          <div className="editor">
            <Editor value={this.state.code} onChange={this.updateCode} />
          </div>
          <div className="preview" dangerouslySetInnerHTML={{ __html: preview }} />
        </div>
        <Button amStyle="primary">Hello World</Button>
        <img alt="" src={image} />
      </div>
     );
  }
}

render(<App />, document.getElementById('app'));
