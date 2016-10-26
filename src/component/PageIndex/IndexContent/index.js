/**
 * Created by Meric on 2016/10/26.
 */
import React from 'react';
import { ListNews, Panel, Titlebar } from 'amazeui-react';
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

class IndexContent extends React.Component {
	render() {
		return (
			<div>
				<div className="left-container">
					<ListNews style={{ background: 'transparent' }} header={<Titlebar title="文章列表" />} data={data} />
				</div>
				<div className="right-container">
					<Panel header="最新文章">
						<ul>
							<li><a>文章文章文章文章文章文章</a></li>
							<li><a>文章文章文章文章文章文章</a></li>
							<li><a>文章文章文章文章文章文章</a></li>
							<li><a>文章文章文章文章文章文章</a></li>
							<li><a>文章文章文章文章文章文章</a></li>
						</ul>
					</Panel>
					<Panel header="最新留言">
						<ul>
							<li><a>淡定：最新留言最新留言最新留言</a></li>
							<li><a>淡定：最新留言最新留言最新留言</a></li>
							<li><a>淡定：最新留言最新留言最新留言</a></li>
							<li><a>淡定：最新留言最新留言最新留言</a></li>
							<li><a>淡定：最新留言最新留言最新留言</a></li>
						</ul>
					</Panel>
				</div>
			</div>
		);
	}
}

export default IndexContent;
