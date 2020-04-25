import React, { Component } from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import About from './components/about/about'
import Home from './components/home/home'
import Demo from './components/demo/demo'

export default class App extends Component {
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-offset-2 col-xs-8">
						<div className="page-header"><h2>React Router Demo</h2></div>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2 col-xs-offset-2">
						<div className="list-group">
							{/* 之前用的是a标签写导航，点击是跳转页面 */}
							{/* <a className="list-group-item " href="./about.html">About</a>
							<a className="list-group-item" href="./home.html">Home</a> */}

							{/* 使用了路由之后的写法 */}
							<NavLink activeClassName="demo" className="list-group-item " to="/atguigu/about">About</NavLink>
							<NavLink activeClassName="demo" className="list-group-item" to="/atguigu/home">Home</NavLink>
						</div>
					</div>
					<div className="col-xs-6">
						<div className="panel">
							<div className="panel-body">
								{/* 定义一个规则：路径和组件的对应关系 */}
								<Switch>
									<Route path="/atguigu/about" component={About}/>
									<Route path="/atguigu/home" component={Home}/>
									<Route path="/atguigu/demo" component={Demo}/>
									<Redirect to="/atguigu/demo"/>
								</Switch>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
