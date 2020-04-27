import React, { Component } from 'react'
import {Route,Switch,Redirect} from 'react-router-dom'
import About from './pages/about/about'
import Home from './pages/home/home'
import Title from './components/title/title'
import MyNavLink from './components/MyNavLink/MyNavLink'
import Person from './components/Person/Person'

export default class App extends Component {
	render() {
		return (
			<div>
				<Person name="peiqi" age={18} sex="女"/>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header">
							<Title/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 之前用的是a标签写导航，点击是跳转页面 */}
							{/* <a className="list-group-item " href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a> */}

							{/* 使用了路由之后的写法 */}
							<MyNavLink to="/about"> About</MyNavLink>
							<MyNavLink to="/home"> Home</MyNavLink>
							{/* <NavLink activeClassName="demo" className="list-group-item " to="/about">About</NavLink>
							<NavLink activeClassName="demo" className="list-group-item" to="/home">Home</NavLink> */}
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 定义一个规则：路径和组件的对应关系 */}
								<Switch>
									<Route path="/about" component={About}/>
									<Route path="/home" component={Home}/>
									<Redirect to="/about"/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
