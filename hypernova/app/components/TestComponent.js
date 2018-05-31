import React from 'react';
import { renderReact } from 'hypernova-react';

function TestComponent(props) {
  return <div>Hello, {props.name}!</div>;
}

export default renderReact('TestComponent', TestComponent);