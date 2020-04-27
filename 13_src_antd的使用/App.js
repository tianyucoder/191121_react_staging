import React, { Component } from 'react'
import MyButton from './components/Button/Button'
import {Button,DatePicker} from 'antd'

const { RangePicker } = DatePicker;

export default class App extends Component {
	render() {
		return (
			<div>
				App...
				<MyButton>点我</MyButton>
				<MyButton>点点我</MyButton>
				<Button type="primary">更新</Button>
				<RangePicker />
			</div>
		)
	}
}
