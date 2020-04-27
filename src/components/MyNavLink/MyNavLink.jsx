import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

/* export default class MyNavLink extends Component {
	render() {
		return (
			<NavLink activeClassName="demo" className="list-group-item" {...this.props}/>
		)
	}
} */


/* export default function MyNavLink(props){
	return (
		<NavLink activeClassName="demo" className="list-group-item" {...props}/>
	)
} */

export default props => <NavLink activeClassName="demo" className="list-group-item" {...props}/>

/* 
	高阶组件：
		1.高阶组件的本质是一个函数
		2.这个函数接收的参数是组件
		3.返回一个新组件
*/