//App组件是所有组件的“壳子”
//1.引入react核心库
import React,{Component} from 'react'
//2.引入一些我们自定义的组件
import Add from './components/add'
import List from './components/list'

//3.定义一个名为App的组件,随后暴露
export default class App extends Component{

	state = {
		//comments所存储的是评论信息，后期一定会请求服务器得到。
		comments:[
			{id:'001',username:'海吉',content:'都说挺难的，我觉得不过如此'},
			{id:'002',username:'赵玄',content:'我觉得还是vue更香'},
			{id:'003',username:'晨飞',content:'我会抢答了~~'},
		]
	}

	//用于添加一调评论
	addComment = (commentObj)=>{
		//获取原状态
		const {comments} = this.state	
		//更新状态
		this.setState({comments:[commentObj,...comments]})
	}

	//用于删除一个评论，根据id删除
	deleteComment = (id)=>{
		let {comments} = this.state
		let index = comments.findIndex((commentObj)=>{
			return commentObj.id === id
		})
		comments.splice(index,1)
		this.setState({comments})
	}

	render(){
		return (
			<div id="app">
				<div>
					<header className="site-header jumbotron">
						<div className="container">
							<div className="row">
								<div className="col-xs-12">
									<h1>请发表对React的评论</h1>
								</div>
							</div>
						</div>
					</header>
					<div className="container">
						<Add addComment={this.addComment}/>
						<List comments={this.state.comments} deleteComment={this.deleteComment}/>
					</div>
				</div>
			</div>
		)
	}
}

