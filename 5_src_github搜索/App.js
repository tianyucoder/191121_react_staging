import React, { Component } from 'react'
import Search from './components/search'
import List from './components/list'

export default class App extends Component {

	state = {
		userList:[], //用户列表
		isFirst:true, //是否为第一次展示
		isLoading:false, //是否处于加载中
		error:'' //请求错误信息
	}

	updateAppState = (stateObj)=>{
		this.setState(stateObj)
	}

	render() {
		return (
			<div id="app">
				<div className="container">
					<Search updateAppState={this.updateAppState}/>
					<List {...this.state}/>
				</div>
			</div>
		)
	}
}
