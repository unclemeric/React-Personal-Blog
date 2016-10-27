/**
 * Created by Meric on 2016/10/27.
 */
import React from 'react';
import { ListNews, Panel, Titlebar } from 'amazeui-react';
import ConnectMe from '../ConnectMe';
import './style.scss';

const data = {
	main: [
		{
			title: '我很囧，你保重....晒晒旅行中的那些囧！',
			link: '##',
			date: '2013-09-18',
		},
		{
			title: '我最喜欢的一张画',
			link: '##',
			date: '2013-10-14',
		},
		{
			title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
			link: '##',
			date: '2013-11-18',
		},
		{
			title: '我很囧，你保重....晒晒旅行中的那些囧！',
			link: '##',
			date: '2013-09-18',
		},
		{
			title: '我最喜欢的一张画',
			link: '##',
			date: '2013-10-14',
		},
		{
			title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
			link: '##',
			date: '2013-11-18',
		},
		{
			title: '我很囧，你保重....晒晒旅行中的那些囧！',
			link: '##',
			date: '2013-09-18',
		},
		{
			title: '我最喜欢的一张画',
			link: '##',
			date: '2013-10-14',
		},
		{
			title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
			link: '##',
			date: '2013-11-18',
		},
		{
			title: '我很囧，你保重....晒晒旅行中的那些囧！',
			link: '##',
			date: '2013-09-18',
		},
		{
			title: '我最喜欢的一张画',
			link: '##',
			date: '2013-10-14',
		},
		{
			title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
			link: '##',
			date: '2013-11-18',
		},
		{
			title: '我很囧，你保重....晒晒旅行中的那些囧！',
			link: '##',
			date: '2013-09-18',
		},
		{
			title: '我最喜欢的一张画',
			link: '##',
			date: '2013-10-14',
		},
		{
			title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
			link: '##',
			date: '2013-11-18',
		},
		{
			title: '我很囧，你保重....晒晒旅行中的那些囧！',
			link: '##',
			date: '2013-09-18',
		},
		{
			title: '我最喜欢的一张画',
			link: '##',
			date: '2013-10-14',
		},
		{
			title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
			link: '##',
			date: '2013-11-18',
		},
		{
			title: '我很囧，你保重....晒晒旅行中的那些囧！',
			link: '##',
			date: '2013-09-18',
		},
		{
			title: '我最喜欢的一张画',
			link: '##',
			date: '2013-10-14',
		},
		{
			title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
			link: '##',
			date: '2013-11-18',
		},
		{
			title: '我很囧，你保重....晒晒旅行中的那些囧！',
			link: '##',
			date: '2013-09-18',
		},
		{
			title: '我最喜欢的一张画',
			link: '##',
			date: '2013-10-14',
		},
		{
			title: '“你的旅行，是什么颜色？” 晒照片，换北欧梦幻极光之旅！',
			link: '##',
			date: '2013-11-18',
		},
	],
};

class Articles extends React.Component {
	render() {
		return (
			<div className="main-container">
				<div className="left-container">
					<ListNews style={{ background: 'transparent' }} header={<Titlebar title="文章列表" />} data={data} />
				</div>
				<div className="right-container">

					<Panel header="文章分类">
						<ul>
							<li><a>分类</a></li>
							<li><a>分类</a></li>
							<li><a>分类</a></li>
							<li><a>分类</a></li>
							<li><a>分类</a></li>
							<li><a>分类</a></li>
							<li><a>分类</a></li>
							<li><a>分类</a></li>
							<li><a>分类</a></li>
							<li><a>分类</a></li>
						</ul>
					</Panel>
					<ConnectMe />
				</div>
			</div>
		);
	}
}

export default Articles;
