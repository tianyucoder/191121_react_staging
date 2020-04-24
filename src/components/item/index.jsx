import React ,{Component} from 'react'
import './item.css'

export default class Item extends Component{
	render(){
		const {username,content} = this.props
		return (
			<li className="list-group-item">
				<div className="handle">
					<a href="#1">删除</a>
				</div>
				<p className="user"><span >{username}</span><span>说:</span></p>
				<p className="centence">{content}</p>
			</li>
		)
	}
}