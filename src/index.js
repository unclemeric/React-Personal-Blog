/**
 * Created by Meric on 2016/10/25.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

class App extends React.Component {
	render() {
		return (
			<div>
				hello
			</div>
		);
	}
}

const  n  = document.getElementById('app');

render(
	<Router history={hashHistory}>
		<Route path="/" component={p} />
	</Router>,
	element
);
