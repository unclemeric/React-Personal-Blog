/**
 * Created by Meric on 2016/10/25.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { GoTop, Footer } from 'amazeui-react';
import PageIndex from './component/PageIndex';
import PageHeader from './component/PageHeader';
import HeaderNav from './component/PageHeader/HeaderNav';

class App extends React.Component {
	render() {
		return (
			<div>
				<PageHeader />
				<div className="content">
					{this.props.children}
				</div>
				<GoTop theme="fixed" autoHide icon="arrow-up" />
				<Footer style={{ background: 'transparent', padding: '2em 0' }}>
					<p>由
						<a href="http://www.yunshipei.com/" rel="noopener noreferrer" title="诺亚方舟" target="_blank">诺亚方舟</a>提供技术支持
					</p>
					<p>CopyRight©2014 AllMobilize Inc.</p>
					<p>京ICP备13033158</p>
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
				<Route path="nav" component={HeaderNav} />
			</Route>
		</Router>,
	element
);
