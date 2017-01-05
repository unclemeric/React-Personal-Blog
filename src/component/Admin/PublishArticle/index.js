/**
 * author by Laisf on 2017/1/5.
 */
import React, { Component } from 'react';
import MDEditor from '../../MDEditor'
import classNames from 'classnames';
import utils from '../../../utils/DataUtils'
import './style.scss';

class PublishArticle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title:"",
            author:"",
            before:"",
            content:""
        }
        this.bindData = utils.bindData;
    }
    onChange = (e)=>{
        this.bindData(this,e,e.target.getAttribute('data-key'));
    }
    onFocus = (e)=>{
        e.target.parentNode.className = classNames(e.target.parentNode.className.replace(/\sactive/g,''),"active");
    }
    onBlur = (e)=>{
        if(!e.target.value){
            e.target.parentNode.className = classNames(e.target.parentNode.className.replace(/\sactive/g,''));
        }
    }
    focusInput = (e)=>{
        e.target.nextElementSibling.focus();
    }
    getContentResult=(result)=>{
        this.setState({
            content:result
        });
    }
    render() {
        return (
          <div className="admin-article-publish">
              <div className="editor-group">
                  <label onClick={this.focusInput}>标题</label>
                  <input type="text" onFocus={this.onFocus} onBlur={this.onBlur} className="textbox" onChange={this.onChange} data-key="title" defaultValue={this.state.title} />
              </div>
              <div className="editor-group">
                  <label onClick={this.focusInput}>作者</label>
                  <input type="text" onFocus={this.onFocus} onBlur={this.onBlur} className="textbox" onChange={this.onChange} data-key="author" defaultValue={this.state.author} />
              </div>
              <div className="editor-group" style={{paddingBottom:0}}>
                  <label onClick={this.focusInput}>写在前面</label>
                  <textarea onFocus={this.onFocus} onBlur={this.onBlur} className="textbox user-defind-scrollbar" onChange={this.onChange} data-key="before" defaultValue={this.state.before} />
              </div>
              <MDEditor getValue={this.getContentResult}/>
          </div>
        );
    }
}

export default PublishArticle;