import React, { Component } from './node_modules/react'

export default class Title extends Component {
	render() {
		console.log('Demo',this.props);
		return (
			<h2>React Router Demo</h2>
		)
	}
}
