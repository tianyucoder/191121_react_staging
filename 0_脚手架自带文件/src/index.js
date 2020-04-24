//该文件是整个脚手架应用的入口文件
import React from 'react'; //react核心库
import ReactDOM from 'react-dom'; //引入react-dom
import './index.css'; //引入样式
import App from './App'; //引入所有组件的容器组件---App
//import * as serviceWorker from './serviceWorker'; //引入serviceWorker，做PWA，暂时不用

ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
