import React, { Component } from 'react'

export default class Button extends Component {
	render() {
		return (
			<button className="btn" data-demo="demo" {...this.props}/>
		)
	}
}
