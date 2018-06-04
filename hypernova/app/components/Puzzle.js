import React from 'react';
import { renderReact } from 'hypernova-react';

class Puzzle extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <div>Title: {this.props.title}</div>;
	}
}

export default renderReact('Puzzle', Puzzle);