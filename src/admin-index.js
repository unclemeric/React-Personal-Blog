/**
 * Created by Meric on 2016/10/25.
 */
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import { GoTop, Icon } from 'amazeui-react';
import Footer from './component/PageFooter';
import Header from './component/PageHeader/Header';
import MainArea from './component/Admin/Home';
import LeftNav from './component/Admin/LeftNav';
import Articles from './component/Admin/Home/Articles';
import EditArticle from './component/Admin/Home/Articles/edit';
import ArticleView from './component/Articles/Article';
import PublishArticle from './component/Admin/PublishArticle';
import './component/Admin/index.scss';

class App extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<div className="banner">
					<div className="container">
						<Header />
					</div>
				</div>
				<div className="content">
					<LeftNav />
					<div className="admin-main-container">
                        {this.props.children}
					</div>
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
				<IndexRoute component={Articles} />
				<Route path="index" component={MainArea} />
				<Route path="article" component={Articles}/>
				<Route path="article/:id" component={ArticleView} />
				<Route path="article/edit/:id" component={EditArticle} />
				<Route path="editor" component={PublishArticle} />
			</Route>
		</Router>,
	element
);