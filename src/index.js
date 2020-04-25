//该文件是整个应用的入口文件，该文件需要渲染App
//1.引入react核心库
import React from 'react'
//2.引入react-dom库
import ReactDOM from 'react-dom'
//引入路由
import {BrowserRouter} from 'react-router-dom'
//3.引入App
import App from './App'
//4.渲染App到root容器
ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root'))