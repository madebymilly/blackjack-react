import React, { Component } from 'react'
import ReactDOM from 'react-dom'

import "./main.less"

import Game from './components/Game'

ReactDOM.render(
	<div>
		<Game />
	</div>,
  document.getElementById('game')
);
