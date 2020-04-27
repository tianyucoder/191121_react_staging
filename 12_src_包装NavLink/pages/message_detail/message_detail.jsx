import React, { Component } from './node_modules/react'

export default class MessageDetail extends Component {

	state = {
		details:[
			{id:'001',title:'message001',content:'加油，中国！'},
			{id:'002',title:'message002',content:'加油，武汉！'},
			{id:'003',title:'message003',content:'加油，尚硅谷！'},
		]
	}

	render() {
		const {id} = this.props.match.params //获取路由传递过来的参数
		let result = this.state.details.find((detailObj)=>{
			return detailObj.id === id
		})
		return (
			<ul>
				<li>ID:{result.id}</li>
				<li>TITLE:{result.title}</li>
				<li>CONTENT:{result.content}</li>
			</ul>
		)
	}
}
