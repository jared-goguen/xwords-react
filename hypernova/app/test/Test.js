import React from 'react';
import { renderReact } from 'hypernova-react';
import ReactDOM  from 'react-dom';

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(event) {
    alert('hey');
  }

  render() {
    return (
      <div onClick={this.onClick}>click me</div>
    );
  }
}

if (typeof document !== 'undefined') {
  ReactDOM.render(<Test />, document.getElementById('puzzle'));
}

export default renderReact('Test', Test);