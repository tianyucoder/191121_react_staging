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
						<Add/>
						<List comments={this.state.comments}/>
					</div>
				</div>
			</div>
		)
	}
}

