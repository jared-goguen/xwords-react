import React from 'react';
import { renderReact } from 'hypernova-react';
import ReactDOM  from 'react-dom';

export default class Test extends React.Component {
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
