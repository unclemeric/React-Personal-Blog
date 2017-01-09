/**
 * author by Laisf on 2016/12/21.
 * 后台文章列表组件
 */
import React, { Component } from 'react';
import MyPagination from '../../../MyPagination';
import config from '../../../../../config';
import utils from '../../../../utils/DataUtils';
import './style.scss';

class Articles extends Component {
    constructor(props){
        super(props);
        this.state = {
            page:1,//页码
            perPage:20,//每页20个
            resultData:null,//文章列表结果集
        }
    }
    componentDidMount() {
        this.getAllArticle(this.state.page,this.state.perPage);
    }
    /**
     * 查询全部文章
     */
    getAllArticle = (page,rows)=>{
        fetch(config.Admin.Api.list_article,{
            method:'POST',
            body: JSON.stringify({
                page: page,
                rows: rows
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
        this.getAllArticle(pageNum,this.state.perPage);
    }
    /**
     * 删除操作
     */
    deleteAction= (id)=>{
        if(id){
            fetch(`${config.Admin.Api.delete_article}/${id}`,{
                method:'delete'
            }).then((response) => {
                return response.json();
            }).then((rtn) => {
                console.log(rtn);
            });
        }
    }
    /**
     * 点击删除
     */
    doDelete = (e)=> {
        if(confirm("是否要删除该文章？")){
            this.deleteAction(e.target.getAttribute("data-id"));
        }
    }
    render() {
        return (
            <div className="admin-article-list">
                <div data-am-widget="list-news" className="am-list-news am-list-news-default" style={{background:"transparent"}} >
                    <div data="" data-am-widget="titlebar" className="am-titlebar am-titlebar-default">
                        <h2 className="am-titlebar-title">推荐列表</h2>
                    </div>
                    <div className="am-list-news-bd">
                        <ul className="am-list">
                            {
                                this.state.resultData&&this.state.resultData.rows&&this.state.resultData.rows.length>0 ? _.map(this.state.resultData.rows||[],(item,i)=> {
                                    return (
                                        <li key={i} className="am-g am-list-item-dated">
                                            <a className="am-list-item-hd" href={`#/article/edit/${item.id}`} style={{paddingRight:"280px"}}>
                                                {item.title}
                                            </a>
                                            <span className="am-list-date">
                                                <span style={{marginRight:'20px'}}>{utils.dateToStr(new Date(item.publishDate),'Y-M-D H:M')}</span>
                                                <button className="am-btn am-btn-danger" style={{position: 'relative',top: '-4px',padding: '6px 14px',fontSize: '14px' }} onClick={this.doDelete} data-id={item.id}>删除</button>
                                            </span>
                                        </li>
                                    )
                                })
                                 : <div style={{padding:"2rem",textAlign:'left'}}> { this.state.resultData == null ? '加载中' : '<span>暂无文章~ </span><a href="#/editor">马上去写</a>' }</div>
                            }
                        </ul>
                    </div>
                </div>
                <div style={{textAlign:'center'}}>
                    <MyPagination totalSize={this.state.resultData ? this.state.resultData.total : 0 } doClickPage={this.doClickPage} perPage={this.state.perPage} displayCount={3}/>
                </div>
            </div>
        );
    }
}

export default Articles;