/**
 * Created by Meric on 2016/10/25.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { GoTop, Icon } from 'amazeui-react';
import Footer from './component/PageFooter';
import PageIndex from './component/PageIndex';
import PageHeader from './component/PageHeader';
import Articles from './component/Articles';
import Notes from './component/Notes';

class App extends React.Component {
	render() {
		return (
			<div>
				<PageHeader />
				<div className="content">
					{this.props.children}
				</div>
				<GoTop theme="fixed" autoHide icon="arrow-up" />
				<Footer>
					<p><Icon button href="https://github.com/unclemeric" icon="github" /></p>
					<p>2016-2017</p>
				</Footer>
			</div>
		);
	}
}

const element = document.getElementById('app');
render(
		<Router history={hashHistory}>
			<Route path="/" component={App}>
				<IndexRoute component={PageIndex} />
				<Route path="header" component={PageHeader} />
				<Route path="articles" component={Articles} />
				<Route path="notes" component={Notes} />
				<Route path="profile" component={Articles} />
				<Route path="feedback" component={Articles} />
			</Route>
		</Router>,
	element
);
