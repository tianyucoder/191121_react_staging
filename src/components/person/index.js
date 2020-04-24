//定义一个展示人员信息的组件
//1.引入React核心库
import React,{Component} from 'react'
//2.定义一个Person组件，随后暴露
export default class Person extends Component{
	render(){
		return (
			<ul>
				<li>姓名：海吉</li>
				<li>sex：女</li>
			</ul>
		)
	}
}