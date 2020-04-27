import React, { Component } from './node_modules/react'
import {Switch,NavLink,Route,Redirect} from './node_modules/react-router-dom'
import Message from '../home_message/home_message'
import News from '../home_news/home_news'
import MyNavlink from '../../components/MyNavLink/MyNavLink'

export default class Home extends Component {
	render() {
		return (
			<div>
				<h2>Home组件内容</h2>
				<div>
					<ul className="nav nav-tabs">
						<li>
							<MyNavlink to="/home/news">News</MyNavlink>
							{/* <NavLink activeClassName="demo" className="list-group-item" to="/home/news">News</NavLink> */}
						</li>
						<li>
							<MyNavlink to="/home/message">Message</MyNavlink>
							{/* <NavLink activeClassName="demo" className="list-group-item" to="/home/message">Message</NavLink> */}
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
