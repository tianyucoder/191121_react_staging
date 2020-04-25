import React, { Component } from 'react'
import './item.css'

export default class Item extends Component {
	render() {
		return (
			<div className="card">
				<a href="https://github.com/reactjs" target="_blank" rel="noopener noreferrer">
					<img src="https://www.baidu.com/img/bd_logo1.png" style={{width: '100px'}} alt="user_pic"/>
				</a>
				<p className="card-text">reactjs</p>
			</div>
		)
	}
}
