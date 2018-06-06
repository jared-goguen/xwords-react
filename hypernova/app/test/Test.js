import React from 'react';
import { renderReact } from 'hypernova-react';

class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <p onClick={() => alert('hey')}>click me</p>
    );
  }
}

export default renderReact('Test', Test);