import React, { Component } from 'react'
import Item from '../item'

export default class List extends Component {
	
	render() {
		const {userList,isFirst,isLoading,error} = this.props
		let content = ''
		if(isFirst) content = <h2>输入关键字，点击搜索</h2>
		else if(isLoading) content = <h2>Loadig....</h2>
		else if(error) content = <h2>{error}</h2>
		else content = userList.map((userObj)=>{
			return <Item key={userObj.login} {...userObj}/>
		})
		return (
			<div className="row">
				{content}
			</div>
		)
	}
}
