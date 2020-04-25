import React, { Component } from 'react'

export default class HomeMessage extends Component {
	render() {
		return (
			<div>
				<ul>
					<li>
						<a href="/home/message/1">message001</a>&nbsp;&nbsp;
					</li>
					<li>
						<a href="/home/message/3">message003</a>&nbsp;&nbsp;
					</li>
					<li>
						<a href="/home/message/5">message005</a>&nbsp;&nbsp;
					</li>
				</ul>
				<button>回退</button>
				<hr/>
			</div>
		)
	}
}
