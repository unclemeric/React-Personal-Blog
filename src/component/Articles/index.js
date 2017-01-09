/**
 * Created by Meric on 2016/10/27.
 */
import React from 'react';
import { ListNews, Panel, Titlebar } from 'amazeui-react';
import MyPagination from '../MyPagination';
import config from '../../../config';
import amazeutils from '../../utils/amazeutil';
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
    constructor(props){
        super(props);
        this.state = {
            page:1,//页码
            perPage:20,//每页20个
            resultData:null,//文章列表结果集
        }
    }
    componentDidMount() {
        this.getAllArticle();
    }
    getAllArticle = ()=>{
        fetch(config.Admin.Api.list_article,{
            method:'POST',
            body: JSON.stringify({
                page: this.state.page,
                rows: this.state.perPage
            })
        }).then((response) => {
            return response.json();
        }).then((rtn) => {
            this.setState({
                resultData:rtn.data||[]
            });
        });
    }
    /**
     * 分页点击设置页码
     */
    doClickPage = (pageNum) =>{
        this.setState({
            page:pageNum
        });
    }
	render() {
		return (
			<div className="main-container">
				<div className="left-container">
					<ListNews style={{ background: 'transparent' }} header={<Titlebar title="文章列表" />} data={amazeutils.formatViewList(this.state.resultData?this.state.resultData.rows:null)} />
                    <div style={{textAlign:'center',marginTop:"5rem" }}>
                        <MyPagination totalSize={this.state.resultData ? this.state.resultData.total : 0 } doClickPage={this.doClickPage} perPage={this.state.perPage} displayCount={3}/>
                    </div>
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
