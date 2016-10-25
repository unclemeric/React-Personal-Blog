/**
 * Created by Meric on 2016/10/25.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import PageHeader from './component/PageHeader';

class App extends React.Component {
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

const element = document.getElementById('app');

render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={PageHeader} />
		</Route>
	</Router>,
	element
);
