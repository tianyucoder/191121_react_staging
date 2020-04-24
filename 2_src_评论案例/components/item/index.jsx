import React ,{Component} from 'react'
import './item.css'

export default class Item extends Component{

	delete = (id)=>{
		//1.弹窗询问是否删除
		if(window.confirm('确定删除吗')){
			//2.联系App组件删除该id所对应的那条评论
			this.props.deleteComment(id)
		}
		
	}

	render(){
		const {id,username,content} = this.props
		return (
			<li className="list-group-item">
				<div className="handle">
					<a onClick={()=>{this.delete(id)}} href="#1">删除</a>
				</div>
				<p className="user"><span >{username}</span><span>说:</span></p>
				<p className="centence">{content}</p>
			</li>
		)
	}
}