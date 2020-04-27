import React, { Component } from 'react'
import {Switch,NavLink,Route,Redirect} from 'react-router-dom'
import Message from '../home_message/home_message'
import News from '../home_news/home_news'

export default class Home extends Component {
	render() {
		return (
			<div>
				<h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<NavLink activeClassName="demo" className="list-group-item" to="/home/news">News</NavLink>
						</li>
						<li>
							<NavLink activeClassName="demo" className="list-group-item" to="/home/message">Message</NavLink>
						</li>
					</ul>
					<Switch>
						<Route path="/home/news" component={News}/>
						<Route path="/home/message" component={Message}/>
						<Redirect to="/home/news"/>
					</Switch>
				</div>
			</div>
		)
	}
}
