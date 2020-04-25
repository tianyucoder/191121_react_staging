//App组件是所有组件的“壳子”
//1.引入react核心库
import React,{Component} from 'react'
//2.引入一些我们自定义的组件
import Person from './components/person'

//3.定义一个名为App的组件,随后暴露
export default class App extends Component{
	render(){
		return (
			<div>
				<h2>hello,React脚手架</h2>
				<Person/>
			</div>
		)
	}
}

