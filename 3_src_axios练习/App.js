import React, { Component } from 'react'
import axios from 'axios'

export default class App extends Component {

	state = {
		repoName:'', //仓库名
		repoUrl:'', //仓库url
		isLoading:true, //一上来就加载中
		err:'',//错误信息
		keyWord:'v' //关键字
	}

	async componentDidMount(){
		const url = `https://api.github.com/search/repositories`
		try {
			let result = await axios.get(url,{params:{q:this.state.keyWord,sort:'stars'}})
			const {name,html_url} = result.data.items[0]
			this.setState({repoName:name,repoUrl:html_url,isLoading:false})
		} catch (error) {
			this.setState({isLoading:false,err:error.message})
		}
	}

	render() {
		const {keyWord,repoUrl,repoName,isLoading,err} = this.state
		let content = ''
		if(isLoading) content = <h2>Loading...</h2>
		else if(err) content = <h2 style={{color:'red'}}>{err}</h2>
		else content = <h2>在github上以【{keyWord}】字母开头的仓库中，点赞量最多的是：<a href={repoUrl}>{repoName}</a></h2>
		return content
	}
}
