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
            title: "",
            author: "",
            before: "",
            content: "",
            origin_content: "",
            defaultContent: "",
            defaultOriginContent:"",
            id:""
        }
        this.bindData = utils.bindData;
    }
    componentDidMount() {
        if (this.props.isEdit) {
            fetch(`http://localhost:3000/admin/article/${this.props.articleId}`, {type: 'get'})
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

    onChange = (e) => {
        this.bindData(this, e, e.target.getAttribute('data-key'));
    }
    onFocus = (e) => {
        e.target.parentNode.className = classNames(e.target.parentNode.className.replace(/\sactive/g, ''), "active");
    }
    onBlur = (e) => {
        if (!e.target.value) {
            e.target.parentNode.className = classNames(e.target.parentNode.className.replace(/\sactive/g, ''));
        }
    }
    focusInput = (e) => {
        e.target.nextElementSibling.focus();
    }
    getContentResult = (result, origin) => {
        this.setState({
            content: result,
            origin_content: origin
        });
    }
    doSubmit = () => {
        var formData = {
            title: this.state.title,
            author: this.state.author,
            before: this.state.before,
            content: this.state.content,
            origin: this.state.origin_content
        };
        if(this.props.isEdit) formData.id = this.state.id;
        fetch(this.props.isEdit ? config.AdminApi.edit_article : config.AdminApi.publish_article, {
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
                           onChange={this.onChange} data-key="title" value={this.state.title}/>
                </div>
                <div className={classNames("editor-group",this.props.isEdit?"active":"")}>
                    <label onClick={this.focusInput}>作者</label>
                    <input type="text" style={{width: '20rem'}} onFocus={this.onFocus} onBlur={this.onBlur}
                           className="textbox" onChange={this.onChange} data-key="author"
                           value={this.state.author}/>
                </div>
                <div className={classNames("editor-group",this.props.isEdit?"active":"")} style={{paddingBottom: 0}}>
                    <label onClick={this.focusInput}>写在前面</label>
                    <textarea onFocus={this.onFocus} onBlur={this.onBlur} className="textbox user-defind-scrollbar"
                              onChange={this.onChange} data-key="before" value={this.state.before}/>
                </div>
                <div className="container" style={{paddingBottom: '20px',width: '100rem', maxWidth: '1600px'}} >
                    <Editor content={this.state.content || ""} originSource={this.state.defaultOriginContent||""} getValue={this.props.getValue||null} />
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