import React from 'react'; //引入react核心库
import logo from './logo.svg'; //引入一个logo图片
import './App.css'; //引入样式

//使用函数式定义一个组件，名为:App
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

//使用默认暴露的方式暴露了App
export default App;
