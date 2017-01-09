/**
 * author by Laisf on 2017/1/5.
 */
import React, {Component} from 'react';
import {Button} from "amazeui-react";
import classNames from 'classnames';
import Editor from '../../../lib/editor'
import utils from '../../../utils/DataUtils';
import config from '../../../../config';
import './style.scss';

class PublishArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",//标题
            author: "",//作者
            before: "",//前言
            content: "",//内容
            origin_content: "",//源码内容
            defaultContent: "",//用于第一次加载设置编辑器默认内容
            defaultOriginContent:"",//用于第一次加载设置编辑器源码默认内容
            id:""//文章id 编辑页面的时候使用
        }
        this.bindData = utils.bindData;//双向绑定工具方法
    }
    componentDidMount() {
        /**
         * 如果当前是编辑操作
         */
        if (this.props.isEdit) {
            fetch(`${config.Admin.Api.list_article}/${this.props.articleId}`, {type: 'get'})
                .then((response) => {
                    return response.json();
                }).then((rtn) => {
                var data = rtn.data || {};
                this.setState({
                    title: data.title,
                    author: data.author,
                    before: data.before,
                    content: data.content,
                    defaultContent: data.content,
                    origin_content: data.origin,
                    defaultOriginContent:data.origin,
                    id:data.id
                })
            }).catch(function (err) {
                console.log(err);
            });
        }
    }

    /**
     * 监控双向绑定数据
     * @param e
     */
    onChange = (e) => {
        this.bindData(this, e, e.target.getAttribute('data-name'));
    }
    /**
     * 控件动画效果
     * @param e
     */
    onFocus = (e) => {
        e.target.parentNode.className = classNames(e.target.parentNode.className.replace(/\sactive/g, ''), "active");
    }
    /**
     * 控件动画效果
     * @param e
     */
    onBlur = (e) => {
        if (!e.target.value) {
            e.target.parentNode.className = classNames(e.target.parentNode.className.replace(/\sactive/g, ''));
        }
    }
    /**
     * 聚焦至控件
     * @param e
     */
    focusInput = (e) => {
        e.target.nextElementSibling.focus();
    }
    /**
     *
     * @param result 文本编辑器html源码
     * @param origin 文本编辑器markdown源码
     */
    getContentResult = (result, origin) => {
        this.setState({
            content: result,
            origin_content: origin
        });
    }
    /**
     * 提交按钮操作
     */
    doSubmit = () => {
        var formData = {
            title: this.state.title,
            author: this.state.author,
            before: this.state.before,
            content: this.state.content,
            origin: this.state.origin_content
        };
        if(this.props.isEdit) formData.id = this.state.id;
        fetch(this.props.isEdit ? config.Admin.Api.edit_article : config.Admin.Api.publish_article, {
            method: 'POST',
            body: JSON.stringify(formData)
        })
            .then((response) => {
                return response.json();
            }).then((rtn) => {
            console.dir(rtn);
        });
    }
    render() {
        return (
            <div className="admin-article-publish">
                <div className={classNames("editor-group",this.props.isEdit?"active":"")}>
                    <label onClick={this.focusInput}>标题</label>
                    <input type="text" onFocus={this.onFocus} onBlur={this.onBlur} className="textbox"
                           onChange={this.onChange} data-name="title" value={this.state.title}/>
                </div>
                <div className={classNames("editor-group",this.props.isEdit?"active":"")}>
                    <label onClick={this.focusInput}>作者</label>
                    <input type="text" style={{width: '20rem'}} onFocus={this.onFocus} onBlur={this.onBlur}
                           className="textbox" onChange={this.onChange} data-name="author"
                           value={this.state.author}/>
                </div>
                <div className={classNames("editor-group",this.props.isEdit?"active":"")} style={{paddingBottom: 0}}>
                    <label onClick={this.focusInput}>前言</label>
                    <textarea onFocus={this.onFocus} onBlur={this.onBlur} className="textbox user-defind-scrollbar"
                              onChange={this.onChange} data-name="before" value={this.state.before}/>
                </div>
                <div className="container" style={{paddingBottom: '20px',width: '100rem', maxWidth: '1600px'}} >
                    <Editor content={this.state.content || ""} originSource={this.state.defaultOriginContent||""} getValue={this.getContentResult||null} />
                </div>
                <div className="editor-group" style={{paddingBottom: 0}}>
                    <Button amStyle="primary" onClick={this.doSubmit}
                            style={{paddingLeft: '30px', paddingRight: '30px'}}>提交</Button>
                </div>
            </div>
        );
    }
}

export default PublishArticle;