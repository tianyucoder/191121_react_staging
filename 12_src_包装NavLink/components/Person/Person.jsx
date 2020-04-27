import React, { Component } from 'react'

export default function(props){
	const {name,sex,age} = props
	return (
		<ul>
			<li>{name}</li>
			<li>{sex}</li>
			<li>{age}</li>
		</ul>
	)
}
